"use client";

import { cn } from "@/lib/utils";

interface TextTrailProps {
  children: React.ReactNode;
  className?: string;
}

export function TextTrail({ children, className }: TextTrailProps) {
  return (
    <span
      className={cn(
        "group relative inline-block cursor-pointer transition-colors hover:text-accent",
        className
      )}
    >
      {children}
      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-accent to-accent2 transition-all duration-300 ease-out group-hover:w-full" />
    </span>
  );
}
