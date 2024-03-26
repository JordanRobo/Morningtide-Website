import * as db from '$lib/server/pages.json';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    return {
        post: db.privacyPolicy,
    };
};