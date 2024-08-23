import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ContactModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	// const notify = () => toast.success('Message envoyé avec succès !');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const toastId = toast.loading('Envoi en cours...');

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ firstName, lastName, email, message }),
			});

			if (res.ok) {
				toast.update(toastId, {
					render: 'Message envoyé avec succès !',
					type: 'success',
					isLoading: false,
					autoClose: 5000,
				});
				onClose();
			} else {
				toast.update(toastId, {
					render: "Erreur lors de l'envoi du message.",
					type: 'error',
					isLoading: false,
					autoClose: 5000,
				});
			}
		} catch (error) {
			console.error('Failed to send message:', error);
			toast.update(toastId, {
				render: "Erreur lors de l'envoi du message.",
				type: 'error',
				isLoading: false,
				autoClose: 5000,
			});
		}
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
			<div className="bg-hero-gradient text-textPrimary rounded-lg shadow-custom-light p-6 w-full max-w-md">
				<h2 className="text-2xl font-bold text-center mb-4">Contactez-moi</h2>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Prénom"
						value={firstName}
						id="firstName"
						autoComplete="given-name"
						onChange={(e) => setFirstName(e.target.value)}
						className="input input-bordered w-full mb-4 text-textPrimary bg-backgroundStart placeholder-textSecondary"
						required
					/>
					<input
						type="text"
						placeholder="Nom"
						value={lastName}
						id="lastName"
						autoComplete="family-name"
						onChange={(e) => setLastName(e.target.value)}
						className="input input-bordered w-full mb-4 text-textPrimary bg-backgroundStart placeholder-textSecondary"
						required
					/>
					<input
						type="email"
						placeholder="Email"
						value={email}
						id="email"
						autoComplete="email"
						onChange={(e) => setEmail(e.target.value)}
						className="input input-bordered w-full mb-4 text-textPrimary bg-backgroundStart placeholder-textSecondary"
						required
					/>
					<textarea
						placeholder="Votre message"
						value={message}
						id="message"
						autoComplete="off"
						onChange={(e) => setMessage(e.target.value)}
						className="textarea textarea-bordered w-full mb-4 text-textPrimary bg-backgroundStart placeholder-textSecondary"
						required
					></textarea>
					<button type="submit" className="btn bg-primary text-white w-full">
						Envoyer
					</button>
					{/* <button onClick={notify}>Tester Toast</button> */}
				</form>
				<button
					onClick={onClose}
					className="btn bg-secondary text-white mt-4 w-full"
				>
					Annuler
				</button>
				<ToastContainer />
			</div>
		</div>
	);
};

export default ContactModal;
function async(ok: boolean) {
	throw new Error('Function not implemented.');
}
