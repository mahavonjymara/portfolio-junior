// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Effet de scroll pour changer l'apparence du header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile quand on clique sur un lien
  const closeMenu = () => setIsOpen(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <a href="/" className="text-xl font-bold tracking-tight text-slate-900 hover:text-blue-600 transition-colors">
            DevSenior.
          </a>

          {/* Menu Desktop */}
          <ul className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <li><a href="/" className="hover:text-blue-600 transition-colors">Accueil</a></li>
            <li><a href="/projets" className="hover:text-blue-600 transition-colors">Projets</a></li>
            <li><a href="/a-propos" className="hover:text-blue-600 transition-colors">À propos</a></li>
            <li>
              <a href="mailto:votre.email@exemple.com" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Contact
              </a>
            </li>
          </ul>

          {/* Bouton Burger Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu Mobile (slide down) */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col gap-2 pb-4 text-sm font-medium text-slate-600">
            <li>
              <a href="/" onClick={closeMenu} className="block px-4 py-2 rounded-lg hover:bg-slate-100 transition-colors">
                Accueil
              </a>
            </li>
            <li>
              <a href="/projets" onClick={closeMenu} className="block px-4 py-2 rounded-lg hover:bg-slate-100 transition-colors">
                Projets
              </a>
            </li>
            <li>
              <a href="/a-propos" onClick={closeMenu} className="block px-4 py-2 rounded-lg hover:bg-slate-100 transition-colors">
                À propos
              </a>
            </li>
            <li>
              <a href="mailto:votre.email@exemple.com" onClick={closeMenu} className="block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}