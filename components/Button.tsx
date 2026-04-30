'use client';

import { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 focus-visible:ring-primary-500',
        secondary:
          'bg-neutral-200 text-neutral-900 hover:bg-neutral-300 active:bg-neutral-400 focus-visible:ring-neutral-500 dark:bg-neutral-700 dark:text-white dark:hover:bg-neutral-600',
        ghost:
          'text-primary-600 hover:bg-primary-100 active:bg-primary-200 focus-visible:ring-primary-500 dark:text-primary-400 dark:hover:bg-primary-900',
        accent:
          'bg-accent-500 text-white hover:bg-accent-600 active:bg-accent-700 focus-visible:ring-accent-500',
        outline:
          'border-2 border-primary-500 text-primary-600 hover:bg-primary-50 active:bg-primary-100 focus-visible:ring-primary-500 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-900',
      },
      size: {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
        xl: 'px-8 py-4 text-xl',
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
