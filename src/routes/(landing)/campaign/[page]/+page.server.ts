import { api } from '$lib/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
    try {
        const [ page ] = await Promise.all([
            api.pages.read({ slug: params.page }),
        ]);

        return { page };
    } catch (error) {
        console.error('Error loading insights data:', error);
        return { page: [] };
    }
};