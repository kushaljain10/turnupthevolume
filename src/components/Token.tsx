// Equaliser elements removed as per request

const CONTRACT = "XbXVF3H489xUDuyUCaRMLomCo8wsk2bfQGySJutpump";

export function Token() {
  return (
    <section id="token" className="container section">
      <h2 className="heading text-2xl md:text-3xl font-bold mb-8">
        $VOLUME on Solana
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="card">
          <dl className="space-y-2">
            <div className="flex items-center justify-between">
              <dt className="text-[#B3B3B8]">Ticker</dt>
              <dd className="font-semibold">$VOLUME</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-[#B3B3B8]">Chain</dt>
              <dd className="font-semibold">Solana</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-[#B3B3B8]">Contract</dt>
              <dd className="font-mono break-all">{CONTRACT}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-[#B3B3B8]">Supply</dt>
              <dd className="font-semibold">Community-driven, meme-native</dd>
            </div>
          </dl>
          <div className="mt-4 flex items-center gap-2">
            <a
              href="https://pump.fun/coin/XbXVF3H489xUDuyUCaRMLomCo8wsk2bfQGySJutpump"
              target="_blank"
              className="rounded border border-[#1C1C21] px-3 py-1.5 hover:border-[#FF2436]"
            >
              PumpFun
            </a>
            <a
              href="https://dexscreener.com/solana/86gkkxd6elwqjswygem8kgkxwdfbqh55tdcwrfo934qh"
              target="_blank"
              className="rounded border border-[#1C1C21] px-3 py-1.5 hover:border-[#FF2436]"
            >
              Dexscreener
            </a>
          </div>
        </div>
        <div className="card">
          <h3 className="heading text-xl font-semibold mb-2">About</h3>
          <p className="text-[#B3B3B8]">
            $VOLUME is cultural — a meme-native token that stands for collective
            signal and solidarity. It is not about literal audio volume.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Token;
