import { BLOG_POST_FEED } from '$env/static/private';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
  const { slug } = params;
    return {
      post: await fetch(`${BLOG_POST_FEED}?slug=${slug}`).then(r => r.json()).then(([post]) => post),
    };
  }