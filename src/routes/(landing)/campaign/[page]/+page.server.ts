import { api, pb } from '$lib/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	try {
		const [page] = await Promise.all([api.pages.read({ slug: params.page })]);

		return { page };
	} catch (error) {
		console.error('Error loading insights data:', error);
		return { page: [] };
	}
};

export const actions = {
	default: async ({ request }) => {
		// const data = await request.formData();

		try {
			// const record = await pb.collection('landing_forms').create(data);
		} catch (err) {
			// Handle error
		}
	}
};
