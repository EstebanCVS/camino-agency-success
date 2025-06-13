
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Download, Shield, Clock, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const LeadFormSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    experience: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    toast({
      title: "¡Formulario enviado!",
      description: "Te enviaremos el dosier en las próximas horas. Revisa tu email.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      country: '',
      experience: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const benefits = [
    {
      icon: Download,
      title: "Dosier completo",
      description: "Itinerarios, precios y comisiones detalladas"
    },
    {
      icon: Shield,
      title: "Sin compromiso",
      description: "Información gratuita y sin obligaciones"
    },
    {
      icon: Clock,
      title: "Respuesta rápida",
      description: "Te contactamos en menos de 24 horas"
    },
    {
      icon: Users,
      title: "Soporte continuo",
      description: "Acompañamiento durante todo el proceso"
    }
  ];

  return (
    <section id="lead-form" className="py-20 bg-gradient-to-br from-camino-green/5 to-camino-blue/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Listo para vender el{' '}
            <span className="gradient-text">Camino</span> en tu agencia?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Te mandamos el dosier con itinerarios, comisiones y todo lo que necesitas 
            para empezar a vender el Camino de Santiago.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Benefits */}
          <div className="space-y-8 animate-slide-in-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Qué recibirás:
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
              <div className="flex items-center justify-between text-center">
                <div>
                  <div className="text-2xl font-bold text-camino-green">+120</div>
                  <div className="text-sm text-gray-600">Agencias activas</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-camino-green">15</div>
                  <div className="text-sm text-gray-600">Años experiencia</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-camino-green">95%</div>
                  <div className="text-sm text-gray-600">Satisfacción</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 animate-slide-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
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
              </div>

              <div className="grid md:grid-cols-2 gap-4">
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
                  <Label htmlFor="phone">Teléfono *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="mt-1"
                    placeholder="+34 600 000 000"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="country">País *</Label>
                  <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Selecciona tu país" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-gray-200 shadow-lg">
                      <SelectItem value="spain">España</SelectItem>
                      <SelectItem value="mexico">México</SelectItem>
                      <SelectItem value="colombia">Colombia</SelectItem>
                      <SelectItem value="argentina">Argentina</SelectItem>
                      <SelectItem value="chile">Chile</SelectItem>
                      <SelectItem value="peru">Perú</SelectItem>
                      <SelectItem value="other">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="experience">Experiencia con turismo religioso</Label>
                  <Select value={formData.experience} onValueChange={(value) => handleInputChange('experience', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Selecciona tu experiencia" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-gray-200 shadow-lg">
                      <SelectItem value="none">Sin experiencia</SelectItem>
                      <SelectItem value="some">Algo de experiencia</SelectItem>
                      <SelectItem value="experienced">Muy experimentado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="message">Cuéntanos sobre tu agencia (opcional)</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="mt-1"
                  placeholder="Tipo de clientes, servicios que ofreces, etc."
                  rows={3}
                />
              </div>

              <Button type="submit" className="w-full camino-button text-lg py-6">
                <Download className="mr-3 h-6 w-6" />
                Quiero el dosier y más información
              </Button>

              <p className="text-sm text-gray-500 text-center mt-4">
                * Campos obligatorios. Respetamos tu privacidad y no compartimos tu información.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadFormSection;
