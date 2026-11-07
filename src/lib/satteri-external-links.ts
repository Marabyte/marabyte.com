import type { SatteriProcessorOptions } from '@astrojs/markdown-satteri';

type HastPlugin = NonNullable<SatteriProcessorOptions['hastPlugins']>[number];

/**
 * Opens links to other sites in a new tab, matching what the 11ty
 * `eleventy-plugin-external-links` did: `target="_blank" rel="noreferrer"`.
 */
export function externalLinks({ siteHost }: { siteHost: string }): HastPlugin {
	return {
		name: 'external-links',
		element: {
			filter: ['a'],
			visit(node, ctx) {
				const href = node.properties?.href;
				if (typeof href !== 'string' || !/^https?:\/\//i.test(href)) return;
				if (new URL(href).host === siteHost) return;
				ctx.setProperty(node, 'target', '_blank');
				ctx.setProperty(node, 'rel', ['noreferrer']);
			},
		},
	};
}
