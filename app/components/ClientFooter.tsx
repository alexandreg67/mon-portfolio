'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function ClientFooter() {
	const pathname = usePathname();

	// Affiche le Footer uniquement sur la page d'accueil
	if (pathname === '/') {
		return <Footer />;
	}

	return null;
}
