import React from "react";

import { cn } from "@/lib/utils";

export type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "border-mist bg-paper hover:border-deep-teal rounded-lg border p-6 shadow-sm transition duration-200",
        className,
      )}
      {...props}
    />
  );
}
