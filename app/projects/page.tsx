import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { generatePageMetadata } from '../lib/metadata';
import { Project, SectionProps } from '../lib/types';
import { PROJECTS } from '../lib/projectsData';

export const metadata = generatePageMetadata(
	'Mes Projets',
	'Découvrez mes projets de développement web : optimisation SEO, dashboard de données, jeu Puissance 4 avec IA. Technologies : Next.js, React, TypeScript.',
	'/projects'
);


// Composant Section mis à jour pour une disposition en flex
const Section: React.FC<SectionProps> = ({ title, items }) => (
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
							alt={`Capture d'écran du projet ${item.title}`}
							width={500}
							height={300}
							className="rounded-lg w-full h-48 object-cover md:h-auto"
							loading="lazy"
							placeholder="blur"
							blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjY2NjIi8+PC9zdmc+"
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
									className="text-secondary hover:text-secondary-dark transition duration-300 flex items-center focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 rounded"
									aria-label={`Voir le projet ${item.title} en direct`}
								>
									<FaExternalLinkAlt className="mr-2" aria-hidden="true" />
									Voir en Direct
								</a>
							)}
							<a
								href={item.codeLink}
								target="_blank"
								rel="noopener noreferrer"
								className="text-secondary hover:text-secondary-dark transition duration-300 flex items-center focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 rounded"
								aria-label={`Voir le code source du projet ${item.title}`}
							>
								<FaGithub className="mr-2" aria-hidden="true" />
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
const Projects: React.FC = () => <Section title="Mes Projets" items={PROJECTS} />;

export default Projects;
