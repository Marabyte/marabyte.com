import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
	// `slug` in frontmatter becomes the entry id, which keeps the old 11ty URLs.
	loader: glob({ pattern: '*.md', base: './src/content/posts' }),
	schema: ({ image }) =>
		z.object({
			slug: z.string(),
			title: z.string(),
			date: z.coerce.date(),
			featured_image: z.object({
				src: image(),
				alt: z.string().optional(),
				caption: z.string().optional(),
				// Pre-rendered PNG used for og:image / twitter:image. Relative path, checked at build time.
				social: image().optional(),
			}),
			summary: z.string(),
			tags: z.array(z.string()).optional(),
		}),
});

export const collections = { posts };
