import { api } from '$lib/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const posts = await api.posts.browse({include: 'tags'});
	return {
		posts
	};
};
