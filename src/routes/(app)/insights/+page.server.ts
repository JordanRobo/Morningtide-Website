import { api } from '$lib/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
	try {
		const posts = await api.posts.browse({ limit: 'all', include: 'tags' });
		const tags = (await parent()).tags;
		return {
			posts,
			tags
			// lazy: {
			// 	posts: await api.posts.browse({ limit: 'all', include: 'tags' })
			// }
		};
	} catch (error) {
		console.error('Error loading insights data:', error);
		return {
			posts: []
			// lazy: {
			// 	posts: Promise.resolve([])
			// }
		};
	}
};
