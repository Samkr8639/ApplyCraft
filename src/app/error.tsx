"use client";

import { AlertCircle } from "lucide-react";
import React, { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error details to console
    console.error(error);
  }, [error]);

  return (
    <div className="bg-paper text-ink border-mist/30 flex min-h-[60vh] flex-col items-center justify-center rounded-lg border p-6 text-center">
      <div className="max-w-md space-y-5">
        <div className="text-brick flex justify-center">
          <AlertCircle className="h-12 w-12" />
        </div>
        <h2 className="font-display text-ink text-xl font-bold">Something went wrong!</h2>
        <p className="font-body text-ink/75 text-sm leading-relaxed">
          An error occurred while loading this workspace screen. If this issue persists, please
          contact support.
        </p>
        <div className="flex justify-center gap-4 pt-2">
          <button
            onClick={() => reset()}
            className="bg-deep-teal hover:bg-deep-teal/90 rounded px-5 py-2 text-xs font-semibold text-white shadow-sm transition"
          >
            Try Again
          </button>
          <a
            href="/dashboard"
            className="border-mist text-ink/80 hover:bg-mist/10 rounded border px-5 py-2 text-xs font-semibold transition"
          >
            Go Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}
