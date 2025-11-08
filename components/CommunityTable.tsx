"use client";

import { MaskWipe } from "./MaskWipe";

interface CommunityTableProps {
  title: string;
  body: string;
  className?: string;
}

export function CommunityTable({ title, body, className = "" }: CommunityTableProps) {
  return (
    <MaskWipe className={`relative py-24 ${className}`}>
      <div className="container relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-8 font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-r from-accent2 via-foreground to-accent2 bg-clip-text text-transparent">
            {title}
          </span>
        </h2>
        <p className="mx-auto max-w-2xl font-body text-xl font-medium leading-relaxed text-foreground/90 md:text-2xl">
          {body}
        </p>
        <div className="mt-16 inline-block">
          <div className="group relative overflow-hidden rounded-3xl border-2 border-accent/40 bg-gradient-to-br from-accent/20 to-accent/5 px-12 py-6 backdrop-blur-xl transition-all duration-300 hover:border-accent/60 hover:shadow-[0_0_60px_rgba(224,52,44,0.4)] hover:scale-105">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <p className="relative font-mono text-3xl font-black tracking-wider text-accent drop-shadow-[0_0_20px_rgba(224,52,44,0.5)] md:text-4xl">
              #SpaghettiShark
            </p>
          </div>
        </div>
      </div>
    </MaskWipe>
  );
}
