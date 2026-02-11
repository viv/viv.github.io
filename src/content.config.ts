import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const timeline = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/timeline' }),
  schema: z.object({
    title: z.string(),
    year: z.string(),
    headline: z.string(),
    tier: z.number(),
    order: z.number(),
    techFootnote: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = { timeline };
