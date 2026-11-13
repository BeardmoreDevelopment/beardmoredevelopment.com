// Site-wide copy and the copy for the home, about, contact and 404 pages.
// Services are in services.ts and the work history is in work.ts.
// Edit wording here, not in the components.

export interface Link {
  label: string;
  href: string;
}

/** A labelled line: mono label on the left, sentence on the right. */
export interface Row {
  label: string;
  text: string;
}

export const site = {
  name: 'Beardmore Development',
  wordmark: 'beardmoreDevelopment()',
  email: 'matthew.beardmore@beardmoredevelopment.com',
  emailButton: 'Email me',
  skipLink: 'Skip to content',
  nav: [
    { label: 'services', href: '/services/' },
    { label: 'work', href: '/work/' },
    { label: 'about', href: '/about/' },
    { label: 'contact', href: '/contact/' },
  ] satisfies Link[],
  contact: {
    label: '// contact',
    availability: 'Available for contract work alongside a full-time role.',
    location: 'UK / Remote',
  },
  titleBlock: [
    { label: 'Project', text: 'Beardmore Development' },
    { label: 'Drawn', text: 'M. Beardmore' },
    { label: 'Based', text: 'UK / Remote' },
    { label: 'Rev', text: '2026' },
  ] satisfies Row[],
};

export const home = {
  title: 'Beardmore Development | Salesforce engineering for the hard parts',
  description:
    'Code-first Salesforce contract work: integration frameworks, Apex architecture and async systems at scale. Engineering, not admin.',
  hero: {
    // The headline is rendered as `headline` followed by `highlight` in green.
    headline: 'Salesforce engineering for the',
    highlight: 'hard parts',
    lede: 'Code-first contract work: integration frameworks, Apex architecture and async systems at scale. Engineering, not admin.',
  },
  diagram: {
    label:
      'Diagram: Salesforce connected through an integration framework to a REST API, a data store and queues',
    source: 'SALESFORCE',
    framework: ['INTEGRATION', 'FRAMEWORK'],
    targets: ['REST API', 'DATA STORE', 'QUEUES'],
    dimensions: ['APEX / LWC', 'IN + OUTBOUND'],
  },
  servicesLabel: '// services',
  workLabel: '// selected work',
  work: [
    { label: 'Hargreaves Lansdown', text: 'Led the rollout of AI.' },
    {
      label: 'Hargreaves Lansdown',
      text: 'Designed the inbound and outbound integration framework and the data-access layer for off-platform data.',
    },
    {
      label: 'Certinia',
      text: 'Led an engineering team; co-architected bulk resource matching of 2,000+ work items in minutes with Queueable Apex.',
    },
  ] satisfies Row[],
  workLink: { label: 'See all work', href: '/work/' } satisfies Link,
};

export const about = {
  title: 'About | Beardmore Development',
  description:
    'Matthew Beardmore, Senior Salesforce Developer: who you would work with and how he works.',
  label: '// about',
  heading: "Who you'd work with",
  lede: "I'm Matthew Beardmore, a Senior Salesforce Developer at Hargreaves Lansdown and previously an Engineering Team Leader at Certinia.",
  whoLabel: '// who i am',
  who: [
    'I work in code: Apex, Lightning Web Components and the integration frameworks that connect Salesforce to external systems. I design bulk-processing and asynchronous systems that push platform limits, backed by CI/CD, packaging and release management.',
    'I lead as well as build. I led an engineering team at Certinia, and at Hargreaves Lansdown I lead the technical architecture decisions for the Salesforce practice and led the rollout of AI.',
  ],
  howLabel: '// how i work',
  how: [
    { label: 'Code-first', text: 'Apex and Lightning Web Components. Engineering, not admin.' },
    {
      label: 'Structure',
      text: 'Code laid out on the Controller–Service–Selector pattern, so logic, data access and UI each have one place to live.',
    },
    {
      label: 'KISS',
      text: 'Keep it simple. The simplest design that does the job is the one a team can maintain.',
    },
    {
      label: 'Code review',
      text: 'Standards are written down and then reinforced through code review.',
    },
    {
      label: 'Documentation',
      text: 'Designs are documented so that technical and non-technical stakeholders can follow the decisions.',
    },
    {
      label: 'Mentoring',
      text: "I've onboarded and mentored developers, and I bring the team along with the work.",
    },
    {
      label: 'Leadership',
      text: "I've led an engineering team and led architecture decisions for a Salesforce practice.",
    },
  ] satisfies Row[],
  historyLabel: '// full history',
  historyIntro: 'The full history is at',
  historyLink: { label: 'matthewbeardmore.com', href: 'https://matthewbeardmore.com' } satisfies Link,
};

export const contact = {
  title: 'Contact | Beardmore Development',
  description:
    'Email Matthew Beardmore about Salesforce contract work. Available alongside a full-time role, UK and remote.',
  label: '// contact',
  heading: 'Get in touch',
  includeLabel: '// what to include in your email',
  include: [
    { label: 'The system', text: 'Your Salesforce setup and what it connects to.' },
    { label: 'The problem', text: "What isn't working, or what you need built." },
    { label: 'Timescale', text: 'When you need it by, and roughly how much work you expect.' },
  ] satisfies Row[],
};

export const notFound = {
  title: 'Page not found | Beardmore Development',
  description: 'This page does not exist.',
  label: '// 404',
  heading: 'Page not found',
  lede: "There's nothing at this address.",
  link: { label: 'Back to the home page', href: '/' } satisfies Link,
};
