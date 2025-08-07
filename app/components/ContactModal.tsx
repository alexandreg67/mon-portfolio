import React from 'react';
import { ContactModalProps } from '../lib/types';
import { useContactForm } from '../lib/hooks';

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
	const { formData, isLoading, updateField, submitForm } = useContactForm(onClose);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		await submitForm();
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
			<div className="bg-hero-gradient text-textPrimary rounded-lg shadow-custom-light p-6 w-full max-w-md">
				<h2 className="text-2xl font-bold text-center mb-4">Contactez-moi</h2>
				<form onSubmit={handleSubmit}>
					{/* Honeypot field - invisible pour les humains, piège pour les bots */}
					<input
						type="text"
						name="website"
						value={formData.website || ''}
						onChange={(e) => updateField('website', e.target.value)}
						style={{ display: 'none' }}
						tabIndex={-1}
						autoComplete="off"
						aria-hidden="true"
					/>
					<input
						type="text"
						placeholder="Prénom"
						value={formData.firstName}
						id="firstName"
						autoComplete="given-name"
						onChange={(e) => updateField('firstName', e.target.value)}
						className="input input-bordered w-full mb-4 text-textPrimary bg-backgroundStart placeholder-textSecondary"
						disabled={isLoading}
						required
						aria-label="Prénom"
					/>
					<input
						type="text"
						placeholder="Nom"
						value={formData.lastName}
						id="lastName"
						autoComplete="family-name"
						onChange={(e) => updateField('lastName', e.target.value)}
						className="input input-bordered w-full mb-4 text-textPrimary bg-backgroundStart placeholder-textSecondary"
						disabled={isLoading}
						required
						aria-label="Nom de famille"
					/>
					<input
						type="email"
						placeholder="Email"
						value={formData.email}
						id="email"
						autoComplete="email"
						onChange={(e) => updateField('email', e.target.value)}
						className="input input-bordered w-full mb-4 text-textPrimary bg-backgroundStart placeholder-textSecondary"
						disabled={isLoading}
						required
						aria-label="Adresse email"
					/>
					<textarea
						placeholder="Votre message"
						value={formData.message}
						id="message"
						autoComplete="off"
						onChange={(e) => updateField('message', e.target.value)}
						className="textarea textarea-bordered w-full mb-4 text-textPrimary bg-backgroundStart placeholder-textSecondary"
						disabled={isLoading}
						required
						aria-label="Message"
						rows={4}
					></textarea>
					<button 
						type="submit" 
						className="btn bg-primary text-white w-full disabled:opacity-50"
						disabled={isLoading}
						aria-label="Envoyer le message"
					>
						{isLoading ? 'Envoi en cours...' : 'Envoyer'}
					</button>
				</form>
				<button
					onClick={onClose}
					className="btn bg-secondary text-white mt-4 w-full"
					disabled={isLoading}
					aria-label="Fermer la modal de contact"
				>
					Fermer
				</button>
			</div>
		</div>
	);
};

export default ContactModal;
