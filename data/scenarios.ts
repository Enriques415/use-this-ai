import type { Scenario } from "@/data/types";

export const scenarios: Scenario[] = [
  {
    slug: "write-or-edit-an-article",
    name: "Write or edit an article",
    summary:
      "Draft a blog post, essay, or newsletter, or clean up a draft so a reader can follow it.",
    audience:
      "People who need a finished piece of writing and are not looking for a creative-writing course.",
    examples: [
      "write a blog post",
      "edit my article",
      "help me draft an essay",
      "rewrite this paragraph",
      "I need a newsletter",
      "proofread my writing",
      "edit my blog post so it sounds less stiff",
      "draft an article about",
    ],
    seoDescription:
      "How to draft or edit an article with ChatGPT, Claude, or Gemini, including what to check before you publish.",
    featured: true,
    tools: [
      {
        toolSlug: "chatgpt",
        reason: "Fastest way to get a full first draft or a rewrite from a short brief.",
      },
      {
        toolSlug: "claude",
        reason: "Better when the draft is already long and you want the argument kept intact.",
      },
      {
        toolSlug: "gemini",
        reason: "Handy if you already write in Google Docs and want the draft beside that file.",
      },
    ],
  },
  {
    slug: "translate-and-localize",
    name: "Translate and localize",
    summary:
      "Turn a text into another language so it reads naturally for the people who will see it.",
    audience:
      "Anyone sending a message, menu, page, or document across languages, who still wants a human to check the important lines.",
    examples: [
      "translate this to Spanish",
      "translate a menu into Spanish",
      "localize my website",
      "translate a document",
      "make this sound natural in French",
      "I need a translation",
      "convert this email to Japanese",
      "translation",
    ],
    seoDescription:
      "How to translate and localize text with DeepL, ChatGPT, and Google Translate, and when to ask a person.",
    featured: true,
    tools: [
      {
        toolSlug: "deepl",
        reason: "The default for a full paragraph or a document when the language is supported.",
      },
      {
        toolSlug: "chatgpt",
        reason: "Use it when you also need the tone changed, not only the words swapped.",
      },
      {
        toolSlug: "google-translate",
        reason: "Use it for a quick phrase, a web page, or a language the others do not cover.",
      },
    ],
  },
  {
    slug: "create-images-and-covers",
    name: "Create images and covers",
    summary:
      "Make a cover, a YouTube thumbnail, a poster, or a simple illustration from a description. For a best AI image generator, start with the tool that matches whether the picture needs readable text.",
    audience:
      "People publishing a post, a video, or a page who need a picture and do not have a designer on call.",
    examples: [
      "make a cover image",
      "youtube thumbnail",
      "best AI image generator",
      "best AI for a youtube thumbnail",
      "generate a picture",
      "illustration for my blog",
      "create an image",
      "album cover",
      "social cover",
    ],
    seoDescription:
      "How to create covers and YouTube thumbnails with ChatGPT, Ideogram, and Midjourney, and how to avoid broken text. A real product photo is a different job.",
    featured: true,
    tools: [
      {
        toolSlug: "chatgpt",
        reason: "Start here if you already have an account and need one straightforward picture.",
      },
      {
        toolSlug: "ideogram",
        reason: "Choose it when a short title, including a YouTube thumbnail title, has to be spelled correctly.",
      },
      {
        toolSlug: "midjourney",
        reason: "Choose it when the look matters more than a caption inside the image.",
      },
    ],
    bestFor: {
      heading: "Best AI for a cover, a thumbnail, or a poster",
      intro:
        "ChatGPT stays first when you already have an account and need one picture. Ideogram comes before Midjourney when the image has to contain a short title.",
      choices: [
        {
          label: "One picture, and you already use ChatGPT",
          toolSlug: "chatgpt",
          detail: "Describe the subject, the colors, and where the title will go. Add the title yourself if the letters matter.",
        },
        {
          label: "Best AI for a YouTube thumbnail with a few words",
          toolSlug: "ideogram",
          detail: "Put the exact title in the prompt and throw the image away if a letter is wrong.",
        },
        {
          label: "A cover where the look matters more than text",
          toolSlug: "midjourney",
          detail: "Explore the scene, then set the title in your design tool. Do not ask the image to spell.",
        },
        {
          label: "A product photo you already took",
          detail:
            "That is not this page. Removing a background or cleaning a real shot is a different job from generating a new product photo.",
        },
      ],
    },
    guide: [
      {
        heading: "Make a YouTube thumbnail",
        paragraphs: [
          "A thumbnail is a small picture with one idea and, usually, a few words. It is not a poster full of sentences.",
        ],
        steps: [
          "Write the title as three or four words you would actually print. If you need a longer title, it belongs in the video title, not in the picture.",
          "Decide the face or object, the background, and which side stays empty so the words can sit there.",
          "In ChatGPT, ask for the picture with no letters, then add the words in your design tool. In Ideogram, put the short title in quotes and reject any frame with a wrong letter.",
          "Export a wide image and look at it at thumbnail size, not full screen. If you cannot read it, delete words until you can.",
          "Do not put a fake play count, a fake face, or a claim the video does not deliver.",
        ],
      },
      {
        heading: "A real product photo is a different job",
        paragraphs: [
          "If you photographed the thing you sell and need the background gone or the shot cleaned up, use Remove backgrounds or retouch product photos. Generating a new product photo with an image model is not the same job. A generated product can change the color, the label, or the shape of what you actually ship.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I use this page to make a logo?",
        answer:
          "No. A cover or a thumbnail is a picture for a post or a video. A logo is a mark you will repeat for years, and this batch does not include a logo guide.",
      },
      {
        question: "Which tool should spell the words on a YouTube thumbnail?",
        answer:
          "Ideogram, and only for a few words. Check every letter. If the title is fragile, generate the picture without text and set the type yourself. ChatGPT is still the first stop when you only need the picture.",
      },
    ],
    related: [
      {
        slug: "remove-backgrounds-or-retouch",
        note: "Use this when you have a real product photo to cut out or clean. Generating a new product photo is a different job and stays on the image page.",
      },
      {
        slug: "generate-ai-video",
        note: "Use this when you need the moving clip, not the still thumbnail that sits on top of it.",
      },
      {
        slug: "write-short-video-scripts",
        note: "Use this when you still need the words to say. A thumbnail does not write the script.",
      },
    ],
  },
  {
    slug: "remove-backgrounds-or-retouch",
    name: "Remove backgrounds or retouch product photos",
    summary:
      "Cut a product out of a photo, or clean a shot so it can sit on a store page.",
    audience:
      "Shop owners and anyone posting a product photo who needs a clean background more than a new picture.",
    examples: [
      "remove the background",
      "remove the background from a product photo",
      "white background product photo",
      "cut out this product",
      "retouch a photo",
      "clean up product shot",
      "transparent background",
      "product photo",
    ],
    seoDescription:
      "How to remove a background or retouch a product photo with Photoroom, Remove.bg, or ChatGPT.",
    tools: [
      {
        toolSlug: "photoroom",
        reason: "Best when you will do a set of catalog photos and want them to match.",
      },
      {
        toolSlug: "remove-bg",
        reason: "Best when you only need the subject cut out, once.",
      },
      {
        toolSlug: "chatgpt",
        reason: "A reasonable test for a single casual photo, if you compare it with the original.",
      },
    ],
    related: [
      {
        slug: "create-images-and-covers",
        note: "Use this when you need a new picture from a description. Generating a product photo is not the same as retouching the photo you took.",
      },
    ],
  },
  {
    slug: "write-social-posts",
    name: "Write social posts",
    summary:
      "Turn one update into a few posts you would actually publish, then put them on a schedule.",
    audience:
      "People who post for a project, a shop, or themselves and stare at a blank composer.",
    examples: [
      "write a linkedin post",
      "instagram caption",
      "tweet this",
      "social media post",
      "facebook post",
      "write posts for the week",
      "caption for instagram",
    ],
    seoDescription:
      "How to write social posts with ChatGPT or Claude and schedule them in Buffer.",
    tools: [
      {
        toolSlug: "chatgpt",
        reason: "Good for several versions of one idea when you bring a real detail.",
      },
      {
        toolSlug: "claude",
        reason: "Good when you want the post to sound plainer and less like an ad.",
      },
      {
        toolSlug: "buffer",
        reason: "Use it after the words are done, to publish them through the week.",
      },
    ],
  },
  {
    slug: "write-short-video-scripts",
    name: "Write short-video scripts or captions",
    summary:
      "Script a short video, or turn a rough clip into captions people can follow with the sound off.",
    audience:
      "People making TikToks, Reels, or Shorts who need a spoken script or readable captions.",
    examples: [
      "tiktok script",
      "youtube shorts script",
      "reel caption",
      "short video script",
      "write a voiceover",
      "captions for a video",
      "hook for a short",
      "tiktok script about",
    ],
    seoDescription:
      "How to script a short video or write captions with CapCut, Descript, and ChatGPT.",
    tools: [
      {
        toolSlug: "capcut",
        reason: "Use it when you already have a clip and need captions and a tight cut.",
      },
      {
        toolSlug: "descript",
        reason: "Use it when you would rather edit the video by deleting sentences.",
      },
      {
        toolSlug: "chatgpt",
        reason: "Use it before you film, to get a script you can say in the time you have.",
      },
    ],
    related: [
      {
        slug: "generate-ai-video",
        note: "Use this when you want a generated clip from a prompt or a still. This page is the words and the captions.",
      },
      {
        slug: "generate-ai-voice",
        note: "Use this when the script is done and you need a spoken file. Writing the line and generating the voice are different jobs.",
      },
      {
        slug: "create-images-and-covers",
        note: "Use this for the thumbnail or cover still, not for the script.",
      },
    ],
  },
  {
    slug: "generate-ai-video",
    name: "Generate a video from text or an image",
    summary:
      "Make a short clip from a text prompt or a still image. If you are looking for a best AI video generator, pick the one that matches the account you already have, then watch the clip before you generate a pile.",
    audience:
      "People who need one generated shot for a post or a draft, and who can tell a real recording from a generated one.",
    examples: [
      "generate a video from text",
      "best AI video generator",
      "image to video",
      "text to video",
      "make a clip with AI",
      "turn this picture into a video",
      "ai video from a prompt",
      "short generated video",
    ],
    seoDescription:
      "Best AI video generator picks for a short clip from text or an image: Google Flow, Runway, and Kling, and what to check before you publish the clip.",
    featured: true,
    tools: [
      {
        toolSlug: "google-flow",
        reason: "Start here if you already have a Google account and need one short clip from a prompt or a still.",
      },
      {
        toolSlug: "runway",
        reason: "Choose it when you want a video studio that can generate the clip and keep editing that clip.",
      },
      {
        toolSlug: "kling",
        reason: "Choose it for another take on the same prompt. Confirm what you can generate on the signed-in membership page.",
      },
    ],
    bestFor: {
      heading: "Best AI for a generated video",
      intro:
        "These three make a clip from text or an image. None of them writes the script or records the voiceover. Those are the pages linked below.",
      choices: [
        {
          label: "Best AI video generator if you already use Google",
          toolSlug: "google-flow",
          detail: "Sign in at Flow, describe one shot or start from one image, and download the clip that survives a full viewing.",
        },
        {
          label: "A clip you will keep editing in the same studio",
          toolSlug: "runway",
          detail: "Generate the shot, then fix that shot. Do not treat the first pretty frame as finished.",
        },
        {
          label: "Another take, after you check the membership page",
          toolSlug: "kling",
          detail: "Use Kling when you want a different generation of the same idea. Credit counts and membership prices are on the signed-in page, not here.",
        },
      ],
    },
    guide: [
      {
        heading: "How to generate a clip",
        steps: [
          "Write one sentence for one shot: the subject, the action, and the place. A prompt that is really three scenes will wander.",
          "If you start from an image, use a picture you have the right to animate. A thumbnail you generated is fine. A private photo of someone else is not.",
          "Generate one clip in Google Flow, Runway, or Kling. Watch it from the first frame to the last.",
          "Reject warped bodies, flickering backgrounds, and any lettering. Change one phrase and try again, or switch tools for a different take.",
          "Download the keeper. Add the script and the voice on their own pages, and add titles in an editor.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the best AI video generator for a first clip?",
        answer:
          "Start with Google Flow if you already have a Google account. Use Runway when you want to keep editing the clip in a video studio. Use Kling when you want another take, and read the membership page while you are signed in before you plan around a credit count.",
      },
      {
        question: "Can the same tool write the script and the voice?",
        answer:
          "Not this job. Write the words on the short-video script page, generate the spoken file on the voice page, and use this page for the moving picture.",
      },
      {
        question: "How many Kling credits do I get?",
        answer:
          "This directory does not list a credit count or a membership price. Sign in at kling.ai and open the membership page.",
      },
    ],
    related: [
      {
        slug: "write-short-video-scripts",
        note: "Use this for the words and the captions. Generating the picture that moves is the video page.",
      },
      {
        slug: "create-images-and-covers",
        note: "Use this for the still thumbnail or the image you might later animate.",
      },
      {
        slug: "generate-ai-voice",
        note: "Use this when the clip needs a spoken voiceover. The video tool does not finish the narration.",
      },
    ],
  },
  {
    slug: "generate-ai-voice",
    name: "Generate a voiceover from text",
    summary:
      "Turn a script into a spoken audio file. A best AI voice generator is the one that matches whether you need one download, a voice you are allowed to use, or an API in a project.",
    audience:
      "People who have the words and need a voice track, and who will listen to names and numbers before they publish.",
    examples: [
      "generate a voiceover",
      "text to speech",
      "best AI voice generator",
      "AI voiceover from a script",
      "turn this script into audio",
      "narration from text",
      "read this aloud and download it",
      "voice for my video",
    ],
    seoDescription:
      "Best AI voice generator options for a voiceover from text: ElevenLabs, Fish Audio, NaturalReader, and Google Cloud Text-to-Speech.",
    featured: true,
    tools: [
      {
        toolSlug: "elevenlabs",
        reason: "Start here for a spoken file you can download, using a stock voice.",
      },
      {
        toolSlug: "fish-audio",
        reason: "Use it when you need a generated voice, including one built from audio you have the right to use.",
      },
      {
        toolSlug: "naturalreader",
        reason: "Use it when you want to listen through a script and then export a straightforward voiceover.",
      },
      {
        toolSlug: "google-cloud-tts",
        reason: "Use it when the audio has to come from an API in a project you run, not from a one-off website.",
      },
    ],
    bestFor: {
      heading: "Best AI for a voiceover",
      intro:
        "All four turn text into speech. The right one depends on whether you are downloading one file, using a voice you are allowed to use, or calling an API.",
      choices: [
        {
          label: "Best AI voice generator for a file you will drop into a video",
          toolSlug: "elevenlabs",
          detail: "Paste the script, pick a stock voice, and listen to every name before you download the full read.",
        },
        {
          label: "A voice built from audio you have permission to use",
          toolSlug: "fish-audio",
          detail: "Start with a stock voice. Upload audio only when the speaker told you to use it.",
        },
        {
          label: "Listen first, then export",
          toolSlug: "naturalreader",
          detail: "Read the script aloud in the browser, then export if the plan includes a file. Confirm the license if you will sell the audio.",
        },
        {
          label: "Speech inside an app you are building",
          toolSlug: "google-cloud-tts",
          detail: "Use the Cloud API when a product has to synthesize audio. For one narration, a studio above is shorter. This page does not quote a per-character price.",
        },
      ],
    },
    guide: [
      {
        heading: "How to generate the voiceover",
        steps: [
          "Finish the script first. A voice tool will speak a wrong line with confidence.",
          "Pick a stock voice and generate the first paragraph only. Fix pronunciation before you spend the rest of the allowance.",
          "Listen for names, numbers, and any line you would not say yourself.",
          "Download or synthesize the full file only after that sample is right.",
          "If the voice is going into an app rather than one video, use Google Cloud Text-to-Speech in the project that should receive the bill, and read the current pricing page before you loop it.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the best AI voice generator for a video?",
        answer:
          "Start with ElevenLabs and a stock voice when you need a file to drop into an edit. Use NaturalReader if you want to listen through the script in the browser and then export. Use Fish Audio if you are working from a voice you have permission to use. Use Google Cloud Text-to-Speech when the audio is part of an app, not a one-off file.",
      },
      {
        question: "Can I clone someone’s voice?",
        answer:
          "Only with that person’s permission, and only in a tool that accepts audio you are allowed to upload. A stock voice is the default on this page.",
      },
      {
        question: "Is the spoken file the same job as the script?",
        answer:
          "No. Write the words on the short-video script page. Generate the clip on the video page. This page is only the voice.",
      },
    ],
    related: [
      {
        slug: "write-short-video-scripts",
        note: "Use this to write the line. Come back here when the words are finished and you need them spoken.",
      },
      {
        slug: "generate-ai-video",
        note: "Use this for the moving picture. A voiceover does not create the clip.",
      },
      {
        slug: "turn-an-idea-into-an-app",
        note: "Use this when the voice has to live inside an app you are building, not as a file for one video. Google Cloud Text-to-Speech is the API on this page; the app page is where the product gets built.",
      },
    ],
  },
  {
    slug: "make-a-presentation",
    name: "Make a presentation",
    summary:
      "Turn notes into a slide deck with one point per slide, in a form you can present.",
    audience:
      "People who have a meeting, a class, or a pitch and do not want to design every slide from zero.",
    examples: [
      "make a powerpoint",
      "slide deck",
      "pitch deck",
      "make a pitch deck for a meeting",
      "google slides",
      "presentation for a meeting",
      "turn this into slides",
      "powerpoint",
    ],
    seoDescription:
      "How to make a presentation with Gamma, Plus AI, or an outline from ChatGPT.",
    featured: true,
    tools: [
      {
        toolSlug: "gamma",
        reason: "Fastest path from a brief to a deck you can edit in the browser.",
      },
      {
        toolSlug: "plus-ai",
        reason: "Use it when the slides have to live in PowerPoint or Google Slides from the start.",
      },
      {
        toolSlug: "chatgpt",
        reason: "Use it when you only need the outline and will build the slides yourself.",
      },
    ],
  },
  {
    slug: "write-a-resume-or-cover-letter",
    name: "Write a resume or cover letter",
    summary:
      "Rewrite your real experience for one job, as a resume and a short cover letter.",
    audience:
      "Job seekers who have the history and need help shaping it for a specific posting.",
    examples: [
      "write my resume",
      "write a resume for a marketing job",
      "cv",
      "cover letter",
      "write a cover letter",
      "job application",
      "tailor my resume to this job",
      "rewrite my resume",
    ],
    seoDescription:
      "How to write a resume or cover letter with ChatGPT, Teal, or Rezi without inventing experience.",
    featured: true,
    tools: [
      {
        toolSlug: "chatgpt",
        reason: "A direct way to draft from your notes and one job description.",
      },
      {
        toolSlug: "teal",
        reason: "Use it when you are applying to many jobs and need a master resume plus tailored copies.",
      },
      {
        toolSlug: "rezi",
        reason: "Use it when you want a structured resume aimed at one posting and a keyword check.",
      },
    ],
  },
  {
    slug: "reply-to-customer-emails",
    name: "Reply to customer emails",
    summary:
      "Draft a clear reply to a customer, with the decision and the next step spelled out.",
    audience:
      "Shop owners and support staff who answer the same kinds of email and still need each reply to be specific.",
    examples: [
      "reply to this customer",
      "reply to an angry customer email",
      "draft an email",
      "customer support email",
      "write a polite reply",
      "inbox reply",
      "respond to a complaint",
    ],
    seoDescription:
      "How to reply to customer emails with ChatGPT, Gemini, or Superhuman without promising the wrong thing.",
    tools: [
      {
        toolSlug: "chatgpt",
        reason: "Paste the thread and your decision, and get a reply you can edit.",
      },
      {
        toolSlug: "gemini",
        reason: "Useful when the thread is already in Gmail.",
      },
      {
        toolSlug: "superhuman",
        reason: "Use it if you live in a fast inbox and want drafts and snippets in the same place.",
      },
    ],
  },
  {
    slug: "turn-meetings-into-notes",
    name: "Turn meeting recordings into notes",
    summary:
      "Go from a call or a recording to notes, decisions, and named action items.",
    audience:
      "People who leave meetings with a recording and no one sure what was decided.",
    examples: [
      "meeting notes",
      "transcribe this meeting",
      "summarize the call",
      "action items from the recording",
      "zoom notes",
      "turn this zoom recording into notes",
      "what did we decide",
    ],
    seoDescription:
      "How to turn a meeting recording into notes with Otter, Fireflies, or Notion AI.",
    featured: true,
    tools: [
      {
        toolSlug: "otter",
        reason: "A straightforward recorder and transcript when you want notes right after the call.",
      },
      {
        toolSlug: "fireflies",
        reason: "Use it when a notetaker should join the calendar and file searchable recaps.",
      },
      {
        toolSlug: "notion-ai",
        reason: "Use it when the transcript should become a page in the workspace you already use.",
      },
    ],
  },
  {
    slug: "summarize-long-documents",
    name: "Summarize long documents",
    summary:
      "Get a short, checkable brief from a long PDF, report, or paper.",
    audience:
      "People who have to understand a long document and do not have time to read it twice.",
    examples: [
      "summarize this pdf",
      "summarize a 40 page pdf",
      "tl;dr this report",
      "summarize a long document",
      "key points from this paper",
      "digest this contract",
      "read this for me",
    ],
    seoDescription:
      "How to summarize a long document with NotebookLM, Claude, or ChatGPT, and how to check the brief.",
    featured: true,
    tools: [
      {
        toolSlug: "notebooklm",
        reason: "Best when you can upload the file and want answers tied to that file.",
      },
      {
        toolSlug: "claude",
        reason: "Strong on a long upload when you want findings and the gaps.",
      },
      {
        toolSlug: "chatgpt",
        reason: "Fine for a text you can paste, or a file your account accepts.",
      },
    ],
  },
  {
    slug: "research-competitors",
    name: "Research or analyze competitors",
    summary:
      "Build a sourced comparison of other products, then verify it on their pages.",
    audience:
      "Founders, marketers, and analysts who need a first map of a market, not a fantasy market-share slide.",
    examples: [
      "competitor research",
      "who are my competitors",
      "who are the competitors to notion",
      "analyze this company",
      "market research",
      "compare these products",
      "what does this company do",
    ],
    seoDescription:
      "How to research competitors with Perplexity, ChatGPT, and Gemini, and which claims to verify.",
    tools: [
      {
        toolSlug: "perplexity",
        reason: "Start here because the answer comes with pages you can open.",
      },
      {
        toolSlug: "chatgpt",
        reason: "Use it to shape notes you already collected into a comparison.",
      },
      {
        toolSlug: "gemini",
        reason: "A second pass when you want another sourced sweep of public pages.",
      },
    ],
  },
  {
    slug: "learn-a-new-skill",
    name: "Learn a new skill",
    summary:
      "Build a short practice plan from real sources, and get explanations at your level.",
    audience:
      "People teaching themselves a skill in small sessions, who want exercises more than a lecture.",
    examples: [
      "teach me",
      "learn python",
      "learn sql from scratch",
      "study guide",
      "explain this topic",
      "I want to learn",
      "practice questions",
      "how do I get started with",
    ],
    seoDescription:
      "How to learn a new skill with NotebookLM, Perplexity, and ChatGPT without skipping the practice.",
    tools: [
      {
        toolSlug: "notebooklm",
        reason: "Use it when you have a handout or a chapter and want questions from that text.",
      },
      {
        toolSlug: "perplexity",
        reason: "Use it to find a few pages worth reading, with links.",
      },
      {
        toolSlug: "chatgpt",
        reason: "Use it as a patient explainer once you are doing the exercises.",
      },
    ],
  },
  {
    slug: "work-with-spreadsheets",
    name: "Work with spreadsheets or data",
    summary:
      "Clean a table, get a formula, or understand what a sheet is saying.",
    audience:
      "People who have a spreadsheet and a question, and do not want a data-science setup.",
    examples: [
      "clean this spreadsheet",
      "clean up this excel sheet",
      "excel formula",
      "analyze this csv",
      "make a chart from data",
      "spreadsheet",
      "pivot table",
      "what does this data say",
    ],
    seoDescription:
      "How to work with a spreadsheet using ChatGPT, Claude, or Copilot in Excel.",
    tools: [
      {
        toolSlug: "chatgpt",
        reason: "Describe the table and get a formula you can test on one row.",
      },
      {
        toolSlug: "claude",
        reason: "Useful for a messy sample when you want a step-by-step cleanup.",
      },
      {
        toolSlug: "excel-copilot",
        reason: "Use it inside Excel when your Microsoft 365 plan includes Copilot.",
      },
    ],
  },
  {
    slug: "write-or-fix-code",
    name: "Write or fix a small tool or code",
    summary:
      "Write a small script or fix a bug, then run it and read the change.",
    audience:
      "People who can run a command and want help with a contained piece of code.",
    examples: [
      "fix this bug",
      "help me fix a python bug",
      "write a python script",
      "small tool",
      "debug this code",
      "write a function",
      "help me code",
      "script to rename files",
      "github copilot",
      "claude or chatgpt for code",
      "best AI for fixing a bug",
    ],
    seoDescription:
      "How to write a small script or fix a bug with Cursor, Claude, ChatGPT, or GitHub Copilot, and when a full app belongs on a different page.",
    featured: true,
    tools: [
      {
        toolSlug: "cursor",
        reason: "Best when the code is already in a project and you want to review a diff.",
      },
      {
        toolSlug: "claude",
        reason: "Good at stating the cause of a bug before rewriting it.",
      },
      {
        toolSlug: "chatgpt",
        reason: "Fine for a one-file script you will run yourself.",
      },
      {
        toolSlug: "github-copilot",
        reason: "Use it when you already write in VS Code or on GitHub and want the next lines suggested in the editor.",
      },
    ],
    bestFor: {
      heading: "Best AI for a small script or a bug",
      intro:
        "The first job on this page is a small script or a fix you can run. A whole application is the app page, not this one.",
      choices: [
        {
          label: "A bug or a small script inside a project",
          toolSlug: "cursor",
          detail: "Open the folder in Cursor, ask for the smallest diff, and run the same command again. The Aider note on the Cursor guide is there if you want a terminal tool instead of the editor.",
        },
        {
          label: "You want the cause before the rewrite",
          toolSlug: "claude",
          detail: "Ask Claude to say what is wrong in two sentences, then ask for a patch.",
        },
        {
          label: "A one-file script you will run yourself",
          toolSlug: "chatgpt",
          detail: "Paste the error and the few lines around it. Read the code before you run it.",
        },
        {
          label: "You already live in VS Code or GitHub",
          toolSlug: "github-copilot",
          detail: "Let Copilot suggest the next lines in the editor you have open. Accept only what you can explain.",
        },
      ],
    },
    guide: [
      {
        heading: "Start with a small script or a bug",
        paragraphs: [
          "Describe the language, what should happen, and the command you ran. Paste the error. Ask for the smallest change that makes that command succeed.",
          "If the thing you actually want is a running app with screens, accounts, or a preview you click, leave this page. That job is Turn an idea into a running app.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I use Claude or ChatGPT to fix a bug?",
        answer:
          "Use Claude when you want it to state the cause before it rewrites anything. Use ChatGPT when you need a one-file script you will run yourself. If the code is already in a project and you want a diff, use Cursor first. If you already work in VS Code or on GitHub, GitHub Copilot can suggest the next lines in the editor. A full app is a different job: open Turn an idea into a running app.",
      },
      {
        question: "Is GitHub Copilot the same as Cursor?",
        answer:
          "No. Copilot suggests code in the editor and on GitHub. Cursor is an editor that can read the project and propose a diff. Use Copilot when you are staying in the editor you already have. Use Cursor when you want the change reviewed as a diff in the project.",
      },
    ],
    related: [
      {
        slug: "turn-an-idea-into-an-app",
        note: "Use this when the job is a running app, not a small script or a single bug. This page stays on the contained change.",
      },
    ],
  },
  {
    slug: "build-a-website",
    name: "Build a website or landing page",
    summary:
      "Make a single page that says what you offer and gives a person one thing to do.",
    audience:
      "People who need a page online and do not want to start from a blank design file.",
    examples: [
      "build a landing page",
      "make a website",
      "small business website",
      "online store",
      "wordpress site",
      "best AI website builder",
      "landing page for a bakery",
      "one page site",
      "marketing page",
      "I need a homepage",
      "landing page for my product",
    ],
    seoDescription:
      "How to build a landing page with Lovable, v0, or Bolt, and when a small business, a shop, or a WordPress site should use a traditional builder instead.",
    featured: true,
    tools: [
      {
        toolSlug: "lovable",
        reason: "Start here when you want to describe a page and edit it by clicking the preview.",
      },
      {
        toolSlug: "v0",
        reason: "A strong default for a React page you can preview and then own the code for.",
      },
      {
        toolSlug: "bolt",
        reason: "Use it when you want the page running in the browser immediately.",
      },
    ],
    bestFor: {
      heading: "Best AI for a website or a landing page",
      intro:
        "Lovable is first for a page you describe and then edit in the preview. v0 is next when you want the React code. Bolt is next when the page should be running in the browser immediately. Wix, Squarespace, Shopify, and WordPress are not AI tool cards on this page. They are the ordinary builders to use when the job is a standard site.",
      choices: [
        {
          label: "Best AI website builder for a page you describe",
          toolSlug: "lovable",
          detail: "One page, your real sentences, a button that goes somewhere. Edit the preview instead of regenerating it.",
        },
        {
          label: "A React page you can keep",
          toolSlug: "v0",
          detail: "Preview it, replace the filler, and copy the code into a project you own.",
        },
        {
          label: "See it running in the browser now",
          toolSlug: "bolt",
          detail: "Prompt the page, click the button, and download the project before the session is the only copy.",
        },
        {
          label: "A small-business site, a shop, or WordPress",
          detail:
            "Use a traditional builder for that shape of site. Come back to Lovable, v0, or Bolt when you want the page generated from a description.",
        },
      ],
    },
    guide: [
      {
        heading: "A small business, a shop, or a WordPress site",
        paragraphs: [
          "This page is for a page you generate from a description: a headline, proof, and one action. Lovable, v0, and Bolt are the tools for that.",
          "A small business that wants a familiar editor, a few pages, and a contact form, without taking code home, should look at a traditional builder such as Wix or Squarespace. An online store that needs products, tax, and checkout should look at Shopify, or at WordPress with a shop plugin if the site is already on WordPress. This directory does not add tool cards for those builders.",
          "If the site is really a small app, with its own behavior rather than a page of copy, use Turn an idea into a running app. On that page, Cursor is the first choice when the project has to live in git on your machine.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should a small business use Lovable or WordPress?",
        answer:
          "Use Lovable, v0, or Bolt when you want a page generated from a description and you will edit that page. Use WordPress, Wix, or Squarespace when you want a familiar site editor and you are not trying to generate the page from a prompt. Use Shopify, or WordPress with a shop, when you are selling products and need checkout. Those builders are named here so the jobs stay separate. They are not ranked as AI tools.",
      },
      {
        question: "Why is Lovable listed before v0?",
        answer:
          "Lovable is the first tool to try for a page you describe and then click through. v0 is the next choice when you want a React page you can own. Bolt is the next choice when you want the preview running in the browser immediately.",
      },
    ],
    related: [
      {
        slug: "turn-an-idea-into-an-app",
        note: "Use this when you need a small app, not a page of copy. Cursor is the first choice there when the project should live in git on your machine.",
      },
    ],
  },
  {
    slug: "name-a-product",
    name: "Name a product or write a slogan",
    summary:
      "Get a short list of names and slogans you can say out loud and then check for conflicts.",
    audience:
      "People naming a product, a feature, or a small brand who need options, not a single magic word.",
    examples: [
      "name my product",
      "name my coffee brand",
      "write a slogan",
      "brand name ideas",
      "tagline",
      "what should I call this",
      "product name",
    ],
    seoDescription:
      "How to name a product or write a slogan with ChatGPT, Claude, and Namelix, then check that the name is free.",
    tools: [
      {
        toolSlug: "chatgpt",
        reason: "Good for a wide first list once you describe who the product is for.",
      },
      {
        toolSlug: "claude",
        reason: "Use it to throw out names that are hard to say or easy to confuse.",
      },
      {
        toolSlug: "namelix",
        reason: "Use it when you want a generator aimed at brand names, plus a rough logo sketch.",
      },
    ],
  },
  {
    slug: "automate-work-with-ai-agents",
    name: "Automate repeated work with an AI agent",
    summary:
      "Take a task you already repeat and let an agent do the middle of it. The best AI for this is the one that fits where the work already lives, not a second inbox you have to babysit.",
    audience:
      "People with a repeated task across apps they already use, who will read the first results before they let the agent act alone.",
    examples: [
      "automate repeated work",
      "AI agent for my email",
      "best AI agent for automation",
      "zapier AI agent",
      "connect my apps with AI",
      "automate a workflow",
      "n8n agent",
      "draft my follow-ups",
    ],
    seoDescription:
      "How to automate repeated work with AI by Zapier, n8n, or Lindy, including the 1 December 2026 Zapier billing change and Lindy’s paid trial.",
    featured: true,
    tools: [
      {
        toolSlug: "zapier",
        reason: "Start here when the apps are already on Zapier and the job is a trigger plus a few steps, using AI by Zapier in the Zap editor.",
      },
      {
        toolSlug: "n8n",
        reason: "Choose it when you want the same kind of workflow in a tool you can also run yourself.",
      },
      {
        toolSlug: "lindy",
        reason: "Choose it when you want an assistant to draft the repeated work, after a short credit trial and then a paid plan.",
      },
    ],
    bestFor: {
      heading: "Best AI for automating repeated work",
      intro:
        "Zapier is first when the apps you use are already there. n8n is next when you may need to host the workflow. Lindy is the paid assistant, with a short credit trial advertised as 7 days.",
      choices: [
        {
          label: "The apps are already on Zapier",
          toolSlug: "zapier",
          detail:
            "Build a Zap and use AI by Zapier inside the editor. Standalone Agents have moved into that editor. Next Gen Zap task billing is scheduled to start 1 December 2026.",
        },
        {
          label: "You may need to run the workflow yourself",
          toolSlug: "n8n",
          detail: "Use hosted n8n, or the open-source project at github.com/n8n-io/n8n when the work cannot leave a machine you control.",
        },
        {
          label: "An assistant that drafts the repeated task",
          toolSlug: "lindy",
          detail: "Start the credit trial, advertised as credits lasting 7 days, and move to a paid plan only if the drafts are worth keeping. Lindy is not freemium.",
        },
      ],
    },
    guide: [
      {
        heading: "How to automate one repeated task",
        steps: [
          "Name the task the way you do it today: the trigger, the judgment, and the action. If you cannot name those three, the agent will invent a fourth.",
          "Pick Zapier if those apps are already connected there. The AI step is AI by Zapier, in the Zap editor.",
          "Pick n8n if you want a workflow you can host, using n8n.io or the official GitHub project.",
          "Pick Lindy if you want an assistant drafting the work. Plan on a paid plan after the short credit trial.",
          "Run it on one record you can undo. Read the output. A support bot that answers customers from your docs is a different page.",
        ],
      },
    ],
    faqs: [
      {
        question: "What happened to Zapier Agents?",
        answer:
          "The current product name is AI by Zapier. The standalone Agents product has moved into the Zap editor. You add it as a step in a Zap, not as a separate agent app.",
      },
      {
        question: "Does Zapier’s free plan include the same features as Professional?",
        answer:
          "This page does not publish a Free versus Professional feature matrix. Check zapier.com for the plan on your account. Next Gen Zap task billing is scheduled to start 1 December 2026, so look at which Zaps are turned on before that date.",
      },
      {
        question: "Is Lindy free?",
        answer:
          "No. Lindy is paid. Official pricing is a short credit trial, advertised as credits lasting 7 days, and then a paid plan. See lindy.ai for the current plan.",
      },
      {
        question: "Is this the same as a support bot?",
        answer:
          "No. A support bot answers questions from your docs. This page is for a repeated task that starts when something happens in your apps, such as a new email or a new row.",
      },
    ],
    related: [
      {
        slug: "build-a-support-bot",
        note: "Use this when the job is answering repeated questions from your help content. An agent that moves work between apps stays on this page.",
      },
    ],
  },
  {
    slug: "build-a-support-bot",
    name: "Build a support or Q&A bot",
    summary:
      "Answer repeated questions from your own docs, and hand the rest to a person.",
    audience:
      "Support leads and small teams who have help content and keep answering the same questions.",
    examples: [
      "customer support bot",
      "build a chatbot for our help center",
      "chatbot for my docs",
      "Q&A bot",
      "answer questions from my website",
      "help center bot",
      "train a bot on my faq",
    ],
    seoDescription:
      "How to build a support or Q&A bot with Chatbase, Voiceflow, or a custom GPT.",
    tools: [
      {
        toolSlug: "chatbase",
        reason: "The shortest path from help articles to a widget on your site.",
      },
      {
        toolSlug: "voiceflow",
        reason: "Use it when you need an explicit path, including a handoff to a person.",
      },
      {
        toolSlug: "custom-gpts",
        reason: "Use it when the bot can live as a ChatGPT link instead of a site widget.",
      },
    ],
    related: [
      {
        slug: "automate-work-with-ai-agents",
        note: "Use this when a repeated task should run across the apps you already use. A bot that answers from your docs stays here.",
      },
    ],
  },
  {
    slug: "find-an-open-source-project",
    name: "Find an open-source project and learn to use it",
    summary:
      "Find a repository for a real job, judge whether it is alive, and run the example.",
    audience:
      "People who would rather use a public project than a new subscription, and are willing to follow a README.",
    examples: [
      "find an open source project",
      "find an open source speech to text project",
      "github project for",
      "how do I run this repo",
      "open source alternative",
      "learn this github project",
    ],
    seoDescription:
      "How to find an open-source project and learn to run it, using GitHub, Perplexity, and ChatGPT.",
    tools: [
      {
        toolSlug: "github",
        reason: "This is where the code, the license, and the install steps actually are.",
      },
      {
        toolSlug: "perplexity",
        reason: "Use it to get a short list of repositories with links, then verify them.",
      },
      {
        toolSlug: "chatgpt",
        reason: "Use it to turn a README into a first-hour plan after you have picked a repo.",
      },
    ],
  },
  {
    slug: "turn-an-idea-into-an-app",
    name: "Turn an idea into a running app",
    summary:
      "Take a small idea and get something you can click, running on your machine or in the browser.",
    audience:
      "People with a concrete idea who want a working slice, not a platform.",
    examples: [
      "build an app from an idea",
      "mvp",
      "vibe coding",
      "best AI app builder",
      "prototype this idea",
      "turn this into a working app",
      "I have an idea for an app",
      "I have an idea for an app and want it running",
      "ship a small app",
    ],
    seoDescription:
      "How to turn an idea into a running app with Lovable, Cursor, Bolt, or v0, including what vibe coding means and when the project should live in git.",
    featured: true,
    tools: [
      {
        toolSlug: "lovable",
        reason: "Start here when you want a clickable app from a description and you will correct it in the preview.",
      },
      {
        toolSlug: "cursor",
        reason: "First choice when the project should live in git on your machine from the start.",
      },
      {
        toolSlug: "bolt",
        reason: "Best when you want to see the app run in the browser before you download it.",
      },
      {
        toolSlug: "v0",
        reason: "Best when the first win is a screen that looks right and then gets real behavior.",
      },
    ],
    bestFor: {
      heading: "Best AI for turning an idea into an app",
      intro:
        "Lovable is the first tool on this page. Cursor stays the first choice when the project should live in git on your machine. Bolt and v0 follow for a browser preview and for a screen you then make real.",
      choices: [
        {
          label: "Best AI app builder when you will edit a preview",
          toolSlug: "lovable",
          detail: "Describe three actions, click the preview, and stop when those three work.",
        },
        {
          label: "The project should live in git, on your machine",
          toolSlug: "cursor",
          detail: "This is the first choice for that case, even though Lovable is ranked first overall. Open a folder, keep the diff, and run it locally.",
        },
        {
          label: "See it run in the browser before you download it",
          toolSlug: "bolt",
          detail: "Prompt a tiny app, use the preview, then put the files in git. The browser session is not your history.",
        },
        {
          label: "A screen that looks right, then real behavior",
          toolSlug: "v0",
          detail: "Generate one screen, refuse a login system you do not need, and run it locally.",
        },
      ],
    },
    guide: [
      {
        heading: "What vibe coding means",
        paragraphs: [
          "Vibe coding means describing the app in ordinary language, letting the tool write the first version, and correcting it by using the preview and saying what is wrong. It is a way to get a small slice running. It is not a reason to stop reading the change.",
          "If the project has to live in git on your machine, Cursor is the first choice. Use Lovable, Bolt, or v0 to get a preview, then move the code into a repository and continue there. A small script or a single bug is a different page: Write or fix a small tool or code.",
        ],
      },
    ],
    faqs: [
      {
        question: "What does vibe coding mean?",
        answer:
          "It means you describe what the app should do, the tool generates a first version, and you fix it by trying the preview and saying what failed. Keep the idea to three actions. When the code needs to live in git on your computer, switch to Cursor and read the diff.",
      },
      {
        question: "Why is Lovable first if Cursor is better for git?",
        answer:
          "Lovable is first for a clickable app you correct in the preview. Cursor is the first choice when the project should live in git on your machine. Both are on this page. They are for different moments of the same job.",
      },
    ],
    related: [
      {
        slug: "write-or-fix-code",
        note: "Use this for a small script or a bug inside a project. Building the app is this page.",
      },
      {
        slug: "build-a-website",
        note: "Use this for a landing page or a simple site. An app with its own behavior stays here.",
      },
      {
        slug: "generate-ai-voice",
        note: "Use this when the app needs a spoken file or speech from text. Building the app and generating the voice are different jobs.",
      },
    ],
  },
];
