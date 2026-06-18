export type Locale = "en" | "pt";

export const LOCALES: Locale[] = ["en", "pt"];
export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_STORAGE_KEY = "pixelcord-locale";

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  pt: "PT",
};

interface DocStrings {
  title: string;
  description: string;
}

export interface Dictionary {
  nav: { docs: string; github: string; toggleLanguage: string };
  hero: {
    eyebrow: string;
    titleLead: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  sections: {
    docsHeading: string;
    docsSubheading: string;
    ownersHeading: string;
    ownersSubheading: string;
  };
  ownerRole: string;
  footer: { tagline: string; builtBy: string };
  sidebar: { heading: string };
  docs: Record<string, DocStrings>;
}

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: { docs: "Docs", github: "GitHub", toggleLanguage: "Change language" },
    hero: {
      eyebrow: "Pixelcord Documentation",
      titleLead: "Everything you need to master",
      titleHighlight: "Pixelcord",
      subtitle:
        "Install it, build it from source, and craft your own plugins — every guide, in one beautiful place.",
      ctaPrimary: "Get Started",
      ctaSecondary: "View on GitHub",
    },
    sections: {
      docsHeading: "Explore the docs",
      docsSubheading:
        "Guides for every step — from your first install to publishing plugins.",
      ownersHeading: "Owners",
      ownersSubheading: "The people behind Pixelcord.",
    },
    ownerRole: "Owner & Maintainer",
    footer: { tagline: "A fork of Equicord.", builtBy: "Built by" },
    sidebar: { heading: "Documentation" },
    docs: {
      "getting-started": {
        title: "Getting Started",
        description: "An introduction to Pixelcord — installation and first steps.",
      },
      installation: {
        title: "Installation",
        description: "Install Pixelcord via Pixeltop or by building from source.",
      },
      "building-from-source": {
        title: "Building from Source",
        description: "Build and inject Pixelcord from source for development.",
      },
      plugins: {
        title: "User Plugins",
        description: "How to install third-party and private plugins in Pixelcord.",
      },
      "plugin-development": {
        title: "Plugin Development",
        description: "Start developing your own Pixelcord plugins from scratch.",
      },
      "plugin-submission": {
        title: "Plugin Submission",
        description: "Contribute plugins and improvements to Pixelcord.",
      },
      faq: {
        title: "FAQ",
        description: "Answers to common questions and troubleshooting tips.",
      },
    },
  },
  pt: {
    nav: { docs: "Docs", github: "GitHub", toggleLanguage: "Mudar idioma" },
    hero: {
      eyebrow: "Documentação do Pixelcord",
      titleLead: "Tudo que você precisa para dominar o",
      titleHighlight: "Pixelcord",
      subtitle:
        "Instale, compile do código-fonte e crie seus próprios plugins — cada guia, em um só lugar.",
      ctaPrimary: "Começar",
      ctaSecondary: "Ver no GitHub",
    },
    sections: {
      docsHeading: "Explore a documentação",
      docsSubheading:
        "Guias para cada etapa — da primeira instalação à publicação de plugins.",
      ownersHeading: "Donos",
      ownersSubheading: "As pessoas por trás do Pixelcord.",
    },
    ownerRole: "Dono & Mantenedor",
    footer: { tagline: "Um fork do Equicord.", builtBy: "Feito por" },
    sidebar: { heading: "Documentação" },
    docs: {
      "getting-started": {
        title: "Primeiros Passos",
        description: "Uma introdução ao Pixelcord — instalação e primeiros passos.",
      },
      installation: {
        title: "Instalação",
        description:
          "Instale o Pixelcord pelo Pixeltop ou compilando do código-fonte.",
      },
      "building-from-source": {
        title: "Compilar do Código-fonte",
        description:
          "Compile e injete o Pixelcord a partir do código para desenvolvimento.",
      },
      plugins: {
        title: "Plugins de Usuário",
        description:
          "Como instalar plugins de terceiros e privados no Pixelcord.",
      },
      "plugin-development": {
        title: "Desenvolvimento de Plugins",
        description: "Comece a desenvolver seus próprios plugins do zero.",
      },
      "plugin-submission": {
        title: "Envio de Plugins",
        description: "Contribua com plugins e melhorias para o Pixelcord.",
      },
      faq: {
        title: "FAQ",
        description: "Respostas para perguntas comuns e dicas de solução de problemas.",
      },
    },
  },
};
