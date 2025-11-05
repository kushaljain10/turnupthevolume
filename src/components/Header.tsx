import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Menu, X } from 'lucide-react';

type NavItem = { label: string; href: string };

const nav: NavItem[] = [
  { label: 'Lore', href: '#lore' },
  { label: 'Manifesto', href: '#manifesto' },
  { label: 'Token', href: '#token' },
  { label: 'FAQ', href: '#faq' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur-sm transition-all ${
        scrolled ? 'border-b border-electricRed/60' : 'border-b border-transparent'
      } bg-background/70`}
      aria-label="Site Header"
    >
      <div className="container flex h-14 items-center justify-between">
        <a href="#" className="font-mono text-sm md:text-base tracking-widest">
          <span className="hidden sm:inline heading font-extrabold">TURN THE VOLUME UP</span>
          <span className="sm:hidden font-mono font-bold">VOLUME</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-secondaryText hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-electricRed"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#token"
            className="ml-2 inline-flex items-center rounded border border-transparent bg-electricRed px-3 py-1.5 text-sm font-semibold hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-electricRed"
          >
            Get $VOLUME
          </a>
        </nav>
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function MobileMenu() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button aria-label="Open Menu" className="p-2 rounded border border-lines hover:border-electricRed">
          <Menu className="w-5 h-5" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60" />
        <Dialog.Content className="fixed top-0 right-0 h-full w-80 max-w-[75vw] bg-background border-l border-lines shadow-xl focus:outline-none">
          <div className="flex items-center justify-between p-4 border-b border-lines">
            <span className="font-mono">VOLUME</span>
            <Dialog.Close asChild>
              <button aria-label="Close Menu" className="p-2 rounded border border-lines hover:border-electricRed">
                <X className="w-5 h-5" />
              </button>
            </Dialog.Close>
          </div>
          <div className="p-4 flex flex-col gap-4">
            {nav.map((n) => (
              <Dialog.Close asChild key={n.href}>
                <a href={n.href} className="text-lg text-secondaryText hover:text-white">
                  {n.label}
                </a>
              </Dialog.Close>
            ))}
            <Dialog.Close asChild>
              <a
                href="#token"
                className="mt-2 inline-flex items-center rounded border border-transparent bg-electricRed px-3 py-2 text-base font-semibold hover:opacity-90"
              >
                Get $VOLUME
              </a>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default Header;