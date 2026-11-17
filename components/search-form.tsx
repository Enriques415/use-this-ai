import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type SearchFormProps = {
  id: string;
  defaultValue?: string;
  variant?: "hero" | "compact";
  /** Use the prompt as the page h1. Only one page should set this. */
  promptAsHeading?: boolean;
};

export function SearchForm({
  id,
  defaultValue = "",
  variant = "compact",
  promptAsHeading = false,
}: SearchFormProps) {
  const hero = variant === "hero";
  const label = (
    <label
      htmlFor={id}
      className={
        hero
          ? "block text-3xl tracking-tight text-foreground sm:text-4xl"
          : "sr-only"
      }
    >
      What do you need to do?
    </label>
  );

  return (
    <form action="/search" role="search" className={hero ? "space-y-3" : "w-full"}>
      {promptAsHeading ? <h1>{label}</h1> : label}
      <div className={hero ? "flex flex-col gap-2 sm:flex-row" : "flex gap-2"}>
        <Input
          id={id}
          name="q"
          type="search"
          defaultValue={defaultValue}
          placeholder="What do you need to do?"
          autoComplete="off"
          enterKeyHint="search"
          className={
            hero
              ? "h-14 rounded-md border-primary/50 bg-card px-4 text-lg shadow-[0_0_32px_rgba(0,229,255,0.12)] md:text-lg"
              : "h-10 border-primary/40 bg-card md:text-base"
          }
        />
        <Button
          type="submit"
          size="lg"
          className={hero ? "h-14 px-6 text-base sm:min-w-32" : "h-10 px-4"}
        >
          Search
        </Button>
      </div>
    </form>
  );
}
