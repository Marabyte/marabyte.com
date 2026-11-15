import type { AstroUserConfig } from 'astro';

type ShikiTransformer = NonNullable<
	NonNullable<NonNullable<AstroUserConfig['markdown']>['shikiConfig']>['transformers']
>[number];

const LANGUAGE_NAMES: Record<string, string> = {
	css: 'CSS',
	javascript: 'JavaScript',
	js: 'JavaScript',
	json: 'JSON',
	ruby: 'Ruby',
};

/**
 * Shiki makes code blocks focusable (`tabindex="0"`) so keyboard users can scroll them.
 * A focus stop needs a name, so each block becomes a named region, e.g. "CSS code".
 */
export function codeRegions(): ShikiTransformer {
	return {
		name: 'code-regions',
		pre(node) {
			const { lang } = this.options;
			node.properties.role = 'region';
			node.properties['aria-label'] = `${LANGUAGE_NAMES[lang] ?? lang} code`;
		},
	};
}
