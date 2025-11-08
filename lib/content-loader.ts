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
    h1Variants: string[][];
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

import stringsData from '@/content/spaghettishark/strings.json';
import linksData from '@/content/spaghettishark/links.json';

export function getStrings(): Strings {
  return stringsData as Strings;
}

export function getLinks(): Links {
  return linksData as Links;
}

// Markdown content loading moved to individual page components
// to avoid fs import issues in client components

// Note: Markdown loading is handled directly in page components
// to avoid webpack issues with importing .md files
