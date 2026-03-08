import { cn } from '@/lib/utils'
import { ElementType, ReactNode } from 'react'

export interface ContainerProps {
  children: ReactNode
  className?: string
  as?: ElementType
}

export function Container({ children, className, as: Component = 'div' }: ContainerProps) {
  return (
    <Component className={cn('container mx-auto px-4 md:px-6', className)}>
      {children}
    </Component>
  )
}

export interface GridProps {
  children: React.ReactNode
  className?: string
  cols?: 1 | 2 | 3 | 4
  gap?: 'sm' | 'md' | 'lg'
}

export function Grid({ children, className, cols = 1, gap = 'md' }: GridProps) {
  const colClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }

  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
  }

  return (
    <div className={cn('grid', colClasses[cols], gapClasses[gap], className)}>
      {children}
    </div>
  )
}
