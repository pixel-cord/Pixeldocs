import { DEFAULT_LOCALE, type Locale, LOCALE_STORAGE_KEY } from "./i18n";

// Tiny external store for the active locale, read with useSyncExternalStore so
// the persisted choice survives reloads without setState-in-effect or hydration
// mismatches (server + first client render use the default, then re-sync).
const listeners = new Set<() => void>();
let cached: Locale | null = null;

function readStored(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  const saved = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  return saved === "pt" || saved === "en" ? saved : DEFAULT_LOCALE;
}

export function getLocale(): Locale {
  // Cache so getSnapshot returns a stable value between changes.
  if (cached === null) cached = readStored();
  return cached;
}

export function getServerLocale(): Locale {
  return DEFAULT_LOCALE;
}

export function setLocale(next: Locale): void {
  cached = next;
  if (typeof window !== "undefined") {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
    document.documentElement.lang = next;
  }
  listeners.forEach((listener) => listener());
}

export function subscribeLocale(callback: () => void): () => void {
  listeners.add(callback);
  return () => listeners.delete(callback);
}
