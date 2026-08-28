// src/components/StatutActuel.tsx
import React, { useState, useEffect } from 'react';

export default function StatutActuel() {
  const [isOnline, setIsOnline] = useState(true);

  // Petite simulation : vérifie si l'utilisateur est actif (juste pour la démo d'interactivité)
  useEffect(() => {
    const timer = setTimeout(() => setIsOnline(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200 rounded-lg w-fit">
      <span className="relative flex h-3 w-3">
        {isOnline && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        )}
        <span className={`relative inline-flex rounded-full h-3 w-3 ${isOnline ? 'bg-green-500' : 'bg-gray-400'}`}></span>
      </span>
      <span className="text-sm font-medium text-slate-700">
        {isOnline ? 'Ouvert aux opportunités & missions' : 'Actuellement en projet'}
      </span>
    </div>
  );
}