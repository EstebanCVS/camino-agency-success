
import React from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carmen Martínez",
      location: "Madrid, España",
      country: "🇪🇸",
      text: "Una experiencia única e inolvidable. Todo perfectamente organizado, desde el alojamiento hasta el transporte del equipaje. Recomendable 100%.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616c88d1eb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Miguel González",
      location: "Barcelona, España", 
      country: "🇪🇸",
      text: "El Camino cambió mi vida. La organización fue impecable y el soporte durante todo el recorrido excepcional. Una experiencia transformadora.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Ana Rodríguez",
      location: "Valencia, España",
      country: "🇪🇸", 
      text: "Superó todas mis expectativas. Cada detalle cuidado al máximo. El equipo te acompaña en todo momento. Sin duda, lo recomiendo.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-camino-blue/5 to-camino-green/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Lo que dicen nuestros{' '}
            <span className="text-camino-green">clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Testimonios reales de peregrinos que han vivido 
            la experiencia del Camino de Santiago con nosotros.
          </p>
          
          {/* Google Rating */}
          <div className="flex justify-center items-center mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                  alt="Google"
                  className="w-8 h-8 mr-3"
                />
                <span className="text-2xl font-bold text-gray-900">Google Reviews</span>
              </div>
              <div className="flex items-center justify-center mb-2">
                <span className="text-4xl font-bold text-gray-900 mr-3">4.8</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600">Basado en <span className="font-semibold text-camino-green">casi 4.000 reseñas</span></p>
            </div>
          </div>
        </div>

        {/* Video placeholders section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Experiencias reales de nuestros peregrinos
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="relative">
                <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                  <div className="w-full h-full bg-gradient-to-br from-camino-blue/20 to-camino-green/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-camino-green" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <p className="text-gray-600 font-medium">Video testimonio {index}</p>
                      <p className="text-sm text-gray-500">(Enlace pendiente)</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Written testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover-lift border border-gray-100 animate-slide-in-left relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-camino-green/30" />
              </div>
              
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Testimonial text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic text-lg">
                "{testimonial.text}"
              </p>
              
              {/* Author info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500 flex items-center">
                    {testimonial.country} {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8 text-lg">
            <span className="font-semibold text-camino-green">Miles de peregrinos</span> han confiado en nosotros para vivir su Camino
          </p>
          <div className="flex justify-center items-center gap-8 text-sm text-gray-500">
            <span>🇪🇸 España</span>
            <span>🇲🇽 México</span>
            <span>🇨🇴 Colombia</span>
            <span>🇦🇷 Argentina</span>
            <span>🇨🇱 Chile</span>
            <span>🇵🇪 Perú</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
