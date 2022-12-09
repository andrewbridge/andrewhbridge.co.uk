/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    return {
      posts: await fetch('/data/posts.json').then(r => r.json()).then((posts) => posts.slice(0, 25)),
    };
  }