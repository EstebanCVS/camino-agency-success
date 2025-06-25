
import React from 'react';
import HeroSection from '../components/HeroSection';
import WhySection from '../components/WhySection';
import OfferSection from '../components/OfferSection';
import FAQSection from '../components/FAQSection';
import DownloadFormSection from '../components/DownloadFormSection';
import LeadFormSection from '../components/LeadFormSection';
import SocialProofSection from '../components/SocialProofSection';
import TestimonialsSection from '../components/TestimonialsSection';
import StickyElements from '../components/StickyElements';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-montserrat">
      <HeroSection />
      <WhySection />
      <OfferSection />
      <FAQSection />
      <DownloadFormSection />
      <LeadFormSection />
      <SocialProofSection />
      <TestimonialsSection />
      <StickyElements />
      <Footer />
    </div>
  );
};

export default Index;
