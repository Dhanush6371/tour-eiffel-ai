'use client';

import { motion } from 'framer-motion';
import { PenTool, Clock, Wrench } from 'lucide-react';

const STORIES = [
  {
    icon: PenTool,
    eyebrow: 'The Protest',
    title: '300 artists tried to stop it',
    text: 'In 1887, a petition signed by 300 of France\u2019s finest writers and painters called the tower a \u201cgigantic black smokestack\u201d that would crush Paris with its barbarity. Today it\u2019s the symbol of the city they feared for.',
  },
  {
    icon: Clock,
    eyebrow: 'The Contract',
    title: 'It was meant to last 20 years',
    text: 'Eiffel built it for the 1889 World\u2019s Fair with a permit that expired in 1909. It survived only because it became a useful radio antenna \u2014 and then indispensable for wartime communications.',
  },
  {
    icon: Wrench,
    eyebrow: 'The Engineer',
    title: 'Eiffel helped build the Statue of Liberty',
    text: 'Before the tower, Gustave Eiffel designed the iron skeleton inside Lady Liberty. The same engineering genius \u2014 flexible iron that bends in the wind \u2014 lives in both icons.',
  },
];

export function Stories() {
  return (
    <section
      id="stories"
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
            Stories You'll Hear
          </p>
          <h2 className="font-serif-display text-3xl font-bold text-charcoal sm:text-4xl lg:text-5xl">
            Three secrets your guide loves to tell.
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {STORIES.map((story, i) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group relative overflow-hidden rounded-2xl border border-gold-hairline bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-eiffel-gold/10"
            >
              {/* Decorative corner */}
              <div className="absolute right-0 top-0 h-24 w-24 bg-gradient-to-bl from-eiffel-gold/10 to-transparent" />

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-eiffel-gold/15 to-eiffel-gold/5 text-eiffel-gold transition-transform group-hover:scale-110">
                <story.icon className="h-6 w-6" />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-eiffel-gold">
                {story.eyebrow}
              </p>
              <h3 className="mb-3 font-serif-display text-xl font-bold text-charcoal">
                {story.title}
              </h3>
              <p className="text-sm leading-relaxed text-charcoal/60">
                {story.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
