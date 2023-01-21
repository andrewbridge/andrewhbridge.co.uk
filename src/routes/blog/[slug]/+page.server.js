import { BLOG_POST_FEED } from '$env/static/private';
import { JSDOM } from 'jsdom';
import Prism from 'prismjs';
import loadLanguages from 'prismjs/components/index';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
  const { slug } = params;
  const post = await fetch(`${BLOG_POST_FEED}?slug=${slug}`).then(r => r.json()).then(([post]) => post)
  const { content: { rendered: content }} = post;
  if (content.indexOf('wp-block-code') > -1) {
    const dom = new JSDOM(content);
    dom.window.document.querySelectorAll('.wp-block-code').forEach(codeBlock => {
      const matches = codeBlock.className.match(/(^| )code-lang-([^ $]+)/);
      if (matches) {
        const language = matches[2];
        loadLanguages([language]);
        const codeElement = codeBlock.querySelector('code');
        if (codeElement) { 
          const code = codeElement.textContent || '';
          codeElement.innerHTML = Prism.highlight(code, Prism.languages[language], language);
        }
      }
    });
    post.content.rendered = dom.window.document.body.innerHTML;
  }
  return {
    post,
  };
}