import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "What Use This AI is, and what this directory does not do.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main id="content" className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:px-6">
      <h1 className="font-serif text-4xl tracking-tight">About</h1>
      <div className="mt-6 space-y-4 text-lg">
        <p>
          Use This AI is a directory of AI tools organized by the job you are trying to do. You describe the work,
          open the closest scenario, and get a short ranked list of tools with steps you can follow.
        </p>
        <p>
          We do not sell the tools, and we do not take a cut of a subscription. You do not need an account to read
          the guides. Saving a tool stores its name in this browser only.
        </p>
        <p>
          Prices and features change. The official link on each tool page is the place to confirm what you will pay
          and what the current plan includes. The guides are written for people who are not AI specialists.
        </p>
        <p>
          This version is a curated public directory with a fixed set of scenarios. It is not an automated feed of
          every new launch, and it is not a chatbot that picks a tool for you in a private conversation.
        </p>
        <p>
          Start with{" "}
          <Link href="/scenarios" className="underline-offset-4 hover:underline">
            the scenarios
          </Link>{" "}
          or search from the box at the top of any page.
        </p>
      </div>
    </main>
  );
}
