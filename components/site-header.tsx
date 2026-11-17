import Link from "next/link";
import { HeaderSearch } from "@/components/header-search";
import { NavLinks } from "@/components/nav-links";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-card/95">
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-4 py-4 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Link href="/" className="inline-flex items-baseline gap-2">
              <span className="font-mono text-lg tracking-tight text-foreground sm:text-xl">
                <span className="text-primary">/</span>
                {SITE_NAME}
              </span>
            </Link>
            <p className="font-mono text-xs tracking-wide text-muted-foreground">{SITE_TAGLINE}</p>
          </div>
          <NavLinks />
        </div>
        <HeaderSearch />
      </div>
    </header>
  );
}
