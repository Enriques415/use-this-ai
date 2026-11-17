/**
 * Catalog shape for Use This AI.
 * A later import pipeline can emit the same types. Keep components reading
 * this model instead of embedding copy in JSX.
 */

export type Pricing = "free" | "paid" | "freemium";

export type OpenSourceNote = {
  name: string;
  url: string;
  howToRun: string;
};

export type Usage = {
  scenarioSlug: string;
  summary: string;
  steps: string[];
  caveats: string[];
  openSource?: OpenSourceNote;
};

export type Tool = {
  slug: string;
  name: string;
  description: string;
  pricing: Pricing;
  pricingDetail: string;
  officialUrl: string;
  /** Official source repository, only when the product itself publishes one. */
  githubUrl?: string;
  /** Date this tool was listed in the directory (YYYY-MM-DD), not the product launch date. */
  addedOn: string;
  usages: Usage[];
};

export type RankedTool = {
  toolSlug: string;
  reason: string;
};

/** A how-to block or a short note that keeps a neighboring job separate. */
export type GuideSection = {
  heading: string;
  paragraphs?: string[];
  steps?: string[];
};

/** One row in a “Best AI for X” section. Head terms live here, not in the H1. */
export type BestForChoice = {
  label: string;
  detail: string;
  toolSlug?: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type RelatedScenario = {
  slug: string;
  note: string;
};

export type Scenario = {
  slug: string;
  name: string;
  summary: string;
  audience: string;
  /** Natural phrases a person might type, including aliases. */
  examples: string[];
  seoDescription: string;
  featured?: boolean;
  tools: RankedTool[];
  /** Optional “Best AI for X” picks. Rendered on the scenario page. */
  bestFor?: {
    heading: string;
    intro?: string;
    choices: BestForChoice[];
  };
  /** How-to sections and job-boundary notes. Rendered on the scenario page. */
  guide?: GuideSection[];
  faqs?: Faq[];
  /** Neighboring jobs, with a sentence on why they are not this page. */
  related?: RelatedScenario[];
};

export function usage(
  scenarioSlug: string,
  summary: string,
  steps: string[],
  caveats: string[],
  openSource?: OpenSourceNote,
): Usage {
  return { scenarioSlug, summary, steps, caveats, openSource };
}
