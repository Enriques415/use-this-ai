import Link from "next/link";
import { SearchForm } from "@/components/search-form";
import { getFeaturedScenarios, getScenarios } from "@/data/catalog";
import { suggestQueries } from "@/lib/search";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE, siteUrl } from "@/lib/site";

export default function HomePage() {
  const featured = getFeaturedScenarios();
  const scenarios = getScenarios();
  const suggestions = suggestQueries();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: siteUrl(),
    description: SITE_DESCRIPTION,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl()}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <main id="content" className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl space-y-8">
        <p className="font-mono text-xs tracking-[0.18em] text-signal uppercase">A field guide</p>
        <SearchForm id="home-search" variant="hero" promptAsHeading />
        <p className="max-w-2xl text-lg text-muted-foreground">
          {SITE_TAGLINE} Describe the work in ordinary words. You will get the closest scenario, a short ranked
          list of tools, and steps for using each one.
        </p>
        <p className="text-sm text-muted-foreground">
          Try{" "}
          {suggestions.map((query, index) => (
            <span key={query}>
              {index > 0 ? ", " : null}
              <Link href={`/search?q=${encodeURIComponent(query)}`} className="text-primary underline-offset-4 hover:underline">
                {query}
              </Link>
            </span>
          ))}
          .
        </p>
      </div>

      <section className="mt-14 max-w-3xl" aria-labelledby="how-heading">
        <h2 id="how-heading" className="font-serif text-2xl tracking-tight">
          How to use this directory
        </h2>
        <ol className="mt-4 space-y-3">
          <li>
            <span className="font-semibold">1. Describe the job.</span> Search for what you are trying to finish, not
            for a brand name.
          </li>
          <li>
            <span className="font-semibold">2. Open the scenario.</span> Each one says who it is for and lists the
            tools in order, with a reason.
          </li>
          <li>
            <span className="font-semibold">3. Follow one guide.</span> The tool page has steps, caveats, and a link
            to the official site so you can check the current price.
          </li>
        </ol>
      </section>

      <section className="mt-14" aria-labelledby="featured-heading">
        <div className="flex items-baseline justify-between gap-4">
          <h2 id="featured-heading" className="font-serif text-2xl tracking-tight">
            Featured scenarios
          </h2>
          <Link href="/scenarios" className="text-sm font-semibold text-primary underline-offset-4 hover:underline">
            All {scenarios.length} scenarios
          </Link>
        </div>
        <ul className="mt-4 divide-y divide-border border-y border-border">
          {featured.map((scenario) => (
            <li key={scenario.slug}>
              <Link href={`/scenarios/${scenario.slug}`} className="block py-4 hover:bg-accent">
                <span className="font-serif text-xl">{scenario.name}</span>
                <span className="mt-1 block text-muted-foreground">{scenario.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
