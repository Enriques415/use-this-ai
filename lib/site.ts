export const SITE_NAME = "Use This AI";
export const SITE_TAGLINE = "Find the right AI for the job.";

export const SITE_DESCRIPTION =
  "A practical directory of AI tools organized by the job you need done. Describe the work, open a scenario, and follow a short guide.";

/** Date the seeded catalog treats as "today" for the newly listed list. */
export const CATALOG_AS_OF = "2026-11-17";

export const NEW_LISTING_DAYS = 7;

export function siteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit) return explicit;
  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (production) return `https://${production}`;
  const vercel = process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`;
  return "http://127.0.0.1:43123";
}

export function isNewlyListed(addedOn: string): boolean {
  const asOf = Date.parse(`${CATALOG_AS_OF}T00:00:00Z`);
  const added = Date.parse(`${addedOn}T00:00:00Z`);
  if (Number.isNaN(asOf) || Number.isNaN(added)) return false;
  const days = (asOf - added) / 86_400_000;
  return days >= 0 && days <= NEW_LISTING_DAYS;
}

export function formatListedDate(addedOn: string): string {
  const date = new Date(`${addedOn}T00:00:00Z`);
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}
