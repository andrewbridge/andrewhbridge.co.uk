/** @type {import('./$types').RequestHandler} */
export async function GET({ url, locals, fetch }) {
    const posts = await fetch('./posts.json').then(r => r.json());
    const feed = await fetch('./feed.json').then(r => r.json());
    return new Response(JSON.stringify({
        posts: posts.slice(0, 7),
        feed: feed.slice(0, 3),
    }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        }
    });
}