import { useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import { ContactFormData, ApiResponse } from './types';
import { TOAST_CONFIG } from './constants';

// Hook pour gérer les états de chargement
export const useLoading = (initialState = false) => {
	const [isLoading, setIsLoading] = useState(initialState);

	const startLoading = useCallback(() => setIsLoading(true), []);
	const stopLoading = useCallback(() => setIsLoading(false), []);

	return { isLoading, startLoading, stopLoading, setIsLoading };
};

// Hook pour gérer le formulaire de contact
export const useContactForm = (onSuccess?: () => void) => {
	const [formData, setFormData] = useState<ContactFormData>({
		firstName: '',
		lastName: '',
		email: '',
		message: '',
		website: '', // Honeypot field
	});
	const { isLoading, startLoading, stopLoading } = useLoading();

	const updateField = useCallback((field: keyof ContactFormData, value: string) => {
		setFormData(prev => ({ ...prev, [field]: value }));
	}, []);

	const resetForm = useCallback(() => {
		setFormData({
			firstName: '',
			lastName: '',
			email: '',
			message: '',
			website: '', // Honeypot field
		});
	}, []);

	const submitForm = useCallback(async (): Promise<boolean> => {
		const toastId = toast.loading('Envoi en cours...');
		startLoading();

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			const data: ApiResponse = await res.json();

			if (res.ok) {
				toast.update(toastId, {
					render: 'Message envoyé avec succès !',
					type: 'success',
					isLoading: false,
					autoClose: TOAST_CONFIG.SUCCESS_DURATION,
				});
				resetForm();
				onSuccess?.();
				return true;
			} else {
				let errorMessage = "Erreur lors de l'envoi du message.";
				
				if (res.status === 400 && data.errors) {
					const errorMessages = Object.values(data.errors).join('\n');
					errorMessage = `${data.message}\n${errorMessages}`;
				} else if (data.message) {
					errorMessage = data.message;
				}
				
				toast.update(toastId, {
					render: errorMessage,
					type: 'error',
					isLoading: false,
					autoClose: TOAST_CONFIG.ERROR_DURATION,
				});
				return false;
			}
		} catch (error) {
			console.error('Failed to send message:', error);
			toast.update(toastId, {
				render: "Erreur lors de l'envoi du message.",
				type: 'error',
				isLoading: false,
				autoClose: TOAST_CONFIG.DEFAULT_DURATION,
			});
			return false;
		} finally {
			stopLoading();
		}
	}, [formData, startLoading, stopLoading, resetForm, onSuccess]);

	return {
		formData,
		isLoading,
		updateField,
		resetForm,
		submitForm,
	};
};

// Hook pour gérer les modales
export const useModal = (initialState = false) => {
	const [isOpen, setIsOpen] = useState(initialState);

	const openModal = useCallback(() => setIsOpen(true), []);
	const closeModal = useCallback(() => setIsOpen(false), []);
	const toggleModal = useCallback(() => setIsOpen(prev => !prev), []);

	return { isOpen, openModal, closeModal, toggleModal };
};

// Hook pour gérer le menu mobile
export const useMobileMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);
	const closeMenu = useCallback(() => setIsOpen(false), []);
	const openMenu = useCallback(() => setIsOpen(true), []);

	return { isOpen, toggleMenu, closeMenu, openMenu };
};