import { TowerControl } from 'lucide-react';

const COLUMNS = [
  {
    title: 'Product',
    links: ['Journey', 'How It Works', 'Live Demo', 'Stories', 'FAQ'],
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Press'],
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Terms', 'Demo Disclaimer', 'Cookies'],
  },
  {
    title: 'Language',
    links: ['English', 'Fran\u00e7ais', 'Espa\u00f1ol', 'Deutsch'],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-night-blue-deep py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-eiffel-gold to-eiffel-gold/70 text-white shadow-md">
                <TowerControl className="h-5 w-5" />
              </span>
              <span className="font-serif-display text-lg font-bold tracking-tight">
                Tour Eiffel<span className="text-eiffel-gold"> AI</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/40">
              An AI conversational guide for the Eiffel Tower. Walk, listen,
              ask, and discover.
            </p>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-sm font-semibold text-eiffel-gold-light">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/50 transition-colors hover:text-eiffel-gold-light"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs leading-relaxed text-white/30">
            Tour Eiffel AI is a demo experience. Routes, dates, and stories are
            illustrative unless officially licensed. This product is not
            affiliated with the official Eiffel Tower operating company. Always
            verify official information, opening hours, and ticket details
            before visiting.
          </p>
          <p className="mt-4 text-xs text-white/30">
            © {new Date().getFullYear()} Tour Eiffel AI. Made with care for
            the love of Paris.
          </p>
        </div>
      </div>
    </footer>
  );
}
