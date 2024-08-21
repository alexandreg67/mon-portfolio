const AboutPage: React.FC = () => {
	return (
		<div className="min-h-screen flex flex-col items-center pt-10 py-10">
			<div className="w-full max-w-3xl px-6">
				<h1 className="text-4xl font-headline text-center text-white mb-8">
					À propos de moi
				</h1>
				<div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-custom-light">
					<p className="text-lg text-gray-900 mb-6">
						Je m'appelle Alexandre, un développeur passionné par l'innovation
						technologique et le développement web. Chaque jour est une nouvelle
						opportunité d'apprendre, de créer, et de repousser les limites du
						possible.
					</p>
					<p className="text-lg text-gray-900 mb-6">
						Ma spécialité ? Transformer des idées en solutions numériques
						performantes. Que ce soit en utilisant <strong>Next.js</strong>,{' '}
						<strong>React</strong>, ou
						<strong> Tailwind CSS</strong>, je suis dédié à concevoir des
						expériences utilisateur fluides et engageantes.
					</p>
					<p className="text-lg text-gray-900 mb-6">
						Toujours en quête de perfectionnement, j'explore constamment les
						nouvelles technologies et méthodologies pour rester à la pointe du
						développement. Pour moi, chaque projet est un défi unique qui mérite
						une solution sur mesure.
					</p>
					<p className="text-lg text-gray-900">
						Prêt à collaborer ? Je suis à la recherche d'opportunités pour
						rejoindre des équipes dynamiques et apporter ma passion pour le code
						au service de projets innovants.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
