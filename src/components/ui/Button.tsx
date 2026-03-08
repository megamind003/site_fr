import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary:
          'bg-brand-terracotta text-white hover:bg-brand-terracotta-600 focus:ring-brand-terracotta shadow-lg shadow-brand-terracotta/25 hover:shadow-xl hover:shadow-brand-terracotta/30',
        secondary:
          'bg-brand-ocean text-white hover:bg-brand-ocean-700 focus:ring-brand-ocean shadow-lg shadow-brand-ocean/25 hover:shadow-xl hover:shadow-brand-ocean/30',
        outline:
          'border-2 border-brand-terracotta text-brand-terracotta hover:bg-brand-terracotta hover:text-white focus:ring-brand-terracotta',
        ghost: 'text-brand-terracotta hover:bg-brand-terracotta/10 focus:ring-brand-terracotta',
        link: 'text-brand-terracotta underline-offset-4 hover:underline focus:ring-brand-terracotta',
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
