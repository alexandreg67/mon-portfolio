import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import ClientFooter from './components/ClientFooter';
import { ToastContainer } from 'react-toastify';
import { baseMetadata } from './lib/metadata';
import { SITE_CONFIG } from './lib/constants';

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
							name: SITE_CONFIG.AUTHOR,
							jobTitle: 'Développeur Web Full-Stack',
							url: SITE_CONFIG.DOMAIN,
							sameAs: [
								SITE_CONFIG.GITHUB,
								SITE_CONFIG.LINKEDIN,
							],
							knowsAbout: [
								'Next.js',
								'React',
								'TypeScript',
								'Tailwind CSS',
								'Développement Web',
							],
							description: SITE_CONFIG.DESCRIPTION,
						}),
					}}
				/>
			</head>
			<body className="min-h-screen flex flex-col bg-gradient-to-r from-backgroundStart to-backgroundEnd text-textPrimary" role="document">
				<Header />
				<main className="flex-grow flex flex-col items-center justify-center" role="main">
					{children}
				</main>
				<ClientFooter />
				<ToastContainer />
			</body>
		</html>
	);
}
