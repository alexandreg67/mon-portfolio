import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import ClientFooter from './components/ClientFooter';
import { ToastContainer } from 'react-toastify';
import { baseMetadata } from './lib/metadata';

export const metadata = baseMetadata;

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
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'Person',
							name: 'Alexandre Graff',
							jobTitle: 'Développeur Web Full-Stack',
							url: 'https://votre-domaine.com',
							sameAs: [
								'https://github.com/alexandreg67',
								'https://linkedin.com/in/votre-profil',
							],
							knowsAbout: [
								'Next.js',
								'React',
								'TypeScript',
								'Tailwind CSS',
								'Développement Web',
							],
							description:
								'Développeur web spécialisé en Next.js, React et TypeScript. Diplômé RNCP6 (Bac+3/4).',
						}),
					}}
				/>
			</head>
			<body className="min-h-screen flex flex-col bg-gradient-to-r from-backgroundStart to-backgroundEnd text-textPrimary">
				<Header />
				<main className="flex-grow flex flex-col items-center justify-center">
					{children}
				</main>
				<ClientFooter />
				<ToastContainer />
			</body>
		</html>
	);
}
