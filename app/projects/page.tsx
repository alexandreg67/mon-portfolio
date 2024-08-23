import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

type Project = {
	type: string;
	title: string;
	description: string;
	technologies: string[];
	imageUrl: string;
	liveLink: string;
	codeLink: string;
};

const projects: Project[] = [
	{
		type: 'Portfolio',
		title: 'Mon Portfolio',
		description:
			'Un portfolio personnel créé avec Next.js et Tailwind CSS, mettant en avant mes compétences et mes projets. Ce site est entièrement responsive, optimisé pour le SEO, et utilise des composants réutilisables pour une maintenance facile.',
		technologies: ['Next.js', 'React', 'Tailwind CSS'],
		imageUrl: '/portfolio.png',
		liveLink: 'https://username.github.io/portfolio',
		codeLink: 'https://github.com/username/portfolio',
	},
];

const games: Project[] = [
	{
		type: 'Jeu',
		title: 'Puissance 4 avec IA',
		description:
			"Un jeu de Puissance 4 développé avec Next.js et React, intégrant une intelligence artificielle pour jouer contre l'utilisateur.",
		technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
		imageUrl: '/images/puissance4.png',
		liveLink: 'https://username.github.io/puissance4',
		codeLink: 'https://github.com/username/puissance4',
	},
];

const Section = ({ title, items }: { title: string; items: Project[] }) => (
	<section className="container mx-auto px-4 py-10">
		<h2 className="text-4xl font-headline text-center mb-10 text-white">
			{title}
		</h2>
		<div className="flex flex-wrap justify-center gap-8">
			{items.map((item, index) => (
				<div
					key={index}
					className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out w-full max-w-sm transform hover:-translate-y-2"
				>
					<div className="relative mb-4">
						<Image
							src={item.imageUrl}
							alt={item.title}
							width={500}
							height={300}
							className="rounded-lg w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105"
						/>
					</div>
					<h3 className="text-3xl font-semibold text-primary mb-2">
						{item.type}
					</h3>
					<h4 className="text-2xl font-semibold text-gray-900 mb-2">
						{item.title}
					</h4>
					<p className="text-gray-700 mb-4">{item.description}</p>
					<div className="flex flex-wrap gap-2 mb-4">
						{item.technologies.map((tech, i) => (
							<span
								key={i}
								className="bg-primary text-white px-3 py-1 rounded-full text-sm"
							>
								{tech}
							</span>
						))}
					</div>
					<div className="flex space-x-4 mt-4">
						<a
							href={item.liveLink}
							target="_blank"
							rel="noopener noreferrer"
							className="text-secondary hover:text-secondary-dark transition duration-300 flex items-center"
						>
							<FaExternalLinkAlt className="mr-2" />
							Voir en Direct
						</a>
						<a
							href={item.codeLink}
							target="_blank"
							rel="noopener noreferrer"
							className="text-secondary hover:text-secondary-dark transition duration-300 flex items-center"
						>
							<FaGithub className="mr-2" />
							Voir le Code
						</a>
					</div>
				</div>
			))}
		</div>
	</section>
);

const Projects = () => (
	<>
		<Section title="Mes Projets" items={projects} />
		<Section title="Mes Jeux" items={games} />
	</>
);

export default Projects;
