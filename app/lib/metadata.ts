import { Metadata } from 'next';

export const baseMetadata: Metadata = {
	metadataBase: new URL('https://votre-domaine.com'),
	title: {
		default: 'Alexandre Graff - Développeur Web Full-Stack',
		template: '%s | Alexandre Graff - Portfolio',
	},
	description:
		'Portfolio d\'Alexandre Graff, développeur web spécialisé en Next.js, React et TypeScript. Diplômé RNCP6 (Bac+3/4), je crée des solutions web modernes et performantes.',
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
	authors: [{ name: 'Alexandre Graff' }],
	creator: 'Alexandre Graff',
	publisher: 'Alexandre Graff',
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
		url: 'https://votre-domaine.com',
		siteName: 'Alexandre Graff - Portfolio',
		title: 'Alexandre Graff - Développeur Web Full-Stack',
		description:
			'Portfolio d\'Alexandre Graff, développeur web spécialisé en Next.js, React et TypeScript. Découvrez mes projets et contactez-moi pour collaborer.',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Alexandre Graff - Développeur Web Portfolio',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Alexandre Graff - Développeur Web Full-Stack',
		description:
			'Portfolio d\'Alexandre Graff, développeur web spécialisé en Next.js, React et TypeScript.',
		images: ['/og-image.jpg'],
	},
	verification: {
		google: 'votre-code-verification-google',
	},
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
		url: `https://votre-domaine.com${path}`,
	},
	twitter: {
		...baseMetadata.twitter,
		title,
		description,
	},
});
