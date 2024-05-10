import { api } from '$lib/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const related = await api.posts.browse({ limit: 5, include: 'tags,authors'});
	const post = await api.posts.read({ slug: params.slug, include: 'tags,authors' });
	
	return {
		post,
		related
	};
};
