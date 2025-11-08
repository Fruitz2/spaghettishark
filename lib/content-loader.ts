import fs from "fs";
import path from "path";
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), "content", "spaghettishark");

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
  const filePath = path.join(contentDir, "strings.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}

export function getLinks(): Links {
  const filePath = path.join(contentDir, "links.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}

export function getMarkdownContent(filename: string): {
  content: string;
  data: Record<string, unknown>;
} {
  const filePath = path.join(contentDir, filename);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContents);
  return { content, data };
}

export async function loadMarkdownContent(filename: string): Promise<{ content: string; data: any }> {
  // Dynamically import the markdown files at build time
  const markdownFiles: Record<string, any> = {
    'lore': () => import('@/content/spaghettishark/lore.md'),
    'tokenomics': () => import('@/content/spaghettishark/tokenomics.md'),
    'roadmap': () => import('@/content/spaghettishark/roadmap.md'),
    'press-kit': () => import('@/content/spaghettishark/press-kit.md'),
  };

  if (markdownFiles[filename]) {
    const fileModule = await markdownFiles[filename]();
    const { data, content } = matter(fileModule.default || fileModule);
    return { content, data };
  }
  
  return { content: '', data: {} };
}
