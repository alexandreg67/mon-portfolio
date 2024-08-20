import React from 'react';

const Footer: React.FC = () => {
	return (
		<footer className="footer fixed bottom-0 left-0 w-full text-white p-4 bg-black bg-opacity-50 backdrop-blur-lg z-20 justify-center">
			<div className="container mx-auto text-center">
				<p>&copy; 2024 Graff Alexandre. Tous droits réservés.</p>
			</div>
		</footer>
	);
};

export default Footer;
