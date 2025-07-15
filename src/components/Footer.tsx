
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToDownloadForm = () => {
    const form = document.getElementById('dossier-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Columna izquierda: Logo + texto */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/d0c8f267-65b7-4126-b4c4-7933fb75d236.png" 
                alt="Viajes Camino de Santiago" 
                className="w-12 h-12"
              />
              <span className="text-xl font-semibold">Viajes Camino de Santiago</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Especialistas en el Camino de Santiago desde hace más de 15 años.<br />
              Tu experiencia perfecta nos importa.
            </p>
          </div>

          {/* Columna derecha: Información de contacto */}
          <div className="space-y-4">
            <div className="flex items-center text-gray-400">
              <Phone className="h-5 w-5 mr-3" />
              <span>+34 981 186 111</span>
            </div>
            <div className="flex items-center text-gray-400">
              <Mail className="h-5 w-5 mr-3" />
              <span>info@viajescaminodesantiago.com</span>
            </div>
            <div className="flex items-center text-gray-400">
              <MapPin className="h-5 w-5 mr-3" />
              <span>Santiago de Compostela, España</span>
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
