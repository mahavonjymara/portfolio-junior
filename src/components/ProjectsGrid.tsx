// src/components/ProjectsGrid.tsx
import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Dashboard SaaS',
    description: 'Application de gestion avec analytics en temps réel, authentification JWT et paiements Stripe.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    category: 'Full Stack',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    description: 'Plateforme e-commerce complète avec panier, checkout et gestion des commandes.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    category: 'Frontend',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'API RESTful',
    description: 'API backend scalable avec documentation Swagger, tests automatisés et déploiement Docker.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    category: 'Backend',
    tags: ['Node.js', 'Express', 'MongoDB', 'Docker'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 4,
    title: 'Portfolio Astro',
    description: 'Site portfolio statique ultra-rapide avec mode sombre et formulaire de contact.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    category: 'Frontend',
    tags: ['Astro', 'React', 'TailwindCSS', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 5,
    title: 'Task Manager',
    description: 'Application de gestion de tâches collaborative avec WebSocket et notifications temps réel.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
    category: 'Full Stack',
    tags: ['React', 'Socket.io', 'Node.js', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 6,
    title: 'Blog CMS',
    description: 'Système de gestion de contenu avec éditeur Markdown, SEO optimisé et commentaires.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
    category: 'Full Stack',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'MDX'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

const categories = ['Tous', 'Frontend', 'Backend', 'Full Stack'];

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState('Tous');

  const filteredProjects = activeFilter === 'Tous' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="w-full">
      {/* Filtres */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
              activeFilter === category
                ? 'bg-[#00796B] text-white shadow-lg scale-105'
                : 'bg-white/80 text-[#004d40] hover:bg-white hover:shadow-md'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grille de projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div 
            key={project.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
          >
            {/* Image du projet */}
            <div className="relative overflow-hidden h-48">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay au survol */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <div className="flex gap-3">
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white text-[#00796B] rounded-lg font-semibold text-sm hover:bg-emerald-50 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#00796B] text-white rounded-lg font-semibold text-sm hover:bg-[#00695C] transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Contenu */}
            <div className="p-6">
              {/* Catégorie */}
              <span className="inline-block px-3 py-1 bg-emerald-50 text-[#00796B] text-xs font-semibold rounded-full mb-3">
                {project.category}
              </span>

              {/* Titre */}
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags technologiques */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Message si aucun projet */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-500 text-lg">Aucun projet dans cette catégorie.</p>
        </div>
      )}
    </div>
  );
}