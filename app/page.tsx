"use client";

import Image from "next/image";
import Link from "next/link";
import type { MouseEvent } from "react";

import { useI18n } from "@/components/I18nProvider";
import { Reveal } from "@/components/Reveal";
import { SiteHeader } from "@/components/SiteHeader";
import { DOCS, GITHUB_URL } from "@/lib/docs";

const OWNERS = [
  { name: "q6r", url: "https://github.com/q6r", avatar: "/owners/q6r.jpg" },
  { name: "5xk", url: "https://github.com/5xk", avatar: "/owners/5xk.jpg" },
];

function GitHubMark() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden width={16} height={16} fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

/** Makes the card's hover glow follow the cursor. */
function trackGlow(e: MouseEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
}

export default function Home() {
  const { t } = useI18n();

  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative mx-auto flex max-w-4xl flex-col items-center px-6 pt-24 pb-20 text-center">
          <div className="relative mb-8 animate-float">
            <Image
              src="/logo.png"
              alt="Pixelcord"
              width={104}
              height={104}
              priority
              className="drop-shadow-[0_10px_40px_rgba(19,115,198,0.45)]"
            />
          </div>

          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-4 py-1.5 font-pixel text-xs font-semibold uppercase tracking-wider text-brand dark:text-brand-light">
            <span className="h-1.5 w-1.5 animate-glow rounded-full bg-brand dark:bg-brand-light" />
            {t.hero.eyebrow}
          </span>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl">
            {t.hero.titleLead}{" "}
            <span className="text-gradient">{t.hero.titleHighlight}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
            {t.hero.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/docs/getting-started"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition-all hover:-translate-y-0.5 hover:bg-brand-hover hover:shadow-brand/50"
            >
              {t.hero.ctaPrimary}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-background/40 px-6 py-3 text-sm font-semibold backdrop-blur transition-all hover:-translate-y-0.5 hover:border-brand hover:bg-brand/5"
            >
              <GitHubMark />
              {t.hero.ctaSecondary}
            </a>
          </div>
        </section>

        {/* Docs grid */}
        <section className="mx-auto max-w-5xl px-6 pb-20">
          <Reveal className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              {t.sections.docsHeading}
            </h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              {t.sections.docsSubheading}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DOCS.map((doc, i) => {
              const s = t.docs[doc.slug];
              return (
                <Reveal key={doc.slug} delay={i * 70} className="h-full">
                  <Link
                    href={`/docs/${doc.slug}`}
                    onMouseMove={trackGlow}
                    className="card-glow group flex h-full flex-col rounded-2xl border border-brand/10 bg-background/40 p-6 backdrop-blur hover:-translate-y-1 hover:border-brand/40"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 font-pixel text-sm font-bold text-brand dark:text-brand-light">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-lg font-semibold transition-colors group-hover:text-brand dark:group-hover:text-brand-light">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 flex-1 text-sm text-zinc-600 dark:text-zinc-400">
                      {s.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand opacity-0 transition-all group-hover:opacity-100 dark:text-brand-light">
                      Read
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* Owners */}
        <section className="mx-auto max-w-2xl px-6 pb-24">
          <Reveal className="mb-8 text-center">
            <h2 className="font-pixel text-sm font-bold uppercase tracking-wider text-brand dark:text-brand-light">
              {t.sections.ownersHeading}
            </h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              {t.sections.ownersSubheading}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {OWNERS.map((owner, i) => (
              <Reveal key={owner.name} delay={i * 90}>
                <a
                  href={owner.url}
                  target="_blank"
                  rel="noreferrer"
                  onMouseMove={trackGlow}
                  className="card-glow group flex flex-col items-center gap-3 rounded-2xl border border-brand/10 bg-background/40 p-6 text-center backdrop-blur hover:-translate-y-1 hover:border-brand/40"
                >
                  <Image
                    src={owner.avatar}
                    alt={owner.name}
                    width={84}
                    height={84}
                    className="h-20 w-20 rounded-full object-cover ring-2 ring-brand/30 transition-all group-hover:ring-4 group-hover:ring-brand/50"
                  />
                  <div>
                    <div className="font-pixel text-lg font-semibold">
                      @{owner.name}
                    </div>
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">
                      {t.ownerRole}
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/20 px-3 py-1 text-xs font-medium transition-colors group-hover:border-brand group-hover:text-brand dark:group-hover:text-brand-light">
                    <GitHubMark /> GitHub ↗
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-brand/10 px-6 py-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
        Pixelcord — {t.footer.tagline} {t.footer.builtBy}{" "}
        <a
          href="https://github.com/q6r"
          target="_blank"
          rel="noreferrer"
          className="font-pixel font-medium text-brand transition-colors hover:text-brand-hover dark:text-brand-light"
        >
          q6r
        </a>
        {" & "}
        <a
          href="https://github.com/5xk"
          target="_blank"
          rel="noreferrer"
          className="font-pixel font-medium text-brand transition-colors hover:text-brand-hover dark:text-brand-light"
        >
          5xk
        </a>
        .
      </footer>
    </div>
  );
}
