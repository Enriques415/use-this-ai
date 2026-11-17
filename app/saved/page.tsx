import type { Metadata } from "next";
import { SavedTools } from "@/components/saved-tools";
import { getToolIndex } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Saved tools",
  description: "Tools you saved in this browser. Nothing is sent to an account.",
  robots: { index: false, follow: true },
};

export default function SavedPage() {
  return (
    <main id="content" className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6">
      <h1 className="font-serif text-4xl tracking-tight">Saved tools</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        This list lives in local storage on this device. Clearing site data removes it. There is no login.
      </p>
      <div className="mt-8">
        <SavedTools tools={getToolIndex()} />
      </div>
    </main>
  );
}
