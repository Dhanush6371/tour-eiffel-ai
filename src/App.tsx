import { useEffect } from 'react';
import { Navbar } from '@/components/site/navbar';
import { ClimbProgress } from '@/components/site/climb-progress';
import { Hero } from '@/components/site/hero';
import { ValueProps } from '@/components/site/value-props';
import { StationClimb } from '@/components/site/station-climb';
import { HowItWorks } from '@/components/site/how-it-works';
import { ChatDemo } from '@/components/site/chat-demo';
import { Stories } from '@/components/site/stories';
import { Operators } from '@/components/site/operators';
import { SummitFinale } from '@/components/site/summit-finale';
import { FAQ } from '@/components/site/faq';
import { Footer } from '@/components/site/footer';

export default function App() {
  useEffect(() => {
    document.body.classList.add(
      'bg-warm-ivory',
      'text-charcoal',
      'font-sans',
      'antialiased'
    );
  }, []);

  return (
    <>
      <Navbar />
      <ClimbProgress />
      <main>
        <Hero />
        <ValueProps />
        <StationClimb />
        <HowItWorks />
        <ChatDemo />
        <Stories />
        <Operators />
        <SummitFinale />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
