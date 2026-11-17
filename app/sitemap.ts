import type { MetadataRoute } from "next";
import { getScenarios, getTools } from "@/data/catalog";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const root = siteUrl();
  const now = new Date("2026-11-17T00:00:00Z");
  const staticRoutes = ["", "/scenarios", "/tools", "/new", "/about"].map((path) => ({
    url: `${root}${path || "/"}`,
    lastModified: now,
  }));
  const scenarioRoutes = getScenarios().map((scenario) => ({
    url: `${root}/scenarios/${scenario.slug}`,
    lastModified: now,
  }));
  const toolRoutes = getTools().map((tool) => ({
    url: `${root}/tools/${tool.slug}`,
    lastModified: new Date(`${tool.addedOn}T00:00:00Z`),
  }));
  return [...staticRoutes, ...scenarioRoutes, ...toolRoutes];
}
