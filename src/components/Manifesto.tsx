import { motion } from 'framer-motion';
import { stagger } from '../lib/animations';

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
  return (
    <section id="manifesto" className="container py-16">
      <h2 className="heading text-2xl md:text-3xl font-bold mb-8">What does “turn it up” mean here?</h2>
      <motion.div variants={stagger()} initial="hidden" animate="show" className="grid md:grid-cols-2 gap-6">
        {items.map((it) => (
          <motion.div key={it.title} className="rounded border border-lines p-6 bg-black/30">
            <h3 className="heading text-xl font-semibold">{it.title}</h3>
            <p className="mt-3 text-secondaryText">{it.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Manifesto;