import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
	return (
		<div className="navbar fixed top-0 left-0 w-full bg-black bg-opacity-50 backdrop-blur-lg z-20">
			<div className="navbar-start">
				<Link
					href="/"
					className="btn btn-ghost text-white text-2xl normal-case"
				>
					Graff Alexandre
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link
							href="/about"
							className="text-white text-xl hover:bg-gray-800 focus:bg-gray-800 active:bg-gray-800"
						>
							À propos
						</Link>
					</li>
					<li>
						<Link
							href="/formations"
							className="text-white text-xl hover:bg-gray-800 focus:bg-gray-800 active:bg-gray-800"
						>
							Formations
						</Link>
					</li>
					<li>
						<Link
							href="/competences"
							className="text-white text-xl hover:bg-gray-800 focus:bg-gray-800 active:bg-gray-800"
						>
							Compétences
						</Link>
					</li>
					<li>
						<Link
							href="/projets"
							className="text-white text-xl hover:bg-gray-800 focus:bg-gray-800 active:bg-gray-800"
						>
							Projets
						</Link>
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				<Link href="/contact" className="btn">
					Me Contacter
				</Link>
			</div>
		</div>
	);
};

export default Header;
