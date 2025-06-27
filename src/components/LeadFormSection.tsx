
import React from 'react';
import { Download, Shield, Clock, Users } from 'lucide-react';
import LeadFormUnified from './LeadFormUnified';

const LeadFormSection = () => {
  const benefits = [
    {
      icon: Download,
      title: "Dosier completo",
      description: "Itinerarios, precios y comisiones detalladas"
    },
    {
      icon: Shield,
      title: "Sin compromiso",
      description: "Información gratuita y sin obligaciones"
    },
    {
      icon: Clock,
      title: "Respuesta rápida",
      description: "Te contactamos en menos de 24 horas"
    },
    {
      icon: Users,
      title: "Soporte continuo",
      description: "Acompañamiento durante todo el proceso"
    }
  ];

  return (
    <section id="lead-form" className="py-20 bg-gradient-to-br from-camino-green/5 to-camino-blue/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Listo para vender el{' '}
            <span className="gradient-text">Camino</span> en tu agencia?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Te mandamos el dosier con itinerarios, comisiones y todo lo que necesitas 
            para empezar a vender el Camino de Santiago.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Benefits */}
          <div className="space-y-8 animate-slide-in-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Qué recibirás:
            </h3>
            
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-camino-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-camino-green" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}

            {/* Trust elements */}
            <div className="mt-12 p-6 bg-white rounded-xl shadow-lg">
              <div className="flex items-center justify-between text-center">
                <div>
                  <div className="text-2xl font-bold text-camino-green">+120</div>
                  <div className="text-sm text-gray-600">Agencias activas</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-camino-green">15</div>
                  <div className="text-sm text-gray-600">Años experiencia</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-camino-green">95%</div>
                  <div className="text-sm text-gray-600">Satisfacción</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 animate-slide-in-right">
            <LeadFormUnified
              buttonText="Quiero el dosier y más información"
              buttonIcon={<Download className="mr-3 h-6 w-6" />}
              buttonClassName="camino-button text-lg py-6"
            >
              <p className="text-sm text-gray-500 text-center mt-4">
                * Campos obligatorios. Respetamos tu privacidad y no compartimos tu información.
              </p>
            </LeadFormUnified>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadFormSection;
