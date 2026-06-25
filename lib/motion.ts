"use client";

import { useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";

export function useMotionSafe() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp: Variants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      };

  return {
    fadeUp,
    stagger: prefersReducedMotion ? 0 : 0.1,
    viewport: { once: true, margin: "-80px" as const },
  };
}
