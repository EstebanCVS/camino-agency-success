
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail } from 'lucide-react';
import { useWebhook } from '@/hooks/useWebhook';

interface ContactDialogProps {
  children: React.ReactNode;
  title: string;
  description: string;
  source?: string;
}

const ContactDialog = ({ children, title, description, source = 'contact_dialog' }: ContactDialogProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [open, setOpen] = useState(false);
  const { sendToWebhook, isLoading } = useWebhook();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact dialog form submitted:', { name, email, source });
    
    const success = await sendToWebhook({ name, email }, source);
    
    if (success) {
      setName('');
      setEmail('');
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre de pila</Label>
            <Input
              id="name"
              type="text"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-camino-green hover:bg-camino-green-light text-white"
            disabled={isLoading}
          >
            <Mail className="mr-2 h-4 w-4" />
            {isLoading ? 'Enviando...' : 'Enviar'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
