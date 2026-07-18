import { create } from "zustand";

import { type OptimizationSuggestion, type OptimizationResponse } from "@/lib/schemas/jd.schema";

interface OptimizerState {
  rawJdText: string;
  score: number;
  breakdown: {
    keywordCoverage: number;
    formatting: number;
    sectionCompleteness: number;
    readability: number;
  } | null;
  suggestions: OptimizationSuggestion[];

  setJdText: (text: string) => void;
  setOptimizationResults: (results: OptimizationResponse) => void;
  applySuggestion: (id: string) => void;
  reset: () => void;
}

export const useOptimizerStore = create<OptimizerState>((set) => ({
  rawJdText: "",
  score: 0,
  breakdown: null,
  suggestions: [],

  setJdText: (rawJdText) => set({ rawJdText }),

  setOptimizationResults: (results) =>
    set({
      score: results.matchScore,
      breakdown: results.breakdown,
      suggestions: results.suggestions,
    }),

  applySuggestion: (id) =>
    set((state) => {
      const nextSuggestions = state.suggestions.map((s) =>
        s.id === id ? { ...s, applied: true } : s,
      );
      // Increment score proportionally as feedback simulation
      const nextScore = Math.min(state.score + 5, 100);

      return {
        suggestions: nextSuggestions,
        score: nextScore,
      };
    }),

  reset: () =>
    set({
      rawJdText: "",
      score: 0,
      breakdown: null,
      suggestions: [],
    }),
}));
