const API_URL = "http://travel.local/wp-json/wp/v2";

export async function getPosts() {
  const res = await fetch(`${API_URL}/posts?_embed`);

  return res.json();
}

export async function getPostBySlug(slug) {
  const res = await fetch(
    `${API_URL}/posts?slug=${slug}&_embed`
  );

  return res.json();
}