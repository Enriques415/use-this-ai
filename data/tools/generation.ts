import { usage, type Tool } from "@/data/types";

const listedOn = "2026-11-17";

export const generationTools: Tool[] = [
  {
    slug: "google-flow",
    name: "Google Flow",
    description:
      "Google’s tool for making a short video from a text prompt or a still image.",
    pricing: "freemium",
    pricingDetail:
      "Google Flow can be tried with a Google account, and more use depends on the plan attached to that account. See flow.google.com while you are signed in for what you can generate. This page does not list a credit count.",
    officialUrl: "https://flow.google.com",
    addedOn: listedOn,
    usages: [
      usage(
        "generate-ai-video",
        "Make one short clip from a sentence or a single image, then stop.",
        [
          "Open flow.google.com and sign in with the Google account you want the clip billed to.",
          "Start from a text prompt or upload one still image. Name the subject, the motion, and the place. Leave the script and the voice for other tools.",
          "Generate one clip and watch it through. Look for warped hands, melted text, and motion that changes the subject.",
          "Change one instruction if the motion is wrong. Do not add a second scene in the same prompt.",
          "Download the clip you will actually use. If you need words on screen, add them in an editor. Generated letters are unreliable.",
        ],
        [
          "A generated person or place can look real and still be invented. Do not present the clip as footage you shot.",
          "How long a clip can be, and how many you can make, depends on the signed-in account. Check that page rather than a number from this directory.",
        ],
      ),
    ],
  },
  {
    slug: "runway",
    name: "Runway",
    description:
      "A video studio for generating a clip from text or an image, and for continuing to edit that clip.",
    pricing: "freemium",
    pricingDetail:
      "Runway has a free tier with limits and paid plans for more generation and editing. See runway.com for the current allowance. This page does not quote a credit pack.",
    officialUrl: "https://runway.com",
    addedOn: listedOn,
    usages: [
      usage(
        "generate-ai-video",
        "Generate a clip, then use the studio tools only for the fix that clip needs.",
        [
          "Create an account at runway.com. Choose a text-to-video or image-to-video start, not a full edit of someone else’s film.",
          "Write a prompt with one subject and one action. If you start from an image, use a picture you have the right to use.",
          "Generate a short take. Play it full screen and reject it if the subject changes identity halfway through.",
          "Adjust one setting or one phrase and generate again. Keep the take that matches the prompt, not the prettiest accident.",
          "Download it. Cut it next to your real footage in your own editor if this is one shot inside a longer video.",
        ],
        [
          "A free tier runs out. Download the take you want before you spend the rest of the session on variations.",
          "Do not upload a private photo of someone else to animate their face.",
        ],
      ),
    ],
  },
  {
    slug: "kling",
    name: "Kling",
    description:
      "A video generator for a clip from a text prompt or a still image.",
    pricing: "freemium",
    pricingDetail:
      "Kling can be tried without a paid plan, and it also has membership. This directory does not list credit counts or membership prices. Sign in at kling.ai and open the membership page to see what your account includes.",
    officialUrl: "https://kling.ai",
    addedOn: listedOn,
    usages: [
      usage(
        "generate-ai-video",
        "Get another take on a prompt, and confirm what the account can generate before you rely on it.",
        [
          "Open kling.ai and sign in. Read the membership page once so you know whether you are on a trial or a paid membership. Ignore any credit number you saw elsewhere.",
          "Choose text-to-video or image-to-video. Describe one shot: who or what, what moves, and what the camera does.",
          "Generate a single clip. Watch for extra limbs, flickering backgrounds, and text that is not really text.",
          "If the shot is close, change one phrase and try again. If it is a different video, rewrite the prompt instead of stacking fixes.",
          "Download the keeper. Put titles and a voiceover on later, in tools built for those jobs.",
        ],
        [
          "Membership prices and credit counts change and are easy to misquote. The signed-in membership page is the source.",
          "A clip of a real person, brand, or private place needs permission you actually have.",
        ],
      ),
    ],
  },
  {
    slug: "elevenlabs",
    name: "ElevenLabs",
    description:
      "A text-to-speech studio for generating a voiceover you can download.",
    pricing: "freemium",
    pricingDetail:
      "ElevenLabs has a free tier with limits and paid plans for more audio and more voices. See elevenlabs.io for the current allowance. This page does not quote a character cap or a plan price.",
    officialUrl: "https://elevenlabs.io",
    addedOn: listedOn,
    usages: [
      usage(
        "generate-ai-voice",
        "Turn a script you are allowed to record into a spoken file, starting from a stock voice.",
        [
          "Create an account at elevenlabs.io. Paste a short piece of the script, not the whole video, for the first test.",
          "Pick a stock voice. Do not upload a recording of someone else.",
          "Generate the sample and listen on headphones. Respell a name the way it should sound, or split the line, when a word is wrong.",
          "Generate the full read only after the sample is right. Download the audio file.",
          "Play it against the script once. Regenerate a single bad line instead of publishing a wrong name.",
        ],
        [
          "Cloning a voice needs the speaker’s permission. A stock voice is the right start.",
          "Free use is limited and the limit changes. Confirm it on elevenlabs.io before you promise a finished file.",
        ],
      ),
    ],
  },
  {
    slug: "fish-audio",
    name: "Fish Audio",
    description:
      "A text-to-speech tool for generating a voiceover, including from a voice you are allowed to use.",
    pricing: "freemium",
    pricingDetail:
      "Fish Audio has a free tier and paid plans. See fish.audio while you are signed in for the current allowance. This page does not quote a credit amount.",
    officialUrl: "https://fish.audio",
    addedOn: listedOn,
    usages: [
      usage(
        "generate-ai-voice",
        "Generate a read from a stock voice, or from audio you have the right to use.",
        [
          "Open fish.audio and sign in. Start with a stock voice and one paragraph of your script.",
          "Generate a sample. Listen for skipped words and for names that come out wrong.",
          "If you switch to a custom voice, use only audio the speaker told you to use. Skip the upload if you cannot say who approved it.",
          "Export the take you will publish. Keep the script beside the file.",
          "Regenerate one line when it fails. Do not hide a bad name under music.",
        ],
        [
          "A cloned voice without permission is not a workflow to build.",
          "Allowances change. Check the signed-in account on fish.audio rather than a number from a review.",
        ],
      ),
    ],
  },
  {
    slug: "naturalreader",
    name: "NaturalReader",
    description:
      "A reader that speaks text aloud and can export a voiceover.",
    pricing: "freemium",
    pricingDetail:
      "NaturalReader has a free tier for listening, with limits, and paid plans for more voices and downloads. See naturalreaders.com for what the current plan lets you export.",
    officialUrl: "https://www.naturalreaders.com",
    addedOn: listedOn,
    usages: [
      usage(
        "generate-ai-voice",
        "Listen to a script, then export a file when the read is the one you will publish.",
        [
          "Open naturalreaders.com. Paste the text you want spoken.",
          "Pick a voice and a speed you can stand for the whole piece, not just the first sentence.",
          "Play the first paragraph. Fix names and numbers before you export anything.",
          "Export or download the audio if your plan includes the file you need. Listening in the browser is not the same as a file.",
          "Drop the file into the video editor and check that the picture and the read end together.",
        ],
        [
          "Commercial use of a voice can depend on the plan. Read the current license before you sell the audio or run it in an ad.",
          "The free tier may let you listen without giving you a download. Confirm the export on the site before you depend on it.",
        ],
      ),
    ],
  },
  {
    slug: "google-cloud-tts",
    name: "Google Cloud Text-to-Speech",
    description:
      "An API that turns text into audio files inside a Google Cloud project.",
    pricing: "freemium",
    pricingDetail:
      "Google Cloud Text-to-Speech is billed on the cloud project you choose. New accounts can include trial credit, and there is a free tier, but both change. See the official pricing page for the current allowance. This directory does not quote a per-character price.",
    officialUrl: "https://cloud.google.com/text-to-speech",
    addedOn: listedOn,
    usages: [
      usage(
        "generate-ai-voice",
        "Synthesize a voice in a cloud project when the audio has to come from an API, not a one-off website.",
        [
          "Open cloud.google.com/text-to-speech and sign in to the Google Cloud project that should receive the bill.",
          "Use the console to pick a language and a voice. Paste a short sample. Do not paste a secret or a customer record.",
          "Synthesize the sample and listen. Write down the voice name once it is right.",
          "Synthesize the real script in that same project, from the console or from your own code, and save the audio file.",
          "Open the project’s billing page and set a budget alert before a script can call the API in a loop.",
        ],
        [
          "This is a developer product. For a single narration, ElevenLabs or NaturalReader is the shorter path.",
          "Trial credit and free-tier size change. Read the pricing page. Do not trust a dollar figure from a secondary article.",
        ],
      ),
    ],
  },
];
