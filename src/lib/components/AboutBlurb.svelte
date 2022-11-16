<script>
    export let isMain = false;

    const yearsActive = new Date().getFullYear() - 2006;
</script>

{#if isMain}
    <h1>About</h1>
{:else}
    <h2>About</h2>
{/if}


<p>Hi! I'm Andrew Bridge.</p>
<p>I'm a web developer and consultant, currently working in South East England.</p>
{#if isMain}
<p>The web has always been an exciting platform to work with. Ever-evolving, hugely open and abundantly available,
  the web is bursting with possibilities. But with it come some interesting pitfalls.
  Powerful, beautiful, data-driven web experiences need to be accessible to all, performant across the board,
  and maintainable for more than one version (I'm looking at you AngularJS!).</p>
<p>In the {yearsActive} years I've worked with the web, I've had the pleasure of working on some fantastically
  interesting projects, all the while striving to skirt around the pitfalls and produce flexible, long-lasting
  software and sites for the web.</p>
{/if}
<p>I currently work full-time, but you can <a href="/about/cv">take a look at my CV</a> if you'd like.</p>