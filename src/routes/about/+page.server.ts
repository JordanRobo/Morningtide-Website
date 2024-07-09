import { api, pb } from '$lib/db';
import type { PageServerLoad, Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

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
	subscribe: async ({ request }) => {
		try {
			const data = await request.formData();
			const name = data.get('name') as string;
			const email = data.get('email') as string;

			if (!name || !email) {
				return fail(400, { success: false, message: 'Name and email are required' });
			}

			const [pbResponse, grResponse] = await Promise.all([
				pb.collection('subscription_form').create(data),
				subscribeToGetResponse(name, email)
			]);

			return { success: true, pbResponse, grResponse };
		} catch (err) {
			console.error('Subscription error:', err);
			return fail(500, { success: false, message: 'An error occurred during subscription' });
		}
	},
};

async function subscribeToGetResponse(name: string, email: string) {
	const getResponseData = {
		name,
		email,
		campaign: { campaignId: 'rqKBE' }
	};

	const response = await fetch('https://api.getresponse.com/v3/contacts', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'X-Auth-Token': `api-key ${env.GETRESPONSE_KEY}`
		},
		body: JSON.stringify(getResponseData)
	});

	if (!response.ok) {
		throw new Error(`GetResponse API error: ${response.statusText}`);
	}

	return response.json();
}