import { api } from '$lib/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {

    const posts = await api.posts.browse();
    const { meta } = await api.posts.browse();

    return {
        posts,
        meta
    };
};