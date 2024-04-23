import { admin } from '$lib/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const tagFilter = 'change-managment'

	const posts = await admin.posts.browse({include: 'tags'});
	const tags = await admin.tags.browse();
	const filter = await admin.posts.browse({filter: 'tag:' + tagFilter});
	return {
		posts,
		tags,
		filter
	};
};

