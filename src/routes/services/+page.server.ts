import { api } from '$lib/db';
import type { PageServerLoad, Actions } from './$types';
import { error } from '@sveltejs/kit';
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
		const data = await request.formData();

		const response = await pb.collection('about_form').create(data);

		if (!response) {
			return error(401, { message: 'Invalid data' });
		} 
			return { success: true };
	},
};

