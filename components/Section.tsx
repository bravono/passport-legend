import { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'w-full py-16 md:py-24 lg:py-32 animate-fade-in',
        className
      )}
    >
      {children}
    </section>
  );
}
