import { Badge } from "@/components/ui/badge";
import type { Pricing } from "@/data/types";
import { PRICING_LABEL } from "@/lib/pricing";

export function PricingBadge({ pricing }: { pricing: Pricing }) {
  return (
    <Badge variant={pricing === "paid" ? "outline" : "secondary"}>{PRICING_LABEL[pricing]}</Badge>
  );
}
