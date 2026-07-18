import React from "react";

import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "destructive" | "accent";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "font-body inline-flex cursor-pointer items-center justify-center rounded font-medium transition outline-none active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
          // Variants
          variant === "primary" && "bg-deep-teal hover:bg-deep-teal/90 text-white shadow-sm",
          variant === "secondary" && "bg-mist/20 text-ink hover:bg-mist/35 border-mist/30 border",
          variant === "ghost" && "text-ink/80 hover:bg-mist/25 hover:text-ink",
          variant === "destructive" && "bg-brick hover:bg-brick/90 text-white shadow-sm",
          variant === "accent" && "bg-signal-gold hover:bg-signal-gold/90 text-white shadow-sm",
          // Sizes
          size === "sm" && "px-3 py-1.5 text-xs",
          size === "md" && "px-4 py-2 text-sm",
          size === "lg" && "px-6 py-3 text-base",
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
