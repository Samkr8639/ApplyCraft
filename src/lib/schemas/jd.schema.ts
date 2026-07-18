import { z } from "zod";

export const jdOptimizationRequestSchema = z.object({
  rawText: z.string().min(20, "Job description must be at least 20 characters long"),
  sourceUrl: z.string().url().optional().or(z.literal("")),
});

export const suggestionTypeSchema = z.enum(["ADD", "REPHRASE", "REORDER", "FIX_FORMATTING"]);

export const optimizationSuggestionSchema = z.object({
  id: z.string(),
  type: suggestionTypeSchema,
  label: z.string(),
  text: z.string(),
  originalText: z.string().optional(),
  proposedText: z.string().optional(),
  fieldName: z.string().optional(), // points to where the change goes (e.g. "skills", "experience.0.description.1")
  requiresConfirmation: z.boolean().default(false),
  applied: z.boolean().default(false),
});

export const optimizationResponseSchema = z.object({
  matchScore: z.number().min(0).max(100),
  breakdown: z.object({
    keywordCoverage: z.number().min(0).max(100),
    formatting: z.number().min(0).max(100),
    sectionCompleteness: z.number().min(0).max(100),
    readability: z.number().min(0).max(100),
  }),
  suggestions: z.array(optimizationSuggestionSchema),
});

export type JDOptimizationRequest = z.infer<typeof jdOptimizationRequestSchema>;
export type OptimizationSuggestion = z.infer<typeof optimizationSuggestionSchema>;
export type OptimizationResponse = z.infer<typeof optimizationResponseSchema>;
