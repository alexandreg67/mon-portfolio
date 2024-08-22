import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
	const { firstName, lastName, email, message } = await request.json();

	const transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: process.env.GMAIL_USER,
			pass: process.env.GMAIL_PASS,
		},
	});

	try {
		await transporter.sendMail({
			from: process.env.GMAIL_USER,
			to: email,
			subject: 'Confirmation de votre message',
			text: `Bonjour ${firstName} ${lastName},\n\nMerci de m'avoir contacté. Je vous confirme que j'ai bien reçu votre message :\n\n"${message}"\n\nJe vais le traiter avec la plus grande attention et je reviendrai vers vous dans les meilleurs délais.\n\nN'hésitez pas à me recontacter si vous avez d'autres questions ou si vous souhaitez ajouter des informations complémentaires.\n\nCordialement,\n\nAlexandre`,
		});

		await transporter.sendMail({
			from: process.env.GMAIL_USER,
			to: 'alexgraff67@gmail.com',
			subject: 'Nouveau message de contact via votre portfolio',
			text: `Vous avez reçu un nouveau message de contact via votre portfolio.\n\nNom : ${firstName} ${lastName}\n\nEmail : ${email}\n\nMessage :\n\n${message}\n\nVeuillez répondre à cet email dans les meilleurs délais pour assurer une bonne communication.`,
		});

		return NextResponse.json({ message: 'Email envoyé avec succès' });
	} catch (error) {
		console.error("Erreur lors de l'envoi de l'email:", error);
		return NextResponse.json(
			{ message: "Erreur lors de l'envoi de l'email" },
			{ status: 500 }
		);
	}
}
