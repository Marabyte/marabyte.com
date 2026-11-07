import { type CollectionEntry, getCollection } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

/** All posts, oldest first (the order 11ty's `collections.post` used). */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts');
  return posts.sort((a, b) => a.data.date.valueOf() - b.data.date.valueOf());
}

export function postUrl(post: Post): string {
  return `/post/${post.id}/`;
}
