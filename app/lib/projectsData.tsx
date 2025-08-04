import { Project } from './types';
import { PROJECTS_DATA } from './constants';

// Helper function pour créer un projet avec sa description
const createProject = (index: number, description: React.ReactNode): Project => ({
	...PROJECTS_DATA[index],
	description,
});

// Projets avec descriptions JSX détaillées
export const PROJECTS: Project[] = [
	createProject(0, (
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
	)),
	createProject(1, (
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
	)),
	createProject(2, (
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
	)),
];