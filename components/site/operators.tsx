'use client';

import { motion } from 'framer-motion';
import { Globe, Route, ShieldCheck } from 'lucide-react';

const FEATURES = [
  {
    icon: Globe,
    title: 'Branded & multilingual',
    text: 'Your logo, your voice. The guide speaks 12 languages out of the box, with custom scripts for your venue.',
  },
  {
    icon: Route,
    title: 'Configurable routes',
    text: 'Define the stations, the pacing, and the stories. Deploy to a single monument or an entire network.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety-first',
    text: 'The guide never routes visitors into restricted areas, and always nudges toward official exits and signage.',
  },
];

export function Operators() {
  return (
    <section className="relative overflow-hidden bg-night-blue py-24 lg:py-28">
      {/* Star field */}
      <div className="absolute inset-0 opacity-40">
        {STARS.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-eiffel-gold-light animate-twinkle"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDelay: `${s.delay}s`,
              opacity: s.opacity,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-eiffel-gold-light">
              For Operators
            </p>
            <h2 className="font-serif-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Bring AI-guided storytelling to your monument.
            </h2>
            <p className="mt-4 max-w-md text-lg text-white/60">
              A white-label conversational guide platform for cultural sites,
              cities, and heritage operators.
            </p>
            <a
              href="#summit"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-eiffel-gold/40 bg-eiffel-gold/10 px-7 py-3.5 text-base font-semibold text-eiffel-gold-light backdrop-blur-sm transition-all hover:bg-eiffel-gold/20"
            >
              Partner with us
            </a>
          </motion.div>

          <div className="space-y-4">
            {FEATURES.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-eiffel-gold/30 hover:bg-white/10"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-eiffel-gold/20 text-eiffel-gold-light">
                  <feat.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-1 font-serif-display text-lg font-bold text-white">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-white/60">{feat.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const STARS = Array.from({ length: 30 }, (_, i) => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 1,
  delay: Math.random() * 3,
  opacity: Math.random() * 0.5 + 0.2,
}));
