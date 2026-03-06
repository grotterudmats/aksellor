/**
 * Shared motion config for scroll reveal. Respects prefers-reduced-motion.
 * Use with useReducedMotion() from framer-motion.
 */
export function fadeUp(i: number, reduced?: boolean | null) {
  const r = !!reduced;
  if (reduced) {
    return {
      initial: { opacity: 1, y: 0 },
      whileInView: undefined,
      transition: { duration: 0 },
      viewport: { once: true, amount: 0.25 },
    } as const;
  }
  return {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.45, delay: i * 0.06, ease: "easeOut" as const },
    viewport: { once: true, amount: 0.25 },
  } as const;
}
