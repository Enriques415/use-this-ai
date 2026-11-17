"use client";

import { usePathname } from "next/navigation";
import { SearchForm } from "@/components/search-form";

export function HeaderSearch() {
  const pathname = usePathname();
  if (pathname === "/" || pathname.startsWith("/search")) return null;
  return <SearchForm id="header-search" />;
}
