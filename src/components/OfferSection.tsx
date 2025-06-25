
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Download, Bed, Package, Phone, GraduationCap, TrendingUp, DollarSign } from 'lucide-react';

const OfferSection = () => {
  const offerings = [
    {
      icon: "✔️",
      title: "Todo organizado",
      description: "Alojamiento, transporte de equipaje, seguros, asistencia 24/7 y documentación completa."
    },
    {
      icon: "💰",
      title: "Comisiones competitivas y bonos por volumen",
      description: "Gana por cada venta + bonificaciones especiales al alcanzar objetivos mensuales."
    },
    {
      icon: "🧠",
      title: "Formación 1:1 sin coste",
      description: "Te capacitamos personalmente sobre el producto, técnicas de venta y manejo de objeciones."
    },
    {
      icon: "🧾",
      title: "Material personalizado para vender mejor",
      description: "Brochures con tu marca, videos promocionales y kit de ventas profesional."
    }
  ];

  const handleScheduleMeeting = () => {
    console.log('Scheduling meeting');
    window.open('https://links.viajescaminodesantiago.com/widget/bookings/video-inicial-bb02ffae-1815-4a7e-a223-b1dcd8a63df4-18637aa9-18fb-46a3-9d6b-949714beb185', '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Qué incluye trabajar con{' '}
            <span className="text-camino-green">nosotros</span>
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
              className="flex items-start space-x-6 p-8 bg-gray-50 rounded-xl hover-lift animate-scale-in border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl flex-shrink-0">
                {offering.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{offering.title}</h3>
                <p className="text-gray-600 leading-relaxed">{offering.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Urgency section */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 rounded-xl p-8 mb-12 animate-fade-in">
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Solo aceptamos 30 nuevas agencias cada trimestre
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Para garantizar calidad y soporte personalizado a cada colaborador.
            </p>
            <p className="text-xl font-semibold text-amber-700">
              ¿Quieres ser una de ellas?
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-camino-green to-camino-green-light rounded-2xl p-12 text-center text-white animate-fade-in">
          <h3 className="text-3xl font-bold mb-6">
            ¿Listo para empezar?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Solicita una reunión con nosotros y descubre cómo puedes empezar 
            a ofrecer el Camino de Santiago a tus clientes.
          </p>
          <Button 
            onClick={handleScheduleMeeting}
            className="bg-white text-camino-green hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Phone className="mr-3 h-6 w-6" />
            📞 Solicita una reunión con nosotros
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
