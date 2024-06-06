import { api } from '$lib/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
  const selectedTag = url.searchParams.get('tag') || null;

  let filter = {};
  
  if (selectedTag) {
    filter = { filter: 'tag:' + selectedTag };
  }

  const posts = await api.posts.browse({ include: 'tags', ...filter });

  return {
    posts,
    selectedTag
  };
};