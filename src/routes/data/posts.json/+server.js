import { AUDIOXIDE_API, AUDIOXIDE_BASE, BLOG_POST_FEED } from '$env/static/private';
import { JSDOM } from 'jsdom';

export const prerender = true;

/** @type {import('./$types').RequestHandler} */
export async function GET({ url, locals }) {
    const [blogPosts, audioxideReviews, audioxideArticles] = await Promise.all([
        fetch(BLOG_POST_FEED).then(r => r.json()),
        fetch(AUDIOXIDE_API + '/reviews.json').then(r => r.json()),
        fetch(AUDIOXIDE_API + '/articles.json').then(r => r.json()),
    ]);
    
    const normalisedBlogPosts = blogPosts.filter(({ categories }) => !categories.includes(3136)).map(({ slug, date_gmt, title: { rendered: title }, excerpt: { rendered: excerpt } }) => {
        const excerptDOM = new JSDOM(excerpt);
        excerptDOM.window.document.querySelector('.more-link')?.remove();
        return {
            created: date_gmt,
            url: `/blog/${slug}`,
            title,
            excerpt: excerptDOM.window.document.body.textContent,
            source: 'local',
        };
    });
    const normalisedAudioxidePosts = audioxideReviews.concat(audioxideArticles).filter(({ metadata: { author: { authors }}}) => authors.find(author => author.name === 'Andrew Bridge')).map(({ metadata: { created, type, slug, title, blurb: excerpt }}) => ({
        created,
        url: `${AUDIOXIDE_BASE}/${type}/${slug}`,
        title: type === 'reviews' ? 'Review: ' + title : title,
        excerpt,
        source: 'Audioxide'
    }));
    const posts = normalisedBlogPosts.concat(normalisedAudioxidePosts).sort((a, b) => {
        const dateA = new Date(a.created);
        const dateB = new Date(b.created);
        if (dateA === dateB) return 0;
        return (((dateA < dateB) * 2) - 1);
    });
    return new Response(JSON.stringify(posts), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        }
    });
}