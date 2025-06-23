
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      icon: "💰",
      question: "¿Qué comisión recibo por cada cliente?",
      answer: "Las comisiones van del 15% al 20% dependiendo del volumen de ventas. Además, ofrecemos bonos adicionales por objetivos mensuales y trimestrales. No hay mínimos de venta obligatorios."
    },
    {
      icon: "🎓",
      question: "¿Necesito experiencia previa vendiendo turismo religioso?",
      answer: "No es necesario. Te proporcionamos formación completa sobre el Camino de Santiago, técnicas de venta específicas y material educativo. Nuestro equipo te acompaña durante todo el proceso."
    },
    {
      icon: "🌍",
      question: "¿En qué idiomas está disponible el material de venta?",
      answer: "Tenemos material en español, inglés, francés, alemán, italiano y portugués. También podemos personalizar contenido en otros idiomas según las necesidades de tu mercado."
    },
    {
      icon: "👥",
      question: "¿Qué tipo de clientes buscan el Camino?",
      answer: "Personas de 25-65 años, grupos de amigos, parejas, profesionales buscando desconexión, grupos religiosos y personas en momentos de cambio personal. El perfil es muy variado."
    },
    {
      icon: "🛠️",
      question: "¿Qué soporte recibo después de empezar a vender?",
      answer: "Soporte continuo vía WhatsApp, email y llamadas. Tenemos un gestor dedicado para resolver dudas, ayudar con reservas complejas y optimizar tus ventas."
    },
    {
      icon: "📍",
      question: "¿Hay exclusividad territorial?",
      answer: "Trabajamos con múltiples agencias por ciudad/región, pero limitamos el número para asegurar que cada agencia tenga suficiente mercado. Consultamos caso por caso."
    },
    {
      icon: "⏱️",
      question: "¿Cuánto tiempo toma cerrar una venta típica?",
      answer: "El ciclo de venta promedio es de 2-4 semanas desde el primer contacto. Los clientes suelen consultar, comparar opciones y luego decidir. Proporcionamos seguimiento estructurado."
    },
    {
      icon: "🆘",
      question: "¿Qué pasa si un cliente tiene problemas durante el Camino?",
      answer: "Tenemos asistencia 24/7 durante todo el Camino. Nosotros nos encargamos de resolver cualquier incidencia y mantenemos informada a la agencia. El cliente siempre está cubierto."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Preguntas{' '}
            <span className="text-camino-green">frecuentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resolvemos las dudas más comunes de las agencias que 
            están considerando vender el Camino de Santiago.
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-scale-in">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gray-50 rounded-xl px-6 border border-gray-200 hover:shadow-md transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-semibold text-gray-900">
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">{faq.icon}</span>
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional support section */}
        <div className="mt-16 text-center bg-gradient-to-r from-camino-green/10 to-camino-blue/10 rounded-2xl p-8 animate-fade-in">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Tienes más preguntas?
          </h3>
          <p className="text-gray-600 mb-6">
            Nuestro equipo está disponible para resolver cualquier duda específica sobre tu situación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white border-2 border-camino-green text-camino-green hover:bg-camino-green hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
              📞 Llamar ahora
            </button>
            <button className="bg-camino-green hover:bg-camino-green-light text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
              💬 Chat por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
