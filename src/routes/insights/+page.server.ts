import db from '$lib/server/posts.json';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
   return {
    posts: db
   };
};