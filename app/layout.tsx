'use client';

import './globals.css';
import { usePathname } from 'next/navigation';
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();

	return (
		<html lang="fr">
			<body className="min-h-screen flex flex-col bg-gradient-to-r from-backgroundStart to-backgroundEnd text-textPrimary">
				<Header />
				<main className="flex-grow flex flex-col items-center justify-center">
					{children}
				</main>
				{pathname === '/' && <Footer />}
			</body>
		</html>
	);
}
