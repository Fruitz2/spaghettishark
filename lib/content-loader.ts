// Note: fs imports removed to avoid client-side webpack errors
// Content loading is handled directly in server components

export interface Strings {
  buyEnabled: boolean;
  metaTitle: string;
  metaDescription: string;
  menu: {
    home: string;
    lore: string;
    token: string;
    roadmap: string;
    press: string;
    buy: string;
    x: string;
    tg: string;
  };
  hero: {
    eyebrow: string;
    h1Variants: [string, string][];
    sub: string;
    buyCta: string;
    secondaryCtas: string[];
  };
  strip: string[];
  narrativeBurst: {
    title: string;
    body: string;
  };
  bullishMenu: {
    title: string;
    items: string[];
    disclaimer: string;
  };
  community: {
    title: string;
    body: string;
  };
  roadmapPreview: {
    title: string;
    bullets: string[];
  };
  footer: {
    legal: string;
    region: string;
  };
  toggleTips: {
    reduceMotionOn: string;
    reduceMotionOff: string;
  };
}

export interface Links {
  pump: string;
  x: string;
  tg: string;
  contract: string;
}

export function getStrings(): Strings {
  // Import JSON directly for client-side compatibility
  return require('@/content/spaghettishark/strings.json');
}

export function getLinks(): Links {
  // Import JSON directly for client-side compatibility
  return require('@/content/spaghettishark/links.json');
}

// Markdown content loading moved to individual page components
// to avoid fs import issues in client components

// Note: Markdown loading is handled directly in page components
// to avoid webpack issues with importing .md files
