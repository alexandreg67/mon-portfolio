import React, { useMemo } from 'react';
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
		skill: 'Express',
		description: 'Développement de serveurs REST performants avec Express, intégrant la logique métier et la sécurité.',
		project: 'Créé une API Express pour une application SaaS, réduisant le temps de réponse moyen de 30 %.',
		icon: <i className="devicon-express-original text-white text-4xl"></i>,
	},
	{
		skill: 'Docker',
		description: 'Containerisation d\'applications pour assurer la portabilité et des déploiements reproductibles.',
		project: 'Containerisé une suite micro-services, divisant par deux les incidents "it-works-on-my-machine".',
		icon: <i className="devicon-docker-plain colored text-4xl"></i>,
	},
	{
		skill: 'PostgreSQL',
		description: 'Conception et optimisation de bases de données relationnelles robustes avec PostgreSQL.',
		project: 'Optimisé des requêtes PostgreSQL pour un CRM, divisant le temps de génération de rapports par 4.',
		icon: <i className="devicon-postgresql-plain colored text-4xl"></i>,
	},
	{
		skill: 'GraphQL',
		description: 'Création de schémas GraphQL et résolveurs pour des APIs flexibles et typées.',
		project: 'Implémenté GraphQL sur un portail média, réduisant de 40 % le volume des données transférées.',
		icon: <i className="devicon-graphql-plain colored text-4xl"></i>,
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
	const keyCompetencesCards = useMemo(() => 
		keyCompetences.map((competence, index) => (
			<div
				key={index}
				className="group card-modern p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 animate-slide-up"
				style={{animationDelay: `${0.1 * index}s`}}
			>
				<div className="flex items-center mb-6">
					<div className="p-3 rounded-xl bg-gradient-to-r from-primary-600/20 to-primary-500/20 border border-primary-500/30 group-hover:scale-110 transition-transform duration-300">
						{competence.icon}
					</div>
					<h3 className="text-2xl font-heading font-bold text-white ml-4 group-hover:text-primary-400 transition-colors">
						{competence.skill}
					</h3>
				</div>
				<p className="text-slate-300 leading-relaxed">
					{competence.description}
				</p>
			</div>
		)), []
	);

	const secondaryCompetencesCards = useMemo(() =>
		secondaryCompetences.map((competence, index) => (
			<div
				key={index}
				className="group card-modern p-6 rounded-xl shadow-card hover:shadow-card-hover text-center transition-all duration-300 hover:scale-105 animate-slide-up"
				style={{animationDelay: `${0.05 * index + 0.3}s`}}
			>
				<div className="p-3 rounded-lg bg-gradient-to-r from-secondary-600/20 to-secondary-500/20 border border-secondary-500/30 inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
					{competence.icon}
				</div>
				<h4 className="text-lg font-heading font-semibold text-white group-hover:text-secondary-400 transition-colors">
					{competence.skill}
				</h4>
			</div>
		)), []
	);

	return (
		<section className="container mx-auto px-4 py-12">
			<h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 text-white">
				Mes <span className="text-gradient">Compétences</span>
			</h2>
			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20">
				{keyCompetencesCards}
			</div>

			<h3 className="text-2xl md:text-3xl font-heading font-semibold text-center mb-12 text-slate-200">
				Technologies Complémentaires
			</h3>
			<div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-4xl mx-auto">
				{secondaryCompetencesCards}
			</div>
		</section>
	);
};

export default Competences;
