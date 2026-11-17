import { usage, type Tool } from "@/data/types";

export const languageAndMediaTools: Tool[] = [
  {
    slug: "deepl",
    name: "DeepL",
    description:
      "A translator built for full sentences and documents, with a tone that is often closer to how people write.",
    pricing: "freemium",
    pricingDetail:
      "The free translator handles everyday text with length limits. Paid plans add more volume, document translation, and glossary controls. See deepl.com for current limits.",
    officialUrl: "https://www.deepl.com/translator",
    addedOn: "2026-05-12",
    usages: [
      usage(
        "translate-and-localize",
        "Translate a page, an email, or a document, then adjust tone before you send it.",
        [
          "Open deepl.com/translator. Choose the source language, or leave it on detect, and choose the target language.",
          "Paste the text. For a file, use the document translation option and keep a copy of the original.",
          "Read the translation next to the source. Click a sentence to see alternatives when a phrase sounds stiff.",
          "If you have a paid plan, add product names to a glossary so they are not translated.",
          "For a public page, ask a native speaker to read the result once. Fix names, units, and anything that became too formal.",
        ],
        [
          "DeepL covers a strong set of languages, not every language. If yours is missing, use another tool and say so.",
          "It will not know that a word is your brand unless you tell it.",
        ],
        {
          name: "LibreTranslate",
          url: "https://github.com/LibreTranslate/LibreTranslate",
          howToRun:
            "When the text cannot leave your computer, run LibreTranslate locally. With Docker installed, use `docker run -p 5000:5000 libretranslate/libretranslate`, then open http://localhost:5000. The first start is a large download. Quality is usually below DeepL, which is the trade for keeping the text on your machine.",
        },
      ),
    ],
  },
  {
    slug: "google-translate",
    name: "Google Translate",
    description:
      "A free translator for quick phrases, web pages, and a wide range of languages, including camera and conversation modes.",
    pricing: "free",
    pricingDetail:
      "The consumer translator at translate.google.com is free for typical personal use. High-volume API use is a separate Google Cloud product and is billed.",
    officialUrl: "https://translate.google.com",
    addedOn: "2026-05-12",
    usages: [
      usage(
        "translate-and-localize",
        "Get a fast translation of a phrase, a page, or a photo of text, then correct the important lines.",
        [
          "Open translate.google.com. Set the languages. Paste a sentence or a paragraph, not a whole book.",
          "For a web page, paste the URL in the left box and open the translated link it offers.",
          "Use the camera or image option in the mobile app only to understand a sign or a menu, not to publish the result.",
          "Rewrite any line a customer will see. Short UI strings and jokes are where the literal translation fails.",
          "If you are localizing a product, copy the corrected strings into your own file so you are not translating the page again next week.",
        ],
        [
          "A translated web page is for understanding, not for your official site. Layout and buttons often break.",
          "Do not rely on it for legal, medical, or safety instructions.",
        ],
      ),
    ],
  },
  {
    slug: "midjourney",
    name: "Midjourney",
    description:
      "An image generator aimed at stylized art, posters, and concept pictures, run through its web app or Discord.",
    pricing: "paid",
    pricingDetail:
      "Midjourney is a paid subscription. There is no lasting free plan. Plans differ by how fast you can generate and how you may use the images commercially. Confirm the current plan on midjourney.com before you subscribe.",
    officialUrl: "https://www.midjourney.com",
    addedOn: "2026-07-20",
    usages: [
      usage(
        "create-images-and-covers",
        "Explore a visual direction for a cover or poster, then upscale the one frame you will actually use.",
        [
          "Create an account at midjourney.com and pick a plan. Open the web editor, or the Discord workflow if that is what your plan uses.",
          "Write a prompt with subject, setting, lighting, and mood. Add the aspect ratio you need, such as a wide cover.",
          "Generate a small set. Do not ask for words in the image. You will add the title later.",
          "Vary the frame that is closest. Change one thing at a time: “same scene, morning light” or “same scene, simpler background.”",
          "Upscale or download the final frame. Check it large, on the background color of your page.",
        ],
        [
          "Commercial use depends on your plan. Read the current terms before you put the image on a product.",
          "Avoid prompts that copy a living artist or a copyrighted character. You will not own a clean result.",
        ],
      ),
    ],
  },
  {
    slug: "ideogram",
    name: "Ideogram",
    description:
      "An image generator that is comparatively good at posters and pictures that include short, readable text.",
    pricing: "freemium",
    pricingDetail:
      "Ideogram offers free generations with limits and paid plans for more images and features. See ideogram.ai for the current allowance.",
    officialUrl: "https://ideogram.ai",
    addedOn: "2026-11-16",
    usages: [
      usage(
        "create-images-and-covers",
        "Make a cover or poster where a short title has to be spelled correctly.",
        [
          "Sign in at ideogram.ai. Choose the canvas size closest to your cover.",
          "Put the exact title in quotes in the prompt, and describe the scene around it. Keep the title to a few words.",
          "Generate several options. Throw out any image where a letter is wrong, even if the picture is pretty.",
          "Use remix or a follow-up prompt to fix layout, not to invent a new title spelling.",
          "Download the file and place it in your page or video editor. If the title is still fragile, set the type yourself on top of a text-free version.",
        ],
        [
          "Long sentences in an image still break. One short title is the realistic ask.",
          "Free-tier images may be public. Do not generate unreleased product art on a plan that posts to a public gallery.",
        ],
        {
          name: "ComfyUI",
          url: "https://github.com/comfyanonymous/ComfyUI",
          howToRun:
            "To generate images on your own machine, clone https://github.com/comfyanonymous/ComfyUI, install with `pip install -r requirements.txt`, and start it with `python main.py`. Put a model checkpoint in `models/checkpoints`, then open http://127.0.0.1:8188. You need a capable GPU for a tolerable wait. This is a node editor, not a one-click poster tool.",
        },
      ),
    ],
  },
  {
    slug: "photoroom",
    name: "Photoroom",
    description:
      "A photo editor for product shots: background removal, simple scenes, and consistent catalog images.",
    pricing: "freemium",
    pricingDetail:
      "The free plan covers basic background removal with limits. Paid plans add batch tools, brand kits, and higher export quality. See photoroom.com for current pricing.",
    officialUrl: "https://www.photoroom.com",
    addedOn: "2026-08-04",
    usages: [
      usage(
        "remove-backgrounds-or-retouch",
        "Turn a phone photo of a product into a clean catalog image with a consistent background.",
        [
          "Create an account at photoroom.com or in the mobile app. Upload one product photo with the item fully in frame.",
          "Choose background removal. Pick a white, transparent, or simple colored background that matches the rest of your shop.",
          "Use the retouch tools only for dust and small distractions. Do not reshape the product.",
          "Zoom to 100 percent and compare edges, labels, and anything thin, such as a handle or a glass stem.",
          "Export at the size your store asks for. Repeat with the same background setting for the next photo so the catalog matches.",
        ],
        [
          "A dramatic AI background can misrepresent the product’s size or material. Prefer a plain background for anything you sell.",
          "Batch exports on the free plan may be limited. Test one image before you upload a hundred.",
        ],
      ),
    ],
  },
  {
    slug: "remove-bg",
    name: "Remove.bg",
    description:
      "A focused tool that cuts a subject out of a photo and gives you a transparent or solid background.",
    pricing: "freemium",
    pricingDetail:
      "You can preview a result for free at a lower resolution. Full-resolution downloads use credits or a paid plan. See remove.bg for current credit prices.",
    officialUrl: "https://www.remove.bg",
    addedOn: "2026-08-04",
    usages: [
      usage(
        "remove-backgrounds-or-retouch",
        "Cut one subject out of a photo when you only need the background gone.",
        [
          "Open remove.bg and upload a photo where the subject is clearly separated from the background.",
          "Wait for the cutout. Look at hair, fur, glass, and holes in the object. Those are the usual failures.",
          "If an edge is wrong, use the restore or erase brush rather than uploading a blurrier photo.",
          "Download a small preview to test the layout. Pay for the full file only when the cutout is right.",
          "Place the PNG on your real background and check the shadow. A floating product looks fake. Add a soft shadow in your editor if you need one.",
        ],
        [
          "The free preview is not the file you should upload to a print shop. It is there so you can judge the cut.",
          "Photos of groups, cluttered desks, or white products on white backgrounds need a cleaner source photo first.",
        ],
        {
          name: "rembg",
          url: "https://github.com/danielgatis/rembg",
          howToRun:
            "To remove backgrounds locally, install Python and run `pip install \"rembg[cpu]\"`. Then run `rembg i product.png product-cutout.png`. The first run downloads a model. Open the PNG and check the edges. A GPU build exists, but CPU is enough for ordinary product photos.",
        },
      ),
    ],
  },
  {
    slug: "buffer",
    name: "Buffer",
    description:
      "A scheduler for social posts, so you can write a batch and publish them over the week.",
    pricing: "freemium",
    pricingDetail:
      "Buffer has a free plan for a limited number of channels and scheduled posts. Paid plans add more channels, planning, and analytics. See buffer.com for the current free limits.",
    officialUrl: "https://buffer.com",
    addedOn: "2026-04-18",
    usages: [
      usage(
        "write-social-posts",
        "Schedule posts you have already written, and use Buffer’s assistant only as a second pass.",
        [
          "Create a Buffer account and connect the accounts you actually post from. Skip networks you will not maintain.",
          "Paste a finished post, or start from a sentence you wrote. If you use Buffer’s AI assist, give it that sentence plus the audience.",
          "Edit the result in the composer until it sounds like you. Add the real link and any required disclosure.",
          "Set the date and time. Queue a week only if you will still agree with those posts on the day they go out.",
          "After one post publishes, read it on the network itself. Scheduling tools sometimes drop line breaks or tags.",
        ],
        [
          "Buffer will not know about a crisis or a product delay. Pause the queue when the news changes.",
          "Do not connect a personal account you share with someone else unless you both expect the posts.",
        ],
      ),
    ],
  },
  {
    slug: "capcut",
    name: "CapCut",
    description:
      "A video editor for short clips, with captions, cuts, and templates aimed at phone and social video.",
    pricing: "freemium",
    pricingDetail:
      "CapCut is free to edit with. Some effects, cloud space, and commercial-use assets are paid. Read the current terms on capcut.com, especially if the video is an ad.",
    officialUrl: "https://www.capcut.com",
    addedOn: "2026-07-08",
    usages: [
      usage(
        "write-short-video-scripts",
        "Write a tight script in the editor and turn it into captions on the clip.",
        [
          "Write three beats on paper or in a note: hook, point, ending. Keep it inside the length you can film.",
          "Film the clip, then import it into CapCut on the web or the app.",
          "Use auto captions. Play the whole video and fix every wrong word, name, and number.",
          "Cut pauses. If the spoken line is messy, rewrite that one line in the caption so it matches what you meant, and re-record if the audio and the caption would disagree.",
          "Export and watch once with the sound off. The captions should carry the point.",
        ],
        [
          "Auto captions are a draft. Names of people and products are often wrong.",
          "Templates can add music you may not have the right to use in an ad. Check the asset’s license.",
        ],
      ),
    ],
  },
  {
    slug: "descript",
    name: "Descript",
    description:
      "An editor that treats video and audio like a document, so you edit by deleting words from the transcript.",
    pricing: "freemium",
    pricingDetail:
      "Descript has a free plan with media limits. Paid plans add more transcription hours and editing features. See descript.com for current hours and prices.",
    officialUrl: "https://www.descript.com",
    addedOn: "2026-07-08",
    usages: [
      usage(
        "write-short-video-scripts",
        "Turn a rough recording into a short script you can edit by deleting sentences.",
        [
          "Record a messy take where you say the point once, even if you ramble. Import the file into Descript.",
          "Wait for the transcript. Delete filler and repeated tries in the text. The timeline follows.",
          "Read the remaining transcript as a script. Move one sentence if the hook is buried.",
          "Use overdub or a fresh recording only for a line you are willing to say yourself. Listen to it next to your real voice.",
          "Export the short cut and a caption file if you will publish it elsewhere.",
        ],
        [
          "Overdub that puts words in your mouth you did not intend is a bad idea. Say the line.",
          "Free transcription minutes run out. Trim the file before you upload a one-hour ramble for a 40-second video.",
        ],
      ),
    ],
  },
];
