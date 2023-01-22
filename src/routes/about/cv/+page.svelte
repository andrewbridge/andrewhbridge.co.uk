<svelte:head>
  <title>Andrew Bridge | Curriculum Vitae</title>
  <link rel="stylesheet" href="/printable-cv.css" media="print" />
</svelte:head>

<style>
    header h1, section h1 {
        font-size: 28px;
        line-height: normal;
        letter-spacing: normal;
    }

    header h2, section h2 {
        font-size: 21px;
        line-height: normal;
        letter-spacing: normal;
    }

    header h2, section h2 {
        border-bottom: 1px solid black;
    }

    header p, section p, header p span, section p span, header li, section li, header li span, section li span {
        font-family: sans-serif;
        font-size: 14px;
        line-height: normal;
    }

    p {
        margin: 1em 0;
    }

    ul {
        padding-left: 40px;
        margin: 14px 0;
    }

    ul li {
        margin: 0.2em 0;
    }

    header h1 {
        margin: 0;
    }

    .contact-list ul {
        list-style: none;
        display: flex;
        padding: 0;
        margin: 0;
    }

    .contact-list li:not(:first-child):before,
    .job header .company + .role:before {
        content: '|';
        padding: 5px;
    }

    .two-column {
        column-count: 2;
    }

    .three-column {
        column-count: 3;
    }

    .list-to-commas {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .list-to-commas li {
        display: inline;
    }

    .list-to-commas li:not(:last-child):after {
        content: ',';
    }

    h2 {
        margin-bottom: 0.5rem;
    }

    .job {
        page-break-inside: avoid;
    }

    .job header {
        display: flex;
    }

    .job header p {
        margin-bottom:  0;
        margin-top: 0.5rem;
    }

    .job header .role,
    .job header .company {
        font-size: 1.3rem;
    }

    .job header .role {
        flex-grow: 2;
    }

    .job header .period {
        line-height: 1.3rem;
        align-self: center;
        font-style: italic;
    }

    .job header .period > * {
        display: block;
    }

    .job header .period > :not(:last-child):after {
        content: ',';
    }

    .job:not(:last-child):after {
        width: 25%;
        height: 1px;
        border-bottom: 1px solid #000000;
        content: '';
        display: block;
        margin-left: calc(50% - (25% / 2));
        margin-top: 8px;
        margin-bottom: 2px;
    }
</style>

<h1 class="screen-only">Curriculum Vitae</h1>
<p class="screen-only">This is an up-to-date CV, kept here for convenience. Use your browser's print feature (and print to PDF where available) to get a "hard" copy.</p>
<hr class="screen-only" />

<header>
  <h1>Andrew Bridge</h1>
  <div class="contact-list">
    <ul>
      <li>andrew@andrewhbridge.co.uk</li>
      <li>github.com/andrewbridge</li>
      <li>andrewhbridge.co.uk</li>
    </ul>
  </div>
</header>
<section>
  <h2>Key skills</h2>
  <ul class="two-column">
    <li>Strong understanding of Javascript and Typescript</li>
    <li>Adaptable between multiple modern JS frameworks</li>
    <li>Experience working with Agile practices</li>
    <li>Working with various forms of codebase testing</li>
    <li>Requirement gathering</li>
    <li>Strong collaborative skills</li>
    <li>Developing and interacting with RESTful APIs</li>
    <li>Experience with Node.js microservices</li>
  </ul>
</section>
<section>
  <h2>Professional experience</h2>
  <section class="job">
    <header>
      <p class="company">Lickd</p>
      <p class="role">Senior Software Engineer, Lead Software Engineer</p>
      <p class="period">Mar 2021 - current</p>
    </header>
    <p>Starting as the only frontend focussed developer, I have continued development of Lickd's core Platform SPA, providing deeper CMS integration for easier content maintenance and playing a key role in scaling the Platform's user discovery features and the team developing it.</p>
    <ul>
      <li>Auditing, overhauling and improving registration and checkout journeys</li>
      <li>Integrating a headless CMS to allow non-technical staff to maintain key platform user journeys without technical intervention</li>
      <li>Implementing a Creator Dashboard system and foundational work for user personsalisation</li>
      <li>Developing and managing the staggered release of a major site rebrand and content re-organisation</li>
      <li>Introducing Atomic Design methodology and reusability into the codebase</li>
      <li>Establishing project process practices within the team</li>
    </ul>
  </section>
  <section class="job">
    <header>
      <p class="company">Derivitec</p>
      <p class="role">Web Developer</p>
      <p class="period">Feb 2019 - Mar 2021</p>
    </header>
    <p>As sole web developer at Derivitec, a company offering a risk management solution for derivative assets, I managed the migration and implementation of our cloud based platform's web app, website relaunch and various API integrations.</p>
    <ul>
      <li>Implemented dependency management and bundling step into legacy .NET codebase</li>
      <li>Introduced a staged, in-place migration from legacy frontend to Vue.js SPA</li>
      <li>Integrated platform API into a Microsoft Excel plugin, enabling clients to access live data and calculations within the software</li>
      <li>Relaunched the company marketing site, using pre-render builds to improve compatibility, SEO and performance</li>
      <li>Investigated and began implementation of a big data solution to allow for interactive, in-app data interrogation</li>
      <li>Experience with optimising for and handling large datasets in the frontend</li>
    </ul>
  </section>
  <section class="job">
    <header>
      <p class="company">CoInvestor</p>
      <p class="role">Full Stack Engineer</p>
      <p class="period">Jul 2017 - Jan 2019</p>
    </header>
    <p>At CoInvestor, a fintech start-up to manage alternative assets, I developed and maintained the AngularJS SPA as part of, and later a lead in, a six-person development team.</p>
    <ul>
        <li>Introduced modern best practices to the codebase, improving scalability to cope with large datasets</li>
        <li>Considerably improved development environment for team</li>
        <li>Implemented unit testing for core codebase</li>
        <li>Experience working with highly sensitive personal and financial data, implementing security/access controls</li>
        <li>Created PDF generation microservice using AWS Lambda functions</li>
    </ul>
  </section>
  <section class="job">
    <header>
      <p class="company">University of Kent</p>
      <p class="role">Web Consultant</p>
      <p class="period">Jul 2015 - Jul 2017</p>
    </header>
    <p>As part of my role, I was responsible for the management of multiple concurrent web projects and a ten-person development team.</p>
    <ul>
      <li>Providing support to university web publishers through training and discussion</li>
      <li>Implementing new workflows and tooling to improve efficiency and quality of work produced</li>
      <li>Managing and assisting developers, designers and support staff</li>
      <li>Introducing modern technologies to improve our clients' user experience</li>
      <li>Decision making requiring an understanding of business requirements, web development and inter-team and inter-department communications</li>
      <li>Competitor and vendor analysis, requirements gathering and management of others for organisation wide CMS implementation.</li>
    </ul>
  </section>
  <section class="job">
    <header>
      <p class="company">Addison Group</p>
      <p class="role">Junior Web Developer</p>
      <p class="period">Aug 2013 - Jul 2014</p>
    </header>
    <p>During my placement year, I developed and provided ongoing updates of bespoke client sites within a 25-person team.</p>
    <ul>
      <li>Developing and maintaining corporate sites for FTSE100 clients</li>
      <li>Collaborating with a development team of 25 developers</li>
      <li>Producing high quality work on tight deadlines</li>
      <li>Handling sensitive financial figures</li>
      <li>Developing rich experiences compatible with legacy users with progressive enhancement</li>
      <li>Built and presented time-saving, organisation internal systems for the entire company</li>
    </ul>
  </section>
  <section class="job">
    <header>
      <p class="company">University of Kent</p>
      <p class="role">Web Developer</p>
      <p class="period">
        <span>Feb 2012 - Jul 2013</span>
        <span>Nov 2014 - Jul 2015</span>
      </p>
    </header>
    <p>As a developer in the Web Solutions team, I worked within a team producing client-editable, public facing websites for departments and researchers across the University, while providing on-demand support to the 500 publishers that maintained them.</p>
    <ul>
      <li>Implemented new workflows and organisational patterns to improve team communication and efficiency</li>
      <li>Introduced new modern web technologies to improve codebase while maintaining legacy browser support</li>
      <li>Led workshops for complex Dreamweaver and web best practice concepts for beginner participants</li>
  </section>
  <section class="job">
    <header>
      <p class="role">Freelance Web Developer and Consultant</p>
      <p class="period">2006 - 2015</p>
    </header>
    <p>I've provided freelance web development and consultancy for a wide variety of projects, where I've been responsible for an entire project's lifecycle and follow-on support. Client's have included the Cutty Sark museum and Canterbury Christ Church University.</p>
    <ul>
      <li>Provision of solutions for a wide variety of organisations, accommodating pre-existing workflows</li>
      <li>Management and undertaking of the full project lifecycle</li>
      <li>Working remotely and as part of a team</li>
      <li>Production of an HTML5 Canvas and pure Javascript 2D game engine</li>
    </ul>
  </section>
</section>
<section>
  <h2>Education</h2>
  <section class="job">
    <header>
      <p class="company">University of Kent</p>
      <p class="role">BSc Computer Science with a Year in Industry</p>
      <p class="period">2011 - 2015</p>
    </header>
    <ul>
      <li>Achieved a first-class honours</li>
      <li>Took management module as part of the course</li>
      <li>Adapted to a variety of programming languages and styles</li>
      <li>Explored computer-related law and ethics as part of chosen module</li>
    </ul>
  </section>
</section>
<section>
  <h2>Technical skills</h2>
  <ul class="list-to-commas">
    <li>Javascript/Typescript</li>
    <li>AngularJS</li>
    <li>Vue.js</li>
    <li>React</li>
    <li>HTML/CSS</li>
    <li>SASS</li>
    <li>SQL</li>
    <li>PHP</li>
    <li>Laravel</li>
    <li>C#</li>
    <li>Java</li>
    <li>.NET Core</li>
    <li>Node.js</li>
    <li>Lambda functions</li>
    <li>Linux</li>
    <li>Git</li>
    <li>Bash</li>
    <li>Docker</li>
    <li>Vagrant</li>
    <li>Webpack</li>
    <li>Rollup</li>
    <li>Vite</li>
    <li>Jasmine</li>
    <li>Karma</li>
    <li>Jest</li>
    <li>Cypress</li>
  </ul>
</section>
