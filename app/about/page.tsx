'use client';

import Link from 'next/link';
import { FaCode, FaRocket, FaBrain, FaTools } from 'react-icons/fa';

const AboutPage: React.FC = () => {
	const specializations = [
		{
			icon: FaCode,
			title: 'Architecture Frontend Moderne',
			description: 'Expertise en Next.js 14+ avec App Router, React 18 Server Components et TypeScript. Je conçois des interfaces performantes et maintenables avec une approche composants réutilisables.',
			technologies: ['Next.js 14+', 'React 18', 'TypeScript', 'Tailwind CSS']
		},
		{
			icon: FaRocket,
			title: 'Solutions Backend Scalables',
			description: 'Développement d\'APIs robustes avec architectures microservices, bases de données optimisées et intégration GraphQL pour des performances maximales.',
			technologies: ['Express.js', 'PostgreSQL', 'GraphQL', 'Redis']
		},
		{
			icon: FaBrain,
			title: 'Intégration IA & Productivité',
			description: 'Maîtrise des outils d\'IA modernes pour optimiser les workflows de développement et créer des solutions intelligentes intégrées aux applications.',
			technologies: ['Claude Code', 'GitHub Copilot', 'APIs IA', 'Automatisation']
		},
		{
			icon: FaTools,
			title: 'DevOps & Déploiement',
			description: 'Containerisation avec Docker, déploiements automatisés et monitoring pour assurer la fiabilité et la scalabilité des applications en production.',
			technologies: ['Docker', 'CI/CD', 'Vercel', 'Monitoring']
		}
	];

	return (
		<div className="min-h-screen text-white px-4 md:px-8 relative overflow-hidden">
			{/* Background animations */}
			<div className="absolute inset-0 opacity-20">
				<div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-gentle-bounce"></div>
				<div className="absolute bottom-32 right-16 w-96 h-96 bg-secondary-500/15 rounded-full blur-3xl animate-gentle-bounce" style={{animationDelay: '1s'}}></div>
			</div>

			<div className="container mx-auto py-12 relative z-10">
				{/* Header */}
				<div className="text-center mb-16 animate-fade-in">
					<h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
						À propos de <span className="text-gradient">moi</span>
					</h1>
					<div className="max-w-4xl mx-auto">
						<div className="card-modern p-8 md:p-12 rounded-2xl shadow-card mb-12 animate-slide-up">
							<p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6">
								Je suis <span className="text-primary-400 font-semibold">Alexandre</span>, développeur Full Stack passionné par les <span className="text-secondary-400 font-semibold">architectures modernes</span> et les solutions haute performance. 
							</p>
							<p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6">
								Mon expertise se concentre sur la création d'<span className="text-indigo-400 font-semibold">écosystèmes applicatifs robustes</span> en utilisant les technologies les plus récentes. Je transforme des besoins complexes en solutions techniques élégantes et scalables.
							</p>
							<p className="text-lg md:text-xl text-slate-300 leading-relaxed">
								Spécialisé dans l'<span className="text-primary-400 font-semibold">optimisation de la productivité</span> grâce aux outils d'IA et dans le développement de plateformes <span className="text-secondary-400 font-semibold">enterprise-grade</span>, j'apporte une vision moderne aux défis techniques d'aujourd'hui.
							</p>
						</div>
					</div>
				</div>

				{/* Specializations Grid */}
				<div className="mb-16">
					<h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-white">
						Mes <span className="text-gradient">Spécialisations</span>
					</h2>
					<div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
						{specializations.map((spec, index) => {
							const IconComponent = spec.icon;
							return (
								<div
									key={index}
									className="group card-modern p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 animate-slide-up"
									style={{animationDelay: `${0.1 * index}s`}}
								>
									<div className="flex items-center mb-6">
										<div className="p-4 rounded-xl bg-gradient-to-r from-primary-600/20 to-primary-500/20 border border-primary-500/30 group-hover:scale-110 transition-transform duration-300">
											<IconComponent className="text-primary-400 text-3xl" />
										</div>
										<h3 className="text-2xl font-heading font-bold text-white ml-4 group-hover:text-primary-400 transition-colors">
											{spec.title}
										</h3>
									</div>
									<p className="text-slate-300 leading-relaxed mb-6">
										{spec.description}
									</p>
									<div className="flex flex-wrap gap-2">
										{spec.technologies.map((tech, i) => (
											<span
												key={i}
												className="bg-gradient-to-r from-secondary-600/20 to-secondary-500/20 border border-secondary-500/30 text-secondary-300 px-3 py-1 rounded-lg text-sm font-medium"
											>
												{tech}
											</span>
										))}
									</div>
								</div>
							);
						})}
					</div>
				</div>

				{/* Call to Action */}
				<div className="text-center animate-slide-up" style={{animationDelay: '0.6s'}}>
					<div className="card-modern p-8 rounded-2xl shadow-card max-w-3xl mx-auto">
						<h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
							Collaborons sur votre prochain <span className="text-gradient">défi technique</span>
						</h3>
						<p className="text-slate-300 text-lg mb-8 leading-relaxed">
							Toujours à l'affût des innovations technologiques, je recherche des projets stimulants où je peux apporter mon expertise en architectures modernes et solutions performantes.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link href="/projects">
								<button className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-xl shadow-glow hover:shadow-card-hover hover:scale-105 transition-all duration-300">
									<span className="relative z-10">Découvrir mes projets</span>
									<div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								</button>
							</Link>
							<Link href="/contact">
								<button className="group relative px-8 py-4 bg-transparent border-2 border-secondary-500 text-secondary-400 font-semibold rounded-xl hover:bg-secondary-500 hover:text-white hover:scale-105 transition-all duration-300">
									Prenons contact
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
