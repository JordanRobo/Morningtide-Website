import { api, admin } from '$lib/db';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async () => {
	const privacyPolicy = await api.pages.read({ slug: 'privacy-policy' });
	const members = await admin.members.browse();
	return {
		privacyPolicy,
		members
	};
};

export const actions: Actions = {
	test: async ({ request }) => {
		const formData = await request.formData();
		const email = formData.get('email'); 
		const name = formData.get('name');
		const position = formData.get('position');
		const positionSlug = position?.toString().toLowerCase().replace(/\s+/g, '-');
		const school = formData.get('school');
		const message = formData.get('message');

		const response = await admin.members.add({ 
			email: email,
			name: name, 
			note: 'School: ' + school + '\nMessage:' + message,
			labels: [
				{ name: 'Enquiry', slug: 'enquiry' },
				{ name: position, slug: positionSlug }
			],
		});
		if (response.ok) {
            return { success: true };
        } else {
            return { success: false, error: 'Error adding user' };
        } 
	},
};
