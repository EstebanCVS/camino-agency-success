
import React from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Descripción */}
          <div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Especialistas en el Camino de Santiago desde hace más de 15 años. 
              Tu experiencia perfecta nos importa.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Contacto</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+34 981 186 111</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@viajescaminodesantiago.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Santiago de Compostela, España</span>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2024 Viajes Camino de Santiago. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
