import React from "react";
import { motion, useReducedMotion } from "motion/react";

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}) {
  const shouldReduceMotion = useReducedMotion();

  const offsets = {
    up: { x: 0, y: 45 },
    down: { x: 0, y: -45 },
    left: { x: 45, y: 0 },
    right: { x: -45, y: 0 },
  };

  return (
    <motion.div
      className={className}
      initial={
        shouldReduceMotion ? false : { opacity: 0, ...offsets[direction] }
      }
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
