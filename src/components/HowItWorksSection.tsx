
import React from 'react';
import { Download, Users, DollarSign } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      icon: Download,
      title: "Descargas el dosier",
      description: "Recibes toda la información: itinerarios, precios, comisiones y material de venta."
    },
    {
      number: "2",
      icon: Users,
      title: "Te formamos 1:1",
      description: "Sesión personalizada donde te enseñamos todo sobre el producto y cómo venderlo."
    },
    {
      number: "3",
      icon: DollarSign,
      title: "Empiezas a vender",
      description: "Con nuestro soporte continuo, comienzas a ofrecer el Camino y generar comisiones."
    }
  ];

  return (
    <section className="py-20 bg-camino-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cómo{' '}
            <span className="gradient-text">funciona</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En solo 3 pasos simples, tu agencia estará lista para vender 
            el Camino de Santiago con éxito.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center group animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Step number */}
              <div className="w-20 h-20 bg-camino-green rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                {step.number}
              </div>
              
              {/* Icon */}
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <step.icon className="w-8 h-8 text-camino-green" />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
              
              {/* Connector line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-camino-green/30 transform translate-x-1/2"></div>
              )}
            </div>
          ))}
        </div>

        {/* Visual timeline for mobile */}
        <div className="md:hidden flex flex-col items-center space-y-8">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="w-full max-w-sm bg-white rounded-xl p-6 shadow-lg hover-lift">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-camino-green rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {step.number}
                  </div>
                  <step.icon className="w-6 h-6 text-camino-green" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="w-1 h-8 bg-camino-green/30"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
