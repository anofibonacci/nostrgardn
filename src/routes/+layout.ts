// Layout-level settings
// Note: SSR and prerender are configured per-page (see +page.ts)

export async function load({ url }) {
	return {
		url: url.pathname
	};
}
