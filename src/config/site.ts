export const siteConfig = {
    name: "Carlos Maceira Garcia Coni",
    shortName: "Carlos",
    title: "Backend Architect",
    subtitle: "Fintech & Payment Systems",
    domain: "carlostech.net.ar",
    url: "https://carlostech.net.ar",
    tagline:
        "Designing scalable payment systems, secure transaction architectures, and high-availability microservices for the fintech industry.",
    email: "carlosmgc2003@gmail.com",
    linkedin: "https://www.linkedin.com/in/carlos-albertomaceira-garcia-coni-b8a36137",
    github: "https://github.com/carlosmgc2003",
    location: "Buenos Aires, Argentina",

    about: [
        "Backend engineer with 3+ years building payment processing systems at INI, specializing in PCI-DSS compliant microservice architectures. I design, implement, and maintain backend services that handle secure financial transactions at scale.",
        "My background spans fintech payment gateways, ISO 8583 integrations, and distributed systems built with Go and NestJS. I bring deep expertise in DevOps practices, cloud infrastructure (Azure/GCP), and container orchestration with Kubernetes.",
        "Previously led IT infrastructure operations in the Argentine Army and served with the United Nations in Haiti. Currently a teaching assistant for Microservices Architecture at ITBA, combining industry practice with academic rigor.",
    ],

    techStack: [
        { name: "Go", category: "Languages" },
        { name: "NestJS", category: "Frameworks" },
        { name: "TypeScript", category: "Languages" },
        { name: "Python", category: "Languages" },
        { name: "Docker", category: "Infrastructure" },
        { name: "Kubernetes", category: "Infrastructure" },
        { name: "PostgreSQL", category: "Data" },
        { name: "Redis", category: "Data" },
        { name: "GitLab CI/CD", category: "DevOps" },
        { name: "Azure", category: "Cloud" },
        { name: "GCP", category: "Cloud" },
        { name: "Linux", category: "Infrastructure" },
    ],

    expertise: [
        {
            title: "Backend Architecture",
            description:
                "Designing modular, maintainable backend systems with clean separation of concerns, domain-driven design, and event-driven communication patterns.",
            icon: "server",
        },
        {
            title: "Payment Processing",
            description:
                "Building PCI-DSS compliant payment gateways, ISO 8583 message processing, and secure transaction pipelines for fintech platforms.",
            icon: "credit-card",
        },
        {
            title: "Distributed Systems",
            description:
                "Engineering high-availability microservice architectures with service mesh, message queues, and resilient inter-service communication.",
            icon: "network",
        },
        {
            title: "Secure Transactions",
            description:
                "Implementing end-to-end encryption, tokenization, fraud detection integration, and compliance-driven security controls.",
            icon: "shield",
        },
        {
            title: "DevOps & Infrastructure",
            description:
                "Automating CI/CD pipelines, container orchestration with Kubernetes, infrastructure as code, and cloud-native deployment strategies.",
            icon: "cloud",
        },
    ],

    experience: [
        {
            role: "Back-end Payments Developer",
            company: "INI",
            period: "Mar 2023 — Present",
            description:
                "Design, implementation, and maintenance of payment microservices. Cloud infrastructure, networking, and DevOps for PCI-DSS compliance.",
        },
        {
            role: "Teaching Assistant — Microservices Architecture",
            company: "ITBA",
            period: "Jul 2024 — Present",
            description:
                "Teaching microservices architecture patterns, distributed systems design, and hands-on labs for engineering students.",
        },
        {
            role: "DevOps Engineer",
            company: "Robosophy",
            period: "May 2021 — Present",
            description:
                "DevOps engineering, CI/CD pipeline design, and infrastructure automation.",
        },
        {
            role: "Company Commander — Networks & Systems",
            company: "Argentine Army",
            period: "Dec 2020 — Mar 2023",
            description:
                "Led IT operations including networking, telephony, datacenter virtualization, and helpdesk for military infrastructure.",
        },
    ],

    projects: [
        {
            title: "ISO 8583 Message Gateway",
            description:
                "High-performance message gateway for processing ISO 8583 financial transactions with support for multiple acquirers and card networks.",
            techStack: ["Go", "PostgreSQL", "Docker", "Redis"],
            github: "#",
        },
        {
            title: "Payment Orchestration Platform",
            description:
                "Microservice-based payment orchestration layer handling routing, retry logic, and multi-provider failover for transaction processing.",
            techStack: ["NestJS", "TypeScript", "Kubernetes", "Redis"],
            github: "#",
        },
        {
            title: "DevOps Pipeline Toolkit",
            description:
                "Reusable CI/CD templates and infrastructure-as-code modules for deploying containerized fintech services to cloud environments.",
            techStack: ["GitLab CI", "Docker", "Kubernetes", "Azure"],
            github: "#",
        },
    ],

    seo: {
        title: "Carlos Maceira Garcia Coni — Backend Architect | Fintech & Payments",
        description:
            "Backend Architect specializing in Fintech, Payment Systems, ISO 8583, Go, NestJS, and DevOps. Building scalable, secure microservices for the financial industry.",
        keywords: [
            "Backend Architect",
            "Fintech",
            "Payments",
            "ISO 8583",
            "Go",
            "Golang",
            "NestJS",
            "DevOps",
            "Microservices",
            "Payment Gateway",
            "PCI-DSS",
            "Kubernetes",
            "Buenos Aires",
        ],
    },
};
