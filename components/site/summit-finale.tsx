'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export function SummitFinale() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [sparklesActive, setSparklesActive] = useState(false);

  useEffect(() => {
    if (isInView) {
      setSparklesActive(true);
      const timer = setTimeout(() => setSparklesActive(false), 6000);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section
      id="summit"
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-night-blue via-night-blue-deep to-black"
    >
      {/* Sparkle overlay */}
      {sparklesActive && (
        <div className="absolute inset-0 z-20 pointer-events-none">
          {SPARKLES.map((s, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-eiffel-gold-light"
              style={{
                left: `${s.x}%`,
                top: `${s.y}%`,
                width: `${s.size}px`,
                height: `${s.size}px`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 2,
                delay: s.delay,
                repeat: 2,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      )}

      {/* Star field */}
      <div className="absolute inset-0">
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

      {/* Center glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-eiffel-gold/10 blur-[120px]" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-30 mx-auto max-w-3xl px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-eiffel-gold/30 bg-eiffel-gold/10 px-4 py-1.5 backdrop-blur-sm"
        >
          <Sparkles className="h-4 w-4 text-eiffel-gold-light" />
          <span className="text-sm font-medium text-eiffel-gold-light">
            You've reached the summit
          </span>
        </motion.div>

        <h2 className="font-serif-display text-4xl font-bold leading-tight text-white text-balance sm:text-5xl lg:text-6xl text-shadow-soft">
          Ready to meet{' '}
          <span className="gold-gradient-text animate-shimmer">your guide?</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
          Your AI companion is waiting at the base. The stories, the secrets,
          the view from the top — all one scroll away.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#demo"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-eiffel-gold to-eiffel-gold/80 px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-eiffel-gold/30 transition-all hover:shadow-eiffel-gold/50 hover:brightness-105"
          >
            Start the Tour
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <p className="mt-8 text-xs text-white/30">
          Demo experience. Routes & dates are illustrative.
        </p>
      </motion.div>
    </section>
  );
}

const STARS = Array.from({ length: 80 }, () => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2.5 + 0.5,
  delay: Math.random() * 3,
  opacity: Math.random() * 0.6 + 0.2,
}));

const SPARKLES = Array.from({ length: 120 }, () => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 2,
  delay: Math.random() * 4,
}));
