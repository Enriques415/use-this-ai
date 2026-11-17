import Link from "next/link";
import { PricingBadge } from "@/components/pricing-badge";
import { getTool } from "@/data/catalog";
import type { Scenario } from "@/data/types";

export function RankedTools({ scenario }: { scenario: Scenario }) {
  return (
    <ol className="list-none space-y-4">
      {scenario.tools.map((ranked, index) => {
        const tool = getTool(ranked.toolSlug);
        if (!tool) return null;
        return (
          <li key={tool.slug} className="rounded-md border border-border bg-card p-4 sm:p-5">
            <div className="flex gap-4">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-sm bg-primary font-mono text-sm text-primary-foreground shadow-[0_0_16px_rgba(0,229,255,0.35)]">
                <span className="sr-only">Rank {index + 1}. </span>
                <span aria-hidden="true">{index + 1}</span>
              </span>
              <div className="min-w-0 space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-serif text-2xl tracking-tight">
                    <Link href={`/tools/${tool.slug}#${scenario.slug}`} className="underline-offset-4 hover:underline">
                      {tool.name}
                    </Link>
                  </h3>
                  <PricingBadge pricing={tool.pricing} />
                </div>
                <p>{ranked.reason}</p>
                <p className="text-muted-foreground">{tool.description}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                  <Link
                    href={`/tools/${tool.slug}#${scenario.slug}`}
                    className="font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    Read the guide
                  </Link>
                  <a
                    href={tool.officialUrl}
                    className="underline-offset-4 hover:underline"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Official site
                    <span className="sr-only"> for {tool.name} (opens in a new tab)</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
