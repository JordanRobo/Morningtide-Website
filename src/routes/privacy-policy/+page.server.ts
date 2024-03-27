export async function load({ fetch }) {
    const data = await fetch('http://localhost:1337/api/privacy-policy').then(res => res.json());
    return { page: data };
  }