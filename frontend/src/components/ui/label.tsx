import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const labelVariants = cva('inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2', {
  variants: {
    variant: {
      default: 'bg-primary text-primary-foreground',
      destructive: 'bg-destructive text-destructive-foreground',
      outline: 'border border-input bg-background text-foreground',
      secondary: 'bg-secondary text-secondary-foreground',
      ghost: 'text-foreground',
    },
    size: {
      default: 'px-4 py-2',
      sm: 'px-3 py-1',
      lg: 'px-8 py-3',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export interface LabelProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof labelVariants> {
  asChild?: boolean;
}

const Label = React.forwardRef<HTMLSpanElement, LabelProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'span';
  return <Comp className={cn(labelVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Label.displayName = 'Label';

export { Label, labelVariants };
