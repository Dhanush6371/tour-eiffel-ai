'use client';

import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Ticket,
  ArrowUp,
  Building2,
  Eye,
  Crown,
  Clock,
} from 'lucide-react';

const STATIONS = [
  {
    icon: ShieldCheck,
    num: '01',
    title: 'Welcome & Security',
    badge: '~5 min',
    teaser: 'The monument Paris once wanted to tear down.',
    side: 'right' as const,
  },
  {
    icon: Ticket,
    num: '02',
    title: 'Ticket Counter',
    badge: '~7 min',
    teaser: 'How a world\u2019s fair gave birth to an icon.',
    side: 'left' as const,
  },
  {
    icon: ArrowUp,
    num: '03',
    title: 'The Ascent',
    badge: '~8 min',
    teaser: '18,000 iron pieces, millions of rivets.',
    side: 'right' as const,
  },
  {
    icon: Building2,
    num: '04',
    title: 'First Floor',
    badge: '~12 min',
    teaser: 'Eiffel the engineer, and a tower that changed colour.',
    side: 'left' as const,
  },
  {
    icon: Eye,
    num: '05',
    title: 'Second Floor Panorama',
    badge: '~15 min',
    teaser: 'Find the golden dome: a skyline treasure hunt.',
    side: 'right' as const,
  },
  {
    icon: Crown,
    num: '06',
    title: 'Summit & Farewell',
    badge: '~10 min',
    teaser: 'The temporary tower that became forever.',
    side: 'left' as const,
  },
];

export function StationClimb() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-gradient-to-b from-warm-ivory via-warm-ivory to-[#f0e8d4] py-24 lg:py-32"
    >
      {/* Lattice line down the center */}
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-eiffel-gold/20 via-eiffel-gold/40 to-eiffel-gold/60" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-eiffel-gold">
            The Six-Station Climb
          </p>
          <h2 className="font-serif-display text-3xl font-bold text-charcoal sm:text-4xl lg:text-5xl">
            From the queues to the summit.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-charcoal/60">
            Your guide leads you through six stations, each with its own story.
            Scroll to climb.
          </p>
        </motion.div>

        <div className="relative space-y-16 lg:space-y-24">
          {STATIONS.map((station, i) => (
            <StationCard key={station.num} station={station} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StationCard({
  station,
  index,
}: {
  station: (typeof STATIONS)[number];
  index: number;
}) {
  const isRight = station.side === 'right';

  return (
    <div className="relative flex items-center">
      {/* Center node */}
      <div className="absolute left-1/2 z-10 -translate-x-1/2">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-eiffel-gold bg-white shadow-lg glow-gold"
        >
          <station.icon className="h-5 w-5 text-eiffel-gold" />
          <div className="absolute -inset-1 animate-pulse rounded-full border border-eiffel-gold/30" />
        </motion.div>
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isRight ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className={`w-[calc(50%-3rem)] ${isRight ? 'ml-auto pl-12' : 'mr-auto pr-12 text-right'}`}
      >
        <div className="group rounded-2xl border border-gold-hairline bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:shadow-eiffel-gold/10">
          <div
            className={`flex items-center gap-3 ${isRight ? '' : 'flex-row-reverse'}`}
          >
            <span className="font-serif-display text-3xl font-bold text-eiffel-gold/30">
              {station.num}
            </span>
            <div className={`flex-1 ${isRight ? '' : 'text-right'}`}>
              <h3 className="font-serif-display text-xl font-bold text-charcoal">
                {station.title}
              </h3>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-eiffel-gold/10 px-2.5 py-1 text-xs font-semibold text-eiffel-gold">
              <Clock className="h-3 w-3" />
              {station.badge}
            </span>
          </div>
          <p className="mt-3 text-charcoal/60">{station.teaser}</p>
        </div>
      </motion.div>
    </div>
  );
}
