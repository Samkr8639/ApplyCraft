import { z } from "zod";

export const subscriptionStatusSchema = z.enum(["ACTIVE", "PAST_DUE", "CANCELED"]);

export const planSchema = z.object({
  id: z.string(),
  key: z.enum(["FREE", "PRO", "CAREER_PLUS"]),
  name: z.string(),
  priceMonthly: z.number(), // in paise
  priceYearly: z.number().nullable(),
  limits: z.object({
    resumeBuilds: z.number().nullable(),
    jdOptimizations: z.number().nullable(),
    autoFillApplies: z.number().nullable(),
    fullAutoApplies: z.number().nullable(),
  }),
});

export const subscriptionSchema = z.object({
  id: z.string(),
  userId: z.string(),
  planId: z.string(),
  plan: planSchema,
  status: subscriptionStatusSchema,
  currentPeriodStart: z.string(),
  currentPeriodEnd: z.string(),
  cancelAtPeriodEnd: z.boolean(),
});

export const usageCounterSchema = z.object({
  id: z.string(),
  userId: z.string(),
  cycleStart: z.string(),
  cycleEnd: z.string(),
  resumeBuildsUsed: z.number(),
  jdOptimizationsUsed: z.number(),
  autoFillUsed: z.number(),
  fullAutoUsed: z.number(),
});

export type Plan = z.infer<typeof planSchema>;
export type Subscription = z.infer<typeof subscriptionSchema>;
export type UsageCounter = z.infer<typeof usageCounterSchema>;
