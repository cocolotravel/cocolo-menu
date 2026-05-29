import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

const activities = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/activities' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['hiking', 'cultural', 'food', 'photography', 'wellness', 'adventure']),
    region: z.enum(['tokyo', 'kyoto', 'osaka', 'hakone', 'koyasan', 'rural', 'multiple']),
    duration: z.enum(['half-day', 'full-day', 'multi-day']),
    difficulty: z.enum(['easy', 'moderate', 'challenging']),
    seasons: z.array(z.enum(['spring', 'summer', 'autumn', 'winter'])),
    price: z.number(),
    image: z.string().optional(),
    summary: z.string(),
  }),
});

export const collections = { activities };
