// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle'; // <-- Import du composant Toggle

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-slate-800' 
          : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <a href="/" className="text-xl font-bold tracking-tight text-slate-900 dark:text-white hover:text-[#00796B] dark:hover:text-[#00796B] transition-colors">
            MARA
          </a>

          {/* Menu Desktop */}
          <ul className="hidden md:flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-300 items-center">
            <li><a href="/" className="hover:text-[#00796B] dark:hover:text-[#00796B] transition-colors">Accueil</a></li>
            <li><a href="/a-propos" className="hover:text-[#00796B] dark:hover:text-[#00796B] transition-colors">À propos</a></li>
            
            {/* Bouton Toggle Mode Sombre */}
            <li>
              <ThemeToggle />
            </li>

            <li>
              <a href="mailto:votre.email@exemple.com" className="px-4 py-2 bg-[#00796B] text-white rounded-lg hover:bg-[#00695C] transition-colors shadow-sm hover:shadow-md">
                Contact
              </a>
            </li>
          </ul>

          {/* Zone Mobile : Toggle + Burger */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
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
        </div>

        {/* Menu Mobile Dropdown */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col gap-2 pb-4 pt-2 text-sm font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 mt-2">
            <li>
              <a href="/" onClick={closeMenu} className="block px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                Accueil
              </a>
            </li>
            <li>
              <a href="/a-propos" onClick={closeMenu} className="block px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                À propos
              </a>
            </li>
            <li>
              <a href="mailto:votre.email@exemple.com" onClick={closeMenu} className="block px-4 py-2 bg-[#00796B] text-white rounded-lg hover:bg-[#00695C] transition-colors text-center mx-4 mt-2">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}