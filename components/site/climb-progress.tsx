'use client';

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from 'framer-motion';
import { useEffect, useState } from 'react';

const STATIONS = [
  { id: 'journey', label: 'Base', height: 0 },
  { id: 'how-it-works', label: 'Ascent', height: 0.2 },
  { id: 'demo', label: '1st Floor', height: 0.4 },
  { id: 'stories', label: '2nd Floor', height: 0.6 },
  { id: 'summit', label: 'Summit', height: 0.85 },
];

export function ClimbProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [progress, setProgress] = useState(0);
  useMotionValueEvent(scrollYProgress, 'change', (v) => setProgress(v));

  const currentStation =
    [...STATIONS].reverse().find((s) => progress >= s.height) ?? STATIONS[0];

  return (
    <div className="fixed left-6 top-0 z-40 hidden h-screen flex-col items-center lg:flex">
      {/* Track */}
      <div className="relative h-full w-px bg-gradient-to-b from-eiffel-gold/10 via-eiffel-gold/30 to-eiffel-gold-light/60">
        {/* Fill */}
        <motion.div
          className="absolute left-0 top-0 w-px origin-top bg-gradient-to-b from-eiffel-gold via-eiffel-gold-light to-eiffel-gold-light"
          style={{ scaleY, height: '100%' }}
        />
        {/* Lift dot */}
        <motion.div
          className="absolute -left-[7px] h-4 w-4 rounded-full bg-eiffel-gold-light glow-gold-strong"
          style={{
            top: useTransform(scrollYProgress, (v) => `${v * 100}%`),
            marginTop: '-8px',
          }}
        >
          <div className="absolute inset-0 animate-ping rounded-full bg-eiffel-gold-light opacity-40" />
        </motion.div>
      </div>
      {/* Label */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2">
        <div className="whitespace-nowrap rounded-full border border-gold-hairline bg-white/80 px-3 py-1 text-xs font-medium text-charcoal backdrop-blur-sm">
          {currentStation.label}
        </div>
      </div>
    </div>
  );
}
