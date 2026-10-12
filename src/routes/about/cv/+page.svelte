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
        margin-top: 20px;
        margin-bottom: 8px;
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
  <p>Principal Software Engineer at the BBC with 20 years of experience building for the web, from front end platforms to cloud native data systems. I set technical direction and architecture for broadcast technology and sustainability work, and I'm currently studying a Level 7 AI & ML apprenticeship and applying it to energy forecasting and anomaly detection for BBC buildings.</p>
</section>
<section>
  <h2>Key skills</h2>
  <ul class="two-column">
    <li>Technical strategy and solution architecture</li>
    <li>Building cloud native solutions on AWS</li>
    <li>Data capture, aggregation and observability pipelines</li>
    <li>Applied machine learning and local LLMs</li>
    <li>Strong understanding of Javascript and Typescript</li>
    <li>Developing and maintaining Python libraries</li>
    <li>Adaptable between multiple modern JS frameworks</li>
    <li>Developing and interacting with RESTful APIs</li>
    <li>Requirement gathering and stakeholder collaboration</li>
    <li>Mentoring and leading engineering teams</li>
  </ul>
</section>
<section>
  <h2>Professional experience</h2>
  <section class="job">
    <header>
      <p class="company">BBC</p>
      <p class="role">Principal Software Engineer, Senior Software Engineer</p>
      <p class="period">May 2023 - current</p>
    </header>
    <p>Working in the Broadcast & End User Technology department, originally developing a strategy for supporting citizen developers within the BBC and now setting technical strategy and architecture for cloud native solutions across broadcast technology and sustainability.</p>
    <ul>
      <li>Setting technical strategy and architecture for cloud native broadcast technology and sustainability projects</li>
      <li>Leading a carbon impact project for BBC buildings, starting at Cardiff Central Square: capturing power and temperature from ~1,000 PDUs over SNMP (~4M readings a month), analysed with DuckDB and Parquet and combined with grid carbon intensity data to highlight unnecessary power use</li>
      <li>Building forecasting, anomaly detection and data synthesis models to project energy use over longer periods and for uninstrumented buildings, with long-term capture via Prometheus and Mimir</li>
      <li>Investigation and planning for no-code/low-code "Citizen Developer" strategy</li>
      <li>Rearchitecting a data reporting and automation pipeline with a cloud native solution</li>
      <li>Working as part of a cross-departmental collaboration to prototype new solutions to facilitate audio media supply chain</li>
      <li>Research and consultancy for an AI/ML document enrichment prototype</li>
    </ul>
  </section>
  <section class="job">
    <header>
      <p class="company">Lickd</p>
      <p class="role">Senior Software Engineer, Lead Software Engineer</p>
      <p class="period">Mar 2021 - May 2023</p>
    </header>
    <p>Starting as the only frontend focussed developer, I continued development of Lickd's core Platform SPA, providing deeper CMS integration for easier content maintenance and playing a key role in scaling the Platform's user discovery features and the team developing it.</p>
    <ul>
      <li>Auditing, overhauling and improving registration and checkout journeys</li>
      <li>Integrating a headless CMS to allow non-technical staff to maintain key platform user journeys without technical intervention</li>
      <li>Implementing a Creator Dashboard system and foundational work for user personalisation</li>
      <li>Developing and managing the staggered release of a major site rebrand and content re-organisation</li>
      <li>Introducing Atomic Design methodology and reusability into the codebase</li>
      <li>Establishing project process practices within the team</li>
    </ul>
  </section>
  <section class="job">
    <header>
      <p class="company">Derivitec</p>
      <p class="role">Software Engineer</p>
      <p class="period">Feb 2019 - Mar 2021</p>
    </header>
    <p>As sole web developer at Derivitec, a company offering a risk management solution for derivative assets, I managed the migration and implementation of our cloud based platform's web app, website relaunch and various API integrations.</p>
    <ul>
      <li>Implemented dependency management and bundling step into legacy .NET codebase</li>
      <li>Introduced a staged, in-place migration from legacy frontend to Vue.js SPA</li>
      <li>Integrated platform API into a Microsoft Excel plugin, enabling clients to access live data and calculations within the software</li>
      <li>Relaunched the company marketing site, using pre-render builds to improve compatibility, SEO and performance</li>
      <li>Optimised the frontend for handling and interrogating large datasets</li>
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
        <li>Planned and led initial development of in-place migration between Angular.js and React</li>
        <li>Implemented unit testing for core codebase</li>
        <li>Implemented security and access controls for highly sensitive personal and financial data</li>
        <li>Created PDF generation microservice using AWS Lambda functions</li>
    </ul>
  </section>
  <section class="job">
    <header>
      <p class="company">University of Kent</p>
      <p class="role">Web Consultant</p>
      <p class="period">Jul 2015 - Jul 2017</p>
    </header>
    <p>Responsible for the management of multiple concurrent web projects and a ten-person development team.</p>
    <ul>
      <li>Managing and mentoring developers, designers, support staff and placement students</li>
      <li>Implementing new workflows and tooling to improve efficiency and quality of work produced</li>
      <li>Competitor and vendor analysis, requirements gathering and management of others for organisation wide CMS implementation</li>
    </ul>
  </section>
  <section class="job">
    <header>
      <p class="role">Earlier roles</p>
      <p class="period">2006 - 2015</p>
    </header>
    <ul>
      <li><strong>University of Kent</strong>, Web Developer (2012 - 2015): built client-editable sites and components in an in-house PHP CMS and supported over 500 web publishers</li>
      <li><strong>Addison Group</strong>, Junior Web Developer (2013 - 2014): placement year building corporate and financial reporting sites for FTSE100 clients in a 25-person team</li>
      <li><strong>Freelance</strong> Web Developer and Consultant (2006 - 2015): full lifecycle projects for clients including the Cutty Sark museum and Canterbury Christ Church University</li>
    </ul>
  </section>
</section>
<section>
  <h2>Education</h2>
  <section class="job">
    <header>
      <p class="company">BBC</p>
      <p class="role">Level 7 AI & Machine Learning Apprenticeship (Masters level)</p>
      <p class="period">In progress</p>
    </header>
    <ul>
      <li>Studying alongside my Principal Engineer role, covering regression, classification, ensemble methods (gradient boosting, XGBoost, stacking), clustering and time series forecasting</li>
      <li>Applying the coursework to the BBC's building energy data for forecasting, simulation and device classification</li>
    </ul>
  </section>
  <section class="job">
    <header>
      <p class="company">University of Kent</p>
      <p class="role">BSc Computer Science with a Year in Industry</p>
      <p class="period">2011 - 2015</p>
    </header>
    <ul>
      <li>Achieved a first-class honours</li>
      <li>Led multiple group projects throughout degree</li>
      <li>Took management module as part of the course</li>
    </ul>
  </section>
</section>
<section>
  <h2>Technical skills</h2>
  <ul class="list-to-commas">
    <li>Javascript/Typescript</li>
    <li>Node.js</li>
    <li>Svelte</li>
    <li>Vue.js</li>
    <li>React</li>
    <li>HTML/CSS</li>
    <li>Python</li>
    <li>pandas</li>
    <li>scikit-learn</li>
    <li>XGBoost</li>
    <li>Jupyter</li>
    <li>DuckDB</li>
    <li>Parquet</li>
    <li>Time series forecasting</li>
    <li>Local LLMs</li>
    <li>AWS CDK</li>
    <li>AWS Lambda</li>
    <li>AWS Step Functions</li>
    <li>AWS Glue</li>
    <li>Prometheus</li>
    <li>Grafana Mimir</li>
    <li>SQL</li>
    <li>PHP</li>
    <li>C#/.NET</li>
    <li>Linux</li>
    <li>Git</li>
    <li>Bash</li>
    <li>Docker</li>
    <li>Vite</li>
    <li>Webpack</li>
    <li>Jest</li>
    <li>Cypress</li>
  </ul>
</section>
