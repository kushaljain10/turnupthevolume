import { motion } from 'framer-motion';
import { Users, Train, Hammer } from 'lucide-react';

const tiles = [
  { icon: Hammer, title: 'Workers', caption: 'Fair pay, dignity, protection.' },
  { icon: Train, title: 'Transit', caption: 'Mobility as a right, not a luxury.' },
  { icon: Users, title: 'Belonging', caption: 'Immigrants, trans folks, and every neighbour who’s been told to keep it down.' },
];

export function Amplify() {
  return (
    <section className="container section">
      <h2 className="heading text-2xl md:text-3xl font-bold mb-6">What we amplify</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {tiles.map((t) => (
          <motion.div
            key={t.title}
            whileHover={{ y: -4, boxShadow: '0 0 32px rgba(255, 36, 54, 0.2)' }}
            className="card"
          >
            <t.icon className="w-8 h-8 text-[#FF2436]" />
            <div className="mt-4 heading text-lg font-semibold">{t.title}</div>
            <p className="mt-2 text-[#B3B3B8]">{t.caption}</p>
          </motion.div>
        ))}
      </div>
      <p className="mt-4 text-sm text-[#B3B3B8]">Symbolic commitments reflecting themes of fairness and solidarity. Not a promise of utility or outcomes.</p>
    </section>
  );
}

export default Amplify;