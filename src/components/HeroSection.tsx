
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Phone, Play, Mail } from 'lucide-react';

const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    // Auto-play video after component mounts
    setTimeout(() => setIsVideoPlaying(true), 1000);
  }, []);

  const handleScheduleCall = () => {
    console.log('Scheduling call...');
    // Ruta caliente - directa a Calendly
    window.open('https://links.viajescaminodesantiago.com/widget/bookings/video-inicial-bb02ffae-1815-4a7e-a223-b1dcd8a63df4-18637aa9-18fb-46a3-9d6b-949714beb185', '_blank');
  };

  const handleMoreInfo = () => {
    console.log('More info request...');
    // Ruta templada - scroll al formulario de información
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden pt-24">
      {/* Logo */}
      <div className="absolute top-12 left-8 z-20">
        <img
          src="/lovable-uploads/333ee870-ba17-430c-a2a0-23f73a548de0.png"
          alt="Viajes Camino de Santiago"
          className="h-6 md:h-7 w-auto"
        />
      </div>

      {/* Background Image Only */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full">
          <div className="w-full h-full bg-gradient-to-br from-camino-green/20 to-camino-blue/20 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
              alt="Camino de Santiago landscape"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">Vende el </span>
            <span className="text-camino-green">Camino de Santiago</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-gray-700 mb-8">
            Tú te encargas de captar al cliente. Nosotros del resto.
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto font-light">
            El Camino de Santiago recibe más de 500.000 peregrinos al año. 
            Te ayudamos a convertir esa demanda en ventas para tu agencia.
          </p>

          {/* Two CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={handleScheduleCall}
              className="bg-camino-green hover:bg-camino-green-light text-white font-semibold text-lg px-8 py-6 w-full sm:w-auto rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Phone className="mr-3 h-6 w-6" />
              📞 Agendar una llamada
            </Button>
            <Button
              onClick={handleMoreInfo}
              className="bg-camino-blue hover:bg-camino-blue-dark text-white font-semibold text-lg px-8 py-6 w-full sm:w-auto rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Mail className="mr-3 h-6 w-6" />
              📬 Quiero más información
            </Button>
          </div>

          {/* Positioning text */}
          <div className="mb-8">
            <p className="text-xl text-gray-700 font-medium">
              Conviértete en distribuidor de una experiencia que cambia vidas.{' '}
              <span className="text-camino-green font-semibold">Nosotros organizamos todo, tú ganas comisiones por cada venta.</span>
            </p>
          </div>

          {/* Featured YouTube Video Section - Positioned right after the text */}
          <div className="mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-lg overflow-hidden shadow-2xl bg-white/20 backdrop-blur-sm border border-white/30 p-1">
                <div className="aspect-video bg-black rounded-md overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/EhwVPVAZPZU"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Camino de Santiago - Video Promocional"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-camino-green rounded-full flex justify-center">
          <div className="w-1 h-3 bg-camino-green rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
