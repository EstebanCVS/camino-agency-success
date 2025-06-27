
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Mail } from 'lucide-react';
import LeadFormUnified from './LeadFormUnified';

interface ContactDialogProps {
  children: React.ReactNode;
  title: string;
  description: string;
  source?: string;
}

const ContactDialog = ({ children, title, description }: ContactDialogProps) => {
  const [open, setOpen] = useState(false);

  const handleSuccess = () => {
    setOpen(false);
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
        <LeadFormUnified
          buttonText="Enviar"
          buttonIcon={<Mail className="mr-2 h-4 w-4" />}
          buttonClassName="bg-camino-green hover:bg-camino-green-light text-white"
          onSuccess={handleSuccess}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
