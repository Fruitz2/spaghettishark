"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

interface RollingStripProps {
  items: string[];
  className?: string;
}

export function RollingStrip({ items, className = "" }: RollingStripProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isPaused, setIsPaused] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  useEffect(() => {
    // Shuffle and select 3 items on mount
    const shuffled = [...items].sort(() => Math.random() - 0.5);
    setSelectedItems(shuffled.slice(0, 3));
  }, [items]);

  if (selectedItems.length === 0) return null;

  return (
    <div
      className={`relative overflow-hidden border-y border-foreground/10 py-6 ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex gap-12">
        {[...Array(3)].map((_, groupIndex) => (
          <div
            key={groupIndex}
            className={`flex shrink-0 gap-12 ${
              shouldReduceMotion || isPaused ? "" : "animate-marquee"
            }`}
            style={{
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {selectedItems.map((item, itemIndex) => (
              <div
                key={`${groupIndex}-${itemIndex}`}
                className="flex shrink-0 items-center gap-4"
              >
                <span className="font-display text-2xl font-bold uppercase tracking-tight text-foreground/80 md:text-3xl">
                  {item}
                </span>
                <span className="text-accent">•</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
