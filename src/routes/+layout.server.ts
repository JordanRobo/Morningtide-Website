import { api } from '$lib/db';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ url }) => {
	const tags = await api.tags.browse();
	const posts = await api.posts.browse({ limit: 3 });
	const privacyPolicy = await api.pages.read({ slug: 'privacy-policy' });
	const { pathname } = url;
	return {
		tags,
		posts,
		pathname,
		privacyPolicy
	};
};