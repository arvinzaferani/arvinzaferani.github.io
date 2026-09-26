import type { Locale } from "../i18n";
import type { Dictionary } from "./en";
import { en } from "./en-content";
import { fa } from "./fa";

/** `fa` stays on disk, parked: add "fa" back to `locales` to publish it again. */
const dictionaries = { en, fa };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}

export type { Dictionary };
