import { pb } from '$lib/db';
import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

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