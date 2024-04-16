import { api } from '$lib/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const privacyPolicy = await api.pages.read({ slug: 'privacy-policy' });
    return {
        privacyPolicy
    };
}