"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useI18n } from "@/components/I18nProvider";
import { DOCS } from "@/lib/docs";

export function DocsSidebar() {
  const pathname = usePathname();
  const { t } = useI18n();

  return (
    <nav aria-label={t.sidebar.heading} className="text-sm">
      <p className="px-3 pb-2 font-pixel text-xs font-semibold uppercase tracking-wider text-brand dark:text-brand-light">
        {t.sidebar.heading}
      </p>
      <ul className="flex flex-col gap-0.5">
        {DOCS.map((doc) => {
          const href = `/docs/${doc.slug}`;
          const active = pathname === href;
          return (
            <li key={doc.slug}>
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={
                  "block rounded-lg px-3 py-1.5 transition-colors " +
                  (active
                    ? "bg-brand/10 font-medium text-brand dark:text-brand-light"
                    : "text-zinc-600 hover:bg-brand/5 hover:text-brand dark:text-zinc-400 dark:hover:text-brand-light")
                }
              >
                {t.docs[doc.slug]?.title ?? doc.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
