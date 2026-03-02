import { en } from "./en";
import { esAR } from "./es";
import type { TranslationKeys } from "./en";

export type Locale = "en" | "es-AR";

const translations: Record<Locale, Record<TranslationKeys, string | string[]>> = {
    en,
    "es-AR": esAR,
};

/**
 * Detect locale from:
 * 1. `lang` cookie (user override via toggle button)
 * 2. `Accept-Language` header (browser default)
 * Falls back to "en".
 */
export function getLocale(request: Request): Locale {
    // 1. Check cookie override
    const cookieHeader = request.headers.get("cookie") ?? "";
    const langCookie = cookieHeader
        .split(";")
        .map((c) => c.trim())
        .find((c) => c.startsWith("lang="));

    if (langCookie) {
        const value = langCookie.split("=")[1];
        if (value === "es-AR" || value === "en") return value;
    }

    // 2. Check Accept-Language header
    const acceptLang = request.headers.get("accept-language") ?? "";
    if (/es[-_]AR/i.test(acceptLang) || /^es\b/i.test(acceptLang)) {
        return "es-AR";
    }

    return "en";
}

/** Get a single translated string. */
export function t(locale: Locale, key: TranslationKeys): string {
    const value = translations[locale]?.[key] ?? translations.en[key];
    if (Array.isArray(value)) return value[0];
    return value;
}

/** Get a translated string array (e.g. paragraphs). */
export function tArray(locale: Locale, key: TranslationKeys): string[] {
    const value = translations[locale]?.[key] ?? translations.en[key];
    if (Array.isArray(value)) return value;
    return [value];
}

/** Get the category name translation. */
export function tCategory(locale: Locale, category: string): string {
    const keyMap: Record<string, TranslationKeys> = {
        Languages: "techCategoryLanguages",
        Frameworks: "techCategoryFrameworks",
        Infrastructure: "techCategoryInfrastructure",
        Data: "techCategoryData",
        DevOps: "techCategoryDevOps",
        Cloud: "techCategoryCloud",
    };
    const key = keyMap[category];
    return key ? t(locale, key) : category;
}

/** Build the expertise items with translations. */
export function getExpertise(locale: Locale) {
    return [
        {
            title: t(locale, "expertiseBackendTitle"),
            description: t(locale, "expertiseBackendDesc"),
            icon: "server",
        },
        {
            title: t(locale, "expertisePaymentTitle"),
            description: t(locale, "expertisePaymentDesc"),
            icon: "credit-card",
        },
        {
            title: t(locale, "expertiseDistributedTitle"),
            description: t(locale, "expertiseDistributedDesc"),
            icon: "network",
        },
        {
            title: t(locale, "expertiseSecureTitle"),
            description: t(locale, "expertiseSecureDesc"),
            icon: "shield",
        },
        {
            title: t(locale, "expertiseDevopsTitle"),
            description: t(locale, "expertiseDevopsDesc"),
            icon: "cloud",
        },
    ];
}

/** Build the experience items with translations. */
export function getExperience(locale: Locale) {
    return [
        {
            role: t(locale, "expRole1"),
            company: "INI",
            period: t(locale, "expPeriod1"),
            description: t(locale, "expDesc1"),
        },
        {
            role: t(locale, "expRole2"),
            company: "ITBA",
            period: t(locale, "expPeriod2"),
            description: t(locale, "expDesc2"),
        },
        {
            role: t(locale, "expRole3"),
            company: "Robosophy",
            period: t(locale, "expPeriod3"),
            description: t(locale, "expDesc3"),
        },
        {
            role: t(locale, "expRole4"),
            company: "Argentine Army",
            period: t(locale, "expPeriod4"),
            description: t(locale, "expDesc4"),
        },
    ];
}
