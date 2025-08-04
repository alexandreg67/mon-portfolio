"use client";

import Link from "next/link";
import ContactModal from "./components/ContactModal";
import { useModal } from "./lib/hooks";
import { FEATURED_PROJECTS } from "./lib/constants";

export default function HomePage() {
  const { isOpen: isModalOpen, openModal, closeModal } = useModal();


  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center px-4 md:px-8">
      {/* Section de bienvenue */}
      <div className="text-center mt-10">
        <h1 className="text-5xl font-headline mb-6">
          Je crée des expériences numériques exceptionnelles
        </h1>
        <p className="text-xl font-body text-textSecondary mb-6">
          Développeur spécialisé en <strong>Next.js</strong>,{" "}
          <strong>React</strong> et <strong>Tailwind CSS</strong>. Diplômé RNCP6
          (Bac+3/4) en Développement Web, je crée des solutions modernes et
          performantes pour le web. Explorez mes projets et contactez-moi pour
          collaborer sur des solutions innovantes.
        </p>

        <div className="flex space-x-4 justify-center">
          <Link href="/projects">
            <button className="px-6 py-3 bg-primary text-white font-bold rounded shadow-custom-dark hover:bg-secondary transition duration-300">
              Voir mes projets
            </button>
          </Link>
          <button
            onClick={openModal}
            aria-label="Ouvrir le formulaire de contact"
            className="px-6 py-3 bg-primary text-white font-bold rounded shadow-custom-dark hover:bg-secondary transition duration-300"
          >
            Discutons ensemble
          </button>
        </div>
      </div>

      {/* Section Projets en avant */}
      <div className="w-full max-w-5xl mt-16">
        <h2 className="text-4xl font-headline text-center mb-8">
          Aperçu de mes projets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-white bg-opacity-90 p-6 rounded-lg shadow-custom-light"
              role="article"
              aria-labelledby={`project-title-${project.id}`}
            >
              <h3 id={`project-title-${project.id}`} className="text-2xl font-bold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                {project.description}
              </p>
              <Link 
                href={project.link}
                className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                aria-label={`Voir les détails du projet ${project.title}`}
              >
                <p className="text-primary hover:underline">
                  Découvrir ce projet
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Animation scroll to about */}
      <div className="mt-20 flex flex-col items-center justify-center">
        <p className="text-lg text-textSecondary mb-4">
          Vous souhaitez en savoir plus sur moi ?
        </p>
        <Link href="/about">
          <button className="px-6 py-3 bg-primary text-white font-bold rounded shadow-custom-dark hover:bg-secondary transition duration-300">
            À propos de moi
          </button>
        </Link>
      </div>

      {/* Modal Contact */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
