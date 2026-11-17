import type { Metadata } from "next";
import Link from "next/link";
import { PricingBadge } from "@/components/pricing-badge";
import { getTools } from "@/data/catalog";
import { CATALOG_AS_OF, formatListedDate, isNewlyListed } from "@/lib/site";

export const metadata: Metadata = {
  title: "Newly listed tools",
  description: "Tools added to the Use This AI directory this week, with links to their guides.",
  alternates: { canonical: "/new" },
};

export default function NewToolsPage() {
  const listed = getTools()
    .filter((tool) => isNewlyListed(tool.addedOn))
    .sort((a, b) => b.addedOn.localeCompare(a.addedOn));

  return (
    <main id="content" className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6">
      <h1 className="font-serif text-4xl tracking-tight">This week’s newly listed tools</h1>
      <p className="mt-3 max-w-2xl text-lg">
        These tools were added to the directory in the week ending {formatListedDate(CATALOG_AS_OF)}. The date is
        when we listed them, not when the company launched.
      </p>
      {listed.length === 0 ? (
        <p className="mt-8 rounded-md border border-border bg-card p-5">
          Nothing new was listed this week. Browse the{" "}
          <Link href="/tools" className="underline-offset-4 hover:underline">
            full tool list
          </Link>{" "}
          or start from a{" "}
          <Link href="/scenarios" className="underline-offset-4 hover:underline">
            scenario
          </Link>
          .
        </p>
      ) : (
        <ul className="mt-8 space-y-4">
          {listed.map((tool) => (
            <li key={tool.slug} className="rounded-md border border-border bg-card p-4 sm:p-5">
              <p className="text-sm text-muted-foreground">Listed {formatListedDate(tool.addedOn)}</p>
              <div className="mt-1 flex flex-wrap items-center gap-2">
                <h2 className="font-serif text-2xl">
                  <Link href={`/tools/${tool.slug}`} className="underline-offset-4 hover:underline">
                    {tool.name}
                  </Link>
                </h2>
                <PricingBadge pricing={tool.pricing} />
              </div>
              <p className="mt-2">{tool.description}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
