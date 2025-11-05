import { Twitter, Send } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();
  return (
  <footer className="border-t border-[#1C1C21] mt-16" aria-label="Footer">
      <div className="container py-8 grid md:grid-cols-3 gap-6 items-center">
    <div className="text-sm text-[#B3B3B8]">TURN THE VOLUME UP © {year}</div>
        <nav className="flex justify-center gap-6 text-xs">
          <a href="#lore" className="hover:text-white">Lore</a>
          <a href="#manifesto" className="hover:text-white">Manifesto</a>
          <a href="#token" className="hover:text-white">Token</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </nav>
        <div className="flex justify-end gap-3">
        <a href="#" aria-label="Twitter" className="btn btn-outline"><Twitter className="w-4 h-4" /></a>
        <a href="#" aria-label="Telegram" className="btn btn-outline"><Send className="w-4 h-4" /></a>
        </div>
      </div>
    <div className="container pb-10 text-[11px] text-[#B3B3B8]">
        This website is an artistic, community-oriented expression. It does not represent any public figure or institution. Nothing herein is financial, legal, or political advice.
      </div>
    </footer>
  );
}

export default Footer;