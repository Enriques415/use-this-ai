import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { RankedTools } from "@/components/ranked-tools";
import { SearchForm } from "@/components/search-form";
import { searchScenarios, suggestQueries } from "@/lib/search";

export const metadata: Metadata = {
  title: "Search",
  description: "Search Use This AI by the job you need done, in everyday language.",
  robots: { index: false, follow: true },
};

type SearchParams = Promise<{ q?: string | string[] }>;

function queryFrom(value: string | string[] | undefined): string {
  const raw = Array.isArray(value) ? value[0] : value;
  return (raw ?? "").trim();
}

export default function SearchPage({ searchParams }: { searchParams: SearchParams }) {
  return (
    <main id="content" className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6">
      <Suspense fallback={<p className="text-muted-foreground">Searching the directory…</p>}>
        <SearchResults searchParams={searchParams} />
      </Suspense>
    </main>
  );
}

async function SearchResults({ searchParams }: { searchParams: SearchParams }) {
  const query = queryFrom((await searchParams).q);
  const suggestions = suggestQueries();

  return (
    <div className="space-y-8">
      <SearchForm id="results-search" variant="hero" defaultValue={query} promptAsHeading />
      {query.length === 0 ? (
        <EmptySearch
          title="Describe the job"
          body="Search works best as a sentence you would say to a colleague. The directory matches scenarios, including other ways people phrase the same job."
          suggestions={suggestions}
        />
      ) : (
        <ResultList query={query} suggestions={suggestions} />
      )}
    </div>
  );
}

function ResultList({ query, suggestions }: { query: string; suggestions: string[] }) {
  const matches = searchScenarios(query);
  const [best, ...rest] = matches;

  if (!best) {
    return (
      <EmptySearch
        title={`No scenario matches “${query}”`}
        body="Try the job you are trying to finish, such as a resume, a product photo, or a meeting recap. Brand names help less than the task."
        suggestions={suggestions}
      />
    );
  }

  return (
    <div className="space-y-10">
      <section aria-labelledby="best-match">
        <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">Best match</p>
        <h2 id="best-match" className="mt-1 font-serif text-3xl tracking-tight">
          <Link href={`/scenarios/${best.scenario.slug}`} className="underline-offset-4 hover:underline">
            {best.scenario.name}
          </Link>
        </h2>
        <p className="mt-2 max-w-3xl text-lg">{best.scenario.summary}</p>
        <p className="mt-2 max-w-3xl text-muted-foreground">{best.matchedBecause}</p>
        <div className="mt-6">
          <h3 className="font-serif text-xl">Recommended tools</h3>
          <div className="mt-3">
            <RankedTools scenario={best.scenario} />
          </div>
        </div>
      </section>
      {rest.length > 0 ? (
        <section aria-labelledby="other-matches">
          <h2 id="other-matches" className="font-serif text-2xl tracking-tight">
            Other scenarios that also fit
          </h2>
          <ul className="mt-3 divide-y divide-border border-y border-border">
            {rest.slice(0, 6).map((match) => (
              <li key={match.scenario.slug}>
                <Link href={`/scenarios/${match.scenario.slug}`} className="block py-3 hover:bg-accent">
                  <span className="font-semibold">{match.scenario.name}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">{match.matchedBecause}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}

function EmptySearch({
  title,
  body,
  suggestions,
}: {
  title: string;
  body: string;
  suggestions: string[];
}) {
  return (
    <div className="max-w-2xl space-y-4 rounded-md border border-border bg-card p-5">
      <h2 className="font-serif text-2xl tracking-tight">{title}</h2>
      <p>{body}</p>
      <p className="text-sm text-muted-foreground">
        Or start from{" "}
        {suggestions.map((item, index) => (
          <span key={item}>
            {index > 0 ? ", " : null}
            <Link href={`/search?q=${encodeURIComponent(item)}`} className="text-primary underline-offset-4 hover:underline">
              {item}
            </Link>
          </span>
        ))}
        .
      </p>
    </div>
  );
}
