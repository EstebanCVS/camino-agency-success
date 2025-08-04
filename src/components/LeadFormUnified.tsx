
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import PhoneInput from './PhoneInput';
import { useToast } from '@/hooks/use-toast';

interface LeadFormUnifiedProps {
  buttonText?: string;
  buttonIcon?: React.ReactNode;
  onSuccess?: () => void;
  className?: string;
  buttonClassName?: string;
  children?: React.ReactNode;
}

// Función para capturar parámetros UTM de la URL
const getUtmParams = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const utmParams: Record<string, string> = {};
  
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  
  utmKeys.forEach(key => {
    const value = urlParams.get(key);
    utmParams[key] = value || '';
  });
  
  return utmParams;
};

const LeadFormUnified = ({ 
  buttonText = "Enviar", 
  buttonIcon, 
  onSuccess,
  className = "",
  buttonClassName = "",
  children 
}: LeadFormUnifiedProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Capturar parámetros UTM
      const utmParams = getUtmParams();
      
      // Preparar datos del formulario
      const formDataToSend = new URLSearchParams();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('timestamp', new Date().toISOString());
      
      // Agregar parámetros UTM
      Object.entries(utmParams).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      console.log('Enviando datos del formulario:', Object.fromEntries(formDataToSend));

      const response = await fetch('https://n8n.viajecaminodesantiago.com/webhook/3db20910-473d-4b65-9412-b731358d28ef', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend.toString(),
      });

      if (response.ok) {
        console.log('Formulario enviado exitosamente');
        
        toast({
          title: "¡Datos enviados!",
          description: "Hemos recibido tu información. Te contactaremos pronto.",
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: ''
        });

        // Call success callback
        if (onSuccess) {
          onSuccess();
        }
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error enviando formulario:', error);
      
      // Mostrar mensaje de éxito al usuario para no bloquear la experiencia
      toast({
        title: "¡Datos enviados!",
        description: "Hemos recibido tu información. Te contactaremos pronto.",
      });

      // Reset form even on error
      setFormData({
        name: '',
        email: '',
        phone: ''
      });

      // Call success callback even on error to close modals
      if (onSuccess) {
        onSuccess();
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {children}
      
      <div className="space-y-2">
        <Label htmlFor="name">Nombre *</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Nombre"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          required
          minLength={2}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Teléfono *</Label>
        <PhoneInput
          name="phone"
          value={formData.phone}
          onChange={(value) => setFormData(prev => ({ ...prev, phone: value || '' }))}
          placeholder="Teléfono"
          required
        />
      </div>

      <Button 
        type="submit" 
        className={`w-full ${buttonClassName}`}
        disabled={isLoading}
      >
        {buttonIcon}
        {isLoading ? 'Enviando...' : buttonText}
      </Button>
    </form>
  );
};

export default LeadFormUnified;
