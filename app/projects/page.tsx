import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { generatePageMetadata } from '../lib/metadata';
import { Project, SectionProps } from '../lib/types';
import { PROJECTS } from '../lib/projectsData';
import { BLUR_PLACEHOLDER_SVG } from '../lib/constants';

export const metadata = generatePageMetadata(
	'Mes Projets',
	'Découvrez mes projets de développement web : optimisation SEO, dashboard de données, jeu Puissance 4 avec IA. Technologies : Next.js, React, TypeScript.',
	'/projects'
);


// Composant Section mis à jour pour une disposition en flex
const Section: React.FC<SectionProps> = ({ title, items }) => (
	<section className="container mx-auto px-4 py-10">
		<h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 text-white">
			Mes <span className="text-gradient">Projets</span>
		</h2>
		<div className="space-y-12">
			{items.map((item, index) => (
				<div
					key={index}
					className="group flex flex-col lg:flex-row card-modern p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 w-full max-w-7xl mx-auto animate-slide-up"
					style={{animationDelay: `${0.1 * index}s`}}
				>
					{/* Section de l'image à gauche */}
					<div className="relative w-full lg:w-2/5 mb-6 lg:mb-0 lg:mr-8">
						<div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
							<Image
								src={item.imageUrl}
								alt={`Capture d'écran du projet ${item.title}`}
								width={600}
								height={400}
								className="w-full h-64 lg:h-72 object-cover object-top group-hover:scale-105 transition-transform duration-300"
								loading="lazy"
								placeholder="blur"
								blurDataURL={BLUR_PLACEHOLDER_SVG}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</div>
					</div>
					{/* Section du texte à droite */}
					<div className="lg:w-3/5 flex flex-col justify-center">
						<h3 className="text-lg font-semibold text-secondary-400 mb-2 uppercase tracking-wide">
							{item.type}
						</h3>
						<h4 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
							{item.title}
						</h4>
						<div className="text-slate-300 mb-6 leading-relaxed text-lg">{item.description}</div>
						<div className="flex flex-wrap gap-3 mb-8">
							{item.technologies.map((tech, i) => (
								<span
									key={i}
									className="bg-gradient-to-r from-primary-600/20 to-primary-500/20 border border-primary-500/30 text-primary-300 px-4 py-2 rounded-xl text-sm font-medium backdrop-blur-sm"
								>
									{tech}
								</span>
							))}
						</div>
						<div className="flex flex-wrap gap-4">
							{item.liveLink && (
								<a
									href={item.liveLink}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-secondary-600 to-secondary-500 text-white font-semibold rounded-xl hover:from-secondary-500 hover:to-secondary-400 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus:ring-offset-slate-900"
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
								className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-slate-600 text-slate-300 font-semibold rounded-xl hover:border-slate-500 hover:text-white hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900"
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
