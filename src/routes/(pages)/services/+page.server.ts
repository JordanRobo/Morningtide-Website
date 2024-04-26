import { api } from '$lib/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const whoops = await api.pages.read({ slug: 'whoops' });
	return {
		whoops
	};
};
