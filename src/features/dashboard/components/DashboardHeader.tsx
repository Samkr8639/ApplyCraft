import React from "react";

interface DashboardHeaderProps {
  userName?: string;
}

export function DashboardHeader({ userName = "Job Seeker" }: DashboardHeaderProps) {
  return (
    <div className="space-y-1">
      <h1 className="font-display text-ink text-3xl font-bold tracking-tight">
        Welcome back, {userName}
      </h1>
      <p className="text-ink/75 font-body text-sm">
        Track, calibrate, and send your tailored applications from one place.
      </p>
    </div>
  );
}
