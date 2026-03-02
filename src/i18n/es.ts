import type { TranslationKeys } from "./en";

export const esAR: Record<TranslationKeys, string | string[]> = {
    // Layout / SEO
    seoTitle:
        "Carlos Maceira Garcia Coni — Arquitecto Backend | Fintech y Pagos",
    seoDescription:
        "Arquitecto Backend especializado en Fintech, Sistemas de Pagos, ISO 8583, Go, NestJS y DevOps. Construyendo microservicios escalables y seguros para la industria financiera.",
    ogLocale: "es_AR",

    // Nav
    navAbout: "Acerca",
    navStack: "Tecnologías",
    navExpertise: "Experiencia",
    navProjects: "Proyectos",
    navContact: "Contacto",

    // Hero
    heroStatus: "Disponible para oportunidades",
    heroTitle: "Arquitecto Backend",
    heroSubtitle: "Sistemas Fintech y de Pagos",
    heroTagline:
        "Diseñando sistemas de pagos escalables, arquitecturas de transacciones seguras y microservicios de alta disponibilidad para la industria fintech.",
    heroViewProjects: "Ver Proyectos",
    heroContact: "Contacto",
    heroStatYears: "Años en Fintech",
    heroStatCompliance: "Sistemas Conformes",
    heroStatProtocol: "Protocolo de Pagos",
    heroStatTeaching: "Docente Asistente",

    // About
    aboutLabel: "Acerca",
    aboutHeading: "Ingeniería de Sistemas de Pagos",
    aboutParagraphs: [
        "Ingeniero backend con más de 3 años construyendo sistemas de procesamiento de pagos en INI, especializado en arquitecturas de microservicios conformes a PCI-DSS. Diseño, implemento y mantengo servicios backend que procesan transacciones financieras seguras a escala.",
        "Mi experiencia abarca pasarelas de pago fintech, integraciones ISO 8583 y sistemas distribuidos construidos con Go y NestJS. Aporto profunda experiencia en prácticas DevOps, infraestructura cloud (Azure/GCP) y orquestación de contenedores con Kubernetes.",
        "Anteriormente lideré operaciones de infraestructura IT en el Ejército Argentino y serví con las Naciones Unidas en Haití. Actualmente soy docente asistente de Arquitectura de Microservicios en ITBA, combinando práctica profesional con rigor académico.",
    ],
    aboutCoreFocus: "Áreas de Enfoque",
    aboutFocusItems: [
        "Diseño de Pasarelas de Pago",
        "Integración Protocolo ISO 8583",
        "Cumplimiento PCI-DSS",
        "Arquitectura de Microservicios",
        "Infraestructura Cloud (Azure / GCP)",
        "CI/CD y Automatización DevOps",
    ],
    aboutEducation:
        "Educación: Ingeniería en Informática — Facultad de Ingeniería del Ejército",

    // Tech Stack
    techLabel: "Tecnología",
    techHeading: "Stack Tecnológico",
    techDescription:
        "Herramientas y tecnologías que utilizo a diario para construir sistemas financieros robustos.",
    techCategoryLanguages: "Lenguajes",
    techCategoryFrameworks: "Frameworks",
    techCategoryInfrastructure: "Infraestructura",
    techCategoryData: "Datos",
    techCategoryDevOps: "DevOps",
    techCategoryCloud: "Cloud",

    // Experience / Expertise
    expertiseLabel: "Experiencia",
    expertiseHeading: "Lo Que Hago",
    experienceLabel: "Trayectoria",

    expertiseBackendTitle: "Arquitectura Backend",
    expertiseBackendDesc:
        "Diseño de sistemas backend modulares y mantenibles con separación clara de responsabilidades, diseño guiado por dominio y patrones de comunicación dirigidos por eventos.",
    expertisePaymentTitle: "Procesamiento de Pagos",
    expertisePaymentDesc:
        "Construcción de pasarelas de pago conformes a PCI-DSS, procesamiento de mensajes ISO 8583 y pipelines de transacciones seguras para plataformas fintech.",
    expertiseDistributedTitle: "Sistemas Distribuidos",
    expertiseDistributedDesc:
        "Ingeniería de arquitecturas de microservicios de alta disponibilidad con service mesh, colas de mensajes y comunicación inter-servicios resiliente.",
    expertiseSecureTitle: "Transacciones Seguras",
    expertiseSecureDesc:
        "Implementación de cifrado de extremo a extremo, tokenización, integración de detección de fraude y controles de seguridad orientados al cumplimiento normativo.",
    expertiseDevopsTitle: "DevOps e Infraestructura",
    expertiseDevopsDesc:
        "Automatización de pipelines CI/CD, orquestación de contenedores con Kubernetes, infraestructura como código y estrategias de despliegue cloud-native.",

    expRole1: "Desarrollador Backend de Pagos",
    expPeriod1: "Mar 2023 — Presente",
    expDesc1:
        "Diseño, implementación y mantenimiento de microservicios de pagos. Infraestructura cloud, networking y DevOps para cumplimiento PCI-DSS.",
    expRole2: "Docente Asistente — Arquitectura de Microservicios",
    expPeriod2: "Jul 2024 — Presente",
    expDesc2:
        "Enseñanza de patrones de arquitectura de microservicios, diseño de sistemas distribuidos y laboratorios prácticos para estudiantes de ingeniería.",
    expRole3: "Ingeniero DevOps",
    expPeriod3: "May 2021 — Presente",
    expDesc3:
        "Ingeniería DevOps, diseño de pipelines CI/CD y automatización de infraestructura.",
    expRole4: "Jefe de Compañía — Redes y Sistemas",
    expPeriod4: "Dic 2020 — Mar 2023",
    expDesc4:
        "Lideré operaciones IT incluyendo networking, telefonía, virtualización de datacenter y mesa de ayuda para infraestructura militar.",

    // Projects
    projectsLabel: "Proyectos",
    projectsHeading: "Trabajos Seleccionados",
    projectsDescription:
        "Proyectos representativos que demuestran experiencia en sistemas de pagos, arquitectura backend y DevOps.",
    projectsComingSoonTitle: "Próximamente",
    projectsComingSoonDesc:
        "Estoy preparando mi portfolio de proyectos. Volvé pronto para casos de estudio detallados sobre sistemas de pagos, arquitecturas de microservicios y herramientas DevOps.",

    // Contact
    contactLabel: "Contacto",
    contactHeading: "Conectemos",
    contactDescription:
        "¿Interesado en discutir arquitectura fintech, sistemas de pagos o oportunidades de colaboración? Escribime.",
    contactEmail: "Email",
    contactLinkedIn: "LinkedIn",
    contactGitHub: "GitHub",

    // Footer
    footerRights: "Todos los derechos reservados.",
} as const;
