import { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-800 md:p-8',
        hover && 'transition-all duration-300 hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-700',
        className
      )}
    >
      {children}
    </div>
  );
}
