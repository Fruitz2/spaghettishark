"use client";

import { MaskWipe } from "./MaskWipe";
import { TextTrail } from "./TextTrail";

interface NarrativeBurstProps {
  title: string;
  body: string;
  className?: string;
}

export function NarrativeBurst({ title, body, className = "" }: NarrativeBurstProps) {
  return (
    <MaskWipe className={`py-24 ${className}`}>
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="mb-8 font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          <TextTrail>{title}</TextTrail>
        </h2>
        <p className="font-body text-xl leading-relaxed text-foreground/90 md:text-2xl lg:text-3xl">
          {body}
        </p>
      </div>
    </MaskWipe>
  );
}
