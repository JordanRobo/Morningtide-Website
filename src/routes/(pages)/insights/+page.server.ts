// src/routes/insights/+page.server.ts
import { api } from '$lib/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
  const selectedTag = url.searchParams.get('tag') || null;
  const pageNo = url.searchParams.get('page') || 1;

  let filter = {};
  
  if (selectedTag) {
    filter = { filter: 'tag:' + selectedTag };
  }

  const posts = await api.posts.browse({ include: 'tags', ...filter, limit: 9, page: pageNo });
  const { meta } = await api.posts.browse({ include: 'tags', ...filter, limit: 9, page: pageNo });

  return {
    posts,
    meta,
    selectedTag
  };
};