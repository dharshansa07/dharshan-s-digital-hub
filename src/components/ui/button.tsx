import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-[0_10px_35px_var(--glow-primary)] hover:-translate-y-0.5 hover:bg-primary/90",
        secondary:
          "border border-border bg-card/70 text-foreground backdrop-blur-md hover:-translate-y-0.5 hover:border-primary/60 hover:bg-accent",
        outline:
          "border border-border bg-background/70 text-foreground hover:border-primary/60 hover:bg-accent",
        ghost: "text-muted-foreground hover:bg-accent hover:text-foreground",
      },
      size: {
        default: "h-11 px-5",
        icon: "size-10 p-0",
        sm: "h-9 px-4 text-xs",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, ...props }, ref) => {
    const Component = asChild ? Slot : "button";
    return <Component ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };