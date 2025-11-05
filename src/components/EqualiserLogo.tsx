import { motion } from 'framer-motion';

export function EqualiserLogo({ className = '' }: { className?: string }) {
  const bars = Array.from({ length: 12 });
  return (
    <div className={`grid grid-cols-12 gap-1 ${className}`} aria-hidden>
      {bars.map((_, i) => (
        <motion.div
          key={i}
          className="bg-electricRed"
          style={{ height: `${Math.max(8, ((i % 6) + 1) * 12)}px` }}
          animate={{ height: [24, 48, 16, 36, 20] }}
          transition={{ repeat: Infinity, duration: 2 + (i % 4) * 0.3, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

export default EqualiserLogo;