import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	return (
		<header className="bg-hero-gradient text-white shadow-custom-dark">
			<div className="container mx-auto flex justify-between items-center py-4 px-6">
				<Link href="/" className="text-3xl font-headline">
					Graff Alexandre
				</Link>
				<nav className="hidden lg:flex space-x-8">
					<Link
						href="/"
						className="hover:text-secondary transition duration-300"
					>
						Accueil
					</Link>
					<Link
						href="/formations"
						className="hover:text-secondary transition duration-300"
					>
						Formations
					</Link>
					<Link
						href="/competences"
						className="hover:text-secondary transition duration-300"
					>
						Compétences
					</Link>
					<Link
						href="/about"
						className="hover:text-secondary transition duration-300"
					>
						À propos
					</Link>
					<Link
						href="/projects"
						className="hover:text-secondary transition duration-300"
					>
						Projets
					</Link>
					<Link
						href="/contact"
						className="hover:text-secondary transition duration-300"
					>
						Contact
					</Link>
				</nav>
				<div className="lg:hidden">
					<button
						onClick={toggleMenu}
						className="text-white focus:outline-none"
					>
						<svg
							className="w-8 h-8"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16m-7 6h7"
							/>
						</svg>
					</button>
				</div>
			</div>

			{/* Overlay pour fermer le menu */}
			{isOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 z-40"
					onClick={closeMenu}
				></div>
			)}

			{/* Menu latéral pour les petits écrans */}
			<div
				className={`fixed inset-y-0 left-0 w-64 bg-hero-gradient transform ${
					isOpen ? 'translate-x-0' : '-translate-x-full'
				} transition-transform duration-300 ease-in-out z-50 lg:hidden`}
			>
				<div className="flex justify-end p-4">
					<button onClick={closeMenu} className="text-white">
						<svg
							className="w-8 h-8"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
				<nav className="flex flex-col items-start space-y-4 p-4">
					<Link
						href="/"
						className="hover:text-secondary transition duration-300"
						onClick={closeMenu}
					>
						Accueil
					</Link>
					<Link
						href="/formations"
						className="hover:text-secondary transition duration-300"
						onClick={closeMenu}
					>
						Formations
					</Link>
					<Link
						href="/competences"
						className="hover:text-secondary transition duration-300"
						onClick={closeMenu}
					>
						Compétences
					</Link>
					<Link
						href="/about"
						className="hover:text-secondary transition duration-300"
						onClick={closeMenu}
					>
						À propos
					</Link>
					<Link
						href="/projects"
						className="hover:text-secondary transition duration-300"
						onClick={closeMenu}
					>
						Projets
					</Link>
					<Link
						href="/contact"
						className="hover:text-secondary transition duration-300"
						onClick={closeMenu}
					>
						Contact
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
