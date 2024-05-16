import { api, pb } from '$lib/db';
import type { PageServerLoad, Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	const privacyPolicy = await api.pages.read({ slug: 'privacy-policy' });
	return {
		privacyPolicy
	};
};

export const actions: Actions = {
	submit: async ({ request }) => {
		try {
			const data = await request.formData();
			const response = await pb.collection('enquiry_form').create(data);
			return { response, success: true };
		} catch (err) {
			return fail(404, { success: false });
		}
	},
};