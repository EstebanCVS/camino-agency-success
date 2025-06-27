
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, MessageCircle, X } from 'lucide-react';

const StickyElements = () => {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show sticky elements after scrolling past the hero section
      setShowSticky(scrollPosition > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadDossier = () => {
    console.log('Download dossier from sticky button');
    // Scroll to form with anchor
    document.getElementById('dossier-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    console.log('Opening WhatsApp');
    window.open('https://wa.me/34600000000?text=Hola, estoy interesado en vender el Camino de Santiago en mi agencia', '_blank');
  };

  const handleScheduleCall = () => {
    console.log('Opening Calendly');
    window.open('https://links.viajescaminodesantiago.com/widget/booking/5Z4Vi8V4sYIrZcrA6T9E', '_blank', 'noopener');
  };

  if (!showSticky) return null;

  return (
    <>
      {/* Sticky Download CTA */}
      <div className="sticky-cta">
        <Button 
          onClick={handleDownloadDossier}
          className="bg-camino-green hover:bg-camino-green-light text-white font-semibold py-3 px-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
        >
          <Download className="mr-2 h-5 w-5" />
          Descargar dosier gratuito
        </Button>
      </div>

      {/* WhatsApp Float */}
      <div className="whatsapp-float">
        <button
          onClick={handleWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 group"
          title="¿Dudas? Escríbenos por WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            ¿Dudas? Escríbenos por WhatsApp
          </div>
        </button>
      </div>

      {/* Calendly sticky button for larger screens */}
      <div className="hidden lg:block fixed bottom-20 left-6 z-50">
        <button
          onClick={handleScheduleCall}
          className="bg-camino-blue hover:bg-camino-blue-dark text-white font-semibold py-3 px-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
        >
          📞 Agendar llamada
        </button>
      </div>
    </>
  );
};

export default StickyElements;
