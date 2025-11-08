"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";

interface MaskWipeProps {
  children: React.ReactNode;
  className?: string;
}

export function MaskWipe({ children, className = "" }: MaskWipeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4 }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        maskImage:
          "radial-gradient(circle at center, transparent 0%, black 100%)",
        WebkitMaskImage:
          "radial-gradient(circle at center, transparent 0%, black 100%)",
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              maskImage:
                "radial-gradient(circle at center, black 0%, black 100%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black 0%, black 100%)",
            }
          : {}
      }
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
