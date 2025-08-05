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

// Structure des compétences organisées par catégories
export const SKILLS_DATA = {
	categories: [
		{
			id: 'frontend',
			title: 'Développement Frontend',
			description: 'Technologies pour créer des interfaces utilisateur modernes et performantes',
			skills: [
				{
					skill: 'Next.js',
					description: 'Framework React full-stack avec App Router, rendu côté serveur (SSR), génération statique (SSG) et optimisations intégrées pour la performance.',
					project: 'Développé un site e-commerce avec Next.js, optimisé pour le SEO, ayant conduit à une augmentation de 20% du trafic organique.',
					icon: 'devicon-nextjs-original-wordmark text-white text-4xl',
					level: 'expert'
				},
				{
					skill: 'React',
					description: 'Bibliothèque JavaScript pour construire des interfaces utilisateur composables avec hooks avancés, Server Components et state management.',
					project: 'Création d\'une application de gestion de tâches avec React, permettant une augmentation de 30% de la productivité des utilisateurs.',
					icon: 'devicon-react-original colored text-4xl',
					level: 'expert'
				},
				{
					skill: 'TypeScript',
					description: 'JavaScript avec typage statique pour un développement plus robuste, une meilleure maintenabilité et une expérience développeur optimisée.',
					project: 'Migration d\'une codebase JavaScript vers TypeScript, réduisant de 65% les bugs en production.',
					icon: 'devicon-typescript-plain colored text-4xl',
					level: 'expert'
				}
			]
		},
		{
			id: 'backend',
			title: 'Développement Backend',
			description: 'Solutions serveur robustes et APIs performantes',
			skills: [
				{
					skill: 'Express',
					description: 'Framework Node.js minimaliste pour développer des APIs REST et GraphQL performantes avec middleware personnalisés.',
					project: 'Créé une API Express pour une application SaaS, réduisant le temps de réponse moyen de 30%.',
					icon: 'devicon-express-original text-white text-4xl',
					level: 'expert'
				},
				{
					skill: 'PostgreSQL',
					description: 'Base de données relationnelle avancée avec optimisation de requêtes, indexation et gestion des transactions complexes.',
					project: 'Optimisé des requêtes PostgreSQL pour un CRM, divisant le temps de génération de rapports par 4.',
					icon: 'devicon-postgresql-plain colored text-4xl',
					level: 'expert'
				},
				{
					skill: 'GraphQL',
					description: 'Langage de requête pour APIs offrant flexibilité, typage fort et optimisation des données transférées.',
					project: 'Implémenté GraphQL sur un portail média, réduisant de 40% le volume des données transférées.',
					icon: 'devicon-graphql-plain colored text-4xl',
					level: 'expert'
				}
			]
		},
		{
			id: 'ai-productivity',
			title: 'IA & Outils de Productivité',
			description: 'Maîtrise des outils d\'intelligence artificielle comme multiplicateur de performance et d\'efficacité',
			skills: [
				{
					skill: 'Assistants de Développement IA',
					description: 'Expertise en Claude Code, GitHub Copilot et Warp AI pour optimiser la productivité de développement et la qualité du code.',
					project: 'Augmentation de 55% de la productivité équipe grâce à l\'intégration d\'assistants IA dans le workflow de développement.',
					icon: 'fas fa-robot text-primary-400 text-4xl',
					level: 'expert'
				},
				{
					skill: 'Évaluation de Modèles IA',
					description: 'Analyse comparative et sélection de modèles IA (GPT, Claude, LLaMA, modèles spécialisés) selon les besoins techniques.',
					project: 'Mise en place d\'un framework d\'évaluation pour sélectionner le modèle optimal par cas d\'usage, améliorant les performances de 40%.',
					icon: 'fas fa-chart-line text-secondary-400 text-4xl',
					level: 'expert'
				},
				{
					skill: 'Intégration IA dans Applications',
					description: 'Développement d\'applications intégrant l\'IA : APIs conversationnelles, analyse de données et automatisation intelligente.',
					project: 'Intégration d\'un système de recommandations IA augmentant l\'engagement utilisateur de 45%.',
					icon: 'fas fa-brain text-indigo-400 text-4xl',
					level: 'expert'
				}
			]
		},
		{
			id: 'devops',
			title: 'DevOps & Infrastructure',
			description: 'Outils et pratiques pour le déploiement et la maintenance d\'applications',
			skills: [
				{
					skill: 'Docker',
					description: 'Containerisation d\'applications pour assurer la portabilité, l\'isolation et des déploiements reproductibles.',
					project: 'Containerisé une suite micro-services, divisant par deux les incidents "it-works-on-my-machine".',
					icon: 'devicon-docker-plain colored text-4xl',
					level: 'expert'
				}
			]
		}
	],
	complementarySkills: [
		{
			skill: 'Angular',
			icon: 'devicon-angularjs-plain colored text-4xl',
			category: 'Frontend'
		},
		{
			skill: 'NestJS',
			icon: 'devicon-nestjs-plain colored text-4xl',
			category: 'Backend'
		},
		{
			skill: 'C# .NET',
			icon: 'devicon-dotnetcore-plain colored text-4xl',
			category: 'Backend'
		},
		{
			skill: 'Python',
			icon: 'devicon-python-plain colored text-4xl',
			category: 'Backend'
		}
	]
} as const;
