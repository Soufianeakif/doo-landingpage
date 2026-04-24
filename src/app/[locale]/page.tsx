import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import CEO from "@/components/CEO";

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
