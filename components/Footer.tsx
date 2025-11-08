"use client";

import Link from "next/link";
import { Separator } from "./ui/separator";

interface FooterProps {
  strings: {
    footer: {
      company: string;
      legal: string;
      disclaimer: string;
    };
  };
  links: {
    x: string;
    tg: string;
  };
}

export function Footer({ strings, links }: FooterProps) {
  return (
    <footer className="border-t border-foreground/10 bg-subtle/30 py-12">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Logo and Tagline */}
        <div className="mb-8 text-center">
          <div className="mb-2 font-display text-3xl font-bold tracking-tight">
            SPAGHETTI SHARK
          </div>
          <p className="font-body text-sm text-foreground/60">
            Carb up. Bite harder.
          </p>
        </div>

        <Separator className="my-8" />

        {/* Links */}
        <div className="mb-8 flex flex-wrap justify-center gap-6 text-sm">
          <Link
            href="/"
            className="text-foreground/70 transition-colors hover:text-accent"
          >
            {strings.menu.home}
          </Link>
          <Link
            href="/lore"
            className="text-foreground/70 transition-colors hover:text-accent"
          >
            {strings.menu.lore}
          </Link>
          <Link
            href="/token"
            className="text-foreground/70 transition-colors hover:text-accent"
          >
            {strings.menu.token}
          </Link>
          <Link
            href="/roadmap"
            className="text-foreground/70 transition-colors hover:text-accent"
          >
            {strings.menu.roadmap}
          </Link>
          <Link
            href="/press"
            className="text-foreground/70 transition-colors hover:text-accent"
          >
            {strings.menu.press}
          </Link>
          <a
            href={links.x}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 transition-colors hover:text-accent"
          >
            X / Twitter
          </a>
          <a
            href={links.tg}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 transition-colors hover:text-accent"
          >
            Telegram
          </a>
        </div>

        <Separator className="my-8" />

        {/* Legal */}
        <div className="space-y-2 text-center text-xs text-foreground/50">
          <p>{strings.footer.legal}</p>
          <p>{strings.footer.region}</p>
          <p className="mt-4">
            © {new Date().getFullYear()} Spaghetti Shark. No rights reserved
            because that would be boring.
          </p>
        </div>
      </div>
    </footer>
  );
}
