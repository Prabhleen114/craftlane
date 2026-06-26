"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { fadeUp, viewportSettings } from "@/lib/animations";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  width?: "fit-content" | "100%";
}

export function ScrollReveal({
  children,
  className = "",
  variants = fadeUp,
  delay = 0,
  width = "fit-content",
}: ScrollRevealProps) {
  const customVariants = {
    ...variants,
    visible: {
      ...(variants.visible as any),
      transition: {
        ...(variants.visible as any)?.transition,
        delay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={customVariants}
      className={className}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
}
