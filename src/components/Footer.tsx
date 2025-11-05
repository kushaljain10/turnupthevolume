import { Twitter, Send } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[#1C1C21] mt-16" aria-label="Footer">
      <div className="container py-8 items-center">
        <div className="text-sm text-[#B3B3B8] text-center">
          TURN THE VOLUME UP © {year}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
