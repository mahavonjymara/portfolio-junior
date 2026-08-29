// src/components/TimelineStack.tsx
import React from 'react';

interface Technology {
  name: string;
  color: string;
}

interface Category {
  title: string;
  technologies: Technology[];
}

const categories: Category[] = [
  {
    title: 'Backend',
    technologies: [
      { name: 'Python', color: '#3776AB' },
      { name: 'Java', color: '#ED8B00' },
      { name: 'C#', color: '#239120' },
      { name: 'PHP', color: '#777BB4' },
      { name: 'JavaScript', color: '#F7DF1E' },
    ]
  },
  {
    title: 'Frontend',
    technologies: [
      { name: 'React', color: '#61DAFB' },
      { name: 'Vite', color: '#646CFF' },
      { name: 'Next.js', color: '#000000' },
      { name: 'Astro', color: '#FF5D01' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'TailwindCSS', color: '#06B6D4' },
      { name: 'Bootstrap', color: '#7952B3' },
      { name: 'HTML5', color: '#E34F26' },
      { name: 'CSS3', color: '#1572B6' },
    ]
  },
  {
    title: 'Frameworks',
    technologies: [
      { name: 'Laravel', color: '#FF2D20' },
      { name: 'Django', color: '#092E20' },
      { name: 'Spring Boot', color: '#6DB33F' },
      { name: 'Servlet', color: '#ED8B00' },
      { name: 'Express', color: '#000000' },
      { name: '.NET', color: '#512BD4' },
    ]
  },
  {
    title: 'Bases de données',
    technologies: [
      { name: 'MySQL', color: '#4479A1' },
      { name: 'PostgreSQL', color: '#4169E1' },
      { name: 'MongoDB', color: '#47A248' },
      { name: 'Prisma', color: '#2D3748' },
      { name: 'Hibernate', color: '#59666C' },
    ]
  },
  {
    title: 'Outils & DevOps',
    technologies: [
      { name: 'Git', color: '#F05032' },
      { name: 'GitHub', color: '#181717' },
      { name: 'GitHub Actions', color: '#2088FF' },
      { name: 'Docker', color: '#2496ED' },
      { name: 'CI/CD', color: '#FF6F00' },
    ]
  }
];

export default function TimelineStack() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {categories.map((category, index) => (
        <div 
          key={category.title} 
          // Ajout des classes dark: pour le fond, la bordure et les ombres
          className="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] dark:shadow-none hover:shadow-[0_10px_40px_-5px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_10px_40px_-5px_rgba(0,0,0,0.5)] transition-all duration-500 overflow-hidden animate-fade-in-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          
          {/* En-tête avec fond TEAL uniforme et texte blanc (inchangé, déjà parfait pour les 2 modes) */}
          <div className="relative flex items-center justify-center px-6 py-5 bg-[#00796B]">
            {/* Effet de brillance au survol */}
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            {/* Texte en blanc */}
            <h3 className="relative z-10 text-xl font-bold tracking-tight text-white">
              {category.title}
            </h3>
          </div>

          {/* Corps de la carte */}
          <div className="p-6 relative">
            {/* Ligne verticale subtile (adaptée pour le mode sombre) */}
            <div className="absolute left-[35px] top-8 bottom-8 w-px bg-gradient-to-b from-slate-200 dark:from-slate-700 via-slate-100 dark:via-slate-800 to-transparent"></div>

            <div className="space-y-6 pl-2">
              {category.technologies.map((tech) => (
                <div key={tech.name} className="relative flex items-center gap-5 group/item cursor-default">
                  <div className="relative z-10">
                    {/* Point coloré officiel (bordure blanche en mode clair, sombre en mode foncé pour le contraste) */}
                    <div 
                      className="w-3.5 h-3.5 rounded-full border-[3px] border-white dark:border-slate-900 shadow-sm transition-all duration-300 group-hover/item:scale-150 group-hover/item:shadow-md"
                      style={{ backgroundColor: tech.color }}
                    ></div>
                  </div>
                  
                  {/* Nom avec effet de décalage (couleur adaptée au mode sombre) */}
                  <span className="font-semibold text-slate-600 dark:text-slate-300 group-hover/item:text-slate-900 dark:group-hover/item:text-white group-hover/item:translate-x-1.5 transition-all duration-300">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      ))}
    </div>
  );
}