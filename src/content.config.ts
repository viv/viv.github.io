import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const timeline = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/timeline' }),
  schema: z.object({
    title: z.string(),
    year: z.string(),
    headline: z.string(),
    order: z.number(),
    techFootnote: z.string(),
    image: z.string().optional(),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    description: z.string().optional(),
  }),
});

export const collections = { timeline, notes };
