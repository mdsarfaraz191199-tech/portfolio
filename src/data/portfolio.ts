import {
  BarChart3,
  Boxes,
  CheckSquare,
  Database,
  FileText,
  Filter,
  Gauge,
  LayoutDashboard,
  Lock,
  Map,
  Plug,
  Server,
  Wrench,
  Zap,
} from 'lucide-react';
import type { Experience, Highlight, NavItem, Profile, Project, SkillGroup } from './types';

export const profile: Profile = {
  name: 'MD SARFARAZ NASIRJAH',
  displayName: 'Md Sarfaraz Nasirjah',
  title: 'Full Stack Developer',
  subtitle: 'React.js & Node.js',
  location: 'Hyderabad, India',
  email: 'mdsarfaraz191199@gmail.com',
  phone: '+91-8919290864',
  linkedin: 'https://www.linkedin.com/in/md-sarfaraz-nasirjah-29354a198',
  github: 'https://github.com/mdsarfaraz191199-tech',
  resumePath: '/resume/Md_Sarfaraz_Nasirjah_Resume_FullStack.pdf',
};

export const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'highlights', label: 'Engineering' },
  { id: 'contact', label: 'Contact' },
];

export const heroStats = [
  { label: 'Experience', value: '5 years' },
  { label: 'React components', value: '30+' },
  { label: 'Banks live', value: '24' },
];

export const aboutParagraphs: string[] = [
  'I am a **Full Stack Developer with 5 years of experience**, working mainly in React.js, TypeScript and Redux on the frontend, with hands-on Node.js and Express.js REST API development on the backend. Most of my work has been on mission-critical platforms for government, banking and enterprise clients.',
  'My strongest area is **frontend architecture**: turning Figma wireframes and BRD/FSD documents into reusable component systems, building configurable dashboards, and keeping large React applications maintainable as the feature surface grows. On the backend I build REST APIs, role-based access control and secure communication modules with Node.js, Express.js and MongoDB.',
  'Recent work has centred on **role-based dashboard builders, dynamic query builders, GIS and geospatial visualisation, WebSocket-driven real-time monitoring and enterprise reporting** — including the ICCC Converge platform for the Bihar State Cooperative Bank and the iResponse flood management system used for statewide disaster monitoring.',
  'I work in Agile teams across the full SDLC, and I care about the parts that do not show up in a screenshot: predictable component structure, sensible state management, query performance and accessible, responsive UI.',
];

export const aboutFacts: { term: string; value: string }[] = [
  { term: 'Current role', value: 'Senior Software Engineer, PruTech Solutions' },
  { term: 'Experience', value: '5 years' },
  { term: 'Core stack', value: 'React.js · TypeScript · Node.js · MongoDB' },
  { term: 'Domains', value: 'Banking, government, enterprise' },
  { term: 'Education', value: 'B.Tech, ECE — 2021' },
  { term: 'Location', value: 'Hyderabad, India' },
];

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    icon: LayoutDashboard,
    items: [
      'JavaScript (ES6+)',
      'React.js',
      'TypeScript',
      'Redux',
      'Redux Thunk',
      'React Hooks',
      'Context API',
      'React Router',
      'HTML5',
      'CSS3',
      'Bootstrap',
      'Responsive Design',
    ],
    primary: ['React.js', 'TypeScript', 'Redux'],
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: Server,
    items: ['Node.js', 'Express.js', 'RESTful API Design', 'Server-Side Logic', 'MVC Architecture'],
    primary: ['Node.js', 'Express.js'],
  },
  {
    id: 'database',
    name: 'Database',
    icon: Database,
    items: ['MongoDB', 'SQL', 'NoSQL', 'MySQL', 'Query Optimization'],
    primary: ['MongoDB'],
  },
  {
    id: 'api',
    name: 'APIs & Integration',
    icon: Plug,
    items: ['REST APIs', 'Axios', 'WebSockets', 'JSON', 'JWT Authentication', 'Apache NiFi'],
    primary: ['REST APIs', 'WebSockets'],
  },
  {
    id: 'viz',
    name: 'Visualisation & GIS',
    icon: Map,
    items: ['Chart.js', 'Recharts', 'D3.js', 'Leaflet.js', 'MapMyIndia APIs', 'Google Maps'],
    primary: ['Leaflet.js', 'Chart.js'],
  },
  {
    id: 'forms',
    name: 'Forms & Validation',
    icon: Filter,
    items: ['Formik', 'React Hook Form', 'Custom Validation Workflows'],
  },
  {
    id: 'testing',
    name: 'Testing & Quality',
    icon: CheckSquare,
    items: ['Unit Testing', 'Integration Testing', 'Cross-Browser Testing', 'Postman', 'Chrome DevTools'],
  },
  {
    id: 'tools',
    name: 'Tools & Workflow',
    icon: Wrench,
    items: ['Git', 'GitHub', 'GitLab', 'Jira', 'VS Code', 'Figma'],
  },
  {
    id: 'arch',
    name: 'Architecture & Concepts',
    icon: Boxes,
    items: [
      'Role-Based Access Control',
      'Component Architecture',
      'Full Stack Development',
      'Lazy Loading',
      'Code Splitting',
      'Performance Optimization',
      'Agile/Scrum',
      'SDLC',
    ],
    primary: ['Role-Based Access Control', 'Component Architecture'],
  },
];

export const experience: Experience[] = [
  {
    company: 'PruTech Solutions India Pvt Ltd',
    role: 'Senior Software Engineer',
    when: 'Oct 2024 — Present',
    where: 'Hyderabad, India',
    projects: [
      {
        name: 'ICCC Converge — Bihar State Cooperative Bank',
        when: 'Feb 2025 — Sept 2026',
        bullets: [
          'Led frontend development from inception across dynamic dashboards, query builder, bank/branch management and user role management, converting Figma wireframes into **30+ reusable React components**.',
          'Architected a role-based Dashboard Builder for 4 user types (Super Admin, Head Office Admin, Bank, Branch) with configurable cards, charts, tables, maps and tree selectors, draft/publish workflows and bank/branch-level filtering — rolled out across **all 24 cooperative banks in Bihar**, cutting new dashboard setup time by **60%**.',
          'Created a Query Builder that lets non-technical users construct table joins, aggregations, filters and sorting, and save queries for reuse as live widget-level data sources, integrated with Apache NiFi.',
          'Implemented role-based access control and secure communication modules with Node.js/Express.js REST APIs and MongoDB, supporting real-time incident, alert and analytics monitoring.',
          'Owned the Grievance/Ticketing module end to end for 6 roles — dynamic validation, helpdesk filtering, SLA-based auto-escalation, hierarchical reassignment, bidirectional status workflows, bulk actions, WebSocket notifications and PDF/Excel export — cutting resolution turnaround by **40%**.',
        ],
      },
      {
        name: 'iResponse — Bihar Flood Management',
        when: 'Oct 2024 — Feb 2025',
        bullets: [
          'Engineered the Situation Awareness / GIS page with real-time mapping and spatial data visualisation for statewide disaster monitoring, plotting incidents by latitude/longitude with linked images and video for faster field assessment.',
          'Built **6 monitoring dashboards** (Flood, Fire, Human Loss, Heatwave, Coldwave, Incidents) with interactive charts and dynamic GIS maps for real-time decision-making.',
          'Developed the Task and SOP Management module with assignment tracking and real-time progress monitoring for field-officer coordination.',
          'Built reporting modules with UI-driven data-capture forms and automated PDF/Excel generation matching required formats, cutting manual report preparation by **50%**.',
        ],
      },
    ],
  },
  {
    company: 'Wipro',
    role: 'Project Engineer',
    when: 'Nov 2021 — Sept 2024',
    where: 'Hyderabad, India',
    projects: [
      {
        name: 'BMI Application',
        when: 'Dec 2021 — Sept 2024',
        bullets: [
          'Analysed Business Requirement and Functional Specification documents and translated enterprise requirements into React.js component designs.',
          'Produced enterprise web applications in HTML5, CSS3, JavaScript (ES6+) and React.js, integrated with REST APIs and reusable service layers.',
          'Assembled **20+ reusable UI components** with Material UI and Syncfusion, reducing feature development time by **25%**.',
          'Managed application state with props and Redux, and secured routes using JWT middleware authentication.',
        ],
      },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'iccc',
    name: 'ICCC Converge',
    client: 'Bihar State Cooperative Bank',
    tag: 'Banking',
    when: 'Feb 2025 — Sept 2026',
    role: 'Senior Software Engineer, PruTech Solutions',
    summary:
      'An integrated command and control platform for a state cooperative banking network: configurable role-based dashboards, a visual query builder for non-technical users, bank and branch administration, and an end-to-end grievance and ticketing system.',
    stack: [
      'React.js',
      'TypeScript',
      'Redux',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST APIs',
      'WebSockets',
      'Apache NiFi',
      'Chart.js',
      'RBAC',
    ],
    metrics: [
      { value: '24', label: 'cooperative banks in Bihar running the platform' },
      { value: '60%', label: 'faster new dashboard setup' },
      { value: '40%', label: 'faster ticket resolution turnaround' },
    ],
    overview:
      'ICCC Converge serves four levels of the cooperative banking hierarchy — Super Admin, Head Office Admin, Bank and Branch — from one platform. Each level needs a different view of the same data, so the product is built around configuration rather than hard-coded screens.',
    myRole:
      'Led frontend development from inception across dynamic dashboards, the query builder, bank/branch management and user role management, converting Figma wireframes into 30+ reusable React components. Also implemented role-based access control and secure communication modules on the backend with Node.js, Express.js and MongoDB.',
    features: [
      'Role-based Dashboard Builder for 4 user types with configurable cards, charts, tables, maps and tree selectors',
      'Draft and publish workflows with bank and branch level data filtering',
      'Query Builder for non-technical users: table joins, aggregations, filters and sorting',
      'Saved queries reusable as live data sources at widget level, integrated with Apache NiFi',
      'Grievance/Ticketing module for 6 roles (L1, L2, L3, Head Office, Super Admin, Support Admin)',
      'SLA-based auto-escalation, hierarchical reassignment and bidirectional status workflows',
      'Bulk actions, WebSocket notifications and PDF/Excel export',
      'Real-time incident, alert and analytics monitoring',
    ],
    challenges: [
      'Four user types and six ticketing roles needed different data scopes and permissions from a single codebase, which made role-based access control central to both the UI and the API layer.',
      'Dashboards had to be configured by users rather than hard-coded, so widgets, data sources and filters needed a schema the frontend could render generically.',
      'Non-technical bank staff needed to build their own joins, aggregations and filters without writing SQL.',
    ],
    implementation: [
      'Composed the UI from 30+ reusable React components derived from the Figma wireframes, with Redux managing shared dashboard and ticketing state.',
      'Made dashboard widgets configuration-driven — cards, charts, tables, maps and tree selectors are rendered from saved configuration, with draft and publish states and bank/branch filtering applied consistently.',
      'Backed saved Query Builder queries with Apache NiFi for backend query management so a query can be attached to a widget as a live data source.',
      'Implemented RBAC and secure communication modules as Node.js/Express.js REST APIs over MongoDB.',
      'Used WebSockets for ticket notifications and real-time incident and alert monitoring.',
    ],
    results: [
      'Dashboard Builder rolled out across all 24 cooperative banks in Bihar.',
      'New dashboard setup time reduced by 60%.',
      'Ticket resolution turnaround reduced by 40%.',
    ],
  },
  {
    id: 'iresponse',
    name: 'iResponse',
    client: 'Bihar Flood Management',
    tag: 'Government / GIS',
    when: 'Oct 2024 — Feb 2025',
    role: 'Senior Software Engineer, PruTech Solutions',
    summary:
      'A statewide disaster monitoring platform. Incidents are plotted geospatially with linked media for field assessment, six dashboards track different hazard types, and reporting modules generate the formats officials are required to file.',
    stack: [
      'React.js',
      'JavaScript',
      'GIS / Leaflet.js',
      'Chart.js',
      'REST APIs',
      'Real-time monitoring',
      'PDF/Excel reporting',
    ],
    metrics: [
      { value: '6', label: 'monitoring dashboards delivered' },
      { value: '50%', label: 'less manual report preparation' },
      { value: 'Statewide', label: 'disaster monitoring coverage' },
    ],
    overview:
      'iResponse supports flood and disaster response across Bihar. Control-room staff need one screen that shows what is happening and where, while field officers need tasks, SOPs and a way to file structured reports.',
    myRole:
      'Engineered the Situation Awareness / GIS page, built the six monitoring dashboards, developed the Task and SOP Management module, and built the reporting modules.',
    features: [
      'Situation Awareness / GIS page with real-time mapping and spatial data visualisation',
      'Incidents plotted by latitude and longitude with linked images and video for field assessment',
      '6 monitoring dashboards: Flood, Fire, Human Loss, Heatwave, Coldwave and Incidents',
      'Interactive charts and dynamic GIS maps for real-time decision-making',
      'Task and SOP Management with assignment tracking and real-time progress monitoring',
      'UI-driven data-capture forms with automated PDF and Excel report generation',
    ],
    challenges: [
      'Control-room decisions depend on current data, so map and dashboard state had to reflect incidents in real time rather than on refresh.',
      'Reports had to match the exact formats officials were already required to submit, so generated PDF and Excel output could not be approximated.',
      'Six hazard types each needed their own dashboard while sharing charting and map behaviour.',
    ],
    implementation: [
      'Built the GIS page with real-time mapping, plotting incidents by latitude/longitude and linking images and video to each marker.',
      'Delivered six dashboards on shared chart and map components so hazard-specific views stay consistent.',
      'Built the Task and SOP module with assignment tracking and live progress monitoring for field officers.',
      'Built reporting as UI-driven capture forms feeding automated PDF/Excel generation in the required formats.',
    ],
    results: [
      '6 monitoring dashboards delivered for statewide disaster monitoring.',
      'Manual report preparation reduced by 50%.',
    ],
  },
  {
    id: 'bmi',
    name: 'BMI Application',
    client: 'Wipro',
    tag: 'Enterprise',
    when: 'Dec 2021 — Sept 2024',
    role: 'Project Engineer, Wipro',
    summary:
      'An enterprise web application built from formal BRD and FSD documentation, with a reusable component library, REST-integrated service layers and JWT-secured routing.',
    stack: ['React.js', 'JavaScript (ES6+)', 'Material UI', 'Syncfusion', 'Redux', 'REST APIs', 'JWT', 'HTML5', 'CSS3'],
    metrics: [
      { value: '20+', label: 'reusable UI components built' },
      { value: '25%', label: 'faster feature development' },
      { value: '3 yrs', label: 'on the same enterprise product' },
    ],
    overview:
      'A long-running enterprise application where requirements arrived as Business Requirement and Functional Specification documents and had to be translated into a consistent React component design.',
    myRole:
      'Analysed BRD and FSD documents, translated enterprise requirements into React.js component designs, and built and maintained the application UI and its state and authentication layers.',
    features: [
      'Enterprise web application built in HTML5, CSS3, JavaScript (ES6+) and React.js',
      '20+ reusable UI components with Material UI and Syncfusion',
      'REST API integration through reusable service layers',
      'Application state managed with props and Redux',
      'JWT middleware authentication securing application routes',
    ],
    challenges: [
      'Requirements arrived as formal BRD and FSD documents rather than designs, so component structure had to be derived from written specifications.',
      'Feature delivery across a multi-year enterprise product needed a component library consistent enough to reuse instead of rebuilding per screen.',
    ],
    implementation: [
      'Translated BRD and FSD requirements directly into React.js component designs.',
      'Assembled a library of 20+ reusable UI components on Material UI and Syncfusion.',
      'Integrated REST APIs through reusable service layers rather than per-screen calls.',
      'Managed state with props and Redux, and secured routes with JWT middleware authentication.',
    ],
    results: ['20+ reusable UI components delivered.', 'Feature development time reduced by 25%.'],
  },
];

export const highlights: Highlight[] = [
  {
    icon: LayoutDashboard,
    title: 'Role-based dashboard architecture',
    body: 'Configuration-driven dashboards serving four user types, with widget-level data sources, draft/publish states and bank/branch scoping.',
  },
  {
    icon: Filter,
    title: 'Dynamic query builder',
    body: 'A UI that lets non-technical users assemble joins, aggregations, filters and sorting, then save the result as a reusable live data source.',
  },
  {
    icon: Map,
    title: 'GIS & spatial visualisation',
    body: 'Real-time mapping of incidents by latitude and longitude with linked media, built for statewide disaster monitoring.',
  },
  {
    icon: Zap,
    title: 'Real-time WebSocket systems',
    body: 'WebSocket notifications and live incident, alert and analytics monitoring across multi-role platforms.',
  },
  {
    icon: Boxes,
    title: 'Reusable React component architecture',
    body: '30+ components from Figma wireframes on one platform and 20+ on another, built so feature teams compose rather than rebuild.',
  },
  {
    icon: Plug,
    title: 'REST API design & integration',
    body: 'Node.js/Express.js REST APIs on the backend and Axios-based service layers on the frontend, shared across screens.',
  },
  {
    icon: Database,
    title: 'MongoDB data handling',
    body: 'MongoDB storage behind access control and monitoring modules, with SQL/NoSQL query optimisation experience.',
  },
  {
    icon: FileText,
    title: 'Enterprise reporting',
    body: 'UI-driven capture forms with automated PDF and Excel generation matching the formats organisations are required to file.',
  },
  {
    icon: Lock,
    title: 'RBAC & authentication',
    body: 'Role-based access control across four user types and six ticketing roles, with JWT-secured routing.',
  },
  {
    icon: Gauge,
    title: 'Performance optimisation',
    body: 'Lazy loading, code splitting and component-level optimisation to keep large enterprise React applications responsive.',
  },
  {
    icon: BarChart3,
    title: 'Data visualisation',
    body: 'Interactive charts and configurable widgets with Chart.js, Recharts and D3.js across monitoring and analytics dashboards.',
  },
  {
    icon: CheckSquare,
    title: 'Quality & testing',
    body: 'Unit, integration and cross-browser testing with Postman and Chrome DevTools as part of Agile delivery.',
  },
];
