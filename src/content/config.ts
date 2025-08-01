import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).optional(),
  }),
});

const photos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    coverImage: z.string().optional(),
    location: z.string().optional(),
    camera: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
    photos: z.array(z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
      width: z.number().optional(),
      height: z.number().optional(),
    })),
  }),
});

export const collections = { posts, photos };