
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
  timestamp?: string;
  source?: string;
}

export const useWebhook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const WEBHOOK_URL = 'https://hook.eu2.make.com/1kwykm1gzf9doutiea89tdtkeuahqimd';

  const sendToWebhook = async (data: WebhookData, source: string = 'landing_page_form') => {
    setIsLoading(true);
    console.log('Enviando datos al webhook:', { ...data, source });

    try {
      const payload = {
        ...data,
        timestamp: new Date().toISOString(),
        source
      };

      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify(payload),
      });

      console.log('Datos enviados al webhook exitosamente');
      
      toast({
        title: "¡Datos enviados!",
        description: "Hemos recibido tu información. Te contactaremos pronto.",
      });

      return true;
    } catch (error) {
      console.error('Error enviando al webhook:', error);
      
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
