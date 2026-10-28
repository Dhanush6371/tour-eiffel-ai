'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';

const FAQS = [
  {
    q: 'Do I need to download an app?',
    a: 'No. The demo runs right in your browser. A native app experience is available for operators who want offline support and push notifications, but the conversation works anywhere with a connection.',
  },
  {
    q: 'What languages does the guide speak?',
    a: 'Twelve languages out of the box: French, English, Spanish, German, Italian, Portuguese, Japanese, Korean, Mandarin, Arabic, Russian, and Hindi. Operators can add more.',
  },
  {
    q: 'Does it work offline?',
    a: 'The live demo requires an internet connection. The operator app version caches the tour narrative for offline use once you\u2019ve started \u2014 handy on the summit where signal can drop.',
  },
  {
    q: 'Is this the official Eiffel Tower guide?',
    a: 'No. This is a demo experience with illustrative routes and stories. The narratives are researched but not affiliated with the official operating company. Always verify official information before visiting.',
  },
  {
    q: 'How does it use my data and location?',
    a: 'The demo doesn\u2019t collect personal data or track your location. The operator version can optionally use location to know which station you\u2019re at \u2014 but only with your explicit permission, and it\u2019s never stored.',
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="relative bg-warm-ivory py-24 lg:py-32"
    >
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-eiffel-gold">
            FAQ
          </p>
          <h2 className="font-serif-display text-3xl font-bold text-charcoal sm:text-4xl lg:text-5xl">
            Questions before you climb.
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <AccordionItem
                value={`item-${i}`}
                className="rounded-xl border border-gold-hairline bg-white px-5 shadow-sm"
              >
                <AccordionTrigger className="text-left font-serif-display text-base font-semibold text-charcoal hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-charcoal/60">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
