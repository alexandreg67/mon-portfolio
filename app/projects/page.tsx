import Image from 'next/image';

const projects = [
	// {
	// 	type: 'Application Web Complète',
	// 	title: 'Gestionnaire de Projets',
	// 	description:
	// 		"Une application web complète utilisant Next.js, Redux pour la gestion d'état, et Tailwind CSS pour un design moderne et responsive. Cette application permet de gérer des tâches, collaborer en temps réel, et intégrer des API tierces pour la gestion des utilisateurs.",
	// 	technologies: ['Next.js', 'Redux', 'Tailwind CSS', 'API'],
	// 	imageUrl: '/images/project-webapp.png',
	// 	link: 'https://github.com/username/project1',
	// },
	// {
	// 	type: 'Outil DevOps',
	// 	title: 'Outil CI/CD Automatisé',
	// 	description:
	// 		'Un outil DevOps développé pour automatiser les processus CI/CD, incluant des scripts pour le déploiement, le monitoring, et les tests automatisés. Cet outil optimise le workflow de déploiement et assure une livraison continue.',
	// 	technologies: ['CI/CD', 'Bash', 'Docker', 'Jenkins'],
	// 	imageUrl: '/images/project-devops.png',
	// 	link: 'https://github.com/username/project2',
	// },
	{
		type: 'Portfolio',
		title: 'Mon Portfolio',
		description:
			'Un portfolio personnel créé avec Next.js et Tailwind CSS, mettant en avant mes compétences et mes projets. Ce site est entièrement responsive, optimisé pour le SEO, et utilise des composants réutilisables pour une maintenance facile.',
		technologies: ['Next.js', 'React', 'Tailwind CSS'],
		imageUrl: '/portfolio.png',
		link: 'https://github.com/username/portfolio',
	},
];

const Projects = () => (
	<section className="container mx-auto px-4 py-10">
		<h2 className="text-4xl font-headline text-center mb-10 text-white">
			Mes Projets
		</h2>
		{projects.map((project, index) => (
			<div key={index} className="mb-12">
				<h3 className="text-3xl font-semibold text-primary mb-4">
					{project.type}
				</h3>
				<div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-custom-light">
					<Image
						src={project.imageUrl}
						alt={project.title}
						width={500} // Remplacez avec la largeur réelle de l'image
						height={300} // Remplacez avec la hauteur réelle de l'image
						className="rounded mb-4 w-full h-48 object-cover"
					/>
					<h4 className="text-2xl font-semibold text-gray-900 mb-2">
						{project.title}
					</h4>
					<p className="text-gray-700 mb-4">{project.description}</p>
					<div className="flex space-x-2 mb-4">
						{project.technologies.map((tech, i) => (
							<span
								key={i}
								className="bg-primary text-white px-2 py-1 rounded text-sm"
							>
								{tech}
							</span>
						))}
					</div>
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						className="text-secondary hover:text-secondary-dark transition duration-300"
					>
						Voir sur GitHub
					</a>
				</div>
			</div>
		))}
	</section>
);

export default Projects;
