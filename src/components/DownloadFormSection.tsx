
import React from 'react';
import { Download, Shield, FileText, Zap } from 'lucide-react';
import LeadFormUnified from './LeadFormUnified';

const DownloadFormSection = () => {
  const benefits = [
    {
      icon: FileText,
      title: "Dosier completo",
      description: "Itinerarios detallados, precios y estructura de comisiones"
    },
    {
      icon: Shield,
      title: "Sin compromiso",
      description: "Descarga gratuita sin obligaciones ni contratos"
    },
    {
      icon: Zap,
      title: "Acceso inmediato",
      description: "Recíbelo en tu email en menos de 5 minutos"
    }
  ];

  return (
    <section id="dossier-form" className="py-20 bg-gradient-to-br from-camino-green/5 to-camino-blue/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            📥 Descarga el{' '}
            <span className="text-camino-green">dosier informativo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recibe toda la información detallada sobre cómo vender el Camino de Santiago: 
            itinerarios, precios, comisiones y material de venta.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Benefits */}
          <div className="space-y-8 animate-slide-in-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Qué incluye el dosier:
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
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-2">Más de</div>
                <div className="text-3xl font-bold text-camino-green mb-2">1.000</div>
                <div className="text-sm text-gray-600">dosiers descargados este mes</div>
              </div>
            </div>
          </div>

          {/* Simple Download Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 animate-slide-in-right">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-camino-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-camino-green" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Descarga gratuita</h3>
              <p className="text-gray-600">Solo necesitamos estos datos para enviártelo</p>
            </div>

            <LeadFormUnified
              buttonText="📥 Descargar dosier ahora"
              buttonIcon={<Download className="mr-3 h-6 w-6" />}
              buttonClassName="bg-camino-green hover:bg-camino-green-light text-white font-semibold text-lg py-4 mt-6"
            >
              <p className="text-sm text-gray-500 text-center mt-4">
                * Campos obligatorios. No compartimos tu información con terceros.
              </p>
            </LeadFormUnified>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadFormSection;
