'use client';

import { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 shadow-sm hover:shadow-lg',
  {
    variants: {
      variant: {
        primary:
          'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 shadow-primary-500/20 focus-visible:ring-primary-500',
        secondary:
          'bg-neutral-100 text-neutral-900 hover:bg-neutral-200 active:bg-neutral-300 focus-visible:ring-neutral-500 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700',
        ghost:
          'text-primary-600 hover:bg-primary-50 active:bg-primary-100 focus-visible:ring-primary-500 dark:text-primary-400 dark:hover:bg-primary-900/30',
        accent:
          'bg-gradient-to-r from-accent-500 to-accent-600 text-white hover:from-accent-600 hover:to-accent-700 shadow-accent-500/20 focus-visible:ring-accent-500',
        outline:
          'border-2 border-primary-500/30 text-primary-600 hover:border-primary-500 hover:bg-primary-50 active:bg-primary-100 focus-visible:ring-primary-500 dark:border-primary-400/30 dark:text-primary-400 dark:hover:border-primary-400 dark:hover:bg-primary-900/30',
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-2.5 text-base',
        lg: 'px-8 py-3.5 text-lg',
        xl: 'px-10 py-4 text-xl',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children: ReactNode;
  className?: string;
  asChild?: boolean;
  [key: string]: any;
}

export function Button({
  variant,
  size,
  fullWidth,
  className,
  children,
  asChild = false,
  ...props
}: ButtonProps) {
  const classNames = cn(buttonVariants({ variant, size, fullWidth }), className);

  if (asChild) {
    // When asChild is true, render children directly (for Link usage)
    return <span className={classNames} {...props}>{children}</span>;
  }

  return (
    <button
      className={classNames}
      {...props}
    >
      {children}
    </button>
  );
}
