import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Leaf, Vegan, WheatOff, Flame, Star, LucideIcon } from "lucide-react"

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        vegetarian: "bg-green-100 text-green-800 border-green-200",
        vegan: "bg-green-800 text-white border-green-900",
        "gluten-free": "bg-yellow-100 text-yellow-800 border-yellow-200",
        spicy: "bg-red-100 text-red-800 border-red-200",
        special: "bg-brand-terracotta-500/10 text-brand-terracotta-500 border-brand-terracotta-500/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: LucideIcon
}

function Badge({ className, variant, icon: Icon, children, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {Icon && <Icon className="w-3 h-3" />}
      {children}
    </div>
  )
}

export type DietaryType = 'vegetarian' | 'vegan' | 'gluten-free' | 'spicy' | 'special'

const dietaryConfig: Record<DietaryType, { icon: LucideIcon, label: string, variant: BadgeProps['variant'] }> = {
  vegetarian: { icon: Leaf, label: 'Vegetariano', variant: 'vegetarian' },
  vegan: { icon: Vegan, label: 'Vegan', variant: 'vegan' },
  'gluten-free': { icon: WheatOff, label: 'Senza Glutine', variant: 'gluten-free' },
  spicy: { icon: Flame, label: 'Piccante', variant: 'spicy' },
  special: { icon: Star, label: 'Specialità', variant: 'special' },
}

export function DietaryBadge({ type, className }: { type: DietaryType, className?: string }) {
  const config = dietaryConfig[type]
  if (!config) return null
  
  return (
    <Badge variant={config.variant} icon={config.icon} className={className}>
      {config.label}
    </Badge>
  )
}

export { Badge, badgeVariants }
