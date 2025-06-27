
import React from 'react';
import PhoneInputComponent from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { cn } from '@/lib/utils';

interface PhoneInputProps {
  value: string;
  onChange: (value: string | undefined) => void;
  className?: string;
  placeholder?: string;
  name?: string;
  required?: boolean;
}

const PhoneInput = ({ value, onChange, className, placeholder = "Teléfono", name, required }: PhoneInputProps) => {
  return (
    <PhoneInputComponent
      value={value}
      onChange={onChange}
      defaultCountry="ES"
      placeholder={placeholder}
      name={name}
      required={required}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
    />
  );
};

export default PhoneInput;
