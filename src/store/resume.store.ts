import { create } from "zustand";

import { type Resume } from "@/lib/schemas/resume.schema";

interface ResumeState {
  resume: Resume | null;
  isDirty: boolean;
  history: Resume[];
  historyIndex: number;

  setResume: (resume: Resume) => void;
  updateResume: (updater: (prev: Resume) => Resume) => void;
  undo: () => void;
  redo: () => void;
  markSaved: () => void;
}

export const useResumeStore = create<ResumeState>((set) => ({
  resume: null,
  isDirty: false,
  history: [],
  historyIndex: -1,

  setResume: (resume) =>
    set({
      resume,
      isDirty: false,
      history: [resume],
      historyIndex: 0,
    }),

  updateResume: (updater) =>
    set((state) => {
      if (!state.resume) return state;

      const nextResume = updater(state.resume);
      const nextHistory = state.history.slice(0, state.historyIndex + 1);
      nextHistory.push(nextResume);

      return {
        resume: nextResume,
        isDirty: true,
        history: nextHistory,
        historyIndex: nextHistory.length - 1,
      };
    }),

  undo: () =>
    set((state) => {
      if (state.historyIndex <= 0) return state;
      const nextIndex = state.historyIndex - 1;
      const nextResume = state.history[nextIndex];
      if (nextResume === undefined) return state;
      return {
        resume: nextResume,
        historyIndex: nextIndex,
        isDirty: true,
      };
    }),

  redo: () =>
    set((state) => {
      if (state.historyIndex >= state.history.length - 1) return state;
      const nextIndex = state.historyIndex + 1;
      const nextResume = state.history[nextIndex];
      if (nextResume === undefined) return state;
      return {
        resume: nextResume,
        historyIndex: nextIndex,
        isDirty: true,
      };
    }),

  markSaved: () => set({ isDirty: false }),
}));
