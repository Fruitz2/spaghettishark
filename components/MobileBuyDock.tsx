"use client";

import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

interface MobileBuyDockProps {
  buyEnabled: boolean;
  buyUrl: string;
  buyLabel: string;
}

export function MobileBuyDock({ buyEnabled, buyUrl, buyLabel }: MobileBuyDockProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!buyEnabled || !buyUrl) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-foreground/10 bg-background/95 p-4 backdrop-blur-md transition-transform duration-300 md:hidden ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Button
        asChild
        size="lg"
        className="w-full rounded-full bg-accent py-6 text-lg font-bold text-foreground hover:bg-accent/90"
      >
        <a href={buyUrl} target="_blank" rel="noopener noreferrer">
          {buyLabel}
          <ExternalLink className="ml-2 h-5 w-5" />
        </a>
      </Button>
    </div>
  );
}
