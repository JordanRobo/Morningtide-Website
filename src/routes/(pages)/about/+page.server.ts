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
	submit: async () => {
		// const formData = await request.formData();
		// const name = formData.get('name');
		// const school = formData.get('school');
		// const position = formData.get('position');
		// const email = formData.get('email'); 
		// const message = formData.get('message');

		const data = {
			"Name": "test",
			"School": "test",
			"Position": "test",
			"Email": "test@example.com",
			"Message": "test"
		};

		const record = await pb.collection('About_Form').create(data);

		if (record.ok) {
            return { success: true };
        } else {
            return { success: false, error: 'Error adding user' };
        } 
	},
};

