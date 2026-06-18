export interface DocMeta {
  slug: string;
  title: string;
  description: string;
}

// Sidebar order + titles. Each slug maps to content/<slug>.md.
export const DOCS: DocMeta[] = [
  {
    slug: "getting-started",
    title: "Getting Started",
    description: "An introduction to Pixelcord — installation and first steps.",
  },
  {
    slug: "installation",
    title: "Installation",
    description: "Install Pixelcord via Pixeltop or by building from source.",
  },
  {
    slug: "building-from-source",
    title: "Building from Source",
    description: "Build and inject Pixelcord from source for development.",
  },
  {
    slug: "plugins",
    title: "User Plugins",
    description: "How to install third-party and private plugins in Pixelcord.",
  },
  {
    slug: "plugin-development",
    title: "Plugin Development",
    description: "Start developing your own Pixelcord plugins from scratch.",
  },
  {
    slug: "plugin-submission",
    title: "Plugin Submission",
    description: "Contribute plugins and improvements to Pixelcord.",
  },
  {
    slug: "faq",
    title: "FAQ",
    description: "Answers to common questions and troubleshooting tips.",
  },
];

export function getDoc(slug: string): DocMeta | undefined {
  return DOCS.find((d) => d.slug === slug);
}

export const GITHUB_URL = "https://github.com/pixel-cord/pixelcord";
