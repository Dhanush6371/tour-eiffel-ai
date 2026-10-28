'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, TowerControl } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { href: '#journey', label: 'Journey' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#stories', label: 'Stories' },
  { href: '#demo', label: 'Try It' },
  { href: '#faq', label: 'FAQ' },
];

export function Navbar() {
  const { scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setScrolled(window.scrollY > 60);
    setProgress(v);
  });

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-white/85 shadow-[0_1px_20px_rgba(199,154,59,0.12)] backdrop-blur-xl'
            : 'bg-transparent'
        )}
      >
        {/* Progress bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-eiffel-gold via-eiffel-gold-light to-eiffel-gold"
          style={{ width: `${progress * 100}%` }}
        />

        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-eiffel-gold to-eiffel-gold/70 text-white shadow-md">
              <TowerControl className="h-5 w-5" />
            </span>
            <span className="font-serif-display text-lg font-bold tracking-tight text-charcoal">
              Tour Eiffel<span className="text-eiffel-gold"> AI</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-charcoal/70 transition-colors hover:text-eiffel-gold"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#demo"
              className="rounded-full bg-gradient-to-r from-eiffel-gold to-eiffel-gold/80 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-eiffel-gold/20 transition-all hover:shadow-xl hover:shadow-eiffel-gold/30 hover:brightness-105"
            >
              Start the Tour
            </a>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6 text-charcoal" />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-night-blue/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="absolute right-0 top-0 flex h-full w-72 flex-col bg-warm-ivory p-6 shadow-2xl"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="font-serif-display text-lg font-bold text-charcoal">
                Menu
              </span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X className="h-6 w-6 text-charcoal" />
              </button>
            </div>
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-base font-medium text-charcoal/80 transition-colors hover:bg-eiffel-gold/10 hover:text-eiffel-gold"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#demo"
                onClick={() => setMobileOpen(false)}
                className="mt-4 rounded-full bg-gradient-to-r from-eiffel-gold to-eiffel-gold/80 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg"
              >
                Start the Tour
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
