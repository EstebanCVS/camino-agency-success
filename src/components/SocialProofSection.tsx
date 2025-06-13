
import React from 'react';
import { Star } from 'lucide-react';

const SocialProofSection = () => {
  const agencies = [
    { name: "Viajes El Corte Inglés", logo: "🏢" },
    { name: "Halcón Viajes", logo: "🦅" },
    { name: "Viajes Carrefour", logo: "🛒" },
    { name: "Barceló Viajes", logo: "🏨" },
    { name: "Civitatis", logo: "🎯" },
    { name: "GetYourGuide", logo: "📱" },
    { name: "Viajes Eroski", logo: "🏪" },
    { name: "Tui Travel", logo: "✈️" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-camino-green to-camino-green-light text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Únete a la red de agencias líderes
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Más de 120 agencias de viaje ya confían en nosotros para 
            vender el Camino de Santiago en todo el mundo.
          </p>
        </div>

        {/* Counter */}
        <div className="text-center mb-16 animate-scale-in">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-8 py-4">
            <Star className="w-6 h-6 mr-3 text-yellow-300" fill="currentColor" />
            <span className="text-2xl font-bold mr-2">+120</span>
            <span className="text-lg">agencias ya trabajan con nosotros</span>
          </div>
        </div>

        {/* Agencies logos */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 opacity-90">
            Algunos de nuestros colaboradores:
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {agencies.map((agency, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover-lift animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-3">{agency.logo}</div>
                <div className="text-sm font-medium opacity-90">{agency.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 text-center animate-fade-in">
          <div>
            <div className="text-4xl font-bold mb-2">+15</div>
            <div className="opacity-90">Años de experiencia</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">+400k</div>
            <div className="opacity-90">Peregrinos anuales</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="opacity-90">Países de origen</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">95%</div>
            <div className="opacity-90">Satisfacción</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-scale-in">
          <p className="text-xl mb-8 opacity-90">
            ¿Quieres ser la próxima agencia en nuestra red de éxito?
          </p>
          <button className="bg-white text-camino-green hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Sí, quiero unirme ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
