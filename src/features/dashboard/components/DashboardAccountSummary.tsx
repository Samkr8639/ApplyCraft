import React from "react";

import { AccountUsageData } from "../types";

interface DashboardAccountSummaryProps {
  usage: AccountUsageData;
}

export function DashboardAccountSummary({ usage }: DashboardAccountSummaryProps) {
  return (
    <div className="border-mist bg-paper space-y-4 rounded-lg border p-6 shadow-sm">
      <h3 className="font-display text-ink text-lg font-bold">My Account Tier</h3>
      <div>
        <span className="bg-deep-teal/10 text-deep-teal font-mono-data rounded-full px-2.5 py-0.5 text-xs font-bold">
          {usage.tier} MEMBER
        </span>
      </div>
      <div className="font-body space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Optimizations:</span>
          <span className="font-mono-data font-bold">
            {usage.optimizationsUsed} / {usage.optimizationsLimit} used
          </span>
        </div>
        <div className="flex justify-between">
          <span>Auto-Applies:</span>
          <span className="font-mono-data font-bold">
            {usage.autoAppliesUsed} / {usage.autoAppliesLimit} used
          </span>
        </div>
      </div>
      <button className="bg-deep-teal font-mono-data hover:bg-deep-teal/90 w-full cursor-pointer rounded-md py-2.5 text-center text-sm font-bold tracking-wider text-white uppercase shadow-sm transition">
        Upgrade to Pro
      </button>
    </div>
  );
}
