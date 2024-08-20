const AboutPage: React.FC = () => {
	return (
		<div className="min-h-screen bg-gray-100 text-textPrimary flex flex-col items-center pt-20 py-10">
			<div className="w-full max-w-3xl px-6">
				<h1 className="text-4xl font-headline text-center text-gray-800 mb-8">
					À propos de moi
				</h1>
				<div className="bg-white p-8 rounded-lg shadow-custom-light">
					<p className="text-lg text-gray-800 mb-6">
						Salut ! Je suis Alexandre, un développeur passionné par le code, la
						créativité et l'innovation. Chaque jour, je me réveille avec l'envie
						d'apprendre quelque chose de nouveau et de perfectionner mes
						compétences.
					</p>
					<p className="text-lg text-gray-800 mb-6">
						Depuis que j'ai écrit ma première ligne de code, j'ai su que j'avais
						trouvé ma voie. Ce qui a commencé comme une simple curiosité s'est
						rapidement transformé en une passion dévorante pour la technologie
						et le développement web. J'aime résoudre des problèmes complexes,
						créer des interfaces intuitives, et transformer des idées en réalité
						numérique.
					</p>
					<p className="text-lg text-gray-800 mb-6">
						Le développement est un domaine en constante évolution, et c'est ce
						qui me motive le plus. Je passe une grande partie de mon temps à
						explorer de nouvelles technologies, à expérimenter des idées
						innovantes, et à me perfectionner dans les outils que j'utilise
						déjà. Je suis convaincu que le meilleur moyen de rester à la pointe,
						c'est de ne jamais arrêter d'apprendre.
					</p>
					<p className="text-lg text-gray-800 mb-6">
						Que ce soit en lisant des articles techniques, en suivant des
						tutoriels, ou en participant à des projets open source, je suis
						toujours en train d'élargir mes compétences et d'explorer de
						nouveaux horizons. Apprendre est pour moi une source inépuisable
						d'inspiration, et chaque nouveau défi est une opportunité de grandir
						et de m'améliorer.
					</p>
					<p className="text-lg text-gray-800 mb-6">
						Ce qui me motive, c'est l'idée que le code peut changer le monde.
						Chaque projet sur lequel je travaille est une nouvelle aventure, un
						nouveau défi à relever. Que ce soit pour créer une application qui
						simplifie la vie des gens, ou pour développer un site web qui capte
						l'attention et engage les utilisateurs, je mets tout mon cœur et mon
						expertise dans tout ce que je fais.
					</p>
					<p className="text-lg text-gray-800">
						Je suis actuellement à la recherche d'opportunités pour collaborer
						avec des équipes dynamiques qui partagent ma passion pour le
						développement et l'innovation. Si vous recherchez quelqu'un qui est
						non seulement compétent, mais aussi profondément engagé dans son
						travail, alors je suis la personne qu'il vous faut. Travaillons
						ensemble pour créer quelque chose d'extraordinaire !
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
