import { DashboardStatsData, DashboardResumeSummary, AccountUsageData } from "../types";

export class DashboardService {
  /**
   * Fetch overview stats for current user
   */
  static async getOverviewStats(): Promise<DashboardStatsData> {
    return {
      resumesCount: 1,
      applicationsCount: 0,
      averageMatchScore: null,
    };
  }

  /**
   * Fetch recent resumes for current user
   */
  static async getRecentResumes(): Promise<DashboardResumeSummary[]> {
    return [
      {
        id: "1",
        filename: "Primary Resume.pdf",
        updatedAt: "2 hours ago",
        score: 65,
      },
    ];
  }

  /**
   * Fetch account tier and limit usage
   */
  static async getAccountUsage(): Promise<AccountUsageData> {
    return {
      tier: "FREE",
      optimizationsUsed: 0,
      optimizationsLimit: 2,
      autoAppliesUsed: 0,
      autoAppliesLimit: 3,
    };
  }
}
