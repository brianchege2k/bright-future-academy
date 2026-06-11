'use client';

import { useAnimateOnScroll } from './hooks/useAnimateOnScroll';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function Home() {
  useAnimateOnScroll();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <WhyUs />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}