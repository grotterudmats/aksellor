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
          "relative overflow-hidden bg-gradient-to-r from-primary via-[hsl(var(--primary)/0.92)] to-[hsl(var(--primary)/0.78)] !text-primary-foreground hover:!text-primary-foreground shadow-[var(--shadow)] after:absolute after:inset-y-0 after:w-1/2 after:skew-x-[-20deg] after:bg-gradient-to-r after:from-transparent after:via-white/25 after:to-transparent after:content-[''] after:pointer-events-none after:translate-x-[-150%] after:transition-[transform] after:duration-[600ms] after:ease-out hover:-translate-y-0.5 hover:shadow-[var(--shadow-2)] hover:after:translate-x-[150%] active:translate-y-0",
        outline:
          "border border-transparent text-foreground [background-image:linear-gradient(hsl(var(--background)),hsl(var(--background))),linear-gradient(to_right,hsl(var(--primary)),hsl(var(--primary)/0.75))] [background-origin:padding-box,border-box] [background-clip:padding-box,border-box] hover:[background-image:linear-gradient(hsl(var(--primary)/0.05),hsl(var(--primary)/0.05)),linear-gradient(to_right,hsl(var(--primary)),hsl(var(--primary)/0.75))] hover:-translate-y-0.5",
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
