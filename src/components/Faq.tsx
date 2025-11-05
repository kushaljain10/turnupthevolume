import * as Accordion from '@radix-ui/react-accordion';

const QA = [
  {
    q: 'What is $VOLUME?',
    a: 'A community-driven Solana meme token inspired by a moment of civic defiance. It is a symbol, not a security or promise.',
  },
  {
    q: 'Is this political?',
    a: 'It’s a cultural statement about courage and solidarity. The narrative above is inspiration, not an endorsement or solicitation.',
  },
  {
    q: 'How do I get $VOLUME?',
    a: 'Use a Solana wallet and trade via your preferred DEX aggregator. We link common explorers for convenience only.',
  },
  {
    q: 'Any roadmap?',
    a: 'No hard promises. We prefer frequency over fantasy — community-led drops, art, and moments that keep the signal rising.',
  },
  {
    q: 'Risks?',
    a: 'Tokens can go to zero. Only participate with what you can afford to lose. This site is not advice.',
  },
];

export function Faq() {
  return (
    <section id="faq" className="container section">
      <h2 className="heading text-2xl md:text-3xl font-bold mb-6">FAQ</h2>
      <Accordion.Root type="single" collapsible className="divide-y divide-[#1C1C21] border border-[#1C1C21] rounded">
        {QA.map((item, idx) => (
          <Accordion.Item key={idx} value={`item-${idx}`}>
            <Accordion.Header>
              <Accordion.Trigger className="w-full text-left p-4 hover:bg-black/30">
                <span className="heading font-semibold">{item.q}</span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="p-4 text-[#B3B3B8]">
              {item.a}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
}

export default Faq;