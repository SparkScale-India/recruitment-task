import React from 'react';
import Header from '../components/Header.js'; // Add .js extension
import Footer from '../components/Footer.js';
import InnerBanner from '../components/InnerBanner.js';
import RecruitmentProcess from '../components/RecruitmentProcess.js';
import OperatingProcess from '../components/OperatingProcess.js';
import BackToTop from '../components/BackToTop.js';

const Recruitment = () => {
  return (
    <>
      <Header />
      <InnerBanner title="Recruitment Process" />
      <RecruitmentProcess />
      <OperatingProcess />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Recruitment;