export const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const stagger = (delay = 0.06) => ({
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: prefersReducedMotion()
      ? { duration: 0 }
      : { staggerChildren: delay, ease: 'easeOut' },
  },
});

export const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: prefersReducedMotion()
    ? { opacity: 1 }
    : { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const marqueeVariants = {
  animate: prefersReducedMotion()
    ? {}
    : {
        x: ['0%', '-100%'],
        transition: { repeat: Infinity, duration: 12, ease: 'linear' },
      },
};