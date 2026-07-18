import React from "react";

import { cn } from "@/lib/utils";

interface LoaderProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Loader({ className, size = "md" }: LoaderProps) {
  return (
    <div
      className={cn(
        "border-deep-teal animate-spin rounded-full border-t-2 border-r-transparent border-b-transparent border-l-transparent",
        size === "sm" && "h-4 w-4 border-2",
        size === "md" && "h-8 w-8 border-3",
        size === "lg" && "h-12 w-12 border-4",
        className,
      )}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
