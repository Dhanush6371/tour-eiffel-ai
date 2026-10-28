'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Compass, Map } from 'lucide-react';

const STEPS = [
  {
    icon: MessageCircle,
    num: '1',
    title: 'Say hello & pick your ticket',
    text: 'Open the chat. Tell your guide hello, share your ticket type (stairs, lift, summit), and set your language. That\u2019s it — the tour is tailored from the first word.',
  },
  {
    icon: Compass,
    num: '2',
    title: 'Walk & discover',
    text: 'As you move through each station, your guide narrates the story in your ear. Ask anything mid-sentence — \u201cwhy is it brown?\u201d \u201cwho was Eiffel?\u201d — and get an instant answer.',
  },
  {
    icon: Map,
    num: '3',
    title: 'Explore freely',
    text: 'Want to linger on the view? Skip the engineering talk? Your guide follows your lead. End the tour anytime, or let it carry you to the summit.',
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-gradient-to-b from-[#f0e8d4] via-warm-ivory to-warm-ivory py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-eiffel-gold">
            How It Works
          </p>
          <h2 className="font-serif-display text-3xl font-bold text-charcoal sm:text-4xl lg:text-5xl">
            Three steps to the summit.
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              {/* Connecting line */}
              {i < STEPS.length - 1 && (
                <div className="absolute right-[-1rem] top-12 hidden h-px w-8 bg-gradient-to-r from-eiffel-gold/30 to-transparent lg:block" />
              )}
              <div className="rounded-2xl border border-gold-hairline bg-white p-8 shadow-sm">
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-eiffel-gold to-eiffel-gold/70 text-white shadow-md">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <span className="font-serif-display text-5xl font-bold text-eiffel-gold/15">
                    {step.num}
                  </span>
                </div>
                <h3 className="mb-3 font-serif-display text-xl font-bold text-charcoal">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-charcoal/60">
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
