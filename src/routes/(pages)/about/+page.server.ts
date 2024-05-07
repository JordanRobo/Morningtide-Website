import { api } from '$lib/db';
import type { PageServerLoad, Actions } from './$types';
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://jordanrobo.xyz/db');

export const load: PageServerLoad = async () => {
	const privacyPolicy = await api.pages.read({ slug: 'privacy-policy' });
	return {
		privacyPolicy
	};
};

export const actions: Actions = {
	submit: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name');
		const school = formData.get('school');
		const position = formData.get('position');
		const email = formData.get('email'); 
		const message = formData.get('message');

		const data = {
			"name": name,
			"school": school,
			"position": position,
			"email": email,
			"message": message
		};

		const response = await pb.collection('about_form').create(data, {
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (response.ok) {
			return { success: true, successMessage: 'Form submitted successfully!' };
		} else {
			return { success: false, errorMessage: 'Error adding user' };
		}
	},
};

