// The four services. Each one becomes a card and a page at /services/<slug>/.
// `evidence` must stay factual: only things the CV says.
import type { Row } from './site';

export interface Service {
  slug: string;
  id: string;
  title: string;
  /** One line, shown on the cards. */
  summary: string;
  /** "What it is" paragraphs. */
  intro: string[];
  needs: string[];
  deliverables: string[];
  evidence: Row[];
}

export const servicesPage = {
  title: 'Services | Beardmore Development',
  description:
    'Salesforce contract services: integration frameworks, Apex architecture, async processing at scale and Lightning Web Component libraries.',
  label: '// services',
  heading: 'Services',
  lede: 'Four kinds of code-first Salesforce work. Each is something I have designed and built in production.',
  // Heading for screen readers above the card list.
  listHeading: 'All services',
  labels: {
    intro: '// what it is',
    needs: '// when a team needs it',
    deliverables: '// what you get',
    evidence: "// where I've done this",
    pager: 'Other services',
    back: 'All services',
  },
};

export const services: Service[] = [
  {
    slug: 'integration-frameworks',
    id: 'S-01',
    title: 'Integration frameworks',
    summary: 'Inbound and outbound REST, built once and reused.',
    intro: [
      'An integration framework is one standard way for Salesforce to call external systems and to be called by them. Each new connection is built on the same framework, so no integration brings its own approach to callouts, errors and tests.',
      'Where Salesforce is not the system of record, the framework can include a data-access layer for off-platform data, so the platform stays performant, secure and maintainable.',
    ],
    needs: [
      'Every integration in the org has been built differently and each is hard to maintain.',
      "Salesforce needs to read and write data it doesn't own.",
      'More integrations are on the roadmap and you want them built on one pattern.',
    ],
    deliverables: [
      'An inbound and outbound REST integration framework in Apex, built once and reused.',
      'A data-access layer for off-platform data sources, where you need one.',
      'Documented designs your developers can follow for the next integration.',
      'Code review while the team adopts it.',
    ],
    evidence: [
      {
        label: 'Hargreaves Lansdown',
        text: "Designed and built the practice's inbound and outbound integration framework, standardising how Salesforce connects to external systems and services.",
      },
      {
        label: 'Hargreaves Lansdown',
        text: 'Architected the core CRUD data-access layer for off-platform data sources where Salesforce is not the system of record.',
      },
      {
        label: 'Certinia',
        text: 'Co-created an off-platform resource-matching engine callable from Salesforce orgs, built with Python and AWS.',
      },
    ],
  },
  {
    slug: 'apex-architecture',
    id: 'S-02',
    title: 'Apex architecture',
    summary: 'Controller–Service–Selector, coding standards and code review.',
    intro: [
      'Apex architecture is how the code in an org is laid out: where the logic lives, how it reaches data and how it is tested.',
      'I work to the Controller–Service–Selector pattern with an emphasis on simplicity (KISS), so the next developer can find things and change them safely.',
    ],
    needs: [
      'The codebase has grown without a shared structure and changes are getting risky.',
      'A growing team needs agreed standards and consistent code review.',
      'You have architecture decisions to make and want an experienced engineer to lead them.',
    ],
    deliverables: [
      'Apex and LWC coding standards built on Controller–Service–Selector.',
      'Code review against those standards.',
      'Architecture decisions documented for technical and non-technical stakeholders.',
      'Mentoring for the developers who will maintain the code.',
    ],
    evidence: [
      {
        label: 'Hargreaves Lansdown',
        text: 'Established Apex and LWC best-practice guidelines built on the Controller–Service–Selector pattern, reinforced through code reviews.',
      },
      {
        label: 'Hargreaves Lansdown',
        text: 'Led technical architecture decisions for the Salesforce practice, documenting designs and guiding technical and non-technical stakeholders.',
      },
      {
        label: 'Certinia',
        text: 'Provided architectural guidance across teams on scalability, compatibility and reusability, while mentoring engineers.',
      },
    ],
  },
  {
    slug: 'async-at-scale',
    id: 'S-03',
    title: 'Async at scale',
    summary: 'Queueable, Batch and bulk processing that holds up.',
    intro: [
      'Some work is too big for a single transaction: bulk matching, large data changes, chains of jobs that depend on each other.',
      'Async at scale means designing Queueable and Batch Apex so that work completes within platform limits, and so the team can see and control it while it runs.',
    ],
    needs: [
      'Processes hit platform limits as data volumes grow.',
      'Async jobs across the org compete with each other, and nobody can see what is running.',
      'A bulk process needs to finish much faster than it does today.',
    ],
    deliverables: [
      'Queueable and Batch Apex designed for your volumes.',
      'Async management: load balancing, dependent jobs and cancellation.',
      'A monitoring view so the team can see what is running.',
      'Performance work, such as caching, where it helps.',
    ],
    evidence: [
      {
        label: 'Certinia',
        text: 'Orchestrated and co-architected a bulk resource-matching system, matching 2,000+ work items with Queueable Apex and returning results in minutes.',
      },
      {
        label: 'Certinia',
        text: 'Helped design and implement an org-wide async management service with load balancing across packages, dependent async handling, cancellation support and a monitoring UI.',
      },
    ],
  },
  {
    slug: 'lwc-libraries',
    id: 'S-04',
    title: 'LWC libraries',
    summary: 'Shared, accessible components a team can build on.',
    intro: [
      'A shared Lightning Web Component library gives a team one set of well-built, accessible components to assemble features from, so the same UI is not rebuilt in every project.',
    ],
    needs: [
      'Teams keep rebuilding similar components.',
      'Existing components are complex, slow or hard to extend.',
      'Accessibility needs to be built in from the start.',
      'New developers take too long to become productive.',
    ],
    deliverables: [
      'Shared, reusable Lightning Web Components built to best-practice accessibility standards.',
      'Rewrites of complex components, with simpler messaging and caching for faster data fetches.',
      'New components built from scratch, including search and lazy loading.',
      'Patterns the team can follow to extend the library themselves.',
    ],
    evidence: [
      {
        label: 'Hargreaves Lansdown',
        text: 'Built a suite of shared, reusable UI components that reduced developer training time and sped up delivery of new features.',
      },
      {
        label: 'Certinia',
        text: "Rewrote the entire PSA skills flow for one of Certinia's largest customers in LWC, to best-practice accessibility standards, with reusable shared components now serving tens of thousands of users daily.",
      },
      {
        label: 'Certinia',
        text: 'Rewrote a complex Lightning Web Component to follow best practices, simplifying messaging channels and adding caching for faster data fetches.',
      },
      {
        label: 'Certinia',
        text: 'Built a new LWC from scratch for contact work-history tracking, using Bryntum and Lightning components to support search and lazy loading.',
      },
    ],
  },
];
