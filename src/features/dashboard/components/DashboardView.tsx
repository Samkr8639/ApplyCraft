"use client";

import React, { useEffect, useState } from "react";

import { DashboardAccountSummary } from "./DashboardAccountSummary";
import { DashboardHeader } from "./DashboardHeader";
import { DashboardResumeList } from "./DashboardResumeList";
import { DashboardStats } from "./DashboardStats";
import { DashboardService } from "../services/dashboard.service";
import { DashboardStatsData, DashboardResumeSummary, AccountUsageData } from "../types";

export function DashboardView() {
  const [stats, setStats] = useState<DashboardStatsData | null>(null);
  const [resumes, setResumes] = useState<DashboardResumeSummary[]>([]);
  const [usage, setUsage] = useState<AccountUsageData | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadDashboardData() {
      const [statsData, resumesData, usageData] = await Promise.all([
        DashboardService.getOverviewStats(),
        DashboardService.getRecentResumes(),
        DashboardService.getAccountUsage(),
      ]);

      if (isMounted) {
        setStats(statsData);
        setResumes(resumesData);
        setUsage(usageData);
      }
    }

    loadDashboardData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="max-w-6xl space-y-8">
      <DashboardHeader userName="Job Seeker" />
      {stats && <DashboardStats stats={stats} />}

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <DashboardResumeList resumes={resumes} />
        </div>
        <div>{usage && <DashboardAccountSummary usage={usage} />}</div>
      </div>
    </div>
  );
}
