import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

export async function POST(request: Request) {
	try {
		// Vérifier les variables d'environnement
		const apiKey = process.env.RESEND_API_KEY;
		
		if (!apiKey || apiKey === 're_your_api_key_here' || !apiKey.startsWith('re_')) {
			console.error('Variable d\'environnement RESEND_API_KEY manquante ou non configurée');
			console.error('Valeur actuelle:', apiKey);
			return NextResponse.json(
				{ 
					message: "Configuration email manquante. Veuillez configurer RESEND_API_KEY.",
					detail: `La variable d'environnement RESEND_API_KEY n'est pas configurée correctement. Valeur: ${apiKey?.substring(0, 10)}...`
				},
				{ status: 500 }
			);
		}

		const { firstName, lastName, email, message } = await request.json();

		const contactSchema = z.object({
			firstName: z.string().min(2).max(50),
			lastName: z.string().min(2).max(50),
			email: z.string().email(),
			message: z.string().min(10).max(1000),
		});
	
		
		const parsedData = contactSchema.safeParse({ firstName, lastName, email, message });
		if (!parsedData.success) {
			
			// Créer des messages d'erreur plus conviviaux
			const friendlyErrors: { [key: string]: string } = {};
			parsedData.error.errors.forEach(err => {
				const field = err.path[0] as string;
				switch (field) {
					case 'firstName':
						friendlyErrors[field] = 'Le prénom doit contenir entre 2 et 50 caractères.';
						break;
					case 'lastName':
						friendlyErrors[field] = 'Le nom doit contenir entre 2 et 50 caractères.';
						break;
					case 'email':
						friendlyErrors[field] = 'Veuillez saisir une adresse email valide.';
						break;
					case 'message':
						friendlyErrors[field] = 'Le message doit contenir entre 10 et 1000 caractères.';
						break;
					default:
						friendlyErrors[field] = 'Ce champ contient une erreur.';
				}
			});
			
			return NextResponse.json({
				message: "Veuillez corriger les erreurs suivantes :",
				errors: friendlyErrors
			}, { status: 400 });
		}

		const resend = new Resend(process.env.RESEND_API_KEY);

		try {
			// Email de confirmation à l'utilisateur
			await resend.emails.send({
				from: 'Alexandre Graff <onboarding@resend.dev>', // Domaine de test Resend
				to: [email],
				subject: 'Confirmation de votre message',
				text: `Bonjour ${firstName} ${lastName},\n\nMerci de m'avoir contacté. Je vous confirme que j'ai bien reçu votre message :\n\n"${message}"\n\nJe vais le traiter avec la plus grande attention et je reviendrai vers vous dans les meilleurs délais.\n\nN'hésitez pas à me recontacter si vous avez d'autres questions ou si vous souhaitez ajouter des informations complémentaires.\n\nCordialement,\n\nAlexandre`,
			});

			// Email de notification pour vous
			await resend.emails.send({
				from: 'Portfolio Contact <onboarding@resend.dev>', // Domaine de test Resend
				to: ['alexgraff67@gmail.com'],
				subject: 'Nouveau message de contact via votre portfolio',
				replyTo: email, // Permet de répondre directement à l'utilisateur
				text: `Vous avez reçu un nouveau message de contact via votre portfolio.\n\nNom : ${firstName} ${lastName}\n\nEmail : ${email}\n\nMessage :\n\n${message}\n\nVeuillez répondre à cet email dans les meilleurs délais pour assurer une bonne communication.`,
			});

		return NextResponse.json({ message: 'Email envoyé avec succès' });
	} catch (error) {
		console.error("Erreur lors de l'envoi de l'email:", error);
		return NextResponse.json(
			{ 
				message: "Erreur lors de l'envoi de l'email",
				error: error instanceof Error ? error.message : 'Unknown error'
			},
			{ status: 500 }
		);
	}
	} catch (error) {
		console.error("Erreur générale dans l'API:", error);
		return NextResponse.json(
			{ 
				message: "Erreur interne du serveur",
				error: error instanceof Error ? error.message : 'Unknown error'
			},
			{ status: 500 }
		);
	}
}
