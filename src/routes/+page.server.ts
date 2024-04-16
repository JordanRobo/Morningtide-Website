import { api } from '$lib/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    return {
        posts: await api.posts.browse({ limit: 3 })
    };
}