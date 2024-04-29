import { api } from '$lib/db';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ params }) => {
	const related = await api.posts.browse({ limit: 5, include: 'tags,authors'});
	const post = await api.posts.read({ slug: params.slug, include: 'tags,authors' });
	
	return {
		post,
		related
	};
};
