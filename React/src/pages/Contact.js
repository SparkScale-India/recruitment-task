import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import InnerBanner from '../components/InnerBanner.js';
import ContactInfo from '../components/ContactInfo.js';
import BackToTop from '../components/BackToTop.js';

const Contact = () => {
  return (
    <>
      <Header />
      <InnerBanner title="Contact Us" />
      <ContactInfo />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Contact;