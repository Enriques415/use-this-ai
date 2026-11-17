import { usage, type Tool } from "@/data/types";

export const buildTools: Tool[] = [
  {
    slug: "cursor",
    name: "Cursor",
    description:
      "A code editor with an AI assistant that can read your project and edit files with you.",
    pricing: "freemium",
    pricingDetail:
      "Cursor has a free hobby tier with limited AI requests. Pro and business plans add more use. See cursor.com for current pricing.",
    officialUrl: "https://cursor.com",
    addedOn: "2026-07-01",
    usages: [
      usage(
        "write-or-fix-code",
        "Fix a small bug or add a small script inside a real project, with the diff in front of you.",
        [
          "Install Cursor from cursor.com and open the project folder. Make sure the project is in git so you can undo.",
          "Select the file and the error. In chat, paste the command you ran and the error text. Ask for the smallest fix.",
          "Read the proposed diff before you accept it. Reject changes in files you did not mean to touch.",
          "Run the same command again. If it fails, paste the new error into the same chat.",
          "Commit only the lines that belong to the fix. Leave drive-by refactors for another change.",
        ],
        [
          "Do not accept a change you cannot explain. Ask the chat to explain the diff in plain language first.",
          "Keep secrets out of the chat and out of files the model might rewrite. Use environment variables.",
        ],
        {
          name: "Aider",
          url: "https://github.com/Aider-AI/aider",
          howToRun:
            "If you want a terminal tool instead of an editor, install with `pip install aider-chat`, change into a git repository, and run `aider`. You need an API key for the model you choose, or a local model Aider supports. It proposes edits and can commit them. Read the diff before you accept the commit.",
        },
      ),
      usage(
        "turn-an-idea-into-an-app",
        "Start from a narrow idea and get a small app running on your machine the same day.",
        [
          "Write the idea as one sentence and three things a person can click. Cut everything else.",
          "Create an empty folder, run `git init`, and open it in Cursor. Tell the chat the sentence, the three actions, and “use a simple stack I can run with one command.”",
          "Let it scaffold. Read the files it adds. Ask it to stop if it reaches for accounts, payments, or a database you do not need yet.",
          "Run the dev command it names. Click through the three actions. Paste back what breaks.",
          "When the three actions work, stop. Write a five-line README with how to run it. That is a running app.",
        ],
        [
          "An afternoon of extra features is how the app stops running. Ship the three actions.",
          "Generated dependency installs can pull a lot of packages. If you do not recognize an install step, ask what it does before you run it.",
        ],
      ),
    ],
  },
  {
    slug: "v0",
    name: "v0",
    description:
      "Vercel’s chat tool for generating a React interface you can preview, edit, and copy into a project.",
    pricing: "freemium",
    pricingDetail:
      "v0 includes free generations with limits. Paid plans add more credits. See v0.app for current pricing.",
    officialUrl: "https://v0.app",
    addedOn: "2026-09-22",
    usages: [
      usage(
        "build-a-website",
        "Describe a landing page, preview it, and keep only the sections you would actually publish.",
        [
          "Open v0.app and describe the page: who it is for, the one action (a link, a form, or a phone number), and the sections you want.",
          "Look at the preview on a narrow width and a wide width. Ask for a fix if text overlaps or the button is below a long essay.",
          "Replace every sentence of filler with your real offer. Delete sections that repeat the hero.",
          "Ask v0 to adjust one section at a time. A full regeneration will throw away edits you liked.",
          "Copy the code into your site or deploy the preview when the words are yours. Click the main action and confirm it goes where you said.",
        ],
        [
          "A handsome layout can still say nothing. If you cannot find the action in three seconds, simplify.",
          "Do not ship placeholder names, prices, or testimonials. They look real.",
        ],
      ),
      usage(
        "turn-an-idea-into-an-app",
        "Generate the screen a person would use, then connect only the behavior that screen needs.",
        [
          "Describe one screen and what happens when the main button is pressed. Example: “a list of recipes, a box to add one, and a way to delete one.”",
          "Preview it. Use it with a keyboard and with a thumb-sized window. Ask for labels on every control.",
          "Ask where the data lives. For a first version, local state or a single file is enough. Refuse a login system.",
          "Export or copy the project and run it locally with the command v0 shows, usually `npm install` and `npm run dev`.",
          "Add the next screen only after this one works without you explaining it to someone else.",
        ],
        [
          "Generated UI often forgets empty states and errors. Ask for both before you call it done.",
          "Credits run out mid-edit. Save the code you want into your own repository as you go.",
        ],
      ),
    ],
  },
  {
    slug: "lovable",
    name: "Lovable",
    description:
      "A chat builder that turns a description into a small web app with a preview you can click.",
    pricing: "freemium",
    pricingDetail:
      "Lovable has free credits to start and paid plans for more builds. See lovable.dev for current pricing.",
    officialUrl: "https://lovable.dev",
    addedOn: "2026-11-14",
    usages: [
      usage(
        "build-a-website",
        "Build a one-page site by describing the sections, then edit the copy in the preview.",
        [
          "Start a project at lovable.dev. Describe a single page, not a whole company site. Name the headline, the proof, and the button.",
          "Click through the preview. Ask it to change text you can point at, instead of regenerating the page.",
          "Give it your real sentences. Delete stock phrases it inserted.",
          "Check the page on a phone-sized preview. Ask it to stack sections that collide.",
          "Publish or export when the button works and you would send the link to a customer.",
        ],
        [
          "Chat builders drift if you add “also a blog, a shop, and accounts.” Stay on one page.",
          "Know where the published site is hosted and how you would take it down.",
        ],
      ),
      usage(
        "turn-an-idea-into-an-app",
        "Describe a small app, click the preview, and keep the version that does three things.",
        [
          "Start a project at lovable.dev. Write one sentence and three actions a person can do. Say you do not want accounts or payments yet.",
          "Click through the preview, including the empty state. Ask it to change the screen you can point at, instead of regenerating the app.",
          "Replace sample names and numbers with real ones, or delete them.",
          "If this app has to live in git on your machine, export or sync the code and continue in Cursor. Lovable is the fast preview. Cursor is the first choice once the project is a repository you will keep.",
          "Stop when the three actions work. Extra features are a second session.",
        ],
        [
          "A chat-built app drifts into a platform if you keep saying “also.” Repeat the three actions when it adds a screen you did not ask for.",
          "Know how to export the project before you treat the preview as the only copy.",
        ],
      ),
    ],
  },
  {
    slug: "bolt",
    name: "Bolt",
    description:
      "A browser IDE that scaffolds and runs a web app from a prompt, so you can see it working immediately.",
    pricing: "freemium",
    pricingDetail:
      "Bolt offers free usage with limits and paid plans for more tokens and private projects. See bolt.new for current limits.",
    officialUrl: "https://bolt.new",
    addedOn: "2026-11-15",
    usages: [
      usage(
        "build-a-website",
        "Prompt a landing page, run it in the browser, and fix the layout by pointing at what is wrong.",
        [
          "Open bolt.new and ask for a one-page site. Include the headline, a short description, and a single call to action.",
          "Wait until the preview runs. Click the button. If it goes nowhere, say where it should go.",
          "Ask for specific fixes: “the form needs a name and an email, and it should not submit empty.”",
          "Read the visible copy and replace it. Then look at the code only if the preview will not update.",
          "Download the project or deploy it from Bolt when the page says what you sell.",
        ],
        [
          "A running preview is not a backed-up project. Download the files or connect a repository before the session expires.",
          "Do not paste secret keys into the chat to “make the form send email.” Use a hosted form you already trust, or skip email for the first version.",
        ],
      ),
      usage(
        "turn-an-idea-into-an-app",
        "Get a tiny app running in the browser, then pull it onto your machine.",
        [
          "Write a prompt that names the data and the actions. Example: “a packing list. Add an item, check it off, delete it. Remember the list in the browser.”",
          "Use the preview as a user would. Try an empty list and a very long item name.",
          "Ask Bolt to fix one broken behavior at a time. Restate the behavior you wanted.",
          "When it works, download the project. On your machine, install dependencies and run the dev script from the README or package.json.",
          "Put it in git. The browser session is not your history.",
        ],
        [
          "Token limits stop a long repair. Keep the idea small enough to finish.",
          "If the app needs accounts or payments, that is a second project. Do not bolt them on in the first prompt.",
        ],
      ),
    ],
  },
  {
    slug: "namelix",
    name: "Namelix",
    description:
      "A name generator that proposes brand names and simple logo sketches from a short description.",
    pricing: "freemium",
    pricingDetail:
      "You can generate names for free. Downloading some logo files and extra features is paid. See namelix.com for what the free results include.",
    officialUrl: "https://namelix.com",
    addedOn: "2026-11-12",
    usages: [
      usage(
        "name-a-product",
        "Generate a pile of names, then keep the few a stranger can spell.",
        [
          "Open namelix.com. Enter a few keywords about what the product does, not a slogan.",
          "Set the style toward short, real-looking words if this name will be said out loud. Generate a batch.",
          "Reject anything you cannot spell after hearing it once. Save five that you can.",
          "Search each survivor on the web, in the app stores, and as a domain. A taken name in your category is a no.",
          "Look at the logo sketch only after the word is free. A nice mark will not save a confusing name.",
        ],
        [
          "Generated names can collide with trademarks the tool did not check. Search an official trademark database before you commit.",
          "Logo downloads may be paid, and a generated mark is not a full identity. Treat it as a sketch.",
        ],
      ),
    ],
  },
  {
    slug: "chatbase",
    name: "Chatbase",
    description:
      "A service that trains a chat bot on your documents or site and gives you a widget to embed.",
    pricing: "freemium",
    pricingDetail:
      "Chatbase has a free plan with message and size limits. Paid plans raise those limits and add branding controls. See chatbase.co for current quotas.",
    officialUrl: "https://www.chatbase.co",
    addedOn: "2026-10-06",
    usages: [
      usage(
        "build-a-support-bot",
        "Train a bot on the help pages you already trust, and test it before you embed it.",
        [
          "Make a free account at chatbase.co. Create a bot and upload a small set of help articles, or paste the URL of a docs page you control.",
          "Write the bot’s instructions in plain language: answer only from these sources, say when you do not know, and do not invent refund rules.",
          "Ask it ten real customer questions, including three it should refuse. Fix the source page when the answer is wrong, instead of arguing with the bot.",
          "Add a line on the widget that a human can be reached, and say how.",
          "Embed the widget on a test page. Ask the same ten questions there. Only then put it on the real site.",
        ],
        [
          "A bot will sound sure when the source is vague. Tighten the source.",
          "Do not upload internal-only policy if the bot is on a public site. Assume visitors can pull at the content.",
        ],
      ),
    ],
  },
  {
    slug: "voiceflow",
    name: "Voiceflow",
    description:
      "A visual builder for support and question-answering agents, with flows you design and a test chat.",
    pricing: "freemium",
    pricingDetail:
      "Voiceflow has a free tier for building and testing. Paid plans add more credits, seats, and production use. See voiceflow.com for current limits.",
    officialUrl: "https://www.voiceflow.com",
    addedOn: "2026-11-13",
    usages: [
      usage(
        "build-a-support-bot",
        "Draw the paths a support chat should take, including the path where it hands off to a person.",
        [
          "Create a project at voiceflow.com. Start with one job, such as “where is my order,” not your whole help center.",
          "Write the happy path as steps: ask for the order number, look up the status you will supply, tell the customer the next step.",
          "Add a failure path: if the order number is missing, or the question is about a refund, say you will pass it to a person. Put the contact method in that step.",
          "Use the test chat. Try a rude message, an empty message, and a question you did not design. The last one should hit the handoff.",
          "Publish to a test widget. Have someone who did not build it try the same three questions.",
        ],
        [
          "A diagram that only contains the happy path will trap real customers. The handoff is part of the design.",
          "If you connect a live order system, use a test store first. A wrong lookup is worse than no bot.",
        ],
        {
          name: "Rasa",
          url: "https://github.com/RasaHQ/rasa",
          howToRun:
            "If you need an assistant you run yourself, Rasa is an open-source framework. Install Python, then `pip install rasa`, and run `rasa init` in an empty folder. Train with `rasa train` and talk to it with `rasa shell`. You edit example sentences in the generated files. It is a developer project, not a paste-your-FAQ widget, and the first `rasa init` conversation is only a demo.",
        },
      ),
    ],
  },
  {
    slug: "custom-gpts",
    name: "Custom GPTs",
    description:
      "A ChatGPT bot you configure with instructions and files, so people can ask questions in a narrow lane.",
    pricing: "freemium",
    pricingDetail:
      "Using public GPTs can be free. Building and sharing your own has required a paid ChatGPT plan. Check the current requirement at chatgpt.com/gpts before you promise a bot to someone else.",
    officialUrl: "https://chatgpt.com/gpts",
    addedOn: "2026-10-06",
    usages: [
      usage(
        "build-a-support-bot",
        "Configure a custom GPT on your help content and keep the instructions short enough to test.",
        [
          "Open chatgpt.com/gpts and start a new GPT. Name it after the job, such as “Warehouse shipping questions.”",
          "In the instructions, say: answer from the uploaded files, quote the rule you used, and tell the person to email support when the files do not cover the question. Paste that email address.",
          "Upload the help docs. Skip drafts and old policies.",
          "Use the preview pane. Ask a covered question, an uncovered question, and a question that tries to make it ignore the files.",
          "Share the link only after the uncovered question produces the email address and not a made-up policy.",
        ],
        [
          "People can often coax a custom GPT off its files. Do not put secrets in the instructions or the uploads.",
          "If creating GPTs is behind a paid plan, a free teammate may not be able to edit it. Confirm who owns the bot.",
        ],
      ),
    ],
  },
  {
    slug: "github",
    name: "GitHub",
    description:
      "The site where most open-source code is published, with search, READMEs, issues, and the history of a project.",
    pricing: "freemium",
    pricingDetail:
      "Public and private repositories are free for individual use. Paid plans add team features, more Actions minutes, and support. Browsing and cloning public code does not require a paid plan.",
    officialUrl: "https://github.com",
    addedOn: "2026-03-02",
    usages: [
      usage(
        "find-an-open-source-project",
        "Search for a project, judge it in ten minutes, and run the example from the README.",
        [
          "Go to github.com/search. Search for the job in plain words, then filter by language if you know which one you can run.",
          "Sort by recently updated, not only by stars. Open a repository and read the README from the top through the install section.",
          "Check three things on the repo home: a license file, a commit in the last few months, and issues that get replies.",
          "Copy the install commands into a scratch folder and run them. If the README is wrong, that is a finding. Try the next repository.",
          "When it runs, star it or save the URL, and write down the one command that worked so you can repeat it.",
        ],
        [
          "A popular repository can still be the wrong fit, or licensed in a way you cannot use at work. Read the license.",
          "Do not run a curl-to-bash install you have not read. Prefer the documented pip, npm, or release download.",
        ],
        {
          name: "GitHub CLI",
          url: "https://github.com/cli/cli",
          howToRun:
            "Install the official GitHub CLI from https://cli.github.com, then run `gh auth login` if you want private repos. Search with `gh search repos \"speech to text\" --sort stars --limit 10`. Clone a result with `gh repo clone owner/name`. Read the README before you run any other command in that folder.",
        },
      ),
    ],
  },
  {
    slug: "github-copilot",
    name: "GitHub Copilot",
    description:
      "An AI assistant inside the editor and on GitHub that suggests the next lines of code.",
    pricing: "freemium",
    pricingDetail:
      "GitHub Copilot has a free tier with limits and paid plans for individuals and businesses. See the Copilot plans page for current pricing. This directory does not quote a monthly price.",
    officialUrl: "https://github.com/features/copilot",
    addedOn: "2026-11-17",
    usages: [
      usage(
        "write-or-fix-code",
        "Suggest the next lines inside the editor you already use, for a small script or a bug.",
        [
          "Open github.com/features/copilot and turn Copilot on for the account you code with. Install it in the editor you already use if it is not there.",
          "Open the real project. Start with the bug or the small script. A full app is a different job.",
          "Put the cursor where the change belongs. Write a comment that states the expected behavior, or start the function, and read the suggestion before you accept it.",
          "Accept only the lines you understand. Run the same command or test that showed the bug.",
          "If the suggestion turns into a rewrite, reject it. Ask Copilot’s chat in the editor for the smallest fix, then run the code again.",
        ],
        [
          "A suggestion can resemble code you did not mean to copy. Read it.",
          "Do not accept a change that prints a secret or turns off a safety check to clear an error.",
        ],
      ),
    ],
  },
];
