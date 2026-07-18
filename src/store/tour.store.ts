import { create } from "zustand";

interface TourState {
  currentStep: number;
  isActive: boolean;
  isCompleted: boolean;
  skippedAtStep: number | null;

  startTour: () => void;
  nextStep: () => void;
  prevStep: () => void;
  skipTour: (step: number) => void;
  completeTour: () => void;
}

export const useTourStore = create<TourState>((set) => ({
  currentStep: 1,
  isActive: false,
  isCompleted: false,
  skippedAtStep: null,

  startTour: () =>
    set({
      currentStep: 1,
      isActive: true,
      isCompleted: false,
      skippedAtStep: null,
    }),

  nextStep: () =>
    set((state) => ({
      currentStep: Math.min(state.currentStep + 1, 5),
    })),

  prevStep: () =>
    set((state) => ({
      currentStep: Math.max(state.currentStep - 1, 1),
    })),

  skipTour: (step) =>
    set({
      isActive: false,
      isCompleted: false,
      skippedAtStep: step,
    }),

  completeTour: () =>
    set({
      isActive: false,
      isCompleted: true,
      skippedAtStep: null,
    }),
}));
