import React from 'react';
import 'devicon/devicon.min.css';
import Image from 'next/image';

const keyCompetences = [
	{
		skill: 'Next.js',
		description:
			'Développement full-stack avec Next.js, y compris le rendu côté serveur et la génération statique.',
		project:
			'Développé un site e-commerce avec Next.js, optimisé pour le SEO, ayant conduit à une augmentation de 20% du trafic organique.',
		icon: (
			<i className="devicon-nextjs-original-wordmark text-white text-4xl"></i>
		),
	},
	{
		skill: 'React',
		description:
			"Construction d'interfaces utilisateur dynamiques avec React, en utilisant des hooks et le state management.",
		project:
			"Création d'une application de gestion de tâches avec React, permettant une augmentation de 30% de la productivité des utilisateurs.",
		icon: <i className="devicon-react-original colored text-4xl"></i>,
	},
	{
		skill: 'Redux',
		description:
			"Gestion efficace de l'état des applications complexes avec Redux.",
		project:
			"Implémentation de Redux dans une application de e-learning, facilitant la gestion de l'état pour plusieurs milliers d'utilisateurs.",
		icon: <i className="devicon-redux-original colored text-4xl"></i>,
	},
	{
		skill: 'TypeScript',
		description:
			'Typed JavaScript pour améliorer la sécurité et la maintenabilité du code.',
		project:
			"Migration d'une grande base de code JavaScript vers TypeScript, réduisant les bugs de 15% et augmentant la maintenabilité.",
		icon: <i className="devicon-typescript-plain colored text-4xl"></i>,
	},
	{
		skill: 'Tailwind CSS',
		description:
			'Création de designs modernes et responsives avec Tailwind CSS.',
		project:
			"Développement d'une interface utilisateur réactive pour un tableau de bord d'analyse, augmentant la satisfaction utilisateur de 25%.",
		icon: (
			<Image
				src="/tailwindcss.svg" // Utilisation de l'icône SVG locale
				alt="Tailwind CSS"
				width={40}
				height={40}
				className="filter"
				style={{
					filter:
						'invert(40%) sepia(100%) saturate(1000%) hue-rotate(180deg) brightness(100%) contrast(90%)',
				}}
			/>
		),
	},
];

const secondaryCompetences = [
	{
		skill: 'Angular',
		icon: <i className="devicon-angularjs-plain colored text-4xl"></i>,
	},
	{
		skill: 'NestJS',
		icon: <i className="devicon-nestjs-plain colored text-4xl"></i>,
	},
	{
		skill: 'C# .NET',
		icon: <i className="devicon-dotnetcore-plain colored text-4xl"></i>,
	},
	{
		skill: 'Python',
		icon: <i className="devicon-python-plain colored text-4xl"></i>,
	},
];

const Competences = () => {
	return (
		<section className="container mx-auto px-4 py-8">
			<h2 className="text-4xl font-headline text-center mb-8 text-white">
				Compétences Clés
			</h2>
			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{keyCompetences.map((competence, index) => (
					<div
						key={index}
						className="bg-gradient-to-r from-backgroundStart to-backgroundEnd p-6 rounded-lg shadow-custom-dark transition-transform transform hover:scale-105"
					>
						<div className="flex items-center mb-2">
							{competence.icon}
							<h3 className="text-2xl font-semibold text-white ml-4">
								{competence.skill}
							</h3>
						</div>
						<p className="text-md text-gray-300 mb-2">
							{competence.description}
						</p>
					</div>
				))}
			</div>

			<h2 className="text-3xl font-headline text-center mt-12 mb-6 text-gray-300">
				Compétences Secondaires
			</h2>
			<div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{secondaryCompetences.map((competence, index) => (
					<div
						key={index}
						className="bg-gray-800 p-4 rounded-lg shadow-md text-center"
					>
						{competence.icon}
						<h4 className="text-xl font-semibold text-white mt-2">
							{competence.skill}
						</h4>
					</div>
				))}
			</div>
		</section>
	);
};

export default Competences;
