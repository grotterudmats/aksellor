import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[var(--radius)] text-sm font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "relative overflow-hidden bg-gradient-to-r from-primary to-primary/85 text-primary-foreground shadow-[var(--shadow)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-white/20 before:content-[''] after:absolute after:inset-0 after:bg-gradient-to-br after:from-white/15 after:via-transparent after:to-transparent after:opacity-0 after:content-[''] after:pointer-events-none after:transition-all after:duration-300 after:translate-y-2 hover:brightness-[0.97] hover:-translate-y-0.5 hover:shadow-[var(--shadow-2)] hover:after:opacity-100 hover:after:translate-y-0 active:translate-y-0",
        outline:
          "border border-border bg-transparent text-foreground hover:bg-muted/60",
        ghost: "text-foreground hover:bg-muted/60 border border-transparent",
        subtle: "bg-muted text-foreground hover:bg-muted/80",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-11 px-6 text-sm",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
