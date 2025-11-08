"use client";

import { MaskWipe } from "./MaskWipe";

interface BullishMenuProps {
  title: string;
  items: string[];
  disclaimer: string;
  className?: string;
}

export function BullishMenu({ title, items, disclaimer, className = "" }: BullishMenuProps) {
  return (
    <MaskWipe className={`relative py-24 ${className}`}>
      <div className="container relative z-10 mx-auto max-w-5xl px-4">
        <h2 className="mb-16 text-center font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent">
            {title}
          </span>
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-foreground/10 bg-gradient-to-br from-subtle/60 to-subtle/30 p-8 backdrop-blur-xl transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_50px_rgba(224,52,44,0.25)] hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, rgba(15, 49, 70, 0.6) 0%, rgba(15, 49, 70, 0.3) 100%)',
              }}
            >
              {/* Shine effect */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
              </div>
              
              <div className="relative flex items-start gap-5">
                <div className="mt-1.5 flex h-3 w-3 shrink-0 items-center justify-center">
                  <div className="absolute h-3 w-3 animate-ping rounded-full bg-accent/40" />
                  <div className="relative h-3 w-3 rounded-full bg-accent shadow-[0_0_20px_rgba(224,52,44,0.8)]" />
                </div>
                <p className="font-body text-lg font-medium leading-relaxed text-foreground/95">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="inline-block rounded-2xl border border-foreground/5 bg-background/40 px-8 py-4 backdrop-blur-sm">
            <p className="font-body text-sm font-medium italic text-foreground/70">
              {disclaimer}
            </p>
          </div>
        </div>
      </div>
    </MaskWipe>
  );
}
