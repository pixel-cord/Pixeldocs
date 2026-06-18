"use client";

import { useI18n } from "@/components/I18nProvider";
import { LOCALE_LABELS, LOCALES } from "@/lib/i18n";

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t.nav.toggleLanguage}
      className="relative inline-flex items-center rounded-full border border-brand/30 bg-brand/5 p-0.5 text-xs font-semibold"
    >
      {/* sliding highlight */}
      <span
        aria-hidden
        className="absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-brand transition-transform duration-300 ease-out"
        style={{
          transform:
            locale === LOCALES[0] ? "translateX(0)" : "translateX(100%)",
        }}
      />
      {LOCALES.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          className={
            "relative z-10 min-w-9 rounded-full px-2.5 py-1 transition-colors " +
            (locale === code
              ? "text-white"
              : "text-zinc-500 hover:text-brand dark:text-zinc-400 dark:hover:text-brand-light")
          }
        >
          {LOCALE_LABELS[code]}
        </button>
      ))}
    </div>
  );
}
