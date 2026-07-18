import { FileText, Briefcase, ClipboardList } from "lucide-react";
import React from "react";

import { DashboardStatsData } from "../types";

interface DashboardStatsProps {
  stats: DashboardStatsData;
}

export function DashboardStats({ stats }: DashboardStatsProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {/* Resumes Stat */}
      <div className="border-mist bg-paper flex h-40 flex-col justify-between rounded-lg border p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="text-ink/85 font-body text-sm font-medium">Resumes</span>
          <FileText className="text-deep-teal h-5 w-5" />
        </div>
        <div>
          <span className="font-mono-data text-4xl font-bold">{stats.resumesCount}</span>
          <p className="text-ink/75 font-body text-xs">Default resume uploaded</p>
        </div>
      </div>

      {/* Applications Sent Stat */}
      <div className="border-mist bg-paper flex h-40 flex-col justify-between rounded-lg border p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="text-ink/85 font-body text-sm font-medium">Applications Sent</span>
          <ClipboardList className="text-deep-teal h-5 w-5" />
        </div>
        <div>
          <span className="font-mono-data text-4xl font-bold">{stats.applicationsCount}</span>
          <p className="text-ink/75 font-body text-xs">Active job applications</p>
        </div>
      </div>

      {/* Average Score Stat */}
      <div className="border-mist bg-paper flex h-40 flex-col justify-between rounded-lg border p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="text-ink/85 font-body text-sm font-medium">Job Match Success</span>
          <Briefcase className="text-deep-teal h-5 w-5" />
        </div>
        <div>
          <span className="font-mono-data text-4xl font-bold">
            {stats.averageMatchScore !== null ? `${stats.averageMatchScore}%` : "--"}
          </span>
          <p className="text-ink/75 font-body text-xs">Average ATS score</p>
        </div>
      </div>
    </div>
  );
}
