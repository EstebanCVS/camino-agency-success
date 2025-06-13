
import React from 'react';
import { TrendingUp, Heart, Globe, Users } from 'lucide-react';

const WhySection = () => {
  const reasons = [
    {
      icon: TrendingUp,
      title: "Demanda en crecimiento",
      description: "Más de 400,000 peregrinos anuales buscan experiencias auténticas del Camino de Santiago.",
      stat: "+15% anual"
    },
    {
      icon: Heart,
      title: "Experiencia transformadora",
      description: "No es solo un viaje. Es una experiencia espiritual y cultural que cambia vidas.",
      stat: "95% satisfacción"
    },
    {
      icon: Globe,
      title: "Mercado internacional",
      description: "Peregrinos de todo el mundo. Tu agencia puede captar clientes globales.",
      stat: "50+ países"
    },
    {
      icon: Users,
      title: "Comunidad sólida",
      description: "Únete a una red de agencias exitosas que ya están vendiendo el Camino.",
      stat: "+120 agencias"
    }
  ];

  return (
    <section id="why-section" className="py-20 bg-camino-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Por qué vender el{' '}
            <span className="gradient-text">Camino de Santiago</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más que un destino turístico, es una experiencia que transforma vidas. 
            Y tu agencia puede ser parte de esta historia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover-lift text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-camino-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <reason.icon className="w-8 h-8 text-camino-green" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{reason.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{reason.description}</p>
              <div className="text-2xl font-bold text-camino-green">{reason.stat}</div>
            </div>
          ))}
        </div>

        {/* Emotional image section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Una experiencia que vende sola
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Cada año, miles de personas buscan reconectar consigo mismas a través del Camino. 
              Es más que turismo: es transformación personal, historia viva y conexión humana.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Cuando vendes el Camino, no vendes solo un viaje. Vendes una experiencia 
              que tus clientes recordarán toda la vida.
            </p>
          </div>
          <div className="animate-slide-in-right">
            <img
              src="https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
              alt="Peregrinos abrazándose en el Camino"
              className="rounded-xl shadow-2xl w-full hover-lift"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
