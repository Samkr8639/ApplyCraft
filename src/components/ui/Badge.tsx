import React from "react";

import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "teal" | "gold" | "brick" | "mist";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "font-mono-data inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide uppercase",
        variant === "default" && "bg-mist/20 text-ink/80",
        variant === "teal" && "bg-deep-teal/15 text-deep-teal",
        variant === "gold" && "bg-signal-gold/15 text-signal-gold",
        variant === "brick" && "bg-brick/15 text-brick",
        variant === "mist" && "bg-mist/35 text-ink/70",
        className,
      )}
      {...props}
    />
  );
}
