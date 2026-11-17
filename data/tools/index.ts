import type { Tool } from "@/data/types";
import { assistantTools } from "@/data/tools/assistants";
import { automationTools } from "@/data/tools/automation";
import { buildTools } from "@/data/tools/build";
import { generationTools } from "@/data/tools/generation";
import { languageAndMediaTools } from "@/data/tools/language-and-media";
import { workTools } from "@/data/tools/work";

export const tools: Tool[] = [
  ...assistantTools,
  ...languageAndMediaTools,
  ...generationTools,
  ...workTools,
  ...automationTools,
  ...buildTools,
];
