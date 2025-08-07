import React, { useEffect } from "react";
import { ContactModalProps } from "../lib/types";
import { useContactForm } from "../lib/hooks";

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const { formData, isLoading, updateField, submitForm } =
    useContactForm(onClose);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm();
  };

  // Gestion de la touche Escape pour fermer la modale
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen && !isLoading) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      // Empêcher le scroll du body quand la modale est ouverte
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, isLoading]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4 animate-fade-in">
      {/* Backdrop avec effet de flou */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={!isLoading ? onClose : undefined}
        aria-hidden="true"
      ></div>

      {/* Modale avec effet glassmorphism */}
      <div className="relative w-full max-w-md backdrop-blur-xl bg-slate-900/90 border border-white/10 rounded-2xl shadow-2xl animate-slide-up overflow-hidden">
        {/* Header avec dégradé subtil */}
        <div className="relative p-6 border-b border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10"></div>
          <div className="relative flex items-center justify-between">
            <h2 className="text-2xl font-heading font-bold text-white">
              Contactez-moi
            </h2>
            <button
              onClick={onClose}
              disabled={isLoading}
              className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              aria-label="Fermer la modal de contact"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Honeypot field - invisible pour les humains, piège pour les bots */}
          <input
            type="text"
            name="website"
            value={formData.website || ""}
            onChange={(e) => updateField("website", e.target.value)}
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          {/* Champs du formulaire avec design amélioré */}
          <div className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Prénom"
                value={formData.firstName}
                id="firstName"
                autoComplete="given-name"
                onChange={(e) => updateField("firstName", e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all duration-200 hover:border-white/30"
                disabled={isLoading}
                required
                aria-label="Prénom"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Nom"
                value={formData.lastName}
                id="lastName"
                autoComplete="family-name"
                onChange={(e) => updateField("lastName", e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all duration-200 hover:border-white/30"
                disabled={isLoading}
                required
                aria-label="Nom de famille"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Adresse email"
                value={formData.email}
                id="email"
                autoComplete="email"
                onChange={(e) => updateField("email", e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all duration-200 hover:border-white/30"
                disabled={isLoading}
                required
                aria-label="Adresse email"
              />
            </div>

            <div>
              <textarea
                placeholder="Votre message"
                value={formData.message}
                id="message"
                autoComplete="off"
                onChange={(e) => updateField("message", e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all duration-200 hover:border-white/30 resize-none"
                disabled={isLoading}
                required
                aria-label="Message"
                rows={4}
              ></textarea>
            </div>
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-col gap-3 pt-2">
            <button
              type="submit"
              className="group relative w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-xl shadow-glow hover:shadow-card-hover hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 overflow-hidden"
              disabled={isLoading}
              aria-label="Envoyer le message"
            >
              <span className="relative z-10">
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="w-4 h-4 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Envoi en cours...
                  </span>
                ) : (
                  "Envoyer le message"
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="w-full px-6 py-3 bg-transparent border-2 border-secondary-500/50 text-secondary-400 font-semibold rounded-xl hover:bg-secondary-500/10 hover:border-secondary-400 hover:text-secondary-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Fermer la modal de contact"
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
