import type { APIRoute } from 'astro';
import { getPosts, postUrl } from '../lib/posts';
import { metadata } from '../lib/site';

interface SitemapEntry {
	path: string;
	lastmod: Date;
	priority: number;
	changefreq: 'weekly' | 'monthly';
}

export const GET: APIRoute = async () => {
	const builtAt = new Date();
	const posts = await getPosts();

	const entries: SitemapEntry[] = [
		...posts.map((post) => ({
			path: postUrl(post),
			lastmod: post.data.date,
			priority: 0.5,
			changefreq: 'monthly' as const,
		})),
		{ path: '/about/', lastmod: builtAt, priority: 0.2, changefreq: 'monthly' },
		{ path: '/', lastmod: builtAt, priority: 1, changefreq: 'weekly' },
		{ path: '/posts/', lastmod: builtAt, priority: 0.8, changefreq: 'weekly' },
	];

	const urls = entries
		.map(
			(e) => `
  <url>
    <loc>${metadata.url}${e.path}</loc>
    <lastmod>${e.lastmod.toISOString()}</lastmod>
    <priority>${e.priority}</priority>
    <changefreq>${e.changefreq}</changefreq>
  </url>`,
		)
		.join('');

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>
`;

	return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
