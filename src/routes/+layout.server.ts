import { api } from '$lib/db';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ url }) => {
    try {
        const [tags, posts, privacyPolicy] = await Promise.all([
            api.tags.browse(),
            api.posts.browse({ limit: 3 }),
            api.pages.read({ slug: 'privacy-policy' })
        ]);

        const { pathname } = url;
        return { tags, posts, pathname, privacyPolicy };
    } catch (error) {
        console.error('Error loading layout data:', error);
        return { tags: [], posts: [], pathname: url.pathname, privacyPolicy: null };
    }
};