// src/components/TimelineStack.tsx
import React from 'react';

interface Technology {
  name: string;
  color: string;
  logo?: string; // URL du logo (optionnel)
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
      { name: 'HTML5', color: '#E34F26' },
      { name: 'CSS3', color: '#1572B6' },
      { name: 'JavaScript', color: '#F7DF1E' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'React', color: '#61DAFB' },
      { name: 'Next.js', color: '#000000' },
      { name: 'Astro', color: '#FF5D01' },
      { name: 'Vite', color: '#646CFF' },
      { name: 'TailwindCSS', color: '#06B6D4' },
      { name: 'Bootstrap', color: '#7952B3' },
    ]
  },
  {
    title: 'Frameworks',
    technologies: [
      { name: 'Laravel', color: '#FF2D20' },
      { name: 'Django', color: '#092E20' },
      { name: 'Spring Boot', color: '#6DB33F' },
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
      { name: 'Docker', color: '#2496ED' },
      { name: 'CI/CD', color: '#FF6F00' },
    ]
  }
];

// Fonction pour obtenir l'URL du logo (utiliser des logos officiels ou des placeholders)
const getLogoUrl = (techName: string) => {
  const logos: Record<string, string> = {
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'HTML5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    'Astro': 'https://raw.githubusercontent.com/withastro/astro/main/assets/brand.svg',
    'Vite': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
    'TailwindCSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    'Laravel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
    'Django': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
    'Spring Boot': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
    'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    '.NET': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
    'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'Prisma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg',
    'Hibernate': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg',
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  };
  
  return logos[techName] || null;
};

export default function TimelineStack() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {categories.map((category, categoryIndex) => (
        <div 
          key={category.title} 
          className="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] dark:shadow-none hover:shadow-[0_10px_40px_-5px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_10px_40px_-5px_rgba(0,0,0,0.5)] transition-all duration-500 overflow-hidden animate-fade-in-up"
          style={{ animationDelay: `${categoryIndex * 100}ms` }}
        >
          
          {/* En-tête avec fond TEAL */}
          <div className="relative flex items-center justify-center px-6 py-5 bg-[#00796B]">
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <h3 className="relative z-10 text-xl font-bold tracking-tight text-white">
              {category.title}
            </h3>
          </div>

          {/* Corps de la carte avec liste numérotée */}
          <div className="p-6">
            <div className="space-y-3">
              {category.technologies.map((tech, index) => {
                const logoUrl = getLogoUrl(tech.name);
                
                return (
                  <div 
                    key={tech.name} 
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group/item"
                  >
                    {/* Numéro + Nom */}
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-slate-400 dark:text-slate-500 w-6">
                        {index + 1}.
                      </span>
                      <span className="font-semibold text-slate-700 dark:text-slate-200 group-hover/item:text-[#00796B] dark:group-hover/item:text-emerald-400 transition-colors">
                        {tech.name}
                      </span>
                    </div>

                    {/* Logo */}
                    {logoUrl ? (
                      <img 
                        src={logoUrl} 
                        alt={tech.name}
                        className="w-8 h-8 object-contain"
                        style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
                      />
                    ) : (
                      <div 
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                        style={{ backgroundColor: tech.color }}
                      >
                        {tech.name.charAt(0)}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      ))}
    </div>
  );
}