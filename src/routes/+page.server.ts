import { api, pb } from '$lib/db';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async () => {
	const posts = await api.posts.browse({ limit: 3 });
	return {
		posts,
	};
};

export const actions: Actions = {
	subscribe: async ({ request }) => {
		const data = await request.formData();

		const response = await pb.collection('mailing_list').create(data);

		if (response.ok) {
			return { success: true, successMessage: 'Form submitted successfully!' };
		} else {
			return { success: false, errorMessage: 'Error adding user' };
		}
	},
};