import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import BackToTop from '../components/BackToTop.js';
import Banner from '../components/Banner.js';
import CommitmentSection from '../components/CommitmentSection.js';
import ValueSection from '../components/ValueSection.js';
import BenefitsSection from '../components/BenefitsSection.js';
import ValueProposition from '../components/ValueProposition.js';
import SourcingModules from '../components/SourcingModules.js';
import SourcingModulesSteps from '../components/SourcingModulesSteps.js';
import FeaturedClients from '../components/FeaturedClients.js';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <CommitmentSection />
      <ValueSection />
      <BenefitsSection />
      <ValueProposition />
      <SourcingModules />
      <SourcingModulesSteps />
      <FeaturedClients />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Home;