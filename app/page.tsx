"use client";

import Link from "next/link";
import ContactModal from "./components/ContactModal";
import { useModal } from "./lib/hooks";
import { FEATURED_PROJECTS } from "./lib/constants";

export default function HomePage() {
  const { isOpen: isModalOpen, openModal, closeModal } = useModal();


  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center px-4 md:px-8 relative overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-gentle-bounce"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-secondary-500/15 rounded-full blur-3xl animate-gentle-bounce" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Section de bienvenue */}
      <div className="text-center mt-10 relative z-10 animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 leading-tight">
          Développeur 
          <span className="text-gradient block mt-2">
            Full Stack
          </span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-300 mb-12 leading-relaxed animate-slide-up delay-[0.1s]">
          Je conçois et développe des <span className="text-primary-400 font-semibold">architectures microservices scalables</span>
          avec des workflows <span className="text-indigo-400 font-semibold">optimisés par l'IA</span>. 
          Spécialisé en solutions haute performance, 
          j'intègre les technologies modernes pour créer des écosystèmes applicatifs robustes et innovants.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-[0.2s]">
          <Link href="/projects">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-xl shadow-glow hover:shadow-card-hover hover:scale-105 transition-all duration-300 overflow-hidden">
              <span className="relative z-10">Voir mes projets</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </Link>
          <button
            onClick={openModal}
            aria-label="Ouvrir le formulaire de contact"
            className="group relative px-8 py-4 bg-transparent border-2 border-secondary-500 text-secondary-400 font-semibold rounded-xl hover:bg-secondary-500 hover:text-white hover:scale-105 transition-all duration-300"
          >
            Discutons ensemble
          </button>
        </div>
      </div>

      {/* Section Projets en avant */}
      <div className="w-full max-w-6xl mt-20 relative z-10">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
          Aperçu de mes <span className="text-gradient">projets</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED_PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className="group card-modern p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 animate-slide-up"
              style={{animationDelay: `${0.1 * index}s`}}
              role="article"
              aria-labelledby={`project-title-${project.id}`}
            >
              <h3 id={`project-title-${project.id}`} className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              <Link 
                href={project.link}
                className="inline-flex items-center text-secondary-400 hover:text-secondary-300 font-semibold focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-lg p-2 -m-2 transition-all group"
                aria-label={`Voir les détails du projet ${project.title}`}
              >
                Découvrir ce projet
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Animation scroll to about */}
      <div className="mt-20 flex flex-col items-center justify-center relative z-10">
        <p className="text-lg text-slate-300 mb-6 text-center">
          Vous souhaitez en savoir plus sur moi ?
        </p>
        <Link href="/about">
          <button className="px-8 py-4 bg-transparent border-2 border-primary-500 text-primary-400 font-semibold rounded-xl hover:bg-primary-500 hover:text-white hover:scale-105 transition-all duration-300">
            À propos de moi
          </button>
        </Link>
      </div>

      {/* Modal Contact */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
