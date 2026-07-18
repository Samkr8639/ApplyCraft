import { z } from "zod";

export const userSchema = z.object({
  id: z.string(),
  clerkId: z.string(),
  email: z.string().email(),
  name: z.string().nullable(),
  phone: z.string().nullable(),
  location: z.string().nullable(),
  defaultResumeId: z.string().nullable(),
  tourCompletedAt: z.string().nullable(),
  tourSkippedAtStep: z.number().nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type User = z.infer<typeof userSchema>;
export type UserTourUpdate = {
  tourCompletedAt?: string | null;
  tourSkippedAtStep?: number | null;
};
