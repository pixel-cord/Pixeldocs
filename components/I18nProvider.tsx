"use client";

import { useSyncExternalStore } from "react";

import { type Dictionary, dictionaries, type Locale } from "@/lib/i18n";
import {
  getLocale,
  getServerLocale,
  setLocale,
  subscribeLocale,
} from "@/lib/localeStore";

interface I18n {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
}

export function useI18n(): I18n {
  const locale = useSyncExternalStore(
    subscribeLocale,
    getLocale,
    getServerLocale,
  );
  return { locale, setLocale, t: dictionaries[locale] };
}
