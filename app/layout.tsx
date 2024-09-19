import './globals.css';
import Header from './components/Header';
import ClientFooter from './components/ClientFooter';

export const metadata = {
	title: 'Portfolio de Développeur Web - Alexandre Graff',
	description:
		'Bienvenue sur mon portfolio de développeur web spécialisé en Next.js, React, et Tailwind CSS. Découvrez mes projets et contactez-moi pour collaborer.',
};

export const viewport = {
	width: 'device-width',
	initialScale: 1,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="fr">
			<body className="min-h-screen flex flex-col bg-gradient-to-r from-backgroundStart to-backgroundEnd text-textPrimary">
				<Header />
				<main className="flex-grow flex flex-col items-center justify-center">
					{children}
				</main>
				<ClientFooter />
			</body>
		</html>
	);
}
