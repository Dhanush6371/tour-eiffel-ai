'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';

const SAMPLE_CHAT = [
  {
    role: 'guide' as const,
    text: 'Bonjour! And welcome. Where are you visiting from today?',
  },
  {
    role: 'user' as const,
    text: 'I\u2019m from Tokyo! First time in Paris.',
  },
  {
    role: 'guide' as const,
    text: 'Tokyo to Paris \u2014 what a journey! You\u2019ll feel right at home up high. I see you have a summit-access ticket. Shall we start at the base, or are you eager to head straight up?',
  },
  {
    role: 'user' as const,
    text: 'Let\u2019s go up! How tall is it really?',
  },
  {
    role: 'guide' as const,
    text: '330 metres to the tip \u2014 about the height of an 81-storey building. But here\u2019s a secret: it grows about 15cm in summer because the iron expands in the heat. You might be climbing a slightly taller tower than the one Eiffel measured!',
  },
];

export function ChatDemo() {
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    if (visibleMessages >= SAMPLE_CHAT.length) return;

    const isGuideMessage = SAMPLE_CHAT[visibleMessages].role === 'guide';
    const delay = isGuideMessage ? 1200 : 600;

    setIsTyping(isGuideMessage);
    const timer = setTimeout(() => {
      setIsTyping(false);
      setVisibleMessages((prev) => prev + 1);
    }, delay);

    return () => clearTimeout(timer);
  }, [hasStarted, visibleMessages]);

  return (
    <section
      id="demo"
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-warm-ivory to-[#f0e8d4] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-eiffel-gold">
              Try It
            </p>
            <h2 className="font-serif-display text-3xl font-bold text-charcoal sm:text-4xl lg:text-5xl">
              Meet your guide.
            </h2>
            <p className="mt-4 max-w-md text-lg text-charcoal/60">
              This is a real sample of how the conversation flows —
              warm, curious, and genuinely listening.
            </p>
            <a
              href="#summit"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-eiffel-gold to-eiffel-gold/80 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-eiffel-gold/20 transition-all hover:shadow-2xl hover:shadow-eiffel-gold/30 hover:brightness-105"
            >
              <Sparkles className="h-4 w-4" />
              Try the live demo
            </a>
          </motion.div>

          {/* Right: phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative mx-auto w-full max-w-sm"
          >
            {/* Glow */}
            <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-eiffel-gold/20 to-eiffel-gold/5 blur-2xl" />

            {/* Phone frame */}
            <div className="relative rounded-[2.5rem] border-[6px] border-night-blue bg-night-blue p-2 shadow-2xl">
              <div className="rounded-[2rem] bg-warm-ivory overflow-hidden">
                {/* Header */}
                <div className="flex items-center gap-3 border-b border-gold-hairline bg-white px-4 py-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-eiffel-gold to-eiffel-gold/70 text-white">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal">
                      Tour Eiffel AI
                    </p>
                    <p className="text-xs text-eiffel-gold">Online now</p>
                  </div>
                </div>

                {/* Chat area */}
                <div className="custom-scrollbar h-[420px] space-y-4 overflow-y-auto p-4">
                  {SAMPLE_CHAT.slice(0, visibleMessages).map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex gap-2 ${
                        msg.role === 'user' ? 'flex-row-reverse' : ''
                      }`}
                    >
                      <div
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                          msg.role === 'user'
                            ? 'bg-charcoal/10 text-charcoal'
                            : 'bg-gradient-to-br from-eiffel-gold to-eiffel-gold/70 text-white'
                        }`}
                      >
                        {msg.role === 'user' ? (
                          <User className="h-4 w-4" />
                        ) : (
                          <Bot className="h-4 w-4" />
                        )}
                      </div>
                      <div
                        className={`max-w-[75%] rounded-2xl px-3.5 py-2.5 text-sm ${
                          msg.role === 'user'
                            ? 'rounded-tr-sm bg-charcoal text-white'
                            : 'rounded-tl-sm bg-white text-charcoal shadow-sm'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}

                  {/* Typing indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex gap-2"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-eiffel-gold to-eiffel-gold/70 text-white">
                        <Bot className="h-4 w-4" />
                      </div>
                      <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm bg-white px-4 py-3 shadow-sm">
                        {[0, 1, 2].map((dot) => (
                          <motion.span
                            key={dot}
                            className="h-2 w-2 rounded-full bg-eiffel-gold/60"
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{
                              repeat: Infinity,
                              duration: 1.2,
                              delay: dot * 0.2,
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Restart button when done */}
                  {visibleMessages >= SAMPLE_CHAT.length && (
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onClick={() => setVisibleMessages(0)}
                      className="mx-auto mt-4 block rounded-full border border-gold-hairline px-4 py-2 text-xs font-medium text-eiffel-gold transition-colors hover:bg-eiffel-gold/5"
                    >
                      Replay conversation
                    </motion.button>
                  )}
                </div>

                {/* Input bar */}
                <div className="flex items-center gap-2 border-t border-gold-hairline bg-white px-4 py-3">
                  <div className="flex-1 rounded-full bg-warm-ivory px-4 py-2.5 text-sm text-charcoal/40">
                    Ask your guide anything…
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-eiffel-gold text-white">
                    <Send className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
