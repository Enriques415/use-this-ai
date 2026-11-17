"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { PricingBadge } from "@/components/pricing-badge";
import { Button } from "@/components/ui/button";
import type { ToolIndexItem } from "@/data/catalog";
import { getSavedServerSnapshot, getSavedSnapshot, subscribeSaved, writeSaved } from "@/lib/saved";

export function SavedTools({ tools }: { tools: ToolIndexItem[] }) {
  const slugs = useSyncExternalStore(subscribeSaved, getSavedSnapshot, getSavedServerSnapshot);
  const saved = slugs
    .map((slug) => tools.find((tool) => tool.slug === slug))
    .filter((tool): tool is ToolIndexItem => Boolean(tool));

  if (saved.length === 0) {
    return (
      <div className="space-y-4 rounded-md border border-border bg-card p-5">
        <p>Nothing is saved in this browser yet.</p>
        <p className="text-muted-foreground">
          Open a tool and choose Save. The list stays on this device. There is no account.
        </p>
        <Button render={<Link href="/tools" />} className="h-10 px-4">
          Browse tools
        </Button>
      </div>
    );
  }

  function remove(slug: string) {
    writeSaved(slugs.filter((item) => item !== slug));
  }

  return (
    <ul className="divide-y divide-border rounded-md border border-border bg-card">
      {saved.map((tool) => (
        <li key={tool.slug} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <Link href={`/tools/${tool.slug}`} className="font-serif text-xl underline-offset-4 hover:underline">
                {tool.name}
              </Link>
              <PricingBadge pricing={tool.pricing} />
            </div>
            <p className="text-muted-foreground">{tool.description}</p>
          </div>
          <Button type="button" variant="outline" className="h-10" onClick={() => remove(tool.slug)}>
            Remove
          </Button>
        </li>
      ))}
    </ul>
  );
}
