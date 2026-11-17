"use client";

import { useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";
import { getSavedServerSnapshot, getSavedSnapshot, subscribeSaved, writeSaved } from "@/lib/saved";

export function SaveButton({ slug, name }: { slug: string; name: string }) {
  const savedSlugs = useSyncExternalStore(subscribeSaved, getSavedSnapshot, getSavedServerSnapshot);
  const saved = savedSlugs.includes(slug);

  function toggle() {
    const next = saved
      ? savedSlugs.filter((item) => item !== slug)
      : [...savedSlugs, slug];
    writeSaved(next);
  }

  return (
    <Button
      type="button"
      variant={saved ? "secondary" : "outline"}
      aria-pressed={saved}
      aria-label={saved ? `Remove ${name} from saved tools` : `Save ${name} on this device`}
      onClick={toggle}
      className="h-10 px-4"
    >
      {saved ? "Saved on this device" : "Save"}
    </Button>
  );
}
