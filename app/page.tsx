'use client';

import { useState } from 'react';
import Link from 'next/link';
import ContactModal from './components/ContactModal';

export default function HomePage() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	const projects = [
		{
			id: 1,
			title: 'Optimisation SEO et Accessibilité',
			description:
				"Projet de formation : Optimisation des performances et de l'accessibilité d'un site web pour améliorer son référencement et son expérience utilisateur.",
			link: '/projects#1',
		},
		{
			id: 2,
			title:
				'Dashboard de Données Météorologiques, Économiques et Géospatiales',
			description:
				'Application de tableau de bord interactive avec des graphiques et manipulations de données via des appels API en temps réel pour afficher des données météorologiques, économiques et géospatiales.',
			link: '/projects#2',
		},
		{
			id: 3,
			title: 'Jeu Puissance 4 avec IA',
			description:
				"Jeu Puissance 4 développé avec Next.js, React et TypeScript, permettant de jouer soit contre un autre joueur soit contre une IA. Défiez l'ordinateur et essayez de gagner !",
			link: '/projects#3',
		},
	];

	return (
		<div className="min-h-screen text-white flex flex-col items-center justify-center px-4 md:px-8">
			{/* Section de bienvenue */}
			<div className="text-center mt-10">
				<h1 className="text-5xl font-headline mb-6">
					Je crée des expériences numériques exceptionnelles
				</h1>
				<p className="text-xl font-body text-textSecondary mb-6">
					Développeur spécialisé en <strong>Next.js</strong>,{' '}
					<strong>React</strong> et <strong>Tailwind CSS</strong>. Diplômé RNCP5
					(Bac+2) en Développement Web, je crée des solutions modernes et
					performantes pour le web. Explorez mes projets et contactez-moi pour
					collaborer sur des solutions innovantes.
				</p>

				<div className="flex space-x-4 justify-center">
					<Link href="/projects">
						<button className="px-6 py-3 bg-primary text-white font-bold rounded shadow-custom-dark hover:bg-secondary transition duration-300">
							Voir mes projets
						</button>
					</Link>
					<button
						onClick={openModal}
						aria-label="Ouvrir le formulaire de contact"
						className="px-6 py-3 bg-primary text-white font-bold rounded shadow-custom-dark hover:bg-secondary transition duration-300"
					>
						Discutons ensemble
					</button>
				</div>
			</div>

			{/* Section Projets en avant */}
			<div className="w-full max-w-5xl mt-16">
				<h2 className="text-4xl font-headline text-center mb-8">
					Aperçu de mes projets
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{projects.map((project) => (
						<div
							key={project.id}
							className="bg-white bg-opacity-90 p-6 rounded-lg shadow-custom-light"
						>
							<h3 className="text-2xl font-bold text-gray-900 mb-2">
								{project.title}
							</h3>
							<p className="text-lg text-gray-700 mb-4">
								{project.description}
							</p>
							<Link href={project.link}>
								<p className="text-primary hover:underline">
									Voir le projet :{' '}
								</p>
								<p className="text-sm text-gray-700">{project.title}</p>
							</Link>
						</div>
					))}
				</div>
			</div>

			{/* Animation scroll to about */}
			<div className="mt-20 flex flex-col items-center justify-center">
				<p className="text-lg text-textSecondary mb-4">
					Vous souhaitez en savoir plus sur moi ?
				</p>
				<Link href="/about">
					<button className="px-6 py-3 bg-primary text-white font-bold rounded shadow-custom-dark hover:bg-secondary transition duration-300">
						À propos de moi
					</button>
				</Link>
			</div>

			{/* Modal Contact */}
			<ContactModal isOpen={isModalOpen} onClose={closeModal} />
		</div>
	);
}
