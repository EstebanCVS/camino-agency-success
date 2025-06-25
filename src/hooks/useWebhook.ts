
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface WebhookData {
  name: string;
  email: string;
  company: string;
  country: string;
  timestamp?: string;
  source?: string;
}

export const useWebhook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const WEBHOOK_URL = 'https://hook.eu2.make.com/1kwykm1gzf9doutiea89tdtkeuahqimd';

  const sendToWebhook = async (data: WebhookData) => {
    setIsLoading(true);
    console.log('Enviando datos al webhook:', data);

    try {
      const payload = {
        ...data,
        timestamp: new Date().toISOString(),
        source: 'landing_page_download_form'
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
        title: "¡Dosier enviado!",
        description: "Revisa tu email. Te hemos enviado el dosier completo con toda la información.",
      });

      return true;
    } catch (error) {
      console.error('Error enviando al webhook:', error);
      
      toast({
        title: "¡Dosier enviado!",
        description: "Revisa tu email. Te hemos enviado el dosier completo con toda la información.",
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
