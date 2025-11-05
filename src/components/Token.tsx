import EqualiserLogo from './EqualiserLogo';

const CONTRACT = 'XbXVF3H489xUDuyUCaRMLomCo8wsk2bfQGySJutpump';

export function Token() {
  return (
    <section id="token" className="container py-16">
      <h2 className="heading text-2xl md:text-3xl font-bold mb-8">$VOLUME on Solana</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded border border-lines p-6 bg-black/30">
          <dl className="space-y-2">
            <div className="flex items-center justify-between">
              <dt className="text-secondaryText">Ticker</dt>
              <dd className="font-semibold">$VOLUME</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-secondaryText">Chain</dt>
              <dd className="font-semibold">Solana</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-secondaryText">Contract</dt>
              <dd className="font-mono break-all">{CONTRACT}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-secondaryText">Supply</dt>
              <dd className="font-semibold">Community-driven, meme-native</dd>
            </div>
          </dl>
          <div className="mt-4 flex items-center gap-2">
            <a href="#" target="_blank" className="rounded border border-lines px-3 py-1.5 hover:border-electricRed">Birdeye</a>
            <a href="#" target="_blank" className="rounded border border-lines px-3 py-1.5 hover:border-electricRed">Dexscreener</a>
            <a href="#" target="_blank" className="rounded border border-lines px-3 py-1.5 hover:border-electricRed">Jupiter</a>
          </div>
        </div>
        <div className="rounded border border-lines p-6 bg-black/30">
          <EqualiserLogo className="mb-4" />
          <p className="text-secondaryText">
            <strong>Symbol</strong>: The equaliser. When they raise the volume, we return with more signal — sharper, clearer, louder together.
          </p>
        </div>
      </div>
      <p className="mt-6 text-sm text-secondaryText italic">$VOLUME is a meme token with no intrinsic value, expectation of profit, or claim on anything. It is art, culture, and community energy on a ledger.</p>
    </section>
  );
}

export default Token;