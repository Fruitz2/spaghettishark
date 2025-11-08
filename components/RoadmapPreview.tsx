"use client";

import Link from "next/link";
import { MaskWipe } from "./MaskWipe";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface RoadmapPreviewProps {
  title: string;
  bullets: string[];
  className?: string;
}

export function RoadmapPreview({ title, bullets, className = "" }: RoadmapPreviewProps) {
  return (
    <MaskWipe className={`py-24 ${className}`}>
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="mb-12 text-center font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          {title}
        </h2>
        <div className="space-y-4">
          {bullets.map((bullet, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 rounded-xl border border-foreground/10 bg-subtle/30 p-6 backdrop-blur-sm transition-all hover:border-accent2/50 hover:bg-subtle/50"
            >
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent2/20 font-mono text-sm font-bold text-accent2">
                {index + 1}
              </div>
              <p className="font-body text-lg leading-relaxed text-foreground/90">
                {bullet}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button
            asChild
            size="lg"
            className="group rounded-full bg-accent2 text-lg font-semibold text-background hover:bg-accent2/90"
          >
            <Link href="/roadmap">
              View Full Roadmap
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </MaskWipe>
  );
}
