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
			<strong>Objectif :</strong> Plateforme moderne de gestion d'informations produits avec architecture microservices et fonctionnalités enterprise-grade.
			<br />
			<ul className="list-disc ml-6">
				<li>
					<strong>Architecture Microservices :</strong> 5 services indépendants avec communication via API REST/GraphQL et réseau Docker interne.
				</li>
				<li>
					<strong>Sécurité Enterprise :</strong> JWT, RBAC, chiffrement bcrypt, limitation de taux, audit trails complets.
				</li>
				<li>
					<strong>Performance Avancée :</strong> Cache Redis avec invalidation intelligente, recherche full-text PostgreSQL, optimisation d'images.
				</li>
				<li>
					<strong>Stack Moderne :</strong> TypeScript strict, React 18, GraphQL, Material-UI, Docker, tests complets.
				</li>
			</ul>
			<strong>Compétences clés :</strong> Architecture microservices, sécurité enterprise, optimisation performance, TypeScript avancé, DevOps.
		</>
	)),
	createProject(1, (
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
	createProject(2, (
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
	createProject(3, (
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
	createProject(4, (
		<>
			<strong>Objectif :</strong> Créer un jeu de tir spatial immersif en 2D avec des mécaniques de jeu modernes.
			<br />
			<ul className="list-disc ml-6">
				<li>
					<strong>Gameplay :</strong> Jeu de tir spatial avec ennemis, système de boucliers, effets visuels et audio immersifs.
				</li>
				<li>
					<strong>Moteur 2D :</strong> React Konva pour un rendu 2D performant avec gestion des particules et effets dynamiques.
				</li>
				<li>
					<strong>État global :</strong> Zustand pour la gestion optimisée de l'état du jeu (score, vies, niveau).
				</li>
			</ul>
			<strong>Compétences clés :</strong> 2D, Performance, UX/UI, TypeScript
		</>
	)),
	createProject(5, (
		<>
			<strong>Objectif :</strong> Créer un environnement complet d'apprentissage du hacking éthique et des tests de pénétration à des fins éducatives.
			<br />
			<ul className="list-disc ml-6">
				<li>
					<strong>Menu Interactif :</strong> Shell avec interface riche utilisant des scripts Bash pour organiser et lancer tous les outils de cybersécurité.
				</li>
				<li>
					<strong>Outils Intégrés :</strong> Suite complète d'outils professionnels (Nmap, SQLMap, Hydra, Wireshark, Aircrack-ng, John the Ripper, Hashcat).
				</li>
				<li>
					<strong>Environnements de Test :</strong> Machines virtuelles vulnérables incluses (DVWA, Metasploitable, OWASP WebGoat) pour l'apprentissage sécurisé.
				</li>
				<li>
					<strong>Documentation :</strong> Guides méthodologiques détaillés et organisation structurée des résultats de tests.
				</li>
			</ul>
			<strong>Usage légal uniquement :</strong> Environnement strictement éducatif pour l'apprentissage des techniques de sécurité défensive.
			<br />
			<strong>Compétences clés :</strong> Cybersécurité, Tests de pénétration, Shell scripting, Sécurité réseau, Analyse de vulnérabilités.
		</>
	)),
];
