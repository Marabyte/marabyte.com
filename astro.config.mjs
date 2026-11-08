// @ts-check

import { satteri } from '@astrojs/markdown-satteri';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { externalLinks } from './src/lib/satteri-external-links.ts';

export const SITE = 'https://www.marabyte.com';

export default defineConfig({
	site: SITE,
	trailingSlash: 'always',
	// Keep whitespace between inline elements (Astro 7 defaults to 'jsx').
	compressHTML: true,
	build: {
		format: 'directory',
		// The 11ty site inlined all CSS into <style> tags.
		inlineStylesheets: 'always',
	},
	image: {
		// Lets getImage() rasterise the featured SVGs into og:image PNGs. Safe: every SVG here is our own.
		dangerouslyProcessSVG: true,
	},
	markdown: {
		// Fences without a language stay plain <pre><code> (no theme styling), as before.
		syntaxHighlight: { type: 'shiki', excludeLangs: ['plaintext'] },
		processor: satteri({
			hastPlugins: [externalLinks({ siteHost: new URL(SITE).host })],
			// markdown-it ran with typographer off: keep straight quotes/dashes as written.
			features: { smartPunctuation: false },
		}),
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
