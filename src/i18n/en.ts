export const en = {
    // Layout / SEO
    seoTitle:
        "Carlos Maceira Garcia Coni — Backend Architect | Fintech & Payments",
    seoDescription:
        "Backend Architect specializing in Fintech, Payment Systems, ISO 8583, Go, NestJS, and DevOps. Building scalable, secure microservices for the financial industry.",
    ogLocale: "en_US",

    // Nav
    navAbout: "About",
    navStack: "Stack",
    navExpertise: "Expertise",
    navProjects: "Projects",
    navContact: "Contact",

    // Hero
    heroStatus: "Available for opportunities",
    heroTitle: "Backend Architect",
    heroSubtitle: "Fintech & Payment Systems",
    heroTagline:
        "Designing scalable payment systems, secure transaction architectures, and high-availability microservices for the fintech industry.",
    heroViewProjects: "View Projects",
    heroContact: "Contact",
    heroStatYears: "Years Fintech",
    heroStatCompliance: "Compliant Systems",
    heroStatProtocol: "Payment Protocol",
    heroStatTeaching: "Teaching Assistant",

    // About
    aboutLabel: "About",
    aboutHeading: "Engineering Payment Systems",
    aboutParagraphs: [
        "Backend engineer with 3+ years building payment processing systems at INI, specializing in PCI-DSS compliant microservice architectures. I design, implement, and maintain backend services that handle secure financial transactions at scale.",
        "My background spans fintech payment gateways, ISO 8583 integrations, and distributed systems built with Go and NestJS. I bring deep expertise in DevOps practices, cloud infrastructure (Azure/GCP), and container orchestration with Kubernetes.",
        "Previously led IT infrastructure operations in the Argentine Army and served with the United Nations in Haiti. Currently a teaching assistant for Microservices Architecture at ITBA, combining industry practice with academic rigor.",
    ],
    aboutCoreFocus: "Core Focus Areas",
    aboutFocusItems: [
        "Payment Gateway Design",
        "ISO 8583 Protocol Integration",
        "PCI-DSS Compliance",
        "Microservice Architecture",
        "Cloud Infrastructure (Azure / GCP)",
        "CI/CD & DevOps Automation",
    ],
    aboutEducation:
        "Education: Computer Engineering — Facultad de Ingeniería del Ejército",

    // Tech Stack
    techLabel: "Technology",
    techHeading: "Tech Stack",
    techDescription:
        "Tools and technologies I work with daily to build robust financial systems.",
    techCategoryLanguages: "Languages",
    techCategoryFrameworks: "Frameworks",
    techCategoryInfrastructure: "Infrastructure",
    techCategoryData: "Data",
    techCategoryDevOps: "DevOps",
    techCategoryCloud: "Cloud",

    // Experience / Expertise
    expertiseLabel: "Expertise",
    expertiseHeading: "What I Do",
    experienceLabel: "Experience",

    expertiseBackendTitle: "Backend Architecture",
    expertiseBackendDesc:
        "Designing modular, maintainable backend systems with clean separation of concerns, domain-driven design, and event-driven communication patterns.",
    expertisePaymentTitle: "Payment Processing",
    expertisePaymentDesc:
        "Building PCI-DSS compliant payment gateways, ISO 8583 message processing, and secure transaction pipelines for fintech platforms.",
    expertiseDistributedTitle: "Distributed Systems",
    expertiseDistributedDesc:
        "Engineering high-availability microservice architectures with service mesh, message queues, and resilient inter-service communication.",
    expertiseSecureTitle: "Secure Transactions",
    expertiseSecureDesc:
        "Implementing end-to-end encryption, tokenization, fraud detection integration, and compliance-driven security controls.",
    expertiseDevopsTitle: "DevOps & Infrastructure",
    expertiseDevopsDesc:
        "Automating CI/CD pipelines, container orchestration with Kubernetes, infrastructure as code, and cloud-native deployment strategies.",

    expRole1: "Back-end Payments Developer",
    expPeriod1: "Mar 2023 — Present",
    expDesc1:
        "Design, implementation, and maintenance of payment microservices. Cloud infrastructure, networking, and DevOps for PCI-DSS compliance.",
    expRole2: "Teaching Assistant — Microservices Architecture",
    expPeriod2: "Jul 2024 — Present",
    expDesc2:
        "Teaching microservices architecture patterns, distributed systems design, and hands-on labs for engineering students.",
    expRole3: "DevOps Engineer",
    expPeriod3: "May 2021 — Present",
    expDesc3:
        "DevOps engineering, CI/CD pipeline design, and infrastructure automation.",
    expRole4: "Company Commander — Networks & Systems",
    expPeriod4: "Dec 2020 — Mar 2023",
    expDesc4:
        "Led IT operations including networking, telephony, datacenter virtualization, and helpdesk for military infrastructure.",

    // Projects
    projectsLabel: "Projects",
    projectsHeading: "Selected Work",
    projectsDescription:
        "Representative projects showcasing expertise in payment systems, backend architecture, and DevOps.",
    projectsComingSoonTitle: "Coming Soon",
    projectsComingSoonDesc:
        "I'm currently curating my project portfolio. Check back soon for detailed case studies on payment systems, microservice architectures, and DevOps tooling.",

    // Contact
    contactLabel: "Contact",
    contactHeading: "Let's Connect",
    contactDescription:
        "Interested in discussing fintech architecture, payment systems, or collaboration opportunities? Reach out.",
    contactEmail: "Email",
    contactLinkedIn: "LinkedIn",
    contactGitHub: "GitHub",

    // Footer
    footerRights: "All rights reserved.",
} as const;

export type TranslationKeys = keyof typeof en;
