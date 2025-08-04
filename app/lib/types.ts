import { ReactNode } from 'react';

// Types pour les projets
export interface Project {
	type: string;
	title: string;
	description: ReactNode;
	technologies: string[];
	imageUrl: string;
	liveLink?: string;
	codeLink: string;
}

// Types pour les métadonnées
export interface PageMetadata {
	title: string;
	description: string;
	path?: string;
}

// Types pour les formulaires
export interface ContactFormData {
	firstName: string;
	lastName: string;
	email: string;
	message: string;
}

export interface ContactFormErrors {
	[key: string]: string;
}

// Types pour les réponses API
export interface ApiResponse<T = any> {
	message: string;
	data?: T;
	errors?: ContactFormErrors;
	error?: string;
}

// Types pour les props des composants
export interface ContactModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export interface SectionProps {
	title: string;
	items: Project[];
}

// Types pour la navigation
export interface NavItem {
	href: string;
	label: string;
}

// Types pour les compétences et formations
export interface Skill {
	name: string;
	level: number;
	category: string;
}

export interface Formation {
	title: string;
	institution: string;
	period: string;
	description: string;
	certificate?: string;
}