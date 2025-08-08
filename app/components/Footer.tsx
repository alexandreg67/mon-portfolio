'use client';

import React from 'react';
import { SITE_CONFIG } from '../lib/constants';

const Footer: React.FC = () => {
    const year = new Date().getFullYear();
	return (
		<footer className="bg-hero-gradient text-textPrimary py-4 shadow-custom-dark">
			<div className="container mx-auto text-center">
                <p>&copy; {year} {SITE_CONFIG.AUTHOR}. Tous droits réservés.</p>
			</div>
		</footer>
	);
};

export default Footer;
