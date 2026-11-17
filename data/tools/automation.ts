import { usage, type Tool } from "@/data/types";

const listedOn = "2026-11-17";

export const automationTools: Tool[] = [
  {
    slug: "zapier",
    name: "Zapier",
    description:
      "A way to connect the apps you already use so a repeated task runs when something happens. The AI step is AI by Zapier, inside the Zap editor.",
    pricing: "freemium",
    pricingDetail:
      "Zapier has a free tier and paid plans. The current AI product is called AI by Zapier. The standalone Agents product has moved into the Zap editor. Next Gen Zap task billing is scheduled to start 1 December 2026. See zapier.com for what your account includes. This page does not compare Free and Professional feature by feature.",
    officialUrl: "https://zapier.com",
    addedOn: listedOn,
    usages: [
      usage(
        "automate-work-with-ai-agents",
        "Build one Zap for a task you already repeat, and use AI by Zapier only for the judgment in the middle.",
        [
          "Sign in at zapier.com and create a Zap in the Zap editor. AI by Zapier is a step in that editor. The old standalone Agents product now lives there too.",
          "Set the trigger to something that already happens, such as a new row or a new email. Add the step that should happen next.",
          "Where the Zap has to make a judgment, add an AI by Zapier step. Write the decision in one sentence, such as “label this as refund, shipping, or other, and do not invent a policy.”",
          "Turn it on for one test record you can afford to mishandle. Read what it wrote before you let it email a customer.",
          "Check the task history the next day. Next Gen Zap task billing is scheduled to start 1 December 2026, so know which Zaps are on before that date.",
        ],
        [
          "Do not give the first Zap permission to send money, delete records, or mail your whole list.",
          "This guide does not list a Free versus Professional matrix. Confirm the plan on zapier.com.",
        ],
      ),
    ],
  },
  {
    slug: "n8n",
    name: "n8n",
    description:
      "A workflow tool for repeated tasks, available hosted or as the open-source project you can run yourself.",
    pricing: "freemium",
    pricingDetail:
      "n8n’s hosted product has a free tier and paid plans. See n8n.io for current hosted pricing. The same project publishes its source at github.com/n8n-io/n8n if you need to run it yourself. This page does not quote a plan price.",
    officialUrl: "https://n8n.io",
    githubUrl: "https://github.com/n8n-io/n8n",
    addedOn: listedOn,
    usages: [
      usage(
        "automate-work-with-ai-agents",
        "Draw the repeated task as a workflow, on n8n’s host or on a machine you control.",
        [
          "Decide whether the data can sit on n8n’s hosted product. If it cannot, start from the official repository at github.com/n8n-io/n8n and follow that README to run it.",
          "Create one workflow. Add the trigger, then the app steps, in the order you already do the task by hand.",
          "Add an AI step only where a node needs a judgment. Write it as a rule: what to decide, and what to do when it is unsure.",
          "Run it once on a sample record. Open the output of every node, including the case where the AI step should refuse.",
          "Activate the workflow only after that sample did the right thing. A self-hosted copy is yours to update and back up.",
        ],
        [
          "Hosted n8n and the open-source project are the same product family. Self-hosting does not remove the need to read each node’s output.",
          "An AI node spends a model allowance somewhere. Know which account is billed before you leave the workflow on.",
        ],
      ),
    ],
  },
  {
    slug: "lindy",
    name: "Lindy",
    description:
      "A paid AI agent for repeated work such as drafting email and follow-ups.",
    pricing: "paid",
    pricingDetail:
      "Lindy is a paid product. Official pricing is a short credit trial, advertised as credits lasting 7 days, and then a paid plan. See lindy.ai for the current plan. It is not a permanent free tier.",
    officialUrl: "https://www.lindy.ai",
    addedOn: listedOn,
    usages: [
      usage(
        "automate-work-with-ai-agents",
        "Point Lindy at one repeated job, read what it drafts, and pay only if you keep it.",
        [
          "Open lindy.ai and start the credit trial. The trial is advertised as credits lasting 7 days. It is not an ongoing free plan.",
          "Pick one job you already repeat, such as sorting inbound email or drafting a follow-up you will send yourself.",
          "Connect only the account that job needs. Write what Lindy may draft and what it must not send.",
          "Run it on yesterday’s items. Read every draft before anything goes to a customer.",
          "When the trial credits end, choose a paid plan only if those drafts were good enough to keep. The plan is on lindy.ai.",
        ],
        [
          "Do not let the first version email customers or change a calendar without you reading it.",
          "This page does not quote a dollar price. The trial length in the advertising is 7 days of credits, and the plan after that is paid.",
        ],
      ),
    ],
  },
];
