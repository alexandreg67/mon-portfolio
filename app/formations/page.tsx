import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const formations = [
	{
		title: "Formation Concepteur Développeur d'Applications",
		description: `Formation avancée menant à l'obtention du titre certifié de Concepteur Développeur d'Applications (Niveau Bac+3/4). Cette formation permet d'apprendre à concevoir et déployer des applications sécurisées, maîtriser SQL et NoSQL, utiliser Docker, React, TypeScript, et contribuer à des projets DevOps.`,
		date: 'En cours',
		institution: 'Wild Code School',
	},
	{
		title: 'RNCP5 - Développeur Web et Web Mobile (Niveau Bac+2)',
		description:
			'Obtention du diplôme RNCP5 certifiant mes compétences en développement web. Ce diplôme atteste ma capacité à concevoir, développer et maintenir des applications web et mobiles modernes.',
		date: '2024',
		institution: 'OpenClassrooms',
		isHighlight: true,
	},
	{
		title: 'Formation Next.js',
		description:
			'Approfondissement du développement avec Next.js pour créer des applications web performantes et SEO-friendly. Apprentissage des concepts de rendu côté serveur (SSR), de génération de sites statiques (SSG), et de l’intégration API pour des applications réactives et dynamiques.',
		date: '2024',
		institution: 'OpenClassrooms / Udemy / Codelynx',
	},
	{
		title: 'Formation React',
		description:
			'Maîtrise de React pour construire des interfaces utilisateur dynamiques et réactives. Mise en œuvre des hooks, gestion de l’état avec React Context, et optimisation des performances pour des applications évolutives.',
		date: '2024',
		institution: 'OpenClassrooms / Udemy / Codelynx',
	},
	{
		title: 'Formation Redux',
		description:
			"Gestion avancée de l'état des applications avec Redux. Apprentissage des concepts de flux unidirectionnel des données, middleware, et intégration avec React pour des applications front-end robustes.",
		date: '2024',
		institution: 'OpenClassrooms / Udemy / Codelynx',
	},
	{
		title: 'Formation TypeScript',
		description:
			'Apprentissage approfondi de TypeScript pour renforcer la sécurité du code JavaScript avec des types statiques. Intégration de TypeScript dans des projets React et Node.js pour améliorer la maintenabilité du code.',
		date: '2024',
		institution: 'OpenClassrooms / Udemy / Codelynx',
	},
	{
		title: 'Formation Tailwind CSS',
		description:
			'Maîtrise de Tailwind CSS pour créer des interfaces utilisateur modernes et responsives. Utilisation des classes utilitaires pour concevoir des composants réutilisables et uniformes avec une personnalisation minimale.',
		date: '2024',
		institution: 'OpenClassrooms / Udemy / Codelynx',
	},
	{
		title: 'Formation Angular',
		description:
			"Développement d'applications web dynamiques avec Angular. Apprentissage des services, de la gestion des formulaires réactifs, et de la communication avec des API RESTful.",
		date: '2023',
		institution: 'OpenClassrooms / Udemy',
	},
	{
		title: 'Formation NestJS',
		description:
			'Introduction au développement backend avec NestJS, un framework Node.js. Apprentissage de la structure modulaire, de l’injection de dépendances, et de la création de microservices robustes.',
		date: '2023',
		institution: 'OpenClassrooms / Udemy',
	},
	{
		title: 'Formation C# .NET',
		description:
			"Développement d'applications d'entreprise avec C# et .NET. Apprentissage des concepts de programmation orientée objet, création d'API RESTful avec ASP.NET Core, et gestion des bases de données avec Entity Framework.",
		date: '2023',
		institution: 'Stage SNCF Réseaux',
	},
	{
		title: 'Formation Python',
		description:
			'Apprentissage de Python pour le développement d’applications web, l’automatisation de tâches, et l’analyse de données. Introduction à Django, Flask, et à la manipulation de données avec Pandas.',
		date: '2022',
		institution: 'OpenClassrooms / Udemy',
	},
];

const Timeline = () => {
	return (
		<section className="container mx-auto px-4 py-8">
			<h2 className="text-4xl font-headline text-center mb-8 text-white">
				Formations
			</h2>
			<div className="relative border-l border-gray-200 dark:border-gray-700 mx-auto w-full max-w-2xl">
				{formations.map((formation, index) => (
					<div
						key={index}
						className={`mb-10 ml-4 p-6 rounded-lg shadow-lg ${
							formation.isHighlight
								? 'border border-primary shadow-custom-light'
								: ''
						}`}
					>
						{/* Ajout de l'icône si la formation est marquée comme "Highlight" */}
						<div className="absolute w-3 h-3 bg-primary rounded-full -left-1.5 border border-white dark:border-gray-900"></div>
						<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
							{formation.date}
						</time>
						<h3
							className={`text-lg font-semibold flex items-center ${
								formation.isHighlight ? 'text-white text-2xl' : 'text-white'
							}`}
						>
							{formation.isHighlight && (
								<FaGraduationCap className="text-primary mr-2" />
							)}
							{formation.title}
						</h3>
						<p className="mb-2 text-base font-normal text-gray-300 dark:text-gray-400">
							{formation.description}
						</p>
						<span className="text-sm font-normal text-gray-400 dark:text-gray-500">
							{formation.institution}
						</span>
					</div>
				))}
			</div>
		</section>
	);
};

export default Timeline;
