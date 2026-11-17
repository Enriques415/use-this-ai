export const SAVED_KEY = "use-this-ai.saved";
const SAVED_EVENT = "use-this-ai-saved";

const EMPTY: string[] = [];

let cacheKey = "";
let cacheValue: string[] = EMPTY;

function parseSaved(raw: string): string[] {
  if (!raw) return EMPTY;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return EMPTY;
    return parsed.filter((item): item is string => typeof item === "string");
  } catch {
    return EMPTY;
  }
}

export function subscribeSaved(onChange: () => void) {
  window.addEventListener(SAVED_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(SAVED_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

export function getSavedSnapshot(): string[] {
  const raw = window.localStorage.getItem(SAVED_KEY) ?? "";
  if (raw === cacheKey) return cacheValue;
  cacheKey = raw;
  cacheValue = parseSaved(raw);
  return cacheValue;
}

export function getSavedServerSnapshot(): string[] {
  return EMPTY;
}

export function writeSaved(slugs: string[]) {
  const unique = slugs.filter((slug, index) => slugs.indexOf(slug) === index);
  cacheValue = unique;
  cacheKey = JSON.stringify(unique);
  window.localStorage.setItem(SAVED_KEY, cacheKey);
  window.dispatchEvent(new Event(SAVED_EVENT));
}
