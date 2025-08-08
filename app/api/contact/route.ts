import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { globalRateLimit, emailRateLimit } from "../../../lib/rate-limit";
import {
  validateContactData,
  calculateSpamScore,
  sanitizeContactData,
  SPAM_SCORE_THRESHOLD,
} from "../../../lib/validation";

// Gmail/Nodemailer error types for better type safety / Types d'erreurs Gmail pour une meilleure sécurité de types
interface GmailError extends Error {
  code?: "EAUTH" | "ECONNECTION" | "ETIMEDOUT" | "EDNS" | "ENOTFOUND" | string;
  response?: string;
  responseCode?: number;
  command?: string;
}

export async function POST(request: NextRequest) {
  try {
    // Vérifier la configuration Gmail
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      console.error(
        "Variables d'environnement GMAIL_USER ou GMAIL_PASS manquantes",
      );
      return NextResponse.json(
        {
          message:
            "Configuration email manquante. Veuillez configurer GMAIL_USER et GMAIL_PASS.",
          detail:
            "Les variables d'environnement Gmail ne sont pas configurées correctement.",
        },
        { status: 500 },
      );
    }

    // Vérifier la configuration de l'email admin tôt pour éviter le traitement inutile
    if (!process.env.GMAIL_ADMIN_EMAIL) {
      console.error(
        "GMAIL_ADMIN_EMAIL environment variable is required for admin notifications",
      );
      return NextResponse.json(
        {
          message:
            "Configuration administrateur manquante. Veuillez configurer GMAIL_ADMIN_EMAIL.",
          detail: "L'adresse email de l'administrateur n'est pas configurée.",
        },
        { status: 500 },
      );
    }

    // Vérification de l'origine CORS - TEMPORAIREMENT SIMPLIFIÉ POUR DEBUG
    const origin = request.headers.get("origin");
    const allowedOrigins =
      process.env.NODE_ENV === "production"
        ? [
            process.env.NEXT_PUBLIC_SITE_URL &&
            process.env.NEXT_PUBLIC_SITE_URL.trim() !== ""
              ? process.env.NEXT_PUBLIC_SITE_URL.trim()
              : null,
          ].filter(Boolean)
        : ["http://localhost:3000", "http://localhost:3001"];

    // Logs CORS en développement uniquement
    if (process.env.NODE_ENV !== "production") {
      console.log(`🔍 DEBUG CORS - Origin: ${origin}`);
      console.log(`🔍 DEBUG CORS - Allowed origins:`, allowedOrigins);
      console.log(`🔍 DEBUG CORS - NODE_ENV: ${process.env.NODE_ENV}`);
      console.log(
        `🔍 DEBUG CORS - NEXT_PUBLIC_SITE_URL: ${process.env.NEXT_PUBLIC_SITE_URL}`,
      );
    }

    // Enforce CORS en production
    if (process.env.NODE_ENV === "production") {
      if (allowedOrigins.length === 0) {
        console.error(
          "NEXT_PUBLIC_SITE_URL must be configured for production CORS security",
        );
        return NextResponse.json(
          { message: "Configuration de sécurité manquante pour la production" },
          { status: 500 },
        );
      }
      if (origin && !allowedOrigins.includes(origin)) {
        console.warn(`Origine non autorisée: ${origin}`);
        return NextResponse.json(
          { message: "Origine non autorisée" },
          { status: 403 },
        );
      }
    }

    // Limitation de taux par IP
    const ip =
      request.ip ??
      request.headers.get("x-forwarded-for")?.split(",")[0] ??
      request.headers.get("x-real-ip") ??
      "127.0.0.1";

    const {
      success: ipSuccess,
      limit: ipLimit,
      reset: ipReset,
      remaining: ipRemaining,
    } = await globalRateLimit.limit(ip);

    if (!ipSuccess) {
      console.warn(`Rate limit dépassé pour IP: ${ip}`);
      return NextResponse.json(
        {
          message: "Trop de tentatives. Veuillez réessayer plus tard.",
          retryAfter: Math.round((ipReset - Date.now()) / 1000),
        },
        {
          status: 429,
          headers: {
            "Retry-After": Math.round((ipReset - Date.now()) / 1000).toString(),
            "X-RateLimit-Limit": ipLimit.toString(),
            "X-RateLimit-Remaining": ipRemaining.toString(),
          },
        },
      );
    }

    // Parser et valider les données
    const body = await request.json();
    if (process.env.NODE_ENV !== "production") {
      console.log(`🔍 DEBUG - Body reçu:`, JSON.stringify(body, null, 2));
    }

    // Vérification honeypot
    if (body.website && body.website.length > 0) {
      console.warn(`Tentative de spam détectée (honeypot) depuis IP: ${ip}`);
      // Retourner succès pour ne pas révéler la détection
      return NextResponse.json(
        { message: "Merci pour votre message!" },
        { status: 200 },
      );
    }

    // Validation avec Zod
    const validation = validateContactData(body);
    if (!validation.success) {
      const fieldErrors = validation.error.flatten().fieldErrors;
      const friendlyErrors: { [key: string]: string } = {};

      for (const [field, messages] of Object.entries(fieldErrors)) {
        if (Array.isArray(messages) && messages.length > 0) {
          friendlyErrors[field] = messages[0];
        }
      }

      return NextResponse.json(
        {
          message: "Veuillez corriger les erreurs suivantes :",
          errors: friendlyErrors,
        },
        { status: 400 },
      );
    }

    // Nettoyer et sanitizer les données
    const sanitizedData = sanitizeContactData(validation.data);
    const { firstName, lastName, email, message } = sanitizedData;

    // Rate limiting par email
    const { success: emailSuccess, reset: emailReset } =
      await emailRateLimit.limit(email);

    if (!emailSuccess) {
      console.warn(`Rate limit email dépassé pour: ${email}`);
      return NextResponse.json(
        {
          message:
            "Cette adresse email a déjà envoyé trop de messages récemment.",
          retryAfter: Math.round((emailReset - Date.now()) / 1000),
        },
        { status: 429 },
      );
    }

    // Détection de spam
    const spamScore = calculateSpamScore(sanitizedData);
    console.log(`Spam score pour ${email}: ${spamScore}`);

    if (spamScore > SPAM_SCORE_THRESHOLD) {
      console.warn(
        `Message marqué comme spam (score: ${spamScore}) depuis ${email} - IP: ${ip}`,
      );
      // Retourner succès pour ne pas révéler la détection
      return NextResponse.json(
        { message: "Merci pour votre message!" },
        { status: 200 },
      );
    }

    // Configuration du transporteur Gmail
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Vérifier la connexion Gmail
    if (process.env.NODE_ENV !== "production") {
      console.log(`🔍 DEBUG - Test de connexion Gmail...`);
    }
    try {
      await transporter.verify();
      if (process.env.NODE_ENV !== "production") {
        console.log(`✅ DEBUG - Connexion Gmail réussie`);
      }
    } catch (error) {
      console.error("❌ Erreur de connexion Gmail:", error);
      return NextResponse.json(
        {
          message:
            "Erreur de configuration email. Veuillez réessayer plus tard.",
        },
        { status: 500 },
      );
    }

    try {
      if (process.env.NODE_ENV !== "production") {
        console.log(`🔍 DEBUG - Envoi email de confirmation à: ${email}`);
      }
      // Email de confirmation à l'utilisateur
      await transporter.sendMail({
        from: `${process.env.GMAIL_FROM_NAME || "Alexandre Graff"} <${process.env.GMAIL_USER}>`,
        to: email,
        subject: "Confirmation de votre message",
        text: `Bonjour ${firstName} ${lastName},

Merci de m'avoir contacté. Je vous confirme que j'ai bien reçu votre message :

"${message}"

Je vais le traiter avec la plus grande attention et je reviendrai vers vous dans les meilleurs délais.

N'hésitez pas à me recontacter si vous avez d'autres questions ou si vous souhaitez ajouter des informations complémentaires.

Cordialement,

Alexandre`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #F95F62;">Confirmation de votre message</h2>
            <p>Bonjour <strong>${firstName} ${lastName}</strong>,</p>
            <p>Merci de m'avoir contacté. Je vous confirme que j'ai bien reçu votre message :</p>
            <div style="background: #f8f9fa; border-left: 4px solid #F95F62; padding: 15px; margin: 20px 0; font-style: italic;">
              "${message}"
            </div>
            <p>Je vais le traiter avec la plus grande attention et je reviendrai vers vous dans les meilleurs délais.</p>
            <p>N'hésitez pas à me recontacter si vous avez d'autres questions ou si vous souhaitez ajouter des informations complémentaires.</p>
            <p>Cordialement,<br><strong>Alexandre</strong></p>
            <hr style="margin-top: 30px; border: none; border-top: 1px solid #eee;">
            <p style="font-size: 12px; color: #666;">
              Ce message automatique confirme la réception de votre demande de contact via mon portfolio.
            </p>
          </div>
        `,
      });
      if (process.env.NODE_ENV !== "production") {
        console.log(`✅ DEBUG - Email de confirmation envoyé`);
      }

      if (process.env.NODE_ENV !== "production") {
        console.log(
          `🔍 DEBUG - Envoi email admin à: ${process.env.GMAIL_ADMIN_EMAIL}`,
        );
      }
      // Email de notification pour l'administrateur (déjà validé au début)
      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_ADMIN_EMAIL,
        subject: `Nouveau message de ${firstName} ${lastName}`,
        replyTo: email,
        text: `Nouveau message de contact reçu via votre portfolio.

INFORMATIONS DE CONTACT :
• Prénom : ${firstName}
• Nom : ${lastName}
• Email : ${email}
• Score anti-spam : ${spamScore}/100
• IP : ${ip}

MESSAGE :
${message}

---
Pour répondre, utilisez directement la fonction "Répondre" de votre messagerie.`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #00A676;">Nouveau message de contact</h2>

            <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">Informations de contact</h3>
              <p><strong>Prénom :</strong> ${firstName}</p>
              <p><strong>Nom :</strong> ${lastName}</p>
              <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Score anti-spam :</strong> ${spamScore}/100 ${spamScore > 30 ? "⚠️" : "✅"}</p>
              <p><strong>Adresse IP :</strong> ${ip}</p>
            </div>

            <div style="background: #fff; border: 1px solid #ddd; padding: 20px; border-radius: 5px;">
              <h3 style="margin-top: 0; color: #333;">Message :</h3>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>

            <div style="margin-top: 20px; padding: 15px; background: #e8f4f8; border-radius: 5px;">
              <p style="margin: 0; font-size: 14px; color: #666;">
                💡 <strong>Conseil :</strong> Utilisez la fonction "Répondre" pour répondre directement à ${firstName}.
              </p>
            </div>
          </div>
        `,
      });

      // Log de succès
      console.log(
        `Email envoyé avec succès depuis ${email} (${firstName} ${lastName}) - Score spam: ${spamScore}`,
      );

      return NextResponse.json({
        message:
          "Message envoyé avec succès ! Vous devriez recevoir une confirmation par email dans quelques instants.",
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email:", error);

      // Gestion spécifique des erreurs Gmail
      const gmailError = error as GmailError;

      if (gmailError.code === "EAUTH") {
        console.error("Gmail authentication failed:", gmailError.response);
        return NextResponse.json(
          {
            message:
              "Erreur d'authentification Gmail. Veuillez vérifier la configuration.",
          },
          { status: 500 },
        );
      } else if (gmailError.code === "ECONNECTION") {
        console.error("Gmail connection failed:", gmailError.message);
        return NextResponse.json(
          {
            message:
              "Impossible de se connecter au serveur email. Veuillez réessayer plus tard.",
          },
          { status: 503 },
        );
      } else if (gmailError.code === "ETIMEDOUT") {
        console.error("Gmail timeout:", gmailError.message);
        return NextResponse.json(
          { message: "Délai d'attente dépassé. Veuillez réessayer." },
          { status: 503 },
        );
      }

      return NextResponse.json(
        {
          message:
            "Erreur lors de l'envoi de l'email. Veuillez réessayer plus tard.",
          error:
            process.env.NODE_ENV === "development"
              ? gmailError.message
              : undefined,
        },
        { status: 500 },
      );
    }
  } catch (error) {
    console.error("Erreur générale dans l'API contact:", error);
    const generalError = error as Error;
    return NextResponse.json(
      {
        message: "Erreur interne du serveur. Veuillez réessayer plus tard.",
        error:
          process.env.NODE_ENV === "development"
            ? generalError.message
            : undefined,
      },
      { status: 500 },
    );
  }
}

// Gestion des requêtes OPTIONS (vérification préalable CORS)
export async function OPTIONS(request: NextRequest) {
  const origin = request.headers.get("origin");
  const allowedOrigins =
    process.env.NODE_ENV === "production"
      ? [process.env.NEXT_PUBLIC_SITE_URL].filter(
          (url) => url && url.trim() !== "",
        )
      : ["http://localhost:3000", "http://localhost:3001"];

  if (origin && allowedOrigins.includes(origin)) {
    return new NextResponse(null, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Max-Age": "86400",
      },
    });
  }

  return new NextResponse(null, { status: 403 });
}
