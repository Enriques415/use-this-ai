import type { Metadata } from "next";
import Link from "next/link";
import { PricingBadge } from "@/components/pricing-badge";
import { getTools } from "@/data/catalog";

export const metadata: Metadata = {
  title: "All tools",
  description: "Every AI tool and agent listed in Use This AI, with a one-line description and pricing.",
  alternates: { canonical: "/tools" },
};

export default function ToolsPage() {
  const tools = [...getTools()].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <main id="content" className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6">
      <h1 className="font-serif text-4xl tracking-tight">All tools</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        These are the tools behind the scenarios. Open one for step-by-step guides. Start from a scenario if you are
        not sure which tool you need.
      </p>
      <ul className="mt-8 divide-y divide-border border-y border-border">
        {tools.map((tool) => (
          <li key={tool.slug} className="py-4">
            <div className="flex flex-wrap items-center gap-2">
              <Link href={`/tools/${tool.slug}`} className="font-serif text-xl underline-offset-4 hover:underline">
                {tool.name}
              </Link>
              <PricingBadge pricing={tool.pricing} />
            </div>
            <p className="mt-1 text-muted-foreground">{tool.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
