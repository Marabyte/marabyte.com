import type { APIRoute } from 'astro';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { render } from 'astro:content';
import { getPosts, postUrl } from '../lib/posts';
import { metadata } from '../lib/site';
import { absolutizeUrls, escapeXml, feedDate } from '../lib/xml';

const feed = {
  title: "Welcome to Hugo Nogueira's online experience!",
  subtitle: 'I am writing about my experiences as a naval navel-gazer.',
  url: `${metadata.url}/feed.xml`,
  home: `${metadata.url}/`,
  author: 'Hugo Nogueira',
};

export const GET: APIRoute = async () => {
  const posts = await getPosts();
  const container = await AstroContainer.create();

  const entries = await Promise.all(
    posts.map(async (post) => {
      const url = metadata.url + postUrl(post);
      const { Content } = await render(post);
      const html = absolutizeUrls(await container.renderToString(Content), url);
      return `
  <entry>
    <title>${escapeXml(post.data.title)}</title>
    <link href="${url}"/>
    <updated>${feedDate(post.data.date)}</updated>
    <id>${url}</id>
    <content type="html">${escapeXml(html)}</content>
  </entry>`;
    }),
  );

  const updated = posts.at(-1)?.data.date ?? new Date();
  const body = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${escapeXml(feed.title)}</title>
  <subtitle>${escapeXml(feed.subtitle)}</subtitle>
  <link href="${feed.url}" rel="self"/>
  <link href="${feed.home}"/>
  <updated>${feedDate(updated)}</updated>
  <id>${feed.home}</id>
  <author>
    <name>${escapeXml(feed.author)}</name>
  </author>${entries.join('')}
</feed>
`;

  return new Response(body, { headers: { 'Content-Type': 'application/atom+xml; charset=utf-8' } });
};
