import { Project, NavItem } from './types';

// Navigation items
export const NAV_ITEMS: NavItem[] = [
	{ href: '/', label: 'Accueil' },
	{ href: '/formations', label: 'Formations' },
	{ href: '/competences', label: 'Compétences' },
	{ href: '/about', label: 'À propos' },
	{ href: '/projects', label: 'Projets' },
	{ href: '/contact', label: 'Contact' },
];

// Configuration des toasts
export const TOAST_CONFIG = {
	LOADING_DURATION: undefined,
	SUCCESS_DURATION: 4000,
	ERROR_DURATION: 7000,
	DEFAULT_DURATION: 5000,
} as const;

// Messages d'erreur pour la validation
export const VALIDATION_MESSAGES = {
	FIRST_NAME: 'Le prénom doit contenir entre 2 et 50 caractères.',
	LAST_NAME: 'Le nom doit contenir entre 2 et 50 caractères.',
	EMAIL: 'Veuillez saisir une adresse email valide.',
	MESSAGE: 'Le message doit contenir entre 10 et 1000 caractères.',
} as const;

// Configuration du site
export const SITE_CONFIG = {
	AUTHOR: 'Alexandre Graff',
	TITLE: 'Alexandre Graff - Développeur Web Full-Stack',
	DESCRIPTION: 'Portfolio d\'Alexandre Graff, développeur web spécialisé en Next.js, React et TypeScript. Diplômé RNCP6 (Bac+3/4), je crée des solutions web modernes et performantes.',
	EMAIL: 'alexgraff67@gmail.com',
	DOMAIN: 'https://votre-domaine.com',
	GITHUB: 'https://github.com/alexandreg67',
	LINKEDIN: 'https://linkedin.com/in/votre-profil',
} as const;

// Configuration des projets avec descriptions texte simples
export const PROJECTS_DATA = [
	{
		type: 'Optimisation Web',
		title: 'Optimisation SEO et Accessibilité',
		technologies: [
			'Lighthouse',
			'Wave',
			'SEO',
			'Accessibilité',
			'Performance Web',
		],
		imageUrl: '/nina.png',
		liveLink: 'https://alexandreg67.github.io/ninacarducci.github.io/',
		codeLink: 'https://github.com/alexandreg67/ninacarducci.github.io',
	},
	{
		type: 'Tableau de Bord de Données',
		title: 'Dashboard de Données Météorologiques, Économiques et Géospatiales',
		technologies: [
			'Next.js',
			'React',
			'TypeScript',
			'Tailwind CSS',
			'DaisyUI',
			'API',
		],
		imageUrl: '/terralens.png',
		liveLink: 'https://terralens.vercel.app/',
		codeLink: 'https://github.com/alexandreg67/terralens',
	},
	{
		type: 'Jeu',
		title: 'Jeu Puissance 4 avec IA',
		technologies: [
			'Next.js',
			'React',
			'TypeScript',
			'Tailwind CSS',
			'DaisyUI',
			'IA',
		],
		imageUrl: '/puissance4.png',
		liveLink: 'https://puissance4-react.vercel.app/',
		codeLink: 'https://github.com/alexandreg67/puissance4_react',
	},
] as const;