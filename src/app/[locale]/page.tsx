import dynamic from 'next/dynamic';

import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";

// Lazy load below-fold components to reduce initial JS
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: true });
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: true });
const Stats = dynamic(() => import("@/components/Stats"), { ssr: true });
const CEO = dynamic(() => import("@/components/CEO"), { ssr: true });
const CTA = dynamic(() => import("@/components/CTA"), { ssr: true });

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Logos />
      <Container>
        <Benefits />

        <Section
          id="testimonials"
          titleKey="testimonials.title"
          descriptionKey="testimonials.description"
        >
          <Testimonials />
        </Section>

        <FAQ />

        <Stats />

        <CEO />
        
        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
