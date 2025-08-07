"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, SITE_CONFIG } from "../lib/constants";
import { useMobileMenu } from "../lib/hooks";
import {
  HomeIcon,
  AcademicCapIcon,
  CpuChipIcon,
  UserIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

const Header: React.FC = () => {
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu();
  const pathname = usePathname();

  // Icônes pour chaque page
  const getIconForHref = (href: string) => {
    switch (href) {
      case "/":
        return HomeIcon;
      case "/formations":
        return AcademicCapIcon;
      case "/competences":
        return CpuChipIcon;
      case "/about":
        return UserIcon;
      case "/projects":
        return BriefcaseIcon;
      case "/contact":
        return EnvelopeIcon;
      default:
        return HomeIcon;
    }
  };

  // Vérifier si la page actuelle correspond au lien
  const isActivePage = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Fermer le menu avec Escape
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [isOpen, closeMenu]);

  // Prévenir le scroll du body quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-white/10 text-white shadow-card">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link
          href="/"
          className="text-3xl font-heading font-bold text-gradient hover:scale-105 transition-transform"
        >
          {SITE_CONFIG.AUTHOR}
        </Link>
        <nav
          className="hidden lg:flex space-x-8"
          role="navigation"
          aria-label="Navigation principale"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative hover:text-primary-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-3 py-2 font-medium after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary-400 after:to-secondary-400 hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            aria-label={
              isOpen
                ? "Fermer le menu de navigation"
                : "Ouvrir le menu de navigation"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className={`relative text-white focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-lg p-3 transition-all duration-300 border ${
              isOpen
                ? "bg-gradient-to-r from-primary-500/30 to-secondary-400/20 border-primary-400/50 shadow-lg shadow-primary-500/30 rotate-180"
                : "hover:bg-gradient-to-r hover:from-primary-500/20 hover:to-secondary-400/20 border-transparent hover:border-primary-400/30"
            }`}
          >
            <div className="relative w-6 h-6">
              <XMarkIcon
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isOpen
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 rotate-90 scale-75"
                }`}
              />
              <Bars3Icon
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isOpen
                    ? "opacity-0 -rotate-90 scale-75"
                    : "opacity-100 rotate-0 scale-100"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Overlay pour fermer le menu */}
      {isOpen && (
        <div
          className="fixed inset-0 menu-backdrop z-[59] transition-all duration-500"
          onClick={closeMenu}
          aria-hidden="true"
        ></div>
      )}

      {/* Menu latéral pour les petits écrans */}
      <div
        id="mobile-menu"
        className={`fixed inset-y-0 left-0 w-80 menu-solid transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-all duration-500 ease-in-out z-[60] lg:hidden`}
        aria-hidden={!isOpen}
      >
        {/* Header du menu */}
        <div className="relative border-b border-primary-400/50 p-6 bg-slate-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-lg flex items-center justify-center shadow-lg shadow-primary-500/30">
                <span className="text-white font-bold text-lg">AG</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Menu</h3>
                <p className="text-slate-300 text-sm">Navigation</p>
              </div>
            </div>
            <button
              onClick={closeMenu}
              aria-label="Fermer le menu de navigation"
              className="text-white/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-lg p-2 hover:bg-white/10 transition-all duration-300"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Navigation principale */}
        <nav
          className="flex-1 py-6 bg-slate-900"
          role="navigation"
          aria-label="Navigation mobile"
        >
          <div className="space-y-2 px-4 bg-slate-900">
            {NAV_ITEMS.map((item, index) => {
              const IconComponent = getIconForHref(item.href);
              const isActive = isActivePage(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group flex items-center space-x-4 w-full p-4 rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-slate-900 font-medium relative overflow-hidden menu-item-glow ${
                    isActive
                      ? "bg-gradient-to-r from-primary-500/30 to-secondary-400/20 border border-primary-400/40 text-white shadow-lg shadow-primary-500/20"
                      : "bg-slate-800/50 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-800 border border-transparent hover:border-white/20 text-slate-300 hover:text-white"
                  }`}
                  onClick={closeMenu}
                  style={{
                    animation: `menu-item-appear 0.6s ease-out forwards`,
                    animationDelay: `${index * 100}ms`,
                    opacity: 0,
                  }}
                >
                  {/* Indicateur actif */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-400 to-secondary-400 rounded-r-full"></div>
                  )}

                  {/* Icône */}
                  <div
                    className={`flex-shrink-0 p-2 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-br from-primary-400/30 to-secondary-400/20"
                        : "group-hover:bg-white/10"
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Label */}
                  <span className="flex-1 font-medium">{item.label}</span>

                  {/* Badge actif */}
                  {isActive && (
                    <div className="w-2 h-2 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full animate-pulse"></div>
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Footer du menu */}
        <div className="border-t border-slate-700/50 p-6 bg-slate-900">
          <div className="text-center">
            <p className="text-slate-400 text-sm mb-2">Alexandre Graff</p>
            <p className="text-slate-500 text-xs">Développeur Full-Stack</p>
            <div className="mt-4 flex justify-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-lg flex items-center justify-center border border-primary-400/30 shadow-lg shadow-primary-500/20">
                <span className="text-xs font-mono text-primary-400">
                  {"</>"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
