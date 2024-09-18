import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

type Project = {
	type: string;
	title: string;
	description: string;
	technologies: string[];
	imageUrl: string;
	liveLink?: string;
	codeLink: string;
};

// Section Projets classiques
const projects: Project[] = [
	{
		type: 'Optimisation Web',
		title: 'Optimisation SEO et Accessibilité',
		description: `
			Ce projet avait pour objectif d'améliorer les performances, le référencement (SEO) et l'accessibilité d'un site web. En tant que développeur freelance, j'ai commencé par analyser les problèmes de chargement et de référencement existants. J'ai utilisé des outils tels que Lighthouse et Wave pour identifier les axes d'amélioration.
			
			J'ai ensuite proposé des recommandations pour :
			- Optimiser la vitesse de chargement du site
			- Améliorer la structure du code (HTML, CSS, JavaScript)
			- Augmenter l'accessibilité du site pour tous les utilisateurs
	
			Une fois les modifications apportées, j'ai généré un rapport détaillé comparant les résultats avant et après. Ce rapport comprenait des captures d'écran des audits, ainsi que des explications sur les changements apportés et leur impact direct sur la performance, le SEO, et l'accessibilité.
	
			L'optimisation du SEO et de l'accessibilité sont des compétences cruciales pour améliorer la visibilité et l'expérience utilisateur d'un site. C'est un savoir-faire essentiel pour tout développeur web moderne.
		`,
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
		description: `
			Dans ce projet, j'ai développé une application de tableau de bord interactif en utilisant Next.js, React, TypeScript, Tailwind CSS, et DaisyUI. 
			Ce tableau de bord intègre des données météorologiques, économiques et géospatiales en utilisant des appels API en temps réel.
			
			
			- Données Météorologiques : Affichage des prévisions météo via des API telles que OpenWeather, avec des graphiques détaillant les tendances météorologiques et des recherches de ville en temps réel.
			- Données Économiques : Comparaison des indicateurs économiques comme le PIB et les émissions de CO2 par habitant pour plusieurs pays, à l’aide de graphiques interactifs permettant de filtrer par année et par pays.
			- Données Géospatiales : Visualisation des monuments et musées sur une carte interactive, avec la possibilité de filtrer les données géospatiales en fonction du zoom et de la localisation de l’utilisateur.

			Appels API et manipulation de données :
			Les données sont récupérées via plusieurs APIs (API météo, API économiques, API géospatiales). Ces données sont ensuite manipulées et transformées pour être affichées dans des graphiques interactifs et des tableaux de comparaison.
			`,
		technologies: [
			'Next.js',
			'React',
			'TypeScript',
			'Tailwind CSS',
			'DaisyUI',
			'API',
		],
		imageUrl: '/terralens.png',
		liveLink:
			'https://terralens-c8qbx8otm-alexandres-projects-214ab778.vercel.app/',
		codeLink: 'https://github.com/alexandreg67/terralens',
	},
	{
		type: 'Application Web',
		title: 'Blog Personnel',
		description:
			'Une plateforme de blog où les utilisateurs peuvent publier et commenter des articles. Le site est optimisé pour le référencement naturel (SEO) et permet une gestion simplifiée des articles via un tableau de bord administrateur.',
		technologies: ['Next.js', 'React', 'Node.js', 'Tailwind CSS'],
		imageUrl: '',
		liveLink: 'https://personal-blog.com',
		codeLink: 'https://github.com/alexandreg67/personal-blog.git',
	},
];

// Section Jeux
const games: Project[] = [
	{
		type: 'Jeu',
		title: 'Jeu Puissance 4 avec IA',
		description: `
			Dans ce projet, j'ai développé un jeu de Puissance 4 avec Next.js, React, TypeScript, Tailwind CSS, et DaisyUI. 
			Le jeu permet à l'utilisateur de jouer contre un autre joueur en mode local ou de défier une intelligence artificielle.
			
			Fonctionnalités clés :
			- Mode Joueur contre Joueur** : Deux utilisateurs peuvent jouer l'un contre l'autre en local.
			- Mode Joueur contre IA** : Une IA a été implémentée pour simuler un adversaire compétent, offrant un véritable défi au joueur.
			
			Le jeu est entièrement responsive et propose une interface utilisateur fluide et agréable grâce à Tailwind CSS et DaisyUI. L'IA analyse chaque mouvement et propose un jeu intelligent, garantissant une expérience engageante pour le joueur solitaire.
		`,
		technologies: [
			'Next.js',
			'React',
			'TypeScript',
			'Tailwind CSS',
			'DaisyUI',
			'IA',
		],
		imageUrl: '/puissance4.png',
		liveLink:
			'https://puissance4-react-hhk8u2p0r-alexandres-projects-214ab778.vercel.app/',
		codeLink: 'https://github.com/alexandreg67/puissance4_react',
	},
];

// Section Component
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
						{item.liveLink && (
							<a
								href={item.liveLink}
								target="_blank"
								rel="noopener noreferrer"
								className="text-secondary hover:text-secondary-dark transition duration-300 flex items-center"
							>
								<FaExternalLinkAlt className="mr-2" />
								Voir en Direct
							</a>
						)}
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

// Main Projects Component
const Projects = () => (
	<>
		<Section title="Mes Projets" items={projects} />
		<Section title="Mes Jeux" items={games} />
	</>
);

export default Projects;
