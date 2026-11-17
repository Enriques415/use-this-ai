import { usage, type Tool } from "@/data/types";

export const workTools: Tool[] = [
  {
    slug: "gamma",
    name: "Gamma",
    description:
      "A web app that turns a prompt or a document into a slide deck you can edit in the browser.",
    pricing: "freemium",
    pricingDetail:
      "Gamma has a free plan with limits on AI generations and branding. Paid plans raise those limits. See gamma.app for current pricing.",
    officialUrl: "https://gamma.app",
    addedOn: "2026-09-01",
    usages: [
      usage(
        "make-a-presentation",
        "Generate a first deck from a short brief, then delete slides until the story is clear.",
        [
          "Sign in at gamma.app and start a new presentation. Paste a brief: audience, decision, and the three points you must land.",
          "Generate the deck. Immediately delete title-only slides and any slide that repeats the previous one.",
          "Replace invented numbers with yours, or delete the card. Do this before you restyle anything.",
          "Edit the remaining cards so each has one idea. Use Gamma’s rewrite on a single card, not on the whole deck.",
          "Present it once to yourself. If you cannot say the slide in one breath, it is still too full. Export or share the link when it is thin enough.",
        ],
        [
          "A generated deck looks finished too early. The design is not a substitute for your numbers.",
          "Check whether the free plan puts a Gamma mark on the export. Remove it or upgrade before a client meeting if the mark is a problem.",
        ],
        {
          name: "Marp",
          url: "https://github.com/marp-team/marp",
          howToRun:
            "If you would rather write slides as Markdown, use Marp. Save a file as slides.md with `---` between slides, then run `npx @marp-team/marp-cli@latest slides.md --html -o slides.html` and open the HTML. There is also a Marp extension for VS Code. Marp does not invent the content. You write it.",
        },
      ),
    ],
  },
  {
    slug: "plus-ai",
    name: "Plus AI",
    description:
      "An AI add-in that drafts and rewrites slides inside PowerPoint and Google Slides.",
    pricing: "paid",
    pricingDetail:
      "Plus AI starts with a time-limited trial and then requires a paid plan. It runs inside PowerPoint and Google Slides. See plusai.com for the current trial and prices.",
    officialUrl: "https://plusai.com",
    addedOn: "2026-11-11",
    usages: [
      usage(
        "make-a-presentation",
        "Draft slides in the tool you already present from, using your template.",
        [
          "Start the trial at plusai.com and install the add-in for PowerPoint or Google Slides. Open a deck that already uses your template.",
          "Give Plus a prompt with the audience and the outline, or upload the document it should follow.",
          "Generate into the existing file. Check that new slides picked up your fonts and colors. Restyle any slide that did not.",
          "Use rewrite on bullets that are vague. Keep one claim per slide.",
          "Save a copy before you remix a whole section, so you can return to the version a colleague already liked.",
        ],
        [
          "The trial ends. Do not put a deadline deck only in a trial account you might lose.",
          "An add-in can see the presentation you open. Do not use it on a confidential deck unless your company has approved the tool.",
        ],
      ),
    ],
  },
  {
    slug: "teal",
    name: "Teal",
    description:
      "A job-search workspace that keeps your resume, job posts, and application notes in one place.",
    pricing: "freemium",
    pricingDetail:
      "Teal’s job tracker is free to start. AI resume tailoring and some matching features sit on paid plans. See tealhq.com for what the free account includes.",
    officialUrl: "https://www.tealhq.com",
    addedOn: "2026-08-19",
    usages: [
      usage(
        "write-a-resume-or-cover-letter",
        "Save a master resume, then tailor a copy to one job without losing the original.",
        [
          "Create an account at tealhq.com. Enter your real roles, dates, and bullets. This master stays intact.",
          "Save the job post in the tracker. Open the resume tailor against that post.",
          "Accept only suggestions that match work you did. Delete any bullet that adds a tool or a metric you do not have.",
          "Export the tailored resume as a PDF and open it. Check that dates did not shift and that the file is one or two pages.",
          "Write the cover letter from the overlap you can see: two requirements from the post, two examples from the resume.",
        ],
        [
          "Matching scores are a hint, not a reason to stuff keywords you cannot discuss.",
          "Keep the master resume. A tailored version is for that application only.",
        ],
      ),
    ],
  },
  {
    slug: "rezi",
    name: "Rezi",
    description:
      "A resume builder that turns a target job description into a structured, keyword-aware resume draft.",
    pricing: "freemium",
    pricingDetail:
      "Rezi lets you start for free with limits. Paid plans unlock more AI generations and downloads. See rezi.ai for current limits.",
    officialUrl: "https://www.rezi.ai",
    addedOn: "2026-08-19",
    usages: [
      usage(
        "write-a-resume-or-cover-letter",
        "Build a one-page resume aimed at a single posting, then check every line against your history.",
        [
          "Open rezi.ai and start a resume. Paste the job description when it asks what you are targeting.",
          "Fill the experience section with real employers and dates before you generate bullets.",
          "Generate bullets. Keep the ones that describe work you can tell a story about. Rewrite the rest in your words.",
          "Turn on any keyword check only after the bullets are true. Add a missing keyword only if you have used the skill.",
          "Download the file and read it on a phone. If a bullet wraps into a blob, shorten it.",
        ],
        [
          "A high keyword score with inflated claims is worse than a plain resume. Recruiters ask follow-up questions.",
          "Design templates can hide content from an applicant tracking system if you export a highly graphical file. Prefer a simple layout unless the employer asked for design.",
        ],
        {
          name: "JSON Resume",
          url: "https://github.com/jsonresume/resume-cli",
          howToRun:
            "If you want a resume as a file you control, install Node.js and run `npm install -g resume-cli`. Run `resume init`, edit resume.json, then `resume export resume.pdf`. Themes are optional packages. This does not write the bullets. It formats the JSON you wrote.",
        },
      ),
    ],
  },
  {
    slug: "superhuman",
    name: "Superhuman",
    description:
      "A fast paid email app with snippets, splits, and an AI draft you can edit before you send.",
    pricing: "paid",
    pricingDetail:
      "Superhuman is a paid subscription. It connects to Gmail or Outlook. There is typically a referral or trial path, then a monthly price. Confirm the current price at superhuman.com.",
    officialUrl: "https://superhuman.com",
    addedOn: "2026-04-02",
    usages: [
      usage(
        "reply-to-customer-emails",
        "Draft a short reply inside a fast inbox, then send it yourself.",
        [
          "Connect the mailbox you use for customers. Learn the split or folder that holds customer mail so the rest of the inbox stays out of the way.",
          "Open one email. Invoke the AI draft and give it a one-line instruction if the default draft assumes the wrong outcome.",
          "Edit until the reply states what you will do and when. Delete filler.",
          "Save a snippet for the two replies you send every day, such as a shipping update, and stop generating those from scratch.",
          "Send, then glance at the sent folder once. Auto-drafts sometimes keep a placeholder like “[name].”",
        ],
        [
          "Speed is the point of the product, which is also how a wrong refund gets sent. Pause on money and on angry threads.",
          "Superhuman is an inbox, not a help desk. A shared support team may need a shared mailbox tool instead.",
        ],
      ),
    ],
  },
  {
    slug: "otter",
    name: "Otter",
    description:
      "A meeting transcription service that records a call, writes a transcript, and drafts notes and action items.",
    pricing: "freemium",
    pricingDetail:
      "Otter has a free monthly minute allowance. Paid plans add more minutes, longer meetings, and more exports. See otter.ai for current caps.",
    officialUrl: "https://otter.ai",
    addedOn: "2026-05-28",
    usages: [
      usage(
        "turn-meetings-into-notes",
        "Record a meeting, then turn the transcript into notes and owners before you close the laptop.",
        [
          "Create an account at otter.ai. Connect the calendar you use for work calls, or upload a recording after the meeting.",
          "Tell the other people you are transcribing. Start the recording when the meeting starts, not after the decision.",
          "When the transcript is ready, read the summary Otter drafted. Delete anything that is small talk or a misheard name.",
          "Write action items as “person, task, date” even if you have to type the owner yourself. The model often assigns the wrong person.",
          "Paste the cleaned notes into the doc your team already uses. Do not leave the only copy inside Otter.",
        ],
        [
          "Transcription fails on crosstalk, accents it has not heard, and people far from the microphone. Fix names.",
          "Do not record a conversation you are not allowed to record. Laws and workplace rules differ.",
        ],
        {
          name: "Whisper",
          url: "https://github.com/openai/whisper",
          howToRun:
            "To transcribe a recording on your own machine, install Python and run `pip install -U openai-whisper`. Then run `whisper meeting.m4a --model small --language English`. It writes a text file beside the audio. The small model is a reasonable laptop default. Whisper transcribes. It does not assign owners or write a decision log. Do that from the text.",
        },
      ),
    ],
  },
  {
    slug: "fireflies",
    name: "Fireflies",
    description:
      "A meeting bot that joins calls, transcribes them, and files searchable notes.",
    pricing: "freemium",
    pricingDetail:
      "Fireflies has a free tier with storage and feature limits. Paid plans add more storage, video, and conversation analytics. See fireflies.ai for current plans.",
    officialUrl: "https://fireflies.ai",
    addedOn: "2026-05-28",
    usages: [
      usage(
        "turn-meetings-into-notes",
        "Let a notetaker join the call, then edit the summary into something you would send.",
        [
          "Sign up at fireflies.ai and connect your calendar. Decide which meetings the bot may join. Turn it off for interviews or legal calls unless everyone has agreed.",
          "When the bot joins, say out loud that the call is being transcribed.",
          "After the call, open the recap. Check the action items against what you remember. Play the audio for any item that sounds wrong.",
          "Rename speakers if the labels are Speaker 1 and Speaker 2. Notes with no names are hard to use next week.",
          "Share the recap link only with people who were in the meeting, or paste a shorter version into your team channel.",
        ],
        [
          "A bot in the lobby surprises guests. Warn them in the invite.",
          "Search is only as good as the transcript. A misheard product name will not be found later under the real name.",
        ],
      ),
    ],
  },
  {
    slug: "notion-ai",
    name: "Notion AI",
    description:
      "Writing and summary help inside Notion, where the meeting note or the project page already lives.",
    pricing: "freemium",
    pricingDetail:
      "Notion has a free plan. Notion AI is included more fully on paid plans and may be limited or add-on priced depending on your workspace. Check notion.com/product/ai for the current setup.",
    officialUrl: "https://www.notion.com/product/ai",
    addedOn: "2026-06-16",
    usages: [
      usage(
        "turn-meetings-into-notes",
        "Drop a transcript into a Notion page and shape it into notes your team will reopen.",
        [
          "Create a page with a fixed template: decisions, action items, and open questions. Paste the transcript below a toggle so it stays out of the way.",
          "Select the transcript and ask Notion AI for decisions and action items only. Tell it not to add goals that were not said.",
          "Move the useful lines into the template. Type the owner next to each action. AI often guesses.",
          "Ask it to tighten wording on the decision list after the owners are correct.",
          "Link the page from the project it belongs to. A note that is not linked will not be found.",
        ],
        [
          "Notion AI can only use what is on the page and in the workspace you selected. It will not hear the meeting.",
          "If the workspace is shared with clients, do not paste an internal transcript onto a public page.",
        ],
      ),
    ],
  },
  {
    slug: "notebooklm",
    name: "NotebookLM",
    description:
      "A Google notebook that answers questions from the sources you upload, instead of from the open web.",
    pricing: "freemium",
    pricingDetail:
      "NotebookLM is free for personal Google accounts, with limits on notebooks and sources. Higher limits are tied to Google Workspace and NotebookLM plans. See notebooklm.google.com.",
    officialUrl: "https://notebooklm.google.com",
    addedOn: "2026-09-15",
    usages: [
      usage(
        "summarize-long-documents",
        "Put the documents in a notebook and ask for a brief that has to come from those files.",
        [
          "Open notebooklm.google.com and create a notebook. Upload the PDF, Doc, or pasted text you want to understand. Add only sources you trust.",
          "Ask for a one-page brief: purpose, findings, and what the authors recommend.",
          "Ask a narrower question, such as “what does source 2 say about the deadline?” Read the citation it attaches.",
          "Click through to the cited passage. If the citation does not support the sentence, delete the sentence.",
          "Use the studio summary only as a table of contents. Your brief is the checked version.",
        ],
        [
          "If the answer is not in the sources, NotebookLM should say so. When it wanders, ask it to quote the passage.",
          "Uploading a document shares it with your Google account’s notebook. Do not upload files you cannot store there.",
        ],
      ),
      usage(
        "learn-a-new-skill",
        "Study from a small set of sources and turn them into questions you answer yourself.",
        [
          "Create a notebook and add one course handout, one chapter, or a few docs pages. Too many sources makes the answers mushy.",
          "Ask for a glossary of ten terms, each with a one-sentence definition tied to a source.",
          "Ask for five questions a beginner should be able to answer. Close the reply and answer them in a note.",
          "Open the reply and compare. Where you were wrong, ask NotebookLM to point at the paragraph, then reread that paragraph.",
          "Next session, add one new source only. Ask what changed in your understanding.",
        ],
        [
          "Audio overviews are optional listening, not proof you know the material. Do the questions.",
          "The notebook will not correct a wrong source. A bad PDF produces a confident bad lesson.",
        ],
      ),
    ],
  },
  {
    slug: "perplexity",
    name: "Perplexity",
    description:
      "A search assistant that answers with citations, so you can open the pages behind a claim.",
    pricing: "freemium",
    pricingDetail:
      "Perplexity is free for a limited number of searches. Pro adds more searches and model choices. See perplexity.ai for current pricing.",
    officialUrl: "https://www.perplexity.ai",
    addedOn: "2026-06-20",
    usages: [
      usage(
        "research-competitors",
        "Ask a sourced question about a market, then open the citations before you believe the table.",
        [
          "Go to perplexity.ai. Ask one question, such as “What do these three products charge for a team plan, and where does each page say it?” Name the products.",
          "Read the answer only as a map. Open every citation that supports a price or a feature.",
          "Copy the sentences you verified into your own note, with the URL and the date you checked.",
          "Ask a follow-up for what the sources disagree on. Disagreement is the useful part.",
          "Ignore uncitable filler. If a sentence has no page behind it, leave it out of the write-up.",
        ],
        [
          "Citations can be blogs, not the company. Prefer the company’s own pricing page when money is involved.",
          "Pages change. A citation from last year is a lead, not a current price.",
        ],
      ),
      usage(
        "learn-a-new-skill",
        "Find a short, sourced path into a topic and a page worth reading tonight.",
        [
          "Ask Perplexity for a beginner path: what to learn first, what to ignore at the start, and one recommended page for each step.",
          "Open the two pages that look most concrete. Read them. Do not collect twenty tabs.",
          "Ask it to explain one term you hit, and require a citation. Then reread the original sentence.",
          "Ask for a small exercise you can finish in half an hour, based on those pages.",
          "Tomorrow, ask what people commonly misunderstand about the exercise you just did, and check that claim too.",
        ],
        [
          "A fluent answer can cite a weak page. Look at who wrote it.",
          "Use this to find material. Use practice, not more search, to learn it.",
        ],
      ),
      usage(
        "find-an-open-source-project",
        "Get a short list of repositories with links, then judge them on GitHub yourself.",
        [
          "Describe the job and the language. Ask Perplexity for open-source projects, and tell it you want the GitHub URL for each.",
          "Open each repository. Check the license, the date of the last commit, and whether the README has install steps.",
          "Drop anything that is archived, license-incompatible, or explained only by a blog post.",
          "Paste the README of the best candidate back into a chat only if you want a reading plan. The decision is the repo, not the summary.",
          "Clone it and run the example before you read the whole codebase.",
        ],
        [
          "Models suggest popular names that may not fit. A smaller maintained library is often the right one.",
          "A cited blog can recommend a project that has since been abandoned. The commit date wins.",
        ],
      ),
    ],
  },
  {
    slug: "excel-copilot",
    name: "Copilot in Excel",
    description:
      "Microsoft’s assistant inside Excel for cleaning tables, writing formulas, and explaining a sheet in plain language.",
    pricing: "paid",
    pricingDetail:
      "Copilot in Excel requires a Microsoft 365 plan that includes Copilot. It is not part of the free Excel for the web by itself. Confirm eligibility at microsoft.com before you count on it.",
    officialUrl: "https://www.microsoft.com/microsoft-365/copilot",
    addedOn: "2026-09-09",
    usages: [
      usage(
        "work-with-spreadsheets",
        "Ask Excel to build a formula or a summary on a table you can see, then check the cells.",
        [
          "Open the workbook in a Microsoft 365 Excel that shows Copilot. Format the range as a Table so column names are clear.",
          "In the Copilot pane, describe the result: “add a column that flags rows older than 30 days” or “summarize sales by region.”",
          "Insert the suggested formula or PivotTable. Click a few result cells and confirm them with a calculator or a filter.",
          "If the suggestion is wrong, say what the sample row should have been, and ask again. Do not keep a formula you cannot explain.",
          "Leave a note on the sheet that says what the new column means, in your words.",
        ],
        [
          "Copilot works on the data in the workbook. It will not know about a number that lives only in your head.",
          "Review highlights and charts before you send them. A sorted table can hide the row that breaks the story.",
        ],
      ),
    ],
  },
];
