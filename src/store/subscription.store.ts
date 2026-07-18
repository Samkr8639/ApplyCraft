import { create } from "zustand";

import { type Subscription, type UsageCounter } from "@/lib/schemas/subscription.schema";

interface SubscriptionState {
  subscription: Subscription | null;
  usageCounter: UsageCounter | null;

  setSubscription: (sub: Subscription | null) => void;
  setUsage: (usage: UsageCounter | null) => void;
  hasReachedLimit: (
    limitKey: "resumeBuilds" | "jdOptimizations" | "autoFillApplies" | "fullAutoApplies",
  ) => boolean;
}

export const useSubscriptionStore = create<SubscriptionState>((set, get) => ({
  subscription: null,
  usageCounter: null,

  setSubscription: (subscription) => set({ subscription }),
  setUsage: (usageCounter) => set({ usageCounter }),

  hasReachedLimit: (limitKey) => {
    const { subscription, usageCounter } = get();
    if (!subscription || !usageCounter) return false; // Default allows actions until load finishes

    const planLimits = subscription.plan.limits;
    const limit = planLimits[limitKey];

    if (limit === null) return false; // Null denotes unlimited

    // Map keys to usage counter properties
    const counterMap = {
      resumeBuilds: usageCounter.resumeBuildsUsed,
      jdOptimizations: usageCounter.jdOptimizationsUsed,
      autoFillApplies: usageCounter.autoFillUsed,
      fullAutoApplies: usageCounter.fullAutoUsed,
    };

    return counterMap[limitKey] >= limit;
  },
}));
