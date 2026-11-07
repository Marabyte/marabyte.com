import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { imageMetadata } from 'astro/assets/utils';

/**
 * Width and height of an image in public/, e.g. for og:image:width/height.
 * Throws if the file is missing, so a bad path fails the build.
 */
export async function publicImageSize(path: string): Promise<{ width: number; height: number }> {
	const { width, height } = await imageMetadata(await readFile(join(process.cwd(), 'public', path)), path);
	return { width, height };
}
