import React from 'react';

const Footer: React.FC = () => {
	return (
		<footer className="bg-hero-gradient text-textPrimary py-4 shadow-custom-dark">
			<div className="container mx-auto text-center">
				<p>&copy; 2024 Graff Alexandre. Tous droits réservés.</p>
				<div className="flex justify-center space-x-6 mt-4">
					<a
						href="https://twitter.com/tonprofil"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-secondary transition duration-300"
					>
						<i className="fab fa-twitter"></i>
					</a>
					<a
						href="https://linkedin.com/in/tonprofil"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-secondary transition duration-300"
					>
						<i className="fab fa-linkedin"></i>
					</a>
					<a
						href="https://github.com/tonprofil"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-secondary transition duration-300"
					>
						<i className="fab fa-github"></i>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
