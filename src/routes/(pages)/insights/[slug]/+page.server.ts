import { api } from '$lib/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const post = await api.posts.read({ slug: params.slug, include: 'tags,authors' });
	return {
		post
	};
};
