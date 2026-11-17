import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { PricingBadge } from "@/components/pricing-badge";
import { SaveButton } from "@/components/save-button";
import { buttonVariants } from "@/components/ui/button";
import { getScenario, getTool, getTools } from "@/data/catalog";
import { PRICING_LABEL } from "@/lib/pricing";
import { cn } from "@/lib/utils";

type Params = { slug: string };

export function generateStaticParams() {
  return getTools().map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return { title: "Tool" };
  const description = `${tool.description} ${PRICING_LABEL[tool.pricing]}. Guides for the jobs it fits.`;
  return {
    title: tool.name,
    description,
    alternates: { canonical: `/tools/${tool.slug}` },
    openGraph: { title: tool.name, description },
  };
}

export default function ToolPage({ params }: { params: Promise<Params> }) {
  return (
    <Suspense
      fallback={
        <main id="content" className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6">
          <p className="text-muted-foreground">Loading this tool…</p>
        </main>
      }
    >
      <ToolContent params={params} />
    </Suspense>
  );
}

async function ToolContent({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();

  const related = tool.usages
    .map((guide) => getScenario(guide.scenarioSlug))
    .filter((scenario) => scenario !== undefined);

  const openSourceNotes = tool.usages.flatMap((guide) => {
    const scenario = getScenario(guide.scenarioSlug);
    if (!guide.openSource || !scenario) return [];
    return [{ ...guide.openSource, scenarioName: scenario.name, scenarioSlug: scenario.slug }];
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: tool.description,
    url: tool.officialUrl,
    applicationCategory: "BusinessApplication",
  };

  return (
    <main id="content" className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
        <Link href="/tools" className="underline-offset-4 hover:underline">
          Tools
        </Link>
        <span aria-hidden="true"> / </span>
        <span className="text-foreground">{tool.name}</span>
      </nav>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <h1 className="font-serif text-4xl tracking-tight">{tool.name}</h1>
        <PricingBadge pricing={tool.pricing} />
      </div>
      <p className="mt-3 max-w-3xl text-lg">{tool.description}</p>
      <p className="mt-3 max-w-3xl text-muted-foreground">{tool.pricingDetail}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href={tool.officialUrl}
          className={cn(buttonVariants({ size: "lg" }), "h-10 px-4")}
          rel="noopener noreferrer"
          target="_blank"
        >
          Open official site
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <SaveButton slug={tool.slug} name={tool.name} />
      </div>

      <div className="mt-12 space-y-12">
        {tool.usages.map((guide) => {
          const scenario = getScenario(guide.scenarioSlug);
          if (!scenario) return null;
          return (
            <article key={guide.scenarioSlug} id={scenario.slug} className="scroll-mt-6 max-w-3xl">
              <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">Usage guide</p>
              <h2 className="mt-1 font-serif text-3xl tracking-tight">
                <Link href={`/scenarios/${scenario.slug}`} className="underline-offset-4 hover:underline">
                  {scenario.name}
                </Link>
              </h2>
              <p className="mt-2 text-lg">{guide.summary}</p>
              <ol className="mt-4 list-decimal space-y-3 pl-5">
                {guide.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <h3 className="mt-6 font-semibold">Watch out</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-muted-foreground">
                {guide.caveats.map((caveat) => (
                  <li key={caveat}>{caveat}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      {openSourceNotes.length > 0 || tool.githubUrl ? (
        <section className="mt-12 max-w-3xl" aria-labelledby="oss">
          <h2 id="oss" className="font-serif text-2xl tracking-tight">
            Open source, when you want to run it yourself
          </h2>
          <p className="mt-2 text-muted-foreground">
            These projects are related. They are not the same product as {tool.name}.
          </p>
          <ul className="mt-4 space-y-4">
            {tool.githubUrl ? (
              <li className="rounded-md border border-border bg-card p-4">
                <a href={tool.githubUrl} className="font-semibold underline-offset-4 hover:underline" rel="noopener noreferrer" target="_blank">
                  Official repository
                </a>
                <p className="mt-1 text-sm text-muted-foreground">Published by the project, separate from the hosted product.</p>
              </li>
            ) : null}
            {openSourceNotes.map((note) => (
              <li key={`${note.scenarioSlug}-${note.url}`} className="rounded-md border border-border bg-card p-4">
                <p className="text-sm text-muted-foreground">For {note.scenarioName}</p>
                <a href={note.url} className="font-semibold underline-offset-4 hover:underline" rel="noopener noreferrer" target="_blank">
                  {note.name}
                </a>
                <p className="mt-2">{note.howToRun}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="mt-12" aria-labelledby="related">
        <h2 id="related" className="font-serif text-2xl tracking-tight">
          Related scenarios
        </h2>
        <ul className="mt-3 divide-y divide-border border-y border-border">
          {related.map((scenario) => (
            <li key={scenario.slug}>
              <Link href={`/scenarios/${scenario.slug}`} className="block py-3 hover:bg-accent">
                <span className="font-semibold">{scenario.name}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{scenario.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
