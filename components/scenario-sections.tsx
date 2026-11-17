import Link from "next/link";
import { getScenario, getTool } from "@/data/catalog";
import type { Scenario } from "@/data/types";

export function ScenarioBestFor({ scenario }: { scenario: Scenario }) {
  if (!scenario.bestFor) return null;
  const { heading, intro, choices } = scenario.bestFor;

  return (
    <section className="mt-10 max-w-3xl" aria-labelledby="best-for">
      <h2 id="best-for" className="font-serif text-2xl tracking-tight">
        {heading}
      </h2>
      {intro ? <p className="mt-2">{intro}</p> : null}
      <ul className="mt-4 space-y-4">
        {choices.map((choice) => {
          const tool = choice.toolSlug ? getTool(choice.toolSlug) : undefined;
          return (
            <li key={choice.label} className="border-l-2 border-primary pl-3">
              <p className="font-semibold">
                {tool ? (
                  <Link href={`/tools/${tool.slug}#${scenario.slug}`} className="underline-offset-4 hover:underline">
                    {choice.label}
                  </Link>
                ) : (
                  choice.label
                )}
              </p>
              <p className="mt-1 text-muted-foreground">{choice.detail}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export function ScenarioGuide({ scenario }: { scenario: Scenario }) {
  if (!scenario.guide?.length) return null;

  return (
    <div className="mt-10 max-w-3xl space-y-10">
      {scenario.guide.map((section, index) => (
        <section key={section.heading} aria-labelledby={`guide-${index}`}>
          <h2 id={`guide-${index}`} className="font-serif text-2xl tracking-tight">
            {section.heading}
          </h2>
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph} className="mt-2">
              {paragraph}
            </p>
          ))}
          {section.steps && section.steps.length > 0 ? (
            <ol className="mt-4 list-decimal space-y-3 pl-5">
              {section.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          ) : null}
        </section>
      ))}
    </div>
  );
}

export function ScenarioFaqs({ scenario }: { scenario: Scenario }) {
  if (!scenario.faqs?.length) return null;

  return (
    <section className="mt-10 max-w-3xl" aria-labelledby="faq">
      <h2 id="faq" className="font-serif text-2xl tracking-tight">
        Questions people ask
      </h2>
      <dl className="mt-4 space-y-5">
        {scenario.faqs.map((faq) => (
          <div key={faq.question}>
            <dt className="font-semibold">{faq.question}</dt>
            <dd className="mt-1 text-muted-foreground">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function ScenarioRelated({ scenario }: { scenario: Scenario }) {
  if (!scenario.related?.length) return null;

  return (
    <section className="mt-10 max-w-3xl" aria-labelledby="related-scenarios">
      <h2 id="related-scenarios" className="font-serif text-2xl tracking-tight">
        Nearby jobs, kept separate
      </h2>
      <ul className="mt-4 divide-y divide-border border-y border-border">
        {scenario.related.map((related) => {
          const target = getScenario(related.slug);
          if (!target) return null;
          return (
            <li key={related.slug}>
              <Link href={`/scenarios/${target.slug}`} className="block py-4 hover:bg-accent">
                <span className="font-serif text-xl">{target.name}</span>
                <span className="mt-1 block text-muted-foreground">{related.note}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
