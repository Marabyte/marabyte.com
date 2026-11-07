export function escapeXml(value: string): string {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');
}

/** Atom/RSS-style timestamp without milliseconds, e.g. 2020-10-02T12:00:00+00:00. */
export function feedDate(date: Date): string {
	return date.toISOString().replace(/\.\d{3}Z$/, '+00:00');
}

/** Resolve relative href/src attributes against `base` (like 11ty's htmlToAbsoluteUrls). */
export function absolutizeUrls(html: string, base: string): string {
	return html.replace(/\b(href|src)="([^"]*)"/g, (match, attr: string, value: string) => {
		if (/^(?:[a-z][a-z0-9+.-]*:|#)/i.test(value)) return match;
		return `${attr}="${new URL(value, base).href}"`;
	});
}
