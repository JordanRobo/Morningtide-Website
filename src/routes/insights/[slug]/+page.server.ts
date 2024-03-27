/* eslint-disable @typescript-eslint/no-explicit-any */
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch, params }) => {
  const res = await fetch("http://localhost:1337/api/posts").then((res) => res.json());
  const post = res.data.find((item: any) => item.attributes.url === params.slug);
  return { post: post ? post.attributes : null };
};