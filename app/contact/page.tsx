'use client';

import { useState } from 'react';
import ContactModal from '../components/ContactModal';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function ContactPage() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	return (
		<section className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col items-center justify-center  text-textPrimary">
			<div className="max-w-3xl w-full text-center px-6 sm:px-8 md:px-12">
				<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
					Restons en Contact
				</h1>
				<p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4">
					N'hésitez pas à me contacter via les réseaux sociaux ou par email. Je
					suis toujours ouvert pour discuter de nouvelles opportunités ou
					collaborations.
				</p>
				<a
					href="mailto:alexandre.ag.67@gmail.com"
					className="text-xl font-bold text-primary hover:text-secondary transition duration-300 mb-8 block"
				>
					alexgraff67@gmail.com
				</a>
				<div className="flex justify-center space-x-6 mb-8">
					<a
						href="https://linkedin.com/in/graff-alexandre"
						target="_blank"
						rel="noopener noreferrer"
						className="text-primary hover:text-secondary transition duration-300"
					>
						<FaLinkedin size={32} />
					</a>
					<a
						href="https://github.com/alexandreg67"
						target="_blank"
						rel="noopener noreferrer"
						className="text-primary hover:text-secondary transition duration-300"
					>
						<FaGithub size={32} />
					</a>
					{/* <a
            href="https://x.com/AlexGRA98698555"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-secondary transition duration-300"
          >
            <Image
              src="/x-icone.svg"
              alt="X Icon"
              width={32}
              height={32}
              className="text-primary hover:text-secondary transition duration-300"
            />
          </a> */}
				</div>
				<button
					onClick={openModal}
					className="mt-6 px-6 py-3 bg-primary text-white font-bold rounded shadow-custom-dark hover:bg-secondary transition duration-300"
				>
					Me Contacter
				</button>
				<ContactModal isOpen={isModalOpen} onClose={closeModal} />
			</div>
		</section>
	);
}
