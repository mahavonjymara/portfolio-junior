import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projetsCollection = defineCollection({
  // Le loader indique à Astro où chercher les fichiers
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projets' }),
  
  // Le schéma Zod valide strictement les métadonnées de chaque fichier
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    stack: z.array(z.string()),
    demoUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
  }),
});

export const collections = {
  projets: projetsCollection,
};