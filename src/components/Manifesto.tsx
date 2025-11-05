import { motion } from 'framer-motion';

const items = [
  {
    title: 'From Silence to Signal',
    body: 'We organise noise into signal — collective attention, transparent intent, and on-chain proof that a crowd can move as one.',
  },
  {
    title: 'From Fear to Frequency',
    body: 'Volume is courage measured in decibels. We stand taller, speak louder, and keep rhythm when the room tries to mute us.',
  },
  {
    title: 'From Walls to Waves',
    body: 'Walls block sound; waves pass through. We choose waves — open, permissionless, unstoppable energy moving through the city and beyond.',
  },
  {
    title: 'From Moments to Movements',
    body: 'A phrase becomes a pulse; a pulse becomes a beat; the beat becomes a march. $VOLUME is that beat — steady, rising, undeniable.',
  },
];

export function Manifesto() {
  const gridVariants = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <section id="manifesto" className="container section">
      <h2 className="heading text-2xl md:text-3xl font-bold mb-8">What does “turn it up” mean here?</h2>
      <motion.div variants={gridVariants} initial="hidden" animate="show" className="grid md:grid-cols-2 gap-6">
        {items.map((it) => (
          <motion.div key={it.title} variants={itemVariants} className="card">
            <h3 className="heading text-xl font-semibold">{it.title}</h3>
            <p className="mt-3 text-[#B3B3B8]">{it.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Manifesto;