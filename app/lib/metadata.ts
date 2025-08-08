import { Metadata } from 'next';
import { SITE_CONFIG } from './constants';

export const baseMetadata: Metadata = {
	metadataBase: new URL(SITE_CONFIG.DOMAIN),
	title: {
		default: SITE_CONFIG.TITLE,
		template: `%s | ${SITE_CONFIG.AUTHOR} - Portfolio`,
	},
	description: SITE_CONFIG.DESCRIPTION,
	keywords: [
		'développeur web',
		'Next.js',
		'React',
		'TypeScript',
		'Tailwind CSS',
		'développeur full-stack',
		'portfolio',
		'Alexandre Graff',
		'développement web',
		'JavaScript',
	],
	authors: [{ name: SITE_CONFIG.AUTHOR }],
	creator: SITE_CONFIG.AUTHOR,
	publisher: SITE_CONFIG.AUTHOR,
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	openGraph: {
		type: 'website',
		locale: 'fr_FR',
		url: SITE_CONFIG.DOMAIN,
		siteName: `${SITE_CONFIG.AUTHOR} - Portfolio`,
		title: SITE_CONFIG.TITLE,
		description: SITE_CONFIG.DESCRIPTION,
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: `${SITE_CONFIG.AUTHOR} - Développeur Web Portfolio`,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: SITE_CONFIG.TITLE,
		description: SITE_CONFIG.DESCRIPTION,
		images: ['/og-image.jpg'],
	},
    // Renseigner la vérification Google au déploiement via env ou config
    verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
        ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
        : undefined,
};

export const generatePageMetadata = (
	title: string,
	description: string,
	path: string = ''
): Metadata => ({
	title,
	description,
	openGraph: {
		...baseMetadata.openGraph,
		title,
		description,
		url: `${SITE_CONFIG.DOMAIN}${path}`,
	},
	twitter: {
		...baseMetadata.twitter,
		title,
		description,
	},
});
