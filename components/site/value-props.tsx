'use client';

import { motion } from 'framer-motion';
import { Footprints, BookOpen, Ticket, Compass } from 'lucide-react';

const PROPS = [
  {
    icon: Footprints,
    title: 'Walks beside you',
    text: 'Your guide is right there in your ear — no clunky audio wand, no squinting at plaques.',
  },
  {
    icon: BookOpen,
    title: 'Tells the real stories',
    text: 'Not recycled Wikipedia. Researched tales of the people, the protests, the iron.',
  },
  {
    icon: Ticket,
    title: 'Listens & remembers',
    text: 'Tell it your ticket type and it knows which floors you can reach — and reminds you.',
  },
  {
    icon: Compass,
    title: 'Your pace, your path',
    text: 'Linger on the view, skip ahead, ask a follow-up. The tour bends to you, not the crowd.',
  },
];

export function ValueProps() {
  return (
    <section className="relative bg-warm-ivory py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center font-serif-display text-3xl font-bold text-charcoal sm:text-4xl"
        >
          Not just an audio guide. A companion.
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROPS.map((prop, i) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-gold-hairline bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-eiffel-gold/10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-eiffel-gold/15 to-eiffel-gold/5 text-eiffel-gold transition-transform group-hover:scale-110">
                <prop.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-serif-display text-lg font-bold text-charcoal">
                {prop.title}
              </h3>
              <p className="text-sm leading-relaxed text-charcoal/60">
                {prop.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
