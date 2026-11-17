import { getScenarios, getTool, getTools } from "@/data/catalog";
import type { Scenario } from "@/data/types";

const STOP = new Set([
  "a",
  "an",
  "the",
  "to",
  "for",
  "of",
  "and",
  "or",
  "my",
  "me",
  "i",
  "with",
  "in",
  "on",
  "it",
  "is",
  "do",
  "how",
  "can",
  "please",
  "want",
  "need",
  "this",
  "that",
  "from",
  "into",
  "your",
  "you",
  "what",
  "should",
  "help",
  "about",
  "just",
  "some",
]);

const SYNONYMS: Record<string, string[]> = {
  cv: ["resume", "cover"],
  resume: ["cv"],
  powerpoint: ["presentation", "slides", "deck"],
  ppt: ["presentation", "slides"],
  slides: ["presentation", "deck"],
  deck: ["presentation", "slides"],
  pitch: ["presentation"],
  tweet: ["social", "post"],
  linkedin: ["social", "post"],
  instagram: ["social", "caption"],
  facebook: ["social", "post"],
  tiktok: ["video", "script", "short"],
  reels: ["video", "script", "short"],
  shorts: ["video", "script"],
  thumbnail: ["image", "cover", "youtube"],
  video: ["clip"],
  voiceover: ["voice", "narration", "speech"],
  narration: ["voice", "voiceover"],
  voice: ["voiceover", "speech"],
  speech: ["voice", "voiceover"],
  zapier: ["automate", "workflow"],
  workflow: ["automate"],
  copilot: ["code"],
  background: ["photo", "product"],
  photoshop: ["photo", "retouch", "background"],
  chatbot: ["bot", "support"],
  bot: ["support", "questions"],
  transcript: ["meeting", "notes"],
  zoom: ["meeting", "notes", "recording"],
  pdf: ["document", "summarize"],
  excel: ["spreadsheet", "data"],
  csv: ["spreadsheet", "data"],
  formula: ["spreadsheet"],
  bug: ["code", "fix"],
  python: ["code", "script"],
  javascript: ["code"],
  website: ["landing", "page"],
  landing: ["website", "page"],
  homepage: ["website", "page"],
  mvp: ["app", "idea"],
  prototype: ["app", "idea"],
  translate: ["translation", "localize"],
  translation: ["translate", "localize"],
  spanish: ["translate"],
  french: ["translate"],
  japanese: ["translate"],
  german: ["translate"],
  chinese: ["translate"],
  caption: ["social", "video"],
  blog: ["article", "write"],
  essay: ["article", "write"],
  newsletter: ["article", "write"],
  competitor: ["research", "competitors"],
  competitors: ["research", "competitor"],
  study: ["learn", "skill"],
  learn: ["skill"],
  github: ["open", "source", "repository"],
  repo: ["repository", "open", "source"],
  slogan: ["name", "tagline"],
  tagline: ["slogan", "name"],
  inbox: ["email", "reply"],
  refund: ["email", "customer"],
};

export type ScenarioMatch = {
  scenario: Scenario;
  score: number;
  matchedBecause: string;
};

export function normalize(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function significant(value: string): string[] {
  return normalize(value)
    .split(" ")
    .filter((token) => token.length > 2 && !STOP.has(token));
}

function expand(tokens: string[]): string[] {
  const extra = new Set(tokens);
  for (const token of tokens) {
    for (const synonym of SYNONYMS[token] ?? []) {
      extra.add(synonym);
    }
  }
  return [...extra];
}

export function searchScenarios(rawQuery: string): ScenarioMatch[] {
  const query = normalize(rawQuery);
  if (query.length < 2) return [];

  const baseTokens = significant(rawQuery);
  const tokens = expand(baseTokens.length > 0 ? baseTokens : query.split(" "));
  const scenarios = getScenarios();

  const matches = scenarios.map((scenario) => {
    let score = 0;
    let matchedBecause = "";
    const name = normalize(scenario.name);

    if (name === query) {
      score += 120;
      matchedBecause = "The scenario name matches your search.";
    } else if (query.length > 4 && (name.includes(query) || query.includes(name))) {
      score += 46;
      matchedBecause = "Your search is close to the scenario name.";
    }

    const nameTokens = significant(scenario.name);
    const nameHits = tokens.filter((token) => nameTokens.includes(token));
    if (nameHits.length > 0) {
      score += nameHits.length * 14;
      if (!matchedBecause) matchedBecause = "It matches the kind of job you described.";
    }

    for (const example of scenario.examples) {
      const normalizedExample = normalize(example);
      if (normalizedExample.length < 4) continue;
      if (normalizedExample === query || normalizedExample.includes(query) || query.includes(normalizedExample)) {
        score += query.includes(normalizedExample) && normalizedExample.split(" ").length >= 2 ? 72 : 48;
        matchedBecause = `People also describe this as “${example}”.`;
      }
      const exampleTokens = significant(example);
      const overlap = tokens.filter((token) => exampleTokens.includes(token));
      score += overlap.length * 9;
      if (
        exampleTokens.length >= 2 &&
        exampleTokens.every((token) => tokens.includes(token))
      ) {
        score += 28;
        if (!matchedBecause) matchedBecause = `It lines up with “${example}”.`;
      }
    }

    const context = `${scenario.summary} ${scenario.audience}`;
    const contextHits = tokens.filter((token) => normalize(context).includes(token));
    score += Math.min(contextHits.length, 4) * 3;

    for (const ranked of scenario.tools) {
      const tool = getTool(ranked.toolSlug);
      if (!tool) continue;
      const toolName = normalize(tool.name);
      if (tokens.some((token) => toolName.includes(token)) || (query.length > 3 && toolName.includes(query))) {
        score += 6;
      }
    }

    if (!matchedBecause && score > 0) {
      matchedBecause = "Several of your words show up in this scenario.";
    }

    return { scenario, score, matchedBecause };
  });

  return matches
    .filter((match) => match.score >= 12)
    .sort((a, b) => b.score - a.score || a.scenario.name.localeCompare(b.scenario.name));
}

export function suggestQueries(): string[] {
  return [
    "write a cover letter",
    "remove a photo background",
    "turn a meeting into notes",
    "build a landing page",
    "summarize a long PDF",
    "fix a python bug",
    "make a video from text",
  ];
}

export function toolCount(): number {
  return getTools().length;
}
