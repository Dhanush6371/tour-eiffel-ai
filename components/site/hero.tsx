'use client';

import { motion } from 'framer-motion';
import { ArrowUp, Play, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-night-blue via-night-blue to-[#2a2418]"
    >
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

      {/* Tower silhouette glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <div className="h-[500px] w-2 bg-gradient-to-t from-eiffel-gold/40 to-transparent blur-2xl" />
      </div>

      {/* Lattice overlay */}
      <div className="absolute inset-0 bg-lattice opacity-30" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-20 text-center lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-eiffel-gold/30 bg-white/5 px-4 py-1.5 backdrop-blur-sm"
        >
          <Sparkles className="h-4 w-4 text-eiffel-gold-light" />
          <span className="text-sm font-medium text-eiffel-gold-light">
            Your AI companion for the Eiffel Tower
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif-display text-4xl font-bold leading-[1.1] text-white text-balance sm:text-5xl lg:text-6xl text-shadow-soft"
        >
          Climb the Eiffel Tower with a guide who tells its{' '}
          <span className="gold-gradient-text animate-shimmer">secrets</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/70 sm:text-xl"
        >
          A friendly AI companion that walks beside you — telling the real
          stories, listening to your questions, and remembering your ticket.
          Scroll to begin the climb.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#demo"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-eiffel-gold to-eiffel-gold/80 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-eiffel-gold/30 transition-all hover:shadow-2xl hover:shadow-eiffel-gold/40 hover:brightness-105"
          >
            <Play className="h-4 w-4 fill-current" />
            Start a Live Demo
          </a>
          <a
            href="#journey"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-eiffel-gold/40 hover:bg-white/10"
          >
            See the Journey
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-[-90px] left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-white/40">
            <span className="text-xs font-medium uppercase tracking-widest">
              Scroll up the Tower
            </span>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ArrowUp className="h-5 w-5" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const STARS = Array.from({ length: 60 }, (_, i) => ({
  x: Math.random() * 100,
  y: Math.random() * 70,
  size: Math.random() * 2 + 1,
  delay: Math.random() * 3,
  opacity: Math.random() * 0.6 + 0.2,
}));
