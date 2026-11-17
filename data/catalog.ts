import { scenarios } from "@/data/scenarios";
import type { Scenario, Tool, Usage } from "@/data/types";
import { tools } from "@/data/tools";

function assertCatalog(scenarioList: Scenario[], toolList: Tool[]) {
  // 20 seeded jobs, plus the 17 Nov 2026 batch: video, voice, and agents.
  if (scenarioList.length !== 23) {
    throw new Error(`Expected 23 scenarios, found ${scenarioList.length}.`);
  }

  const scenarioSlugs = new Set<string>();
  for (const scenario of scenarioList) {
    if (scenarioSlugs.has(scenario.slug)) {
      throw new Error(`Duplicate scenario slug: ${scenario.slug}`);
    }
    scenarioSlugs.add(scenario.slug);
    if (scenario.tools.length < 2 || scenario.tools.length > 4) {
      throw new Error(`${scenario.slug} should list 2 to 4 tools.`);
    }
    if (scenario.examples.length < 4) {
      throw new Error(`${scenario.slug} needs more example phrases.`);
    }
  }

  const toolSlugs = new Set<string>();
  for (const tool of toolList) {
    if (toolSlugs.has(tool.slug)) {
      throw new Error(`Duplicate tool slug: ${tool.slug}`);
    }
    toolSlugs.add(tool.slug);
    if (!tool.officialUrl.startsWith("https://")) {
      throw new Error(`${tool.slug} needs an https official URL.`);
    }
    if (tool.usages.length === 0) {
      throw new Error(`${tool.slug} has no usage guides.`);
    }
    const seen = new Set<string>();
    for (const guide of tool.usages) {
      if (seen.has(guide.scenarioSlug)) {
        throw new Error(`${tool.slug} repeats a guide for ${guide.scenarioSlug}.`);
      }
      seen.add(guide.scenarioSlug);
      if (!scenarioSlugs.has(guide.scenarioSlug)) {
        throw new Error(`${tool.slug} guides an unknown scenario: ${guide.scenarioSlug}`);
      }
      if (guide.steps.length < 4 || guide.caveats.length < 1) {
        throw new Error(`${tool.slug} / ${guide.scenarioSlug} guide is too thin.`);
      }
    }
  }

  for (const scenario of scenarioList) {
    const ranked = new Set<string>();
    for (const entry of scenario.tools) {
      if (ranked.has(entry.toolSlug)) {
        throw new Error(`${scenario.slug} ranks ${entry.toolSlug} twice.`);
      }
      ranked.add(entry.toolSlug);
      const tool = toolList.find((item) => item.slug === entry.toolSlug);
      if (!tool) {
        throw new Error(`${scenario.slug} ranks missing tool ${entry.toolSlug}.`);
      }
      const guide = tool.usages.find((item) => item.scenarioSlug === scenario.slug);
      if (!guide) {
        throw new Error(`${tool.slug} is ranked on ${scenario.slug} without a usage guide.`);
      }
    }

    for (const section of scenario.guide ?? []) {
      const hasCopy = (section.paragraphs?.length ?? 0) > 0 || (section.steps?.length ?? 0) > 0;
      if (!section.heading.trim() || !hasCopy) {
        throw new Error(`${scenario.slug} has an empty guide section.`);
      }
    }

    for (const choice of scenario.bestFor?.choices ?? []) {
      if (choice.toolSlug && !toolList.some((tool) => tool.slug === choice.toolSlug)) {
        throw new Error(`${scenario.slug} best-for choice names missing tool ${choice.toolSlug}.`);
      }
    }

    const relatedSlugs = new Set<string>();
    for (const related of scenario.related ?? []) {
      if (related.slug === scenario.slug || relatedSlugs.has(related.slug)) {
        throw new Error(`${scenario.slug} has a bad related link: ${related.slug}.`);
      }
      relatedSlugs.add(related.slug);
      if (!scenarioSlugs.has(related.slug)) {
        throw new Error(`${scenario.slug} links an unknown scenario: ${related.slug}.`);
      }
      if (!related.note.trim()) {
        throw new Error(`${scenario.slug} related link to ${related.slug} needs a note.`);
      }
    }

    for (const faq of scenario.faqs ?? []) {
      if (!faq.question.trim() || !faq.answer.trim()) {
        throw new Error(`${scenario.slug} has an empty FAQ.`);
      }
    }
  }
}

assertCatalog(scenarios, tools);

const toolsBySlug = new Map(tools.map((tool) => [tool.slug, tool]));
const scenariosBySlug = new Map(scenarios.map((scenario) => [scenario.slug, scenario]));

export function getTools(): Tool[] {
  return tools;
}

export function getScenarios(): Scenario[] {
  return scenarios;
}

export function getTool(slug: string): Tool | undefined {
  return toolsBySlug.get(slug);
}

export function getScenario(slug: string): Scenario | undefined {
  return scenariosBySlug.get(slug);
}

export function getUsage(tool: Tool, scenarioSlug: string): Usage | undefined {
  return tool.usages.find((item) => item.scenarioSlug === scenarioSlug);
}

export function getFeaturedScenarios(): Scenario[] {
  return scenarios.filter((scenario) => scenario.featured);
}

export type ToolIndexItem = {
  slug: string;
  name: string;
  description: string;
  pricing: Tool["pricing"];
  addedOn: string;
};

export function getToolIndex(): ToolIndexItem[] {
  return tools.map((tool) => ({
    slug: tool.slug,
    name: tool.name,
    description: tool.description,
    pricing: tool.pricing,
    addedOn: tool.addedOn,
  }));
}
