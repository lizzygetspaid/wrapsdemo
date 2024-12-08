import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'relative inline-flex items-center justify-center px-8 py-3 rounded-md font-semibold overflow-hidden transition-all duration-300 transform hover:scale-105 active:scale-95',
        variant === 'primary' && 'bg-gold-500 text-black hover:bg-gold-600',
        variant === 'secondary' && 'bg-zinc-800 text-white hover:bg-zinc-700',
        'before:absolute before:inset-0 before:bg-white/20 before:translate-x-[-150%] hover:before:translate-x-[150%] before:transition-transform before:duration-500 before:skew-x-[45deg]',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}