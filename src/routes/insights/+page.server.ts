export async function load({ fetch }) {
   const post = await fetch('http://localhost:1337/api/posts').then(res => res.json());
   return { posts: post.data};
 }