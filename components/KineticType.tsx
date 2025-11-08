"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

interface KineticTypeProps {
  lines: [string, string];
  className?: string;
}

export function KineticType({ lines, className = "" }: KineticTypeProps) {
  const shouldReduceMotion = useReducedMotion();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [shouldReduceMotion]);

  const parallaxOffset = shouldReduceMotion ? 0 : scrollY * 0.1;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const lineVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 40,
      scale: shouldReduceMotion ? 1 : 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: shouldReduceMotion ? "tween" : "spring",
        stiffness: 100,
        damping: 15,
        duration: shouldReduceMotion ? 0.3 : undefined,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        transform: shouldReduceMotion
          ? "none"
          : `translateY(${parallaxOffset}px)`,
      }}
    >
      {lines.map((line, index) => (
        <motion.div key={index} variants={lineVariants} className="overflow-hidden">
          <h1 className="font-display text-5xl font-black leading-[0.9] tracking-tighter md:text-7xl lg:text-8xl xl:text-9xl">
            {line}
          </h1>
        </motion.div>
      ))}
    </motion.div>
  );
}
