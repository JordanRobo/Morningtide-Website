import { api, pb } from '$lib/db';
import type { PageServerLoad, Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	const posts = await api.posts.browse({ limit: 3 });
	return {
		posts,
	};
};

export const actions: Actions = {
	subscribe: async ({ request }) => {
		try {
			const data = await request.formData();
			const response = await pb.collection('subscription_form').create(data);
			return { response, success: true };
		} catch (err) {
			return fail(404, { success: false });
		}
	},
};