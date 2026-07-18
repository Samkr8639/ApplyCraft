import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="bg-paper text-ink flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md space-y-6">
        <h1 className="font-mono-data text-signal-gold text-7xl font-bold">404</h1>
        <h2 className="font-display text-ink text-2xl font-bold">Page Not Found</h2>
        <p className="font-body text-ink/75 text-sm leading-relaxed">
          The page you are looking for {"doesn't"} exist or has been moved. Check the URL or return
          to the main dashboard.
        </p>
        <div className="pt-4">
          <Link
            href="/dashboard"
            className="bg-deep-teal hover:bg-deep-teal/90 inline-block rounded-md px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition"
          >
            Return to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
