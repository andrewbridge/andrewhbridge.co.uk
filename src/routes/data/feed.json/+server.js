import { BLOG_POST_FEED } from '$env/static/private';
import { decode } from 'html-entities';

export const prerender = true;

/** @type {import('./$types').RequestHandler} */
export async function GET({ url, locals }) {
    const blogPosts = await fetch(BLOG_POST_FEED).then(r => r.json());
    
    const normalisedBlogPosts = blogPosts.filter(({ categories }) => categories.includes(3136)).map(({ slug, date_gmt, title: { rendered: title }, content: { rendered: content } }) => {
        return {
            created: date_gmt,
            content: decode(content),
        };
    });
    return new Response(JSON.stringify(normalisedBlogPosts), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        }
    });
}