import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import ValueProposition from '../components/ValueProposition';
import ServicesAccordion from '../components/ServicesAccordion';
import Process from '../components/Process';
import Features from '../components/Features';
import UseCases from '../components/UseCases';
import CaseStudy from '../components/CaseStudy';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <TrustedBy />
      <ValueProposition />
      <ServicesAccordion />
      <Process />
      <Features />
      <UseCases />
      <CaseStudy />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </motion.div>
  );
};

export default Home;
