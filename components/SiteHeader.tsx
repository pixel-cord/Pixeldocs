"use client";

import Image from "next/image";
import Link from "next/link";

import { useI18n } from "@/components/I18nProvider";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { GITHUB_URL } from "@/lib/docs";

export function SiteHeader() {
  const { t } = useI18n();

  return (
    <header className="glass sticky top-0 z-30 flex h-14 items-center justify-between border-b border-brand/10 px-4 sm:px-6">
      <Link href="/" className="group flex items-center gap-2">
        <Image
          src="/logo.png"
          alt=""
          width={28}
          height={28}
          className="rounded-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
        />
        <span className="font-pixel text-lg font-semibold">
          Pixelcord{" "}
          <span className="text-brand dark:text-brand-light">Docs</span>
        </span>
      </Link>
      <div className="flex items-center gap-3 sm:gap-4">
        <Link
          href="/docs/getting-started"
          className="hidden text-sm font-medium text-zinc-600 transition-colors hover:text-brand sm:block dark:text-zinc-300 dark:hover:text-brand-light"
        >
          {t.nav.docs}
        </Link>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-zinc-600 transition-colors hover:text-brand dark:text-zinc-300 dark:hover:text-brand-light"
        >
          {t.nav.github} ↗
        </a>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
