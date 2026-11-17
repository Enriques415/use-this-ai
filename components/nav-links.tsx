"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/scenarios", label: "Scenarios" },
  { href: "/tools", label: "Tools" },
  { href: "/new", label: "New" },
  { href: "/saved", label: "Saved" },
  { href: "/about", label: "About" },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="flex flex-wrap gap-x-4 gap-y-2">
      {LINKS.map((link) => {
        const current = pathname === link.href || pathname.startsWith(`${link.href}/`);
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={current ? "page" : undefined}
            className={
              current
                ? "font-mono text-xs tracking-[0.14em] text-primary uppercase"
                : "font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase hover:text-primary"
            }
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
