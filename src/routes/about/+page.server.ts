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
	subscribe: async ({ request }) => {
		try {
			const data = await request.formData();
			const name = data.get('name');
			const email = data.get('email');

			const response = await pb.collection('subscription_form').create(data);

			const getResponseData = {
				name,
				campaign: { campaignId: 'rqKBE'},
				email,
			};

			const getResponseOptions = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'X-Auth-Token': `api-key ${import.meta.env.VITE_GETRESPONSE_KEY}`,
				},
				body: JSON.stringify(getResponseData),
			};

			const getResponse = await fetch('https://api.getresponse.com/v3/contacts', getResponseOptions);

			if (!getResponse.ok) {
				return console.log('Error:', getResponse.statusText);
			}

			return { response, success: true };
		} catch (err) {
			return fail(404, { success: false });
		}
	},
};