// src/routes/insights/+page.server.ts
import { admin } from '$lib/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
  const selectedTag = url.searchParams.get('tag') || null;
  let filter = {};

  if (selectedTag) {
    filter = { filter: 'tag:' + selectedTag };
  }

  const posts = await admin.posts.browse({ include: 'tags', ...filter });
  const tags = await admin.tags.browse();

  return {
    posts,
    tags,
    selectedTag
  };
};