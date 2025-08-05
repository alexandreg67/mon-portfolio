'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { NAV_ITEMS, SITE_CONFIG } from '../lib/constants';
import { useMobileMenu } from '../lib/hooks';

const Header: React.FC = () => {
	const { isOpen, toggleMenu, closeMenu } = useMobileMenu();

	// Fermer le menu avec Escape
	useEffect(() => {
		const handleEscapeKey = (event: KeyboardEvent) => {
			if (event.key === 'Escape' && isOpen) {
				closeMenu();
			}
		};

		document.addEventListener('keydown', handleEscapeKey);
		return () => document.removeEventListener('keydown', handleEscapeKey);
	}, [isOpen, closeMenu]);

	// Prévenir le scroll du body quand le menu est ouvert
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	return (
		<header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-white/10 text-white shadow-card">
			<div className="container mx-auto flex justify-between items-center py-4 px-6">
				<Link href="/" className="text-3xl font-heading font-bold text-gradient hover:scale-105 transition-transform">
					{SITE_CONFIG.AUTHOR}
				</Link>
				<nav className="hidden lg:flex space-x-8" role="navigation" aria-label="Navigation principale">
					{NAV_ITEMS.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="relative hover:text-primary-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-3 py-2 font-medium after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary-400 after:to-secondary-400 hover:after:w-full after:transition-all after:duration-300"
						>
							{item.label}
						</Link>
					))}
				</nav>
				<div className="lg:hidden">
					<button
						onClick={toggleMenu}
						aria-label={isOpen ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"}
						aria-expanded={isOpen}
						aria-controls="mobile-menu"
						className="text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded p-2 hover:bg-white/10 transition-all"
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
					aria-hidden="true"
				></div>
			)}

			{/* Menu latéral pour les petits écrans */}
			<div
				id="mobile-menu"
				className={`fixed inset-y-0 left-0 w-72 backdrop-blur-xl bg-slate-900/90 border-r border-white/10 transform ${
					isOpen ? 'translate-x-0' : '-translate-x-full'
				} transition-transform duration-300 ease-in-out z-50 lg:hidden shadow-2xl`}
				aria-hidden={!isOpen}
			>
				<div className="flex justify-end p-6">
					<button 
						onClick={closeMenu} 
						aria-label="Fermer le menu de navigation"
						className="text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded p-2 hover:bg-white/10 transition-all"
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
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
				<nav className="flex flex-col items-start space-y-2 p-6" role="navigation" aria-label="Navigation mobile">
					{NAV_ITEMS.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="w-full p-4 rounded-xl hover:bg-white/10 hover:text-primary-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-slate-900 font-medium border border-transparent hover:border-white/20"
							onClick={closeMenu}
						>
							{item.label}
						</Link>
					))}
				</nav>
			</div>
		</header>
	);
};

export default Header;
