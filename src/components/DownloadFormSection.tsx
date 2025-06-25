import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Download, Shield, FileText, Zap } from 'lucide-react';
import { useWebhook } from '@/hooks/useWebhook';

const DownloadFormSection = () => {
  const { sendToWebhook, isLoading } = useWebhook();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Download form submitted:', formData);
    
    // Enviar datos al webhook con source específico
    const success = await sendToWebhook(formData, 'formulario_dosier');
    
    if (success) {
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        country: ''
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
    <section id="download-form" className="py-20 bg-gradient-to-br from-camino-green/5 to-camino-blue/5">
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

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Nombre completo *</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="mt-1"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <Label htmlFor="email">Email profesional *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="mt-1"
                  placeholder="tu@agencia.com"
                />
              </div>

              <div>
                <Label htmlFor="company">Nombre de la agencia *</Label>
                <Input
                  id="company"
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="mt-1"
                  placeholder="Nombre de tu agencia"
                />
              </div>

              <div>
                <Label htmlFor="country">País *</Label>
                <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Selecciona tu país" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 shadow-lg">
                    <SelectItem value="spain">🇪🇸 España</SelectItem>
                    <SelectItem value="mexico">🇲🇽 México</SelectItem>
                    <SelectItem value="colombia">🇨🇴 Colombia</SelectItem>
                    <SelectItem value="argentina">🇦🇷 Argentina</SelectItem>
                    <SelectItem value="chile">🇨🇱 Chile</SelectItem>
                    <SelectItem value="peru">🇵🇪 Perú</SelectItem>
                    <SelectItem value="other">🌍 Otro país</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-camino-green hover:bg-camino-green-light text-white font-semibold text-lg py-4 mt-6"
                disabled={isLoading}
              >
                <Download className="mr-3 h-6 w-6" />
                {isLoading ? 'Enviando...' : '📥 Descargar dosier ahora'}
              </Button>

              <p className="text-sm text-gray-500 text-center mt-4">
                * Campos obligatorios. No compartimos tu información con terceros.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadFormSection;
