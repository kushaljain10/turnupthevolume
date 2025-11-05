import { motion } from 'framer-motion';
import * as Dialog from '@radix-ui/react-dialog';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { marqueeVariants, fadeUp } from '../lib/animations';
import { copyToClipboard } from '../lib/copyToClipboard';

const CONTRACT = 'XbXVF3H489xUDuyUCaRMLomCo8wsk2bfQGySJutpump';

export function Hero() {
  return (
    <section className="relative pt-20" aria-label="Hero">
      {/* Micro marquee */}
      <div className="overflow-hidden border-b border-lines">
        <motion.div className="py-2 heading tracking-[0.3em] text-sm text-secondaryText" variants={marqueeVariants} animate="animate">
          <span className="inline-block mr-8">TURN IT UP • TURN IT UP • TURN IT UP</span>
          <span className="inline-block mr-8">TURN IT UP • TURN IT UP • TURN IT UP</span>
        </motion.div>
      </div>

      <div className="container grid md:grid-cols-2 gap-8 items-center min-h-[70vh]">
        <div>
          <motion.h1 className="heading text-6xl md:text-7xl font-extrabold leading-tight" variants={fadeUp} initial="hidden" animate="show">
            {`TURN THE`}<br />{`VOLUME UP`}
          </motion.h1>
          <motion.p className="mt-6 max-w-[70ch] text-lg text-secondaryText" variants={fadeUp} initial="hidden" animate="show">
            A rallying cry born of defiance. $VOLUME is a Solana token inspired by a moment when New York rejected fear, and chose to <strong>turn it up</strong> — together.
          </motion.p>
          <motion.div className="mt-8 flex items-center gap-3" variants={fadeUp} initial="hidden" animate="show">
            <a href="#token" className="inline-flex items-center rounded bg-electricRed px-4 py-2 font-semibold hover:opacity-90">Get $VOLUME</a>
            <a href="#lore" className="inline-flex items-center rounded border border-lines px-4 py-2 font-semibold hover:border-electricRed">Read the Lore</a>
          </motion.div>

          <motion.div className="mt-6 text-sm text-secondaryText flex items-center gap-4" variants={fadeUp} initial="hidden" animate="show">
            <span>Ticker: <strong>$VOLUME</strong></span>
            <span>Chain: <strong>Solana</strong></span>
            <ContractCopy />
          </motion.div>
        </div>

        {/* Backdrop */}
        <div className="relative">
          <div className="absolute inset-0 blur-3xl opacity-20 bg-gradient-to-b from-electricRed to-signalOrange" />
          <img src="/src/assets/skyline.svg" alt="Abstract NYC skyline" className="relative w-full opacity-50" />
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 text-secondaryText" aria-hidden>
        <div className="animate-bounce">⌄</div>
      </div>
    </section>
  );
}

function ContractCopy() {
  const [copied, setCopied] = useState(false);
  const short = `${CONTRACT.slice(0, 6)}…${CONTRACT.slice(-6)}`;
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="inline-flex items-center gap-2 text-secondaryText hover:text-white">
          Contract: <span className="font-mono">{short}</span> <Copy className="w-4 h-4" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md bg-background border border-lines p-6 rounded">
          <Dialog.Title className="heading text-xl mb-3">Contract Address</Dialog.Title>
          <p className="font-mono break-all">{CONTRACT}</p>
          <div className="mt-4 flex items-center gap-3">
            <button
              onClick={async () => {
                const ok = await copyToClipboard(CONTRACT);
                setCopied(ok);
                setTimeout(() => setCopied(false), 1500);
              }}
              className="inline-flex items-center gap-2 rounded bg-electricRed px-3 py-1.5 font-semibold"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
            <Dialog.Close asChild>
              <button className="inline-flex items-center rounded border border-lines px-3 py-1.5">Close</button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default Hero;