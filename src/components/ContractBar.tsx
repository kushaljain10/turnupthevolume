import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { copyToClipboard } from '../lib/copyToClipboard';

const CONTRACT = 'XbXVF3H489xUDuyUCaRMLomCo8wsk2bfQGySJutpump';

export function ContractBar() {
  const [copied, setCopied] = useState(false);
  return (
    <section className="section-sm border-y border-[#1C1C21] bg-black/40" aria-label="Contract Bar">
      <div className="container py-4 flex flex-wrap items-center gap-3 justify-between">
        <div className="flex items-center gap-3">
          <span className="text-sm">Contract:</span>
          <code className="font-mono text-[#B3B3B8] break-all">{CONTRACT}</code>
          <button
            className="btn btn-outline"
            onClick={async () => {
              const ok = await copyToClipboard(CONTRACT);
              setCopied(ok);
              setTimeout(() => setCopied(false), 1500);
            }}
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />} {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <div className="flex items-center gap-2">
          <a href="#" target="_blank" className="btn btn-outline">Birdeye</a>
          <a href="#" target="_blank" className="btn btn-outline">Dexscreener</a>
          <a href="#" target="_blank" className="btn btn-outline">Jupiter</a>
        </div>
      </div>
    </section>
  );
}

export default ContractBar;