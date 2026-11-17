import type { Metadata } from "next";
import Link from "next/link";
import { getScenarios } from "@/data/catalog";

export const metadata: Metadata = {
  title: "All scenarios",
  description:
    "Browse every job in Use This AI, from writing and translation to building a small app.",
  alternates: { canonical: "/scenarios" },
};

export default function ScenariosPage() {
  const scenarios = getScenarios();

  return (
    <main id="content" className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6">
      <h1 className="font-serif text-4xl tracking-tight">All scenarios</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        A scenario is a job, not a product category. Open one to see who it is for and which tools to try first.
      </p>
      <ul className="mt-8 divide-y divide-border border-y border-border">
        {scenarios.map((scenario, index) => (
          <li key={scenario.slug}>
            <Link href={`/scenarios/${scenario.slug}`} className="flex gap-4 py-4 hover:bg-accent">
              <span className="w-8 shrink-0 font-mono text-sm text-primary" aria-hidden="true">
                {index + 1}
              </span>
              <span>
                <span className="block font-serif text-xl">{scenario.name}</span>
                <span className="mt-1 block text-muted-foreground">{scenario.summary}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
