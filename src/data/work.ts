// The full work history for /work/, grouped by employer. Facts only: everything here is from the CV.
// No customer names.

interface Role {
  title: string;
  dates: string;
  points: string[];
}

interface Employer {
  name: string;
  roles: Role[];
}

export const workPage = {
  title: 'Selected work | Beardmore Development',
  description:
    'Salesforce engineering work by Matthew Beardmore at Hargreaves Lansdown and Certinia, and earlier self-employed full stack work.',
  label: '// selected work',
  heading: 'Selected work',
  lede: 'What I have designed, built and led, by employer.',
};

export const employers: Employer[] = [
  {
    name: 'Hargreaves Lansdown',
    roles: [
      {
        title: 'Senior Salesforce Developer',
        dates: 'Jan 2026 – present',
        points: [
          'Led the rollout of AI at Hargreaves Lansdown.',
          "Designed and built the practice's inbound and outbound integration framework, standardising how Salesforce connects to external systems and services.",
          'Architected the core CRUD data-access layer for off-platform data sources where Salesforce is not the system of record, keeping the platform performant, secure and maintainable.',
          'Established Apex and LWC best-practice guidelines built on the Controller–Service–Selector pattern with an emphasis on simplicity (KISS), reinforced through code reviews.',
          'Built a suite of shared, reusable UI components that reduced developer training time and sped up delivery of new features.',
          'Led technical architecture decisions for the Salesforce practice, documenting designs and guiding both technical and non-technical stakeholders.',
        ],
      },
    ],
  },
  {
    name: 'Certinia',
    roles: [
      {
        title: 'Engineering Team Leader',
        dates: 'Oct 2024 – Jan 2026',
        points: [
          'Led an engineering team, mentoring engineers and giving architectural guidance across teams on scalability, compatibility and reusability.',
          'Orchestrated and co-architected a bulk intelligent resource-matching system, matching 2,000+ work items with Queueable Apex and returning results in minutes.',
          'Helped design and implement an org-wide async management service with load balancing across packages, dependent async handling, cancellation support and a monitoring UI.',
          "Managed service pack releases for Salesforce's largest ISV product, coordinating testing, builds and customer communications within strict packaging restrictions, and created new Jenkins CI/CD pipelines to improve automation.",
          'Rewrote a complex Lightning Web Component to follow best practices, simplifying messaging channels and adding caching for faster data fetches.',
          'Built a new LWC from scratch for contact work-history tracking, using Bryntum and Lightning components to support search and lazy loading.',
        ],
      },
      {
        title: 'Software Engineer',
        dates: 'Mar 2023 – Oct 2024',
        points: [
          "Rewrote the entire PSA skills flow for one of Certinia's largest customers, rebuilding it in LWC to best-practice accessibility standards, with reusable shared components now serving tens of thousands of users daily.",
          'Co-created an off-platform resource-matching engine callable from Salesforce orgs, combining Python, AWS, vector databases and mathematical scoring algorithms to deliver near real-time matches.',
          'Developed internal DevOps tooling for org creation and deployment: provisioning users, managing translations and automating managed and unmanaged deployments, with Jenkins pipelines for org testing and deployments.',
          'Partnered with UX and Product early in the lifecycle to avoid technical constraints and reduce rework.',
          'Mentored new developers on PSA, providing technical onboarding and reinforcing coding standards.',
        ],
      },
      {
        title: 'Associate Software Engineer',
        dates: 'Aug 2022 – Mar 2023',
        points: [
          'Delivered in a small, managerless team, introducing methodologies still in use today.',
          'Rapidly gained product knowledge to deliver customer-critical features under deadline pressure for a key client.',
        ],
      },
    ],
  },
  {
    name: 'Self-employed / OTB Vendors',
    roles: [
      {
        title: 'Full Stack Developer',
        dates: 'Jan 2022 – Oct 2023',
        points: [
          'Rescued an abandoned project and launched it to market within 18 months, managing technical delivery, stakeholder engagement and recruitment.',
          'Developed a whistleblowing web application, balancing MVP speed with cost constraints.',
          'Built the Flask backend and lightweight UI for the BoxBar beer-vending machine project, covering monitoring, payments and error handling.',
        ],
      },
    ],
  },
];
