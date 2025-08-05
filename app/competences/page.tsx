import React, { useMemo } from 'react';
import 'devicon/devicon.min.css';
import { SKILLS_DATA } from '../lib/constants';
import { SkillCategory, ComplementarySkill } from '../lib/types';

const Competences = () => {
	// Génération des cartes de compétences par catégorie
	const categoryCards = useMemo(() => 
		SKILLS_DATA.categories.map((category: SkillCategory, categoryIndex: number) => (
			<div key={category.id} className="mb-16">
				<div className="text-center mb-12">
					<h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
						{category.title}
					</h3>
					<p className="text-slate-300 text-lg max-w-2xl mx-auto">
						{category.description}
					</p>
				</div>
				
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{category.skills.map((skill: any, skillIndex: number) => {
						// Fonction pour rendre l'icône appropriée
						const renderIcon = () => {
							if (skill.icon.includes('fas fa-robot')) {
								return <span className="text-primary-400 text-4xl">🤖</span>;
							} else if (skill.icon.includes('fas fa-chart-line')) {
								return <span className="text-secondary-400 text-4xl">📊</span>;
							} else if (skill.icon.includes('fas fa-brain')) {
								return <span className="text-indigo-400 text-4xl">🧠</span>;
							} else {
								return <i className={`${skill.icon} hover:scale-110 transition-transform duration-300`}></i>;
							}
						};
						
						return (
							<div
								key={skillIndex}
								className="group card-modern p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 animate-slide-up"
								style={{animationDelay: `${0.1 * (categoryIndex * 3 + skillIndex)}s`}}
							>
								<div className="flex items-center mb-6">
									<div className="p-3 rounded-xl bg-gradient-to-r from-primary-600/20 to-primary-500/20 border border-primary-500/30 group-hover:scale-110 transition-transform duration-300">
										{renderIcon()}
									</div>
									<h4 className="text-2xl font-heading font-bold text-white ml-4 group-hover:text-primary-400 transition-colors">
										{skill.skill}
									</h4>
								</div>
								<p className="text-slate-300 leading-relaxed mb-4">
									{skill.description}
								</p>
								<div className="text-sm text-slate-400 italic border-l-2 border-primary-500/30 pl-4">
									{skill.project}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		)), []
	);

	// Génération des compétences complémentaires
	const complementarySkillsCards = useMemo(() =>
		SKILLS_DATA.complementarySkills.map((skill: ComplementarySkill, index: number) => (
			<div
				key={index}
				className="group card-modern p-6 rounded-xl shadow-card hover:shadow-card-hover text-center transition-all duration-300 hover:scale-105 animate-slide-up"
				style={{animationDelay: `${0.05 * index + 0.6}s`}}
			>
				<div className="p-3 rounded-lg bg-gradient-to-r from-secondary-600/20 to-secondary-500/20 border border-secondary-500/30 inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
					<i className={skill.icon}></i>
				</div>
				<h5 className="text-lg font-heading font-semibold text-white group-hover:text-secondary-400 transition-colors">
					{skill.skill}
				</h5>
				<p className="text-xs text-slate-400 mt-2">{skill.category}</p>
			</div>
		)), []
	);

	return (
		<section className="container mx-auto px-4 py-12">
			<h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 text-white">
				Mes <span className="text-gradient">Compétences</span>
			</h2>
			
			{/* Catégories de compétences principales */}
			<div className="mb-24">
				{categoryCards}
			</div>

			{/* Compétences complémentaires */}
			<div className="border-t border-slate-700/50 pt-16">
				<h3 className="text-2xl md:text-3xl font-heading font-semibold text-center mb-12 text-slate-200">
					Technologies Complémentaires
				</h3>
				<div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-4xl mx-auto">
					{complementarySkillsCards}
				</div>
			</div>
		</section>
	);
};

export default Competences;
