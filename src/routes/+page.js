/** @type {import('./$types').PageLoad} */
export function load({ fetch }) {
    return {
      latest: fetch('/data/latest.json').then(r => r.json()).then(),
    };
  }