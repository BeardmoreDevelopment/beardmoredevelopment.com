// All copy for the site lives here. Edit wording in this file, not in the components.

interface Link {
  label: string;
  href: string;
}

interface Service {
  id: string;
  title: string;
  text: string;
}

interface WorkItem {
  employer: string;
  text: string;
}

interface TitleBlockCell {
  label: string;
  value: string;
}

interface Site {
  name: string;
  url: string;
  title: string;
  description: string;
  wordmark: string;
  email: string;
  emailButton: string;
  skipLink: string;
  nav: Link[];
  hero: {
    headline: string;
    highlight: string;
    lede: string;
  };
  diagram: {
    label: string;
    source: string;
    framework: [string, string];
    targets: [string, string, string];
    dimensions: [string, string];
  };
  services: { label: string; items: Service[] };
  work: { label: string; items: WorkItem[] };
  about: { label: string; text: string; linkIntro: string; link: Link };
  contact: { label: string; availability: string; location: string };
  titleBlock: TitleBlockCell[];
}

export const site: Site = {
  name: 'Beardmore Development',
  url: 'https://beardmoredevelopment.com/',
  title: 'Beardmore Development | Salesforce engineering for the hard parts',
  description:
    'Code-first Salesforce contract work: integration frameworks, Apex architecture and async systems at scale. Engineering, not admin.',
  wordmark: 'beardmoreDevelopment()',
  email: 'matthew.beardmore@beardmoredevelopment.com',
  emailButton: 'Email me',
  skipLink: 'Skip to content',
  nav: [
    { label: 'services', href: '#services' },
    { label: 'work', href: '#work' },
    { label: 'about', href: '#about' },
    { label: 'contact', href: '#contact' },
  ],
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
  services: {
    label: '// services',
    items: [
      {
        id: 'S-01',
        title: 'Integration frameworks',
        text: 'Inbound and outbound REST, built once and reused.',
      },
      {
        id: 'S-02',
        title: 'Apex architecture',
        text: 'Controller–Service–Selector, coding standards and code review.',
      },
      {
        id: 'S-03',
        title: 'Async at scale',
        text: 'Queueable, Batch and bulk processing that holds up.',
      },
      {
        id: 'S-04',
        title: 'LWC libraries',
        text: 'Shared, accessible components a team can build on.',
      },
    ],
  },
  work: {
    label: '// selected work',
    items: [
      { employer: 'Hargreaves Lansdown', text: 'Led the rollout of AI.' },
      {
        employer: 'Hargreaves Lansdown',
        text: 'Designed the inbound and outbound integration framework and the data-access layer for off-platform data.',
      },
      {
        employer: 'Hargreaves Lansdown',
        text: 'Set the Apex and LWC standards for the practice and led its architecture decisions.',
      },
      {
        employer: 'Certinia',
        text: 'Led an engineering team; co-architected bulk resource matching of 2,000+ work items in minutes with Queueable Apex.',
      },
      {
        employer: 'Certinia',
        text: 'Helped design an org-wide async management service with load balancing, cancellation and a monitoring UI.',
      },
      {
        employer: 'Certinia',
        text: "Ran service pack releases for Salesforce's largest ISV product and built the Jenkins pipelines behind them.",
      },
    ],
  },
  about: {
    label: "// who you'd work with",
    text: "I'm Matthew Beardmore, a Senior Salesforce Developer at Hargreaves Lansdown and previously an Engineering Team Leader at Certinia. I work in code: Apex, Lightning Web Components and the integration frameworks that connect Salesforce to external systems, backed by CI/CD, packaging and release management.",
    linkIntro: 'The full history is at',
    link: { label: 'matthewbeardmore.com', href: 'https://matthewbeardmore.com' },
  },
  contact: {
    label: '// contact',
    availability: 'Available for contract work alongside a full-time role.',
    location: 'UK / Remote',
  },
  titleBlock: [
    { label: 'Project', value: 'Beardmore Development' },
    { label: 'Drawn', value: 'M. Beardmore' },
    { label: 'Based', value: 'UK / Remote' },
    { label: 'Rev', value: '2026' },
  ],
};
