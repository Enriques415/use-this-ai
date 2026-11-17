import type { Metadata } from "next";
import Link from "next/link";
import { SearchForm } from "@/components/search-form";
import { getFeaturedScenarios } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That address is not in the Use This AI directory. Search for the job you need done.",
};

export default function NotFound() {
  const featured = getFeaturedScenarios().slice(0, 4);

  return (
    <main id="content" className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6">
      <p className="font-mono text-xs tracking-[0.18em] text-signal uppercase">404</p>
      <h1 className="mt-2 font-serif text-4xl tracking-tight">That page is not in the directory</h1>
      <p className="mt-3 max-w-2xl text-lg">
        The address may be mistyped, or the page was never published. Search for the job you need done, or open a
        scenario below.
      </p>
      <div className="mt-8 max-w-3xl">
        <SearchForm id="missing-search" variant="hero" />
      </div>
      <ul className="mt-8 max-w-2xl divide-y divide-border border-y border-border">
        {featured.map((scenario) => (
          <li key={scenario.slug}>
            <Link href={`/scenarios/${scenario.slug}`} className="block py-3 hover:bg-accent">
              <span className="font-semibold">{scenario.name}</span>
              <span className="mt-1 block text-sm text-muted-foreground">{scenario.summary}</span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-6">
        <Link href="/" className="font-semibold text-primary underline-offset-4 hover:underline">
          Back to the start
        </Link>
      </p>
    </main>
  );
}
