
import React from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div>
            <img
              src="/lovable-uploads/333ee870-ba17-430c-a2a0-23f73a548de0.png"
              alt="Viajes Camino de Santiago"
              className="h-8 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Especialistas en el Camino de Santiago desde hace más de 15 años. 
              Tu experiencia perfecta nos importa.
            </p>
          </div>

          {/* Condiciones */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Condiciones</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Condiciones generales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de cookies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Términos de uso</a></li>
            </ul>
          </div>

          {/* Agencias */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Agencias</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Programa de agencias</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Material de ventas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Comisiones</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Soporte técnico</a></li>
            </ul>
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

            {/* Redes sociales */}
            <div className="mt-6">
              <h4 className="font-medium mb-3">Síguenos</h4>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
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
