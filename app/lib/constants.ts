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
	DESCRIPTION: 'Portfolio d\'Alexandre Graff, développeur web spécialisé en Next.js 14+ (App Router, ISR), React 18+ (Server Components) et TypeScript. Diplômé RNCP6 (Bac+3/4), je crée des solutions web modernes et performantes.',
	EMAIL: 'alexgraff67@gmail.com',
	DOMAIN: 'https://alexandregraff.com',
	GITHUB: 'https://github.com/alexandreg67',
	LINKEDIN: 'https://linkedin.com/in/alexandregraff',
} as const;

// Placeholder SVG pour le blur des images
export const BLUR_PLACEHOLDER_SVG = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjY2NjIi8+PC9zdmc+' as const;

// Projets mis en avant sur la page d'accueil
export const FEATURED_PROJECTS = [
	{
		id: 1,
		title: 'Optimisation SEO et Accessibilité',
		description: 'Projet de formation : Optimisation des performances et de l\'accessibilité d\'un site web pour améliorer son référencement et son expérience utilisateur.',
		link: '/projects#1',
	},
	{
		id: 2,
		title: 'Dashboard de Données Météorologiques, Économiques et Géospatiales',
		description: 'Application de tableau de bord interactive construite avec Next.js App Router et React 18, intégrant des graphiques dynamiques et des appels API en temps réel pour des données météorologiques, économiques et géospatiales.',
		link: '/projects#2',
	},
	{
		id: 3,
		title: 'Jeu Puissance 4 avec IA',
		description: 'Jeu Puissance 4 développé avec Next.js App Router, React 18 (hooks avancés) et TypeScript, intégrant une IA intelligente et une interface utilisateur fluide et responsive.',
		link: '/projects#3',
	},
	{
		id: 4,
		title: 'Space Shooter Game – Jeu de Tir Spatial 2D',
		description: 'Jeu de tir spatial 2D haute performance utilisant React 19 (nouvelles features), Next.js 15 (App Router optimisé) et React Konva. Architecture ECS avancée avec Object Pooling et QuadTree pour 60fps constant.',
		link: '/projects#4',
	},
] as const;

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
			'Next.js 14 (App Router)',
			'React 18 (Server Components)',
			'TypeScript',
			'Tailwind CSS',
			'DaisyUI',
			'API Integration',
		],
		imageUrl: '/terralens.png',
		liveLink: 'https://terralens.vercel.app/',
		codeLink: 'https://github.com/alexandreg67/terralens',
	},
	{
		type: 'Jeu',
		title: 'Jeu Puissance 4 avec IA',
		technologies: [
			'Next.js 14 (App Router)',
			'React 18 (Hooks avancés)',
			'TypeScript',
			'Tailwind CSS',
			'DaisyUI',
			'IA (Algorithmes)',
		],
		imageUrl: '/puissance4.png',
		liveLink: 'https://puissance4-react.vercel.app/',
		codeLink: 'https://github.com/alexandreg67/puissance4_react',
	},
	{
		type: 'Jeu 2D',
		title: 'Space Shooter Game – Jeu de Tir Spatial 2D',
		technologies: ['React 19 (Latest)', 'Next.js 15 (App Router)', 'TypeScript', 'React Konva', 'Zustand', 'Object Pooling', 'QuadTree', 'ECS Architecture'],
		imageUrl: '/spacegame.png',
		liveLink: 'https://space-game-beryl.vercel.app/',
		codeLink: 'https://github.com/alexandreg67/space-game',
	},
] as const;
