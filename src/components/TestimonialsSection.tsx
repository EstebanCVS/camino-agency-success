
import React from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "María González",
      company: "Viajes Andalucía",
      location: "Sevilla, España",
      country: "🇪🇸",
      text: "En 6 meses vendimos más de 50 viajes. El producto se vende solo y el equipo nos acompaña en todo momento.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616c88d1eb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      logo: "VA"
    },
    {
      name: "Carlos Ramírez",
      company: "Turismo Azteca",
      location: "Ciudad de México, México",
      country: "🇲🇽",
      text: "Nuestros clientes quedan fascinados con la experiencia. Ya tenemos lista de espera para los próximos grupos del Camino.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      logo: "TA"
    },
    {
      name: "Ana Rodríguez",
      company: "Viajes Espirituales",
      location: "Bogotá, Colombia",
      country: "🇨🇴",
      text: "Las comisiones son excelentes y la satisfacción de nuestros clientes es del 100%. Altamente recomendado para cualquier agencia.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      logo: "VE"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-camino-blue/5 to-camino-green/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Lo que dicen nuestras{' '}
            <span className="text-camino-green">agencias colaboradoras</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Testimonios reales de agencias que ya están vendiendo 
            el Camino de Santiago con éxito.
          </p>
        </div>

        {/* Video section */}
        <div className="mb-16 text-center animate-scale-in">
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
                alt="Camino experience video"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group">
                  <svg className="w-8 h-8 text-camino-green ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
            </div>
            <p className="text-gray-600 mt-4 italic">
              "Experiencias reales de peregrinos y agencias colaboradoras"
            </p>
          </div>
        </div>

        {/* Testimonials carousel-style grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover-lift border border-gray-100 animate-slide-in-left relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Company logo/initials */}
              <div className="absolute -top-4 right-6">
                <div className="w-12 h-12 bg-camino-green rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.logo}
                </div>
              </div>
              
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
                  <div className="text-sm text-camino-green font-medium">{testimonial.company}</div>
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
            <span className="font-semibold text-camino-green">+120 agencias</span> en todo el mundo ya confían en nosotros
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
