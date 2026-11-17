import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { RankedTools } from "@/components/ranked-tools";
import {
  ScenarioBestFor,
  ScenarioFaqs,
  ScenarioGuide,
  ScenarioRelated,
} from "@/components/scenario-sections";
import { getScenario, getScenarios } from "@/data/catalog";

type Params = { slug: string };

export function generateStaticParams() {
  return getScenarios().map((scenario) => ({ slug: scenario.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const scenario = getScenario(slug);
  if (!scenario) return { title: "Scenario" };
  return {
    title: scenario.name,
    description: scenario.seoDescription,
    alternates: { canonical: `/scenarios/${scenario.slug}` },
    openGraph: { title: scenario.name, description: scenario.seoDescription },
  };
}

export default function ScenarioPage({ params }: { params: Promise<Params> }) {
  return (
    <Suspense
      fallback={
        <main id="content" className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6">
          <p className="text-muted-foreground">Loading this scenario…</p>
        </main>
      }
    >
      <ScenarioContent params={params} />
    </Suspense>
  );
}

async function ScenarioContent({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const scenario = getScenario(slug);
  if (!scenario) notFound();

  const faqLd =
    scenario.faqs && scenario.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: scenario.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }
      : null;

  return (
    <main id="content" className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6">
      {faqLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      ) : null}
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
        <Link href="/scenarios" className="underline-offset-4 hover:underline">
          Scenarios
        </Link>
        <span aria-hidden="true"> / </span>
        <span className="text-foreground">{scenario.name}</span>
      </nav>
      <h1 className="mt-3 max-w-3xl font-serif text-4xl tracking-tight">{scenario.name}</h1>
      <p className="mt-3 max-w-3xl text-lg">{scenario.summary}</p>

      <section className="mt-8 max-w-3xl" aria-labelledby="audience">
        <h2 id="audience" className="font-serif text-2xl tracking-tight">
          Who it is for
        </h2>
        <p className="mt-2">{scenario.audience}</p>
      </section>

      <section className="mt-8 max-w-3xl" aria-labelledby="examples">
        <h2 id="examples" className="font-serif text-2xl tracking-tight">
          How people describe this job
        </h2>
        <ul className="mt-3 space-y-2">
          {scenario.examples.slice(0, 6).map((example) => (
            <li key={example} className="border-l-2 border-primary pl-3">
              “{example}”
            </li>
          ))}
        </ul>
      </section>

      <ScenarioBestFor scenario={scenario} />

      <section className="mt-10" aria-labelledby="ranked">
        <h2 id="ranked" className="font-serif text-2xl tracking-tight">
          Recommended tools
        </h2>
        <p className="mt-2 max-w-3xl text-muted-foreground">
          Listed in the order to try them for this job. Pricing changes, so confirm it on the official site.
        </p>
        <div className="mt-4">
          <RankedTools scenario={scenario} />
        </div>
      </section>

      <ScenarioGuide scenario={scenario} />
      <ScenarioFaqs scenario={scenario} />
      <ScenarioRelated scenario={scenario} />
    </main>
  );
}
