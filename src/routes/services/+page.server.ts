import { api, pb } from '$lib/db';
import type { PageServerLoad, Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	try {
		const privacyPolicy = await api.pages.read({ slug: 'privacy-policy' });
		return { privacyPolicy };
	} catch (error) {
		console.error('Error loading privacy policy:', error);
		return { privacyPolicy: null };
	}
};

export const actions: Actions = {
	submit: async ({ request }) => {
		try {
			const formData = await request.formData();
			const response = await pb.collection('enquiry_form').create(formData);
			return { response, success: true };
		} catch (error) {
			console.error('Error submitting form:', error);
			return fail(400, { success: false, message: 'Failed to submit form' });
		}
	}
};