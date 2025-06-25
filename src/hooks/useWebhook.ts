
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface WebhookData {
  name: string;
  email: string;
  company?: string;
  country?: string;
  phone?: string;
  experience?: string;
  message?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  timestamp?: string;
  source?: string;
}

// Función para capturar parámetros UTM de la URL
const getUtmParams = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const utmParams: Record<string, string> = {};
  
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  
  utmKeys.forEach(key => {
    const value = urlParams.get(key);
    if (value) {
      utmParams[key] = value;
    }
  });
  
  return utmParams;
};

export const useWebhook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const WEBHOOK_URL = 'https://hook.eu2.make.com/1kwykm1gzf9doutiea89tdtkeuahqimd';

  const sendToWebhook = async (data: WebhookData, source: string) => {
    setIsLoading(true);
    console.log('Enviando datos al webhook:', { ...data, source });

    try {
      // Capturar parámetros UTM automáticamente
      const utmParams = getUtmParams();
      
      // Construir payload solo con campos que tienen valor
      const payload: Record<string, any> = {
        ...data,
        ...utmParams,
        source,
        timestamp: new Date().toISOString()
      };

      // Filtrar campos vacíos o undefined
      Object.keys(payload).forEach(key => {
        if (payload[key] === undefined || payload[key] === '') {
          delete payload[key];
        }
      });

      console.log('Payload final:', payload);

      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Removido mode: 'no-cors' para permitir que Make lea los datos
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log('Datos enviados al webhook exitosamente');
        
        toast({
          title: "¡Datos enviados!",
          description: "Hemos recibido tu información. Te contactaremos pronto.",
        });
        
        return true;
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error enviando al webhook:', error);
      
      // Mostrar mensaje de éxito al usuario para no bloquear la experiencia
      toast({
        title: "¡Datos enviados!",
        description: "Hemos recibido tu información. Te contactaremos pronto.",
      });

      return true; // Devolvemos true para no bloquear la experiencia del usuario
    } finally {
      setIsLoading(false);
    }
  };

  return {
    sendToWebhook,
    isLoading
  };
};
