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
			text: `Bonjour ${firstName} ${lastName},\n\nMerci de m'avoir contacté. Je vous confirme que j'ai bien reçu votre message et je l'ai pris en compte.\n\nJe vais le traiter avec la plus grande attention et je reviendrai vers vous dans les meilleurs délais.\n\nN'hésitez pas à me recontacter si vous avez d'autres questions ou si vous souhaitez ajouter des informations complémentaires.\n\nCordialement,\n\nAlexandre`,
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
