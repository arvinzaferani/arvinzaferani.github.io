export const locales = ["en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeDirection: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
};

export const localeLabels: Record<Locale, string> = {
  en: "EN",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const htmlLang: Record<Locale, string> = {
  en: "en",
};
