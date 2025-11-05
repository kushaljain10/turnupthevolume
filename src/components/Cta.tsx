export function Cta() {
  return (
    <section className="relative section" aria-label="Call to Action" style={{ backgroundImage: 'linear-gradient(135deg, #FF2436 0%, #FF7A1A 100%)' }}>
      <div className="container">
        <h2 className="heading text-3xl md:text-4xl font-extrabold">If they turn it up, we turn up louder.</h2>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href="#token" className="inline-flex items-center rounded bg-black px-4 py-2 font-semibold text-[#FF2436] hover:opacity-90">Get $VOLUME</a>
          <a href="#" className="inline-flex items-center rounded border border-black/30 bg-black/20 px-4 py-2 font-semibold hover:bg-black/30">Join the Noise</a>
        </div>
        <p className="mt-4 text-sm text-black/80">Trade links are third-party. Do your own research. Nothing here is financial advice.</p>
      </div>
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(/src/assets/halftone.png)', backgroundSize: 'cover' }} />
    </section>
  );
}

export default Cta;