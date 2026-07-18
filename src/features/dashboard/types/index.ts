export interface DashboardStatsData {
  resumesCount: number;
  applicationsCount: number;
  averageMatchScore: number | null;
}

export interface DashboardResumeSummary {
  id: string;
  filename: string;
  updatedAt: string;
  score: number;
}

export interface AccountUsageData {
  tier: "FREE" | "PRO" | "CAREER";
  optimizationsUsed: number;
  optimizationsLimit: number;
  autoAppliesUsed: number;
  autoAppliesLimit: number;
}
