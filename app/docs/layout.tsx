import { DocsSidebar } from "@/components/DocsSidebar";
import { SiteHeader } from "@/components/SiteHeader";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <div className="mx-auto flex w-full max-w-6xl flex-1">
        <aside className="hidden w-60 shrink-0 border-r border-zinc-200 px-3 py-8 md:block dark:border-zinc-800">
          <div className="sticky top-20">
            <DocsSidebar />
          </div>
        </aside>
        <main className="min-w-0 flex-1 px-5 py-8 sm:px-10">
          <article className="prose prose-zinc max-w-none dark:prose-invert prose-headings:scroll-mt-20 prose-a:text-brand hover:prose-a:text-brand-hover dark:prose-a:text-brand-light prose-code:before:content-none prose-code:after:content-none">
            {children}
          </article>
        </main>
      </div>
    </div>
  );
}
