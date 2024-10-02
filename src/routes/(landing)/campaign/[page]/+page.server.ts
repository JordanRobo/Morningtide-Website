import { pb } from '$lib/db';
import { fail } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ cookies, params }) => {
	try {
		const page = await pb.collection('landing_pages').getFirstListItem(`slug="${params.page}"`);
		const formCompleted = cookies.get('formCompleted') === 'true';

		return { page, formCompleted };
	} catch (error) {
		console.error('Error loading data:', error);
		return { page: null, formCompleted: false };
	}
};

export const actions = {
	check_email: async ({ cookies, request }) => {
		try {
			const formData = await request.formData();
			const email = formData.get('email') as string;

			const result = await pb.collection('campaign_form').getFullList(1, {
				filter: `email="${email}"`
			});

			if (result.length > 0) {
				cookies.set('formCompleted', 'true', { path: '/' });
				return { success: true, exists: true };
			} else {
				return { success: true, exists: false };
			}
		} catch (err) {
			console.error('Error checking email:', err);
			return { success: false, error: 'Failed to check email' };
		}
	},

	submit: async ({ cookies, request }) => {
		try {
			const data = await request.formData();

			const form_input = {
				email: data.get('email'),
				first_name: data.get('first_name'),
				last_name: data.get('last_name'),
				position: data.get('position'),
				school: data.get('school'),
				campaign_id: data.get('campaign_id')
			};

			await pb.collection('campaign_form').create(form_input);

			cookies.set('formCompleted', 'true', { path: '/' });

			return {
				success: true,
				form_input,
				formCompleted: true
			};
		} catch (err) {
			console.error('Error submitting form:', err);
			return fail(400, { success: false, message: 'Failed to submit form' });
		}
	}
} satisfies Actions;
