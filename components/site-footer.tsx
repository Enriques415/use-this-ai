import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          {SITE_NAME} is an independent directory. Tool names belong to their publishers.
        </p>
        <div className="flex gap-4 font-mono text-xs tracking-[0.12em] uppercase">
          <Link href="/about" className="underline-offset-4 hover:underline">
            About
          </Link>
          <Link href="/scenarios" className="underline-offset-4 hover:underline">
            All scenarios
          </Link>
          <Link href="/new" className="underline-offset-4 hover:underline">
            Newly listed
          </Link>
        </div>
      </div>
    </footer>
  );
}
