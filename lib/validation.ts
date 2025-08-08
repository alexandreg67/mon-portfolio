import { z } from "zod";

// Spam detection patterns / Patterns de détection du spam
const SPAM_KEYWORDS_PATTERNS = [
  /\b(viagra|casino|lottery|winner|congratulations|urgent|limited time|click here)\b/i,
  /\b(free money|make money fast|guaranteed|100% free|no cost)\b/i,
  /\b(buy now|act fast|don't wait|hurry|exclusive deal)\b/i,
];

const STRUCTURAL_SPAM_PATTERNS = [
  /(https?:\/\/[^\s]+){3,}/i, // More than 2 links / Plus de 2 liens
  /[A-Z]{10,}/, // Too many consecutive capitals / Trop de majuscules consécutives
  /(.)\1{5,}/, // Repetitive characters / Caractères répétitifs
];

const SPAM_PATTERNS = [...SPAM_KEYWORDS_PATTERNS, ...STRUCTURAL_SPAM_PATTERNS];

// Suspicious email domains / Domaines email suspects
const SUSPICIOUS_EMAIL_DOMAINS = [
  "tempmail.org",
  "guerrillamail.com",
  "10minutemail.com",
  "mailinator.com",
  "throwaway.email",
  "temp-mail.org",
  "yopmail.com",
  "maildrop.cc",
  "sharklasers.com",
];

// Generic email local part pattern / Pattern de partie locale d'email générique
const GENERIC_EMAIL_LOCAL_PART_PATTERN =
  /^(test|admin|noreply|no-reply|contact|info)$/i;

// Spam score constants / Constantes pour le score de spam - TEMPORAIREMENT PLUS PERMISSIF
const MAX_SPAM_SCORE = 100;
const SPAM_SCORE_THRESHOLD = 80; // Augmenté de 60 à 80 pour être moins strict

// Forbidden patterns in names / Patterns interdits dans les noms
const SYSTEM_NAME_PATTERNS = [
  /\b(admin|administrator|root|test|null|undefined)\b/i,
];

// Regex constants for better maintainability / Constantes regex pour une meilleure maintenabilité
const DIGITS_ONLY_PATTERN = /^[0-9]+$/;
const HARMFUL_SPECIAL_CHARACTERS_PATTERN = /[!@#$%^&*()+=\[\]{};:"\\|,<>\/?]/; // Apostrophe, hyphen, and period allowed / Apostrophe, tiret et point autorisés

const INVALID_NAME_PATTERNS = [
  DIGITS_ONLY_PATTERN, // Numbers only / Que des chiffres
  HARMFUL_SPECIAL_CHARACTERS_PATTERN, // Harmful special characters (apostrophe, hyphen, period allowed) / Caractères spéciaux dangereux (apostrophe, tiret et point autorisés)
];

const FORBIDDEN_NAME_PATTERNS = [
  ...SYSTEM_NAME_PATTERNS,
  ...INVALID_NAME_PATTERNS,
];

// Schema de validation Zod
const contactSchema = z.object({
  firstName: z
    .string()
    .min(2, "Le prénom doit contenir au moins 2 caractères")
    .max(50, "Le prénom ne peut pas dépasser 50 caractères")
    .regex(
      /^[a-zA-ZÀ-ÿ\u00C0-\u017F\s\-'\.]+$/,
      "Le prénom contient des caractères non autorisés",
    )
    .refine((name) => {
      return !FORBIDDEN_NAME_PATTERNS.some((pattern) => pattern.test(name));
    }, "Le prénom n'est pas valide"),

  lastName: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(50, "Le nom ne peut pas dépasser 50 caractères")
    .regex(
      /^[a-zA-ZÀ-ÿ\u00C0-\u017F\s\-'\.]+$/,
      "Le nom contient des caractères non autorisés",
    )
    .refine((name) => {
      return !FORBIDDEN_NAME_PATTERNS.some((pattern) => pattern.test(name));
    }, "Le nom n'est pas valide"),

  email: z
    .string()
    .email("Adresse email invalide")
    .max(100, "L'adresse email est trop longue")
    // TEMPORAIREMENT DÉSACTIVÉ - domaines suspects et emails génériques
    /*
    .refine((email) => {
      const domain = email.split("@")[1]?.toLowerCase();
      return domain && !SUSPICIOUS_EMAIL_DOMAINS.includes(domain);
    }, "Cette adresse email n'est pas autorisée")
    .refine((email) => {
      // Vérifier que l'email n'est pas trop générique
      const localPart = email.split("@")[0];
      return !GENERIC_EMAIL_LOCAL_PART_PATTERN.test(localPart);
    }, "Cette adresse email semble générique")
    */,

  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(2000, "Le message ne peut pas dépasser 2000 caractères")
    // TEMPORAIREMENT DÉSACTIVÉ - patterns de spam et validation du contenu
    /*
    .refine((message) => {
      // Vérifier les patterns de spam
      return !SPAM_PATTERNS.some((pattern) => pattern.test(message));
    }, "Le contenu du message n'est pas autorisé")
    .refine((message) => {
      // Vérifier que le message n'est pas que des caractères spéciaux
      const alphaNumericCount = (message.match(/[a-zA-Z0-9]/g) || []).length;
      return alphaNumericCount >= message.length * 0.7;
    }, "Le message doit contenir principalement du texte")
    */,

  // Honeypot field - doit être vide
  website: z
    .string()
    .optional()
    .refine((val) => !val || val.length === 0, "Champ non autorisé"),
});

export function validateContactData(data: unknown) {
  return contactSchema.safeParse(data);
}

// Fonction de scoring de spam
export function calculateSpamScore(data: any): number {
  let score = 0;

  // Vérifier les patterns de spam dans le message
  SPAM_PATTERNS.forEach((pattern) => {
    if (pattern.test(data.message)) {
      score += 25;
    }
  });

  // Vérifier la longueur du message
  if (data.message.length < 20) score += 15;
  if (data.message.length > 1500) score += 10;

  // Vérifier les majuscules excessives
  const upperCaseCount = (data.message.match(/[A-Z]/g) || []).length;
  const upperCaseRatio = upperCaseCount / data.message.length;
  if (upperCaseRatio > 0.5) score += 20;
  if (upperCaseRatio > 0.8) score += 30;

  // Vérifier les caractères répétitifs
  if (/(.)\1{4,}/.test(data.message)) score += 15;

  // Vérifier les liens multiples
  const linkCount = (data.message.match(/https?:\/\/[^\s]+/g) || []).length;
  if (linkCount > 0) score += linkCount * 10;
  if (linkCount > 3) score += 25;

  // Vérifier les noms suspects
  const fullName = `${data.firstName} ${data.lastName}`.toLowerCase();
  if (/^[a-z]+\s[0-9]+$/.test(fullName)) score += 20; // Nom + numéro
  if (/test|admin|spam|bot/i.test(fullName)) score += 30;

  // Vérifier les caractères non ASCII excessifs
  const nonAsciiCount = (data.message.match(/[^\x00-\x7F]/g) || []).length;
  const nonAsciiRatio = nonAsciiCount / data.message.length;
  if (nonAsciiRatio > 0.3) score += 15;

  // Vérifier les numéros de téléphone ou patterns suspects
  if (/\b\d{10,}\b/.test(data.message)) score += 10;
  if (/\$\d+|\d+\$/.test(data.message)) score += 15;

  return Math.min(score, MAX_SPAM_SCORE); // Cap au score maximum
}

// Fonction pour nettoyer et normaliser les données
export function sanitizeContactData(data: any) {
  return {
    firstName: data.firstName.trim(),
    lastName: data.lastName.trim(),
    email: data.email.trim().toLowerCase(),
    message: data.message.trim(),
  };
}

// Types
export interface ContactData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export interface ValidationResult {
  success: boolean;
  data?: ContactData;
  error?: any;
  spamScore?: number;
}

// Export spam constants for use in other modules
export { MAX_SPAM_SCORE, SPAM_SCORE_THRESHOLD };
