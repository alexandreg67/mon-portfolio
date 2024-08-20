export default function HomePage() {
	return (
		<div className="flex flex-col items-center justify-center px-4 md:px-8">
			<h1 className="text-5xl font-headline mb-4 text-center">
				Bienvenue sur mon Portfolio
			</h1>
			<p className="text-xl font-body text-textSecondary text-center">
				Découvrez mes projets et contactez-moi pour collaborer !
			</p>
			<button className="mt-6 px-6 py-3 bg-primary text-white font-bold rounded shadow-custom-dark hover:bg-secondary transition duration-300">
				Me Contacter
			</button>
		</div>
	);
}
