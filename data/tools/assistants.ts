import { usage, type Tool } from "@/data/types";

export const assistantTools: Tool[] = [
  {
    slug: "chatgpt",
    name: "ChatGPT",
    description:
      "A general chat assistant for drafting, editing, explaining, and light image work in one conversation.",
    pricing: "freemium",
    pricingDetail:
      "A free account covers everyday chats with limits. Paid plans (Plus, Pro, Business, and Enterprise) raise those limits and add newer models. Check chatgpt.com for the current plan names.",
    officialUrl: "https://chatgpt.com",
    addedOn: "2026-06-02",
    usages: [
      usage(
        "write-or-edit-an-article",
        "Draft a first version, or tighten a draft you already have, without losing your point.",
        [
          "Open chatgpt.com and start a new chat. Say who the reader is, what they should do or understand, and the length you want.",
          "Paste an outline if you have one. If you do not, ask for a six-point outline first and delete any section you do not want before it writes the full piece.",
          "Ask for the full draft in your voice. Give one sample paragraph of your own writing if the tone matters.",
          "Paste the draft back with notes such as “cut the intro in half” or “the third section claims a number I do not have; remove it.”",
          "Read the result out loud. Replace any fact, name, or quote you did not supply. ChatGPT will invent plausible details if you leave a gap.",
        ],
        [
          "Do not publish statistics, citations, or quotations it produced unless you have checked them.",
          "A long chat drifts. Start a fresh chat when you switch from outlining to a final edit, and paste only the current draft.",
        ],
      ),
      usage(
        "translate-and-localize",
        "Turn a short text into another language and ask for a version that sounds local, not word-for-word.",
        [
          "Paste the source text and name the language and country, for example “Spanish for readers in Mexico.”",
          "Say what the text is for: a menu, a product page, an email, or a caption. Formal and casual translations are different.",
          "Ask it to flag words that should stay in the original language, such as a product name.",
          "Ask for a second pass that a native speaker would actually say, plus a short note on any phrase that has no clean equivalent.",
          "Have someone who knows the language read the result before you print it or ship it to customers.",
        ],
        [
          "ChatGPT is a convenient draft, not a certified translation. Legal, medical, and safety text needs a professional.",
          "It may miss tone. A joke, a slogan, or a polite refusal often needs a human rewrite.",
        ],
      ),
      usage(
        "create-images-and-covers",
        "Describe a picture in plain language and get a cover, thumbnail, or simple illustration you can download.",
        [
          "In a new chat, describe the image in concrete terms: subject, setting, colors, and where text should not appear.",
          "State the use, such as “blog cover, wide, no tiny text.” Say “no words in the image” if you will add a title yourself later.",
          "Ask for one image first. When it appears, say what to change: “warmer light,” “empty space on the left,” or “remove the extra person.”",
          "Download the image from the chat. Open it at the size you will publish and check faces, hands, and any letters.",
          "If you need the same character again, describe the same details in the next prompt instead of assuming it remembers a style forever.",
        ],
        [
          "Small text inside generated images is often misspelled. Add titles in your design tool.",
          "You are responsible for how you use the image. Do not ask it to copy a living artist’s style or a brand you do not own.",
        ],
      ),
      usage(
        "remove-backgrounds-or-retouch",
        "Clean a product photo when you need a simple fix and do not want a dedicated photo app.",
        [
          "Use the paperclip or image button and upload a clear photo of one product.",
          "Say exactly what you want: “white background, keep the product’s color, do not change the label text.”",
          "Ask for a second version only for the problems you still see, such as a leftover shadow or a warped edge.",
          "Download and zoom in on logos, seams, and fine parts like straps or glass. Reject the image if those details changed.",
          "For a shop that needs a transparent file every day, switch to a dedicated background tool after this test.",
        ],
        [
          "Chat edits can redraw the product. Compare the result with the original before you list it for sale.",
          "A busy background or several objects in one photo usually fails. Crop to one item first.",
        ],
      ),
      usage(
        "write-social-posts",
        "Turn one idea into a few short posts you can edit and schedule.",
        [
          "Name the network, the reader, and the single point of the post. Paste any fact or link that must stay accurate.",
          "Ask for three versions: a short one, a story, and a direct offer. Set a length, such as “under 600 characters.”",
          "Tell it the words you do not want, including hype like “game-changing,” and any required hashtag or disclaimer.",
          "Pick one version and ask for a tighter edit. Read it as yourself. If it does not sound like you, rewrite the first line by hand.",
          "Copy the final text into your publishing tool. Do not let the model invent customer quotes or results.",
        ],
        [
          "Posts that all sound the same are a sign the brief was too vague. Add a real detail from your week.",
          "Check the network’s latest character count and link rules yourself. They change.",
        ],
      ),
      usage(
        "write-short-video-scripts",
        "Get a spoken script with a hook, a middle, and an on-screen caption.",
        [
          "Say the platform, the length in seconds, and who is watching. Example: “45-second TikTok for home cooks who have never baked bread.”",
          "Ask for a script you can say out loud: hook in the first sentence, three beats, and a last line that tells the viewer what to do.",
          "Also ask for one on-screen caption per beat, each under eight words.",
          "Read the script aloud and time it. If it runs long, ask it to cut to the timed length without adding new claims.",
          "Film from the script. Change any line that you would not actually say.",
        ],
        [
          "A clever hook that is not true will get you in trouble. Keep the claim inside what you can show.",
          "The model does not know this week’s audio trends. You still choose the clip and the edit.",
        ],
      ),
      usage(
        "make-a-presentation",
        "Turn notes into a slide outline you can paste into PowerPoint, Google Slides, or Gamma.",
        [
          "Paste the notes or the brief. State the audience, the decision you want, and how many slides, usually 8 to 12.",
          "Ask for a slide list: title, one sentence the slide must say, and up to three bullets. Tell it not to write paragraphs.",
          "Mark slides to delete. A deck that says everything says nothing.",
          "Ask it to rewrite only the weak slides. Then build the slides in your presentation tool so the layout matches your template.",
          "Put real numbers in yourself. Do not leave placeholder figures such as “20% growth” unless that number is yours.",
        ],
        [
          "ChatGPT will not apply your company template. The useful output is the outline, not a finished file, unless you export one and restyle it.",
          "Speaker notes can be longer than the slide. Ask for notes only after the slide titles are settled.",
        ],
      ),
      usage(
        "write-a-resume-or-cover-letter",
        "Rewrite your experience for one job, using the posting and your real history.",
        [
          "Paste the job description and a plain list of what you have actually done. Include rough dates and tools.",
          "Ask for a one-page resume in plain text: a short summary, then roles with bullets that start with a verb and a result you provided.",
          "Tell it to delete any bullet it cannot tie to your notes. This stops invented metrics.",
          "Ask for a cover letter under 300 words that names the company, the role, and two specific overlaps with the posting.",
          "Copy the text into your document, fix the formatting, and read every line. If you would not say it in an interview, take it out.",
        ],
        [
          "Never let it add degrees, employers, or numbers you cannot defend.",
          "A resume tailored to one posting is a poor template for the next posting. Start again from your notes.",
        ],
      ),
      usage(
        "reply-to-customer-emails",
        "Draft a calm reply that answers the question and states the next step.",
        [
          "Paste the customer email and any policy that applies: refund window, shipping time, or what you can and cannot do.",
          "Say the outcome you want, such as “apologize, replace the item, do not offer a discount.”",
          "Ask for a reply in short paragraphs, in your language, with a subject line if you need one.",
          "Remove anything that promises a timeline or a refund you have not approved.",
          "Send it from your own mailbox after you check the name, order number, and tone.",
        ],
        [
          "Do not paste passwords, full card numbers, or government IDs into the chat.",
          "If the customer is angry about a legal or safety issue, a template is not enough. A person should own the reply.",
        ],
      ),
      usage(
        "summarize-long-documents",
        "Get a short brief from a long text, with the points you still need to verify.",
        [
          "Paste the text, or upload the file if your account allows uploads. Say what you will use the summary for.",
          "Ask for five bullets, then a list of decisions, dates, and numbers. Ask it to quote the page or section when it can.",
          "Ask a follow-up: “What is missing?” and “What would change the conclusion?”",
          "Open the original next to the summary and check every number and name.",
          "If the document is longer than the chat can hold, summarize it in chunks, then ask for a summary of those summaries.",
        ],
        [
          "A summary can skip a caveat that matters. Skim headings and the last pages yourself.",
          "Confidential contracts and medical records may not belong in a consumer chat. Use a plan your organization has approved.",
        ],
      ),
      usage(
        "research-competitors",
        "Turn public information you provide into a comparison, and separate facts from guesses.",
        [
          "Name the companies and the question, such as “how they price” or “who they sell to.” Paste pages, reviews, or notes you already trust.",
          "Ask for a table with columns you choose: audience, offer, price signal, and a source note.",
          "Tell it to mark anything it did not get from your paste as “unchecked.”",
          "Ask for three questions you should still answer by visiting the sites yourself.",
          "Open those sites and correct the table before you share it.",
        ],
        [
          "ChatGPT’s memory of the web can be stale. Do not treat prices or features as current unless you just copied them from the source.",
          "Competitor research that includes private data you should not have is not a writing task. Leave it out.",
        ],
      ),
      usage(
        "learn-a-new-skill",
        "Build a small practice plan and get explanations at the level you are actually at.",
        [
          "Say the skill, your level, and the time you have. Example: “I can write a spreadsheet formula. I have 30 minutes a day for two weeks to learn SQL.”",
          "Ask for a plan of short sessions, each with one idea and one exercise. Ask it not to skip ahead.",
          "Do the exercise before you ask for the answer. Then paste your attempt and ask what is wrong.",
          "Ask it to explain a mistake in one paragraph and give a smaller example, not a new lecture.",
          "Keep a note of terms it used. Ask “define this without jargon” whenever a word is fuzzy.",
        ],
        [
          "It will sometimes explain a wrong step with confidence. When the result matters, check a textbook, a docs page, or a person.",
          "Watching it solve every exercise is not practice. Hide the answer until you have tried.",
        ],
      ),
      usage(
        "work-with-spreadsheets",
        "Describe the table you have and get a formula, a cleanup plan, or a plain-language reading of the numbers.",
        [
          "Paste a small sample with the header row, not your whole customer list. Say what each column means.",
          "Describe the result in words: “flag rows where the date is blank” or “sum revenue by month.”",
          "Ask for the formula in the spreadsheet you use, such as Excel or Google Sheets, and ask it to name the cells.",
          "Type the formula into one cell and check it against a row you can do by hand. Then fill down.",
          "If the formula fails, paste the exact error text back into the chat.",
        ],
        [
          "Do not upload a sheet of private customer data to find out what a formula is. Use fake rows with the same shape.",
          "A chart suggestion is not a conclusion. Look at the raw rows that drive any surprising number.",
        ],
      ),
      usage(
        "write-or-fix-code",
        "Get a small script or a fix for an error, then run it yourself.",
        [
          "Say the language and what the script should do in one sentence. Paste the error message and the few lines around it.",
          "Ask for the smallest change, not a rewrite, unless you have already decided to start over.",
          "Read the code before you run it. If it deletes files, sends email, or calls the network, know that before you press enter.",
          "Run it on a copy of your data. Paste the new error if it fails.",
          "Ask it to explain the changed lines in plain language so you can maintain them next month.",
        ],
        [
          "Do not paste API keys, passwords, or private keys into the chat.",
          "Generated code can look finished and still be wrong on edge cases. Test the boring cases: empty input, one row, and a huge row.",
        ],
      ),
      usage(
        "name-a-product",
        "Produce a short list of names and slogans you can check, not a single “perfect” brand.",
        [
          "Describe who it is for, what it does, and words you want to avoid. Mention names you already rejected.",
          "Ask for 15 names in three styles: plain, warm, and sharp. Ask it to skip names that are just misspellings.",
          "Pick five and ask for a one-line slogan for each, plus why it might be a poor fit.",
          "Search the web and a trademark database for the finalists. Ask a colleague to say each name out loud.",
          "Keep the name you can spell in an email and say on a phone call.",
        ],
        [
          "A name the model likes may already be a company, a song, or a rude word in another language.",
          "Slogans that promise a result you cannot deliver will become a support problem.",
        ],
      ),
      usage(
        "find-an-open-source-project",
        "Turn a need into search words, then into a short plan for trying one repository.",
        [
          "Describe the job, the language you can run, and whether you need a library or a full app.",
          "Ask for search queries you can paste into GitHub, plus signs of a healthy project: a recent commit, a license, and a README with install steps.",
          "Paste the README of a candidate and ask for a “first hour” plan: install, run the example, and the file to read next.",
          "Follow that plan on your machine. When a command fails, paste the command and the error, not the whole repository.",
          "Stop if the license does not allow your use. The model’s license summary is a hint. Read the LICENSE file.",
        ],
        [
          "Stars are not a safety review. Check who maintains the project and how it handles your data.",
          "Do not run unknown install scripts from a chat without reading them.",
        ],
      ),
    ],
  },
  {
    slug: "claude",
    name: "Claude",
    description:
      "A chat assistant that is strong at long documents, careful rewrites, and working through code in plain language.",
    pricing: "freemium",
    pricingDetail:
      "You can use Claude for free with limits. Pro, Max, Team, and Enterprise plans add more use and longer work. See claude.ai for current plans.",
    officialUrl: "https://claude.ai",
    addedOn: "2026-06-02",
    usages: [
      usage(
        "write-or-edit-an-article",
        "Revise a long draft so the argument stays intact and the sentences get cleaner.",
        [
          "Start a chat at claude.ai. Paste the draft and say what must not change: the thesis, the names, and any quoted material.",
          "Ask for a structural note first: what to cut, what to move, and where a reader gets lost.",
          "Apply the cuts yourself or ask Claude to rewrite only the sections you mark.",
          "Ask for a line edit of the opening and the ending, which are the parts people actually read.",
          "Compare the rewrite with your original and put back any detail that was yours and got smoothed away.",
        ],
        [
          "A polished paragraph can still be factually wrong. Keep sources next to the draft.",
          "If the piece is sensitive, use an account and settings your workplace allows.",
        ],
      ),
      usage(
        "write-social-posts",
        "Rewrite one announcement into a few posts that do not sound like ads.",
        [
          "Paste the announcement and say which detail is the news. Name the network.",
          "Ask Claude to write four posts that each lead with that detail, in different lengths.",
          "Ask it to remove slogans and to keep every number exactly as you wrote it.",
          "Choose one and ask for a version you could send to a customer you know by name.",
          "Post that version after you add the real link and the real name.",
        ],
        [
          "If every option still sounds grand, your source note was grand. Add a concrete fact.",
          "Do not ask it to imitate a specific person’s voice.",
        ],
      ),
      usage(
        "summarize-long-documents",
        "Read a long PDF or report and return a brief you can check against the source.",
        [
          "Upload the document in Claude, or paste the text. Say the decision the brief is for.",
          "Ask for: the question the document answers, five findings, and every number with the section it came from.",
          "Ask what the document does not say. Gaps matter as much as highlights.",
          "Ask a skeptical question, such as “which finding depends on a single assumption?”",
          "Spot-check two findings in the original before you forward the brief.",
        ],
        [
          "Very large files can be truncated. If a section you care about is missing from the brief, ask about that section by name.",
          "Claude can mis-read a table. Check tables yourself.",
        ],
        {
          name: "Marker",
          url: "https://github.com/datalab-to/marker",
          howToRun:
            "For a PDF you do not want to upload, convert it locally first. Install with `pip install marker-pdf`, then run `marker_single paper.pdf --output_dir ./out`. Read the Markdown it writes, and paste only the sections you are willing to share into Claude.",
        },
      ),
      usage(
        "work-with-spreadsheets",
        "Explain a messy table and get a cleanup sequence you can do by hand or with formulas.",
        [
          "Paste 15 rows, including the header, with private names replaced by Person A and Company A.",
          "Say what is wrong: mixed date formats, duplicate names, or a total that does not match.",
          "Ask for a numbered cleanup list and the exact formula for each step in Excel or Google Sheets.",
          "Do step one on the sample and paste the result back if it looks wrong.",
          "Only then run the same steps on a copy of the full sheet.",
        ],
        [
          "Ask it to explain a formula before you fill it across thousands of rows.",
          "A suggested category scheme is a guess. You decide the labels your team will still understand in a year.",
        ],
      ),
      usage(
        "write-or-fix-code",
        "Walk through a bug or a small script until the change is small enough to review.",
        [
          "Paste the code, the command you ran, and the full error. Say what you expected.",
          "Ask Claude to state the cause in two sentences before it rewrites anything.",
          "Ask for a patch, not a new project. If you use git, ask it to describe the diff.",
          "Apply the change, run the same command, and paste either success or the new error.",
          "Ask for a short comment you should leave in the code so the next person knows why the fix looks odd.",
        ],
        [
          "Refuse any suggestion that disables a security check just to make the error go away.",
          "Generated tests can pass and still miss the bug. Add one case that failed before the fix.",
        ],
      ),
      usage(
        "name-a-product",
        "Pressure-test names for clarity, pronunciation, and accidental meanings.",
        [
          "Give Claude the product in one sentence and the audience. Paste any names you are already considering.",
          "Ask which names a customer could confuse with an existing idea, and which are hard to say.",
          "Ask for ten plainer alternatives that describe the outcome, not a invented word.",
          "Pick three. Ask for a slogan under eight words that does not claim a superlative.",
          "Say each name to someone who was not in the chat. Keep the one they can repeat.",
        ],
        [
          "Claude cannot clear a trademark. Search official registers before you print anything.",
          "A poetic name that needs a paragraph of explanation is usually a no.",
        ],
      ),
    ],
  },
  {
    slug: "gemini",
    name: "Gemini",
    description:
      "Google’s chat assistant, useful when you already work in Gmail, Docs, or Search and want a draft beside that work.",
    pricing: "freemium",
    pricingDetail:
      "The Gemini app has a free tier. Higher limits and Workspace features depend on your Google account and plan. Confirm what your account includes at gemini.google.com.",
    officialUrl: "https://gemini.google.com",
    addedOn: "2026-06-02",
    usages: [
      usage(
        "write-or-edit-an-article",
        "Draft from notes in the Gemini app, then move the words into a Doc you control.",
        [
          "Open gemini.google.com. Paste your notes and say the reader and the length.",
          "Ask for an outline with one sentence per section. Delete sections before you ask for prose.",
          "Ask it to write the remaining sections in short paragraphs. Tell it not to add studies or quotes.",
          "Copy the draft into a document. Highlight every sentence that states a fact and confirm it.",
          "Ask Gemini to tighten only the highlighted weak spots, not the whole piece again.",
        ],
        [
          "Double-check anything that sounds like a search result. Links and titles can be off.",
          "If you use Gemini inside a company Workspace, follow that company’s sharing rules.",
        ],
      ),
      usage(
        "reply-to-customer-emails",
        "Draft a reply next to the thread so you can match the customer’s question.",
        [
          "Open the email, or paste it into Gemini if you are not using the Gmail side panel. Remove attachments that are not needed.",
          "Write one line on the decision: refund, replace, explain a delay, or ask for a photo of the problem.",
          "Ask for a reply under 150 words that answers each question in the customer’s note, in order.",
          "Edit the greeting and the sign-off so they match how you usually write.",
          "Send only after the order number and the offer match your records.",
        ],
        [
          "A friendly draft can still agree to something your policy forbids. Your policy wins.",
          "Do not include a customer’s full payment details in the prompt.",
        ],
      ),
      usage(
        "research-competitors",
        "Collect a first pass of public positioning, then verify it on the companies’ own pages.",
        [
          "Ask Gemini who the obvious alternatives are for a product you describe in one sentence. Tell it you want public sources.",
          "Ask for a comparison on audience, main promise, and where a buyer would start. Require a link or a page title for each claim.",
          "Open every link. Delete any row whose page does not say what the summary says.",
          "Paste the corrected notes back and ask for the three differences a buyer would actually notice.",
          "Write the final comparison in your own words so you know you understand it.",
        ],
        [
          "Search-backed answers still miss regional players and brand-new products. Add the ones you already know.",
          "Do not treat a model’s “market share” sentence as a number you can put in a deck.",
        ],
      ),
    ],
  },
];
