
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Download, Bed, Package, Phone, GraduationCap, TrendingUp } from 'lucide-react';

const OfferSection = () => {
  const offerings = [
    {
      icon: Package,
      title: "Producto completo",
      description: "Alojamiento, transporte de equipaje, asistencia 24/7, seguros y documentación."
    },
    {
      icon: TrendingUp,
      title: "Comisiones atractivas",
      description: "Hasta 20% de comisión por cliente + bonos por volumen de ventas."
    },
    {
      icon: GraduationCap,
      title: "Formación personalizada",
      description: "Te capacitamos 1:1 sobre el producto, técnicas de venta y manejo de objeciones."
    },
    {
      icon: Bed,
      title: "Material de venta",
      description: "Brochures personalizados, videos promocionales y kit de ventas con tu marca."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Qué ofrecemos a{' '}
            <span className="gradient-text">tu agencia</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Todo lo que necesitas para empezar a vender el Camino de Santiago 
            de forma exitosa desde el primer día.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {offerings.map((offering, index) => (
            <div 
              key={index}
              className="flex items-start space-x-6 p-8 bg-gray-50 rounded-xl hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-camino-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <offering.icon className="w-6 h-6 text-camino-green" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{offering.title}</h3>
                <p className="text-gray-600 leading-relaxed">{offering.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-camino-green to-camino-green-light rounded-2xl p-12 text-center text-white animate-fade-in">
          <h3 className="text-3xl font-bold mb-6">
            ¿Listo para empezar?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Solicita tu kit de ventas personalizado y comienza a ofrecer 
            el Camino de Santiago a tus clientes.
          </p>
          <Button 
            className="bg-white text-camino-green hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Download className="mr-3 h-6 w-6" />
            Solicita tu kit de ventas personalizado
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
