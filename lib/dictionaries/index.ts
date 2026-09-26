import type { Locale } from "../i18n";
import type { Dictionary } from "./en";
import { en } from "./en-content";
import { fa } from "./fa";

const dictionaries: Record<Locale, Dictionary> = { en, fa };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}

export type { Dictionary };
