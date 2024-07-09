import { api } from '$lib/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  try {
    const [posts, tags] = await Promise.all([
      api.posts.browse({ include: 'tags' }),
      api.tags.browse()
    ]);

    return {
      posts,
      tags
    };
  } catch (error) {
    console.error('Error loading insights data:', error);
    return {
      posts: [],
      tags: []
    };
  }
};