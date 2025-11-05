import { motion } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { copyToClipboard } from "../lib/copyToClipboard";

const CONTRACT = "XbXVF3H489xUDuyUCaRMLomCo8wsk2bfQGySJutpump";
const X_COMMUNITY_URL = "https://x.com/i/communities/1986009349748396089";

export function Hero() {
  return (
    <section className="relative pt-20" aria-label="Hero">
      {/* Micro marquee */}
      <div className="overflow-hidden border-b border-[#1C1C21]">
        <motion.div
          className="py-2 heading tracking-[0.3em] text-sm text-[#B3B3B8]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: [0, 0, 1, 1] }}
        >
          <span className="inline-block mr-8">
            TURN IT UP • TURN IT UP • TURN IT UP
          </span>
          <span className="inline-block mr-8">
            TURN IT UP • TURN IT UP • TURN IT UP
          </span>
        </motion.div>
      </div>

      <div className="container grid md:grid-cols-2 gap-8 items-center min-h-[70vh]">
        <div>
          <motion.h1
            className="heading text-6xl md:text-7xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {`TURN THE`}
            <br />
            {`VOLUME UP`}
          </motion.h1>
          <motion.p
            className="mt-6 max-w-[70ch] text-lg text-[#B3B3B8]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            A rallying cry born of defiance. $VOLUME is a Solana token inspired
            by a moment when New York rejected fear, and chose to{" "}
            <strong>turn it up</strong> — together.
          </motion.p>
          <motion.div
            className="mt-8 flex items-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <a href="#token" className="btn btn-primary">
              Get $VOLUME
            </a>
            <a
              href={X_COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Join X Community
            </a>
          </motion.div>

          <motion.div
            className="mt-6 text-sm text-[#B3B3B8] flex items-center gap-4"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span>
              Ticker: <strong>$VOLUME</strong>
            </span>
            <span>
              Chain: <strong>Solana</strong>
            </span>
            <ContractCopy />
          </motion.div>
        </div>

        {/* Backdrop */}
        <div className="relative">
          <div className="absolute inset-0 blur-3xl opacity-20 bg-gradient-to-b from-[#FF2436] to-[#FF7A1A]" />
          <img
            src="/src/assets/skyline.svg"
            alt="Abstract NYC skyline"
            className="relative w-full opacity-50"
          />
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-6 text-[#B3B3B8]"
        aria-hidden
      >
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
        <button className="inline-flex items-center gap-2 text-[#B3B3B8] hover:text-white">
          Contract: <span className="font-mono">{short}</span>{" "}
          <Copy className="w-4 h-4" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md bg-[#0A0A0B] border border-[#1C1C21] p-6 rounded">
          <Dialog.Title className="heading text-xl mb-3">
            Contract Address
          </Dialog.Title>
          <p className="font-mono break-all">{CONTRACT}</p>
          <div className="mt-4 flex items-center gap-3">
            <button
              onClick={async () => {
                const ok = await copyToClipboard(CONTRACT);
                setCopied(ok);
                setTimeout(() => setCopied(false), 1500);
              }}
              className="btn btn-primary"
            >
              {copied ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              {copied ? "Copied!" : "Copy"}
            </button>
            <Dialog.Close asChild>
              <button className="btn btn-outline">Close</button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default Hero;
