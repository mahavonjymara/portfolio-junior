// src/components/ContactForm.tsx
import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  
  // Utilisation de React.FormEvent au lieu d'importer FormEvent séparément
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    
    const formData = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(formData.entries());
    
    try {
      // Utilisation de la variable d'environnement (ou fallback si non définie)
      const formspreeId = import.meta.env.VITE_FORMSPREE_ID || 'VOTRE_ID_FORMSPREE';
      
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formObject)
      });
      
      if (response.ok) {
        setStatus('success');
        e.currentTarget.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
      
      {/* Nom */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
          Votre nom
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 outline-none transition-all focus:border-[#00796B] focus:ring-2 focus:ring-[#00796B]/20"
          placeholder="Tapez votre nom"
        />
      </div>
      
      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
          Votre email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 outline-none transition-all focus:border-[#00796B] focus:ring-2 focus:ring-[#00796B]/20"
          placeholder="Tapez votre email"
        />
      </div>
      
      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
          Votre message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 outline-none transition-all focus:border-[#00796B] focus:ring-2 focus:ring-[#00796B]/20 resize-none"
          placeholder="Bonjour, je suis intéressé par..."
        />
      </div>
      
      {/* Bouton submit */}
      <button
        type="submit"
        disabled={status === 'sending'}
        className={`w-full py-4 px-6 rounded-lg font-bold text-white text-base tracking-wide transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98] ${
          status === 'sending'
            ? 'bg-slate-400 cursor-not-allowed'
            : 'bg-[#00796B] hover:bg-[#00695C]'
        }`}
      >
        {status === 'sending' ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Envoi en cours...
          </span>
        ) : 'Envoyer le message'}
      </button>
      
      {/* Messages de statut : Succès */}
      {status === 'success' && (
        <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg text-emerald-800 dark:text-emerald-200 text-sm flex items-start gap-3 animate-fade-in-up">
          <span className="text-xl"></span>
          <div>
            <p className="font-semibold">Message envoyé avec succès !</p>
            <p className="mt-1 opacity-90">Je vous recontacte rapidement.</p>
          </div>
        </div>
      )}
      
      {/* Messages de statut : Erreur */}
      {status === 'error' && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-200 text-sm flex items-start gap-3 animate-fade-in-up">
          <span className="text-xl"></span>
          <div>
            <p className="font-semibold">Une erreur est survenue.</p>
            <p className="mt-1 opacity-90">Veuillez réessayer ou m'envoyer un email directement.</p>
          </div>
        </div>
      )}
    </form>
  );
}