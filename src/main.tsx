import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import Lenis from 'lenis';

function Root() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    // Smooth-scroll anchors with sticky header offset
    function onClick(e: Event) {
      const target = e.target as HTMLElement;
      if (target instanceof HTMLAnchorElement && target.hash) {
        const el = document.querySelector(target.hash);
        if (el) {
          e.preventDefault();
          const top = (el as HTMLElement).offsetTop - 64; // header height offset
          lenis.scrollTo(top);
        }
      }
    }
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('click', onClick);
    };
  }, []);
  return <App />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
