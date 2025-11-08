"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import type { Strings, Links } from "@/lib/content-loader";

interface HeaderProps {
  strings: Strings;
  links: Links;
}

export function Header({ strings, links }: HeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: strings.menu.home, href: "/" },
    { label: strings.menu.lore, href: "/lore" },
    { label: strings.menu.token, href: "/token" },
    { label: strings.menu.roadmap, href: "/roadmap" },
    { label: strings.menu.press, href: "/press" },
  ];

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-foreground/10 bg-background/95 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <img
            src="/transparentlogo.png"
            alt="Spaghetti Shark"
            width={48}
            height={48}
            className="h-12 w-auto"
          />
          <span className="hidden font-display text-xl font-bold tracking-tight sm:inline-block">
            SPAGHETTI SHARK
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-4 py-2 font-body text-sm font-medium transition-colors hover:bg-foreground/5 hover:text-accent",
                pathname === item.href
                  ? "text-accent"
                  : "text-foreground/80"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* External CTAs */}
        <div className="flex items-center gap-2">
          {strings.buyEnabled && links.pump && (
            <Button
              asChild
              size="sm"
              className="hidden rounded-full bg-accent font-semibold text-foreground hover:bg-accent/90 md:inline-flex"
            >
              <a
                href={links.pump}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={strings.menu.buy}
              >
                {strings.menu.buy}
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          )}
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="rounded-full"
          >
            <a
              href={links.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={strings.menu.x}
            >
              {strings.menu.x}
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="rounded-full"
          >
            <a
              href={links.tg}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={strings.menu.tg}
            >
              {strings.menu.tg}
            </a>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className="container mx-auto flex gap-2 overflow-x-auto px-4 pb-3 md:hidden">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "shrink-0 rounded-full border px-4 py-1.5 text-xs font-medium transition-colors",
              pathname === item.href
                ? "border-accent bg-accent/10 text-accent"
                : "border-foreground/10 text-foreground/80 hover:border-accent/50 hover:bg-accent/5"
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
