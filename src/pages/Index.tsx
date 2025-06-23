
import React from 'react';
import HeroSection from '../components/HeroSection';
import WhySection from '../components/WhySection';
import OfferSection from '../components/OfferSection';
import HowItWorksSection from '../components/HowItWorksSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import DownloadFormSection from '../components/DownloadFormSection';
import LeadFormSection from '../components/LeadFormSection';
import SocialProofSection from '../components/SocialProofSection';
import StickyElements from '../components/StickyElements';

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-montserrat">
      <HeroSection />
      <WhySection />
      <OfferSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
      <DownloadFormSection />
      <LeadFormSection />
      <SocialProofSection />
      <StickyElements />
    </div>
  );
};

export default Index;
