import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

type Project = {
	type: string;
	title: string;
	description: JSX.Element;
	technologies: string[];
	imageUrl: string;
	liveLink?: string;
	codeLink: string;
};

// Liste des projets avec du texte en gras
const projects: Project[] = [
	{
		type: 'Optimisation Web',
		title: 'Optimisation SEO et Accessibilité',
		description: (
			<>
				<strong>Objectif :</strong> Améliorer les performances, le référencement
				(SEO) et l'accessibilité d'un site web.
				<br />
				<ul className="list-disc ml-6">
					<li>
						<strong>Analyse :</strong> J'ai utilisé des outils tels que
						Lighthouse et Wave pour identifier les axes d'amélioration.
					</li>
					<li>
						<strong>Recommandations :</strong> Optimisation du chargement,
						amélioration du code (HTML, CSS, JavaScript), et augmentation de
						l'accessibilité.
					</li>
					<li>
						<strong>Résultat :</strong> Un rapport détaillé avec des captures
						avant/après, soulignant l'impact des changements sur la performance
						et le SEO.
					</li>
				</ul>
				<strong>Compétences clés :</strong> SEO, Accessibilité, Performance Web.
			</>
		),
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
		description: (
			<>
				<strong>Objectif :</strong> Créer un tableau de bord interactif
				affichant des données en temps réel.
				<br />
				<ul className="list-disc ml-6">
					<li>
						<strong>Données Météorologiques :</strong> Prévisions météo via des
						API comme OpenWeather, avec des graphiques.
					</li>
					<li>
						<strong>Données Économiques :</strong> Comparaison des indicateurs
						économiques (PIB, CO2) avec des graphiques interactifs.
					</li>
					<li>
						<strong>Données Géospatiales :</strong> Visualisation sur carte des
						monuments et musées avec filtres géographiques.
					</li>
				</ul>
				<strong>Compétences clés :</strong> API, Manipulation de données,
				Graphiques interactifs.
			</>
		),
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
		type: 'Jeu',
		title: 'Jeu Puissance 4 avec IA',
		description: (
			<>
				<strong>Objectif :</strong> Développer un jeu de Puissance 4 jouable
				contre un autre joueur ou contre une IA.
				<br />
				<ul className="list-disc ml-6">
					<li>
						<strong>Mode Joueur contre Joueur :</strong> Jeu local entre deux
						utilisateurs.
					</li>
					<li>
						<strong>Mode IA :</strong> Implémentation d'une IA pour défier le
						joueur.
					</li>
					<li>
						<strong>Technologies :</strong> Jeu entièrement responsive avec une
						interface fluide.
					</li>
				</ul>
				<strong>Compétences clés :</strong> IA, UX/UI, Développement de jeux.
			</>
		),
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

// Composant Section mis à jour pour une disposition en flex
const Section = ({ title, items }: { title: string; items: Project[] }) => (
	<section className="container mx-auto px-4 py-10">
		<h2 className="text-4xl font-headline text-center mb-10 text-white">
			{title}
		</h2>
		<div className="space-y-8">
			{items.map((item, index) => (
				<div
					key={index}
					className="flex flex-col md:flex-row bg-white bg-opacity-90 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out w-full max-w-6xl mx-auto"
				>
					{/* Section de l'image à gauche */}
					<div className="relative w-full md:w-1/3 mb-4 md:mb-0">
						<Image
							src={item.imageUrl}
							alt={item.title}
							width={500}
							height={300}
							className="rounded-lg w-full h-48 object-cover md:h-auto"
						/>
					</div>
					{/* Section du texte à droite */}
					<div className="md:w-2/3 md:pl-6 flex flex-col justify-center">
						<h3 className="text-3xl font-semibold text-primary mb-2">
							{item.type}
						</h3>
						<h4 className="text-2xl font-semibold text-gray-900 mb-2">
							{item.title}
						</h4>
						<div className="text-gray-700 mb-4">{item.description}</div>
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
				</div>
			))}
		</div>
	</section>
);

// Composant principal
const Projects = () => <Section title="Mes Projets" items={projects} />;

export default Projects;
