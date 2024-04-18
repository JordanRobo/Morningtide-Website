import { api, admin } from '$lib/db';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async () => {
	const privacyPolicy = await api.pages.read({ slug: 'privacy-policy' });
	return {
		privacyPolicy
	};
};

export const actions: Actions = {
	test: async () => {},
	enquiry: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name');

		const response = await admin.members.add({
			name
		});

		if (response.ok) {
			return {
				status: 201,
				body: { message: 'Enquiry submitted successfully' }
			};
		} else {
			return {
				status: 500,
				body: { message: 'Enquiry failed' }
			};
		}
	}
};
