"use client";

import { ArrowLeft, Sparkles, Check } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function ResumeOptimizerPage({ params }: { params: { id: string } }) {
  const [score, setScore] = useState(65);
  const [suggestions, setSuggestions] = useState([
    {
      id: 1,
      type: "Add",
      label: "Keyword Coverage",
      color: "border-l-4 border-l-signal-gold bg-signal-gold/5",
      badgeClass: "bg-signal-gold/15 text-signal-gold",
      text: "Add 'REST APIs' — appears 3 times in the job description, 0 times in your resume",
      applied: false,
    },
    {
      id: 2,
      type: "Rephrase",
      label: "Impact Phrasing",
      color: "border-l-4 border-l-deep-teal bg-deep-teal/5",
      badgeClass: "bg-deep-teal/15 text-deep-teal",
      text: "Rephrase 'Responsible for UI design' to include metric: e.g. 'Improved conversion rate by 15% via dynamic UI enhancements'",
      applied: false,
    },
    {
      id: 3,
      type: "Fix formatting",
      label: "Formatting Compliance",
      color: "border-l-4 border-l-brick bg-brick/5",
      badgeClass: "bg-brick/15 text-brick",
      text: "Remove nested columns in Work Experience section (increases parser compatibility)",
      applied: false,
    },
  ]);

  const handleApply = (id: number, _type: string) => {
    setSuggestions((prev) => prev.map((s) => (s.id === id ? { ...s, applied: true } : s)));
    // Mimic score calculation live
    setScore((prev) => Math.min(prev + 10, 95));
  };

  return (
    <div className="mx-auto flex h-full max-w-7xl flex-col space-y-6">
      {/* Top action header */}
      <div className="border-mist flex items-center justify-between border-b pb-4">
        <div className="flex items-center space-x-3">
          <Link
            href={`/resume/${params.id}`}
            className="text-ink/80 hover:text-deep-teal transition"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="font-display text-ink text-2xl font-bold">Calibrate & Optimize</h1>
            <p className="text-ink/75 font-body text-sm">Targeting: Senior React Developer Role</p>
          </div>
        </div>
        <button className="bg-deep-teal hover:bg-deep-teal/90 flex items-center rounded-md px-5 py-2 text-sm font-medium text-white shadow-sm transition">
          <Sparkles className="mr-2 h-4 w-4" />
          Tailor Resume Variant
        </button>
      </div>

      {/* Split instrument-panel layout */}
      <div className="grid flex-1 grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left Side: Score Display / Dial Panel */}
        <div className="border-mist bg-paper sticky top-20 h-fit space-y-6 rounded-lg border p-6 shadow-sm lg:col-span-1">
          <div className="flex flex-col items-center">
            <h3 className="font-display text-ink mb-4 text-center text-lg font-bold">
              ATS Match Dial
            </h3>

            {/* Sweep gauge dial UI component */}
            <div className="relative flex h-48 w-48 items-center justify-center">
              <svg className="absolute h-full w-full -rotate-90 transform" viewBox="0 0 100 100">
                {/* Background track */}
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="var(--color-mist)"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray="264"
                  strokeDashoffset="66" // displays 3/4 circle dial
                  className="opacity-20"
                />
                {/* Filled gauge progress */}
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="var(--color-signal-gold)"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray="264"
                  strokeDashoffset={264 - (264 * 0.75 * score) / 100}
                  className="transition-all duration-700 ease-in-out"
                />
              </svg>
              {/* Dial text */}
              <div className="z-10 text-center">
                <span className="font-mono-data text-signal-gold text-5xl font-bold">{score}</span>
                <p className="text-ink/80 font-body mt-1 text-xs">Calibrated Match</p>
              </div>
            </div>

            <div className="mt-4">
              <span className="bg-signal-gold/15 text-signal-gold font-mono-data inline-block rounded-full px-3 py-1 text-xs font-bold tracking-wider uppercase">
                {score >= 85 ? "ATS Compliant" : "Needs Tuning"}
              </span>
            </div>
          </div>

          {/* Breakdown parameters */}
          <div className="border-mist/50 font-body space-y-3 border-t pt-4 text-sm">
            <h4 className="font-display text-ink mb-2 text-sm font-bold">
              Category Score Breakdown
            </h4>
            <div className="flex justify-between">
              <span>Keyword Fit:</span>
              <span className="font-mono-data text-ink font-bold">
                {score > 70 ? "90%" : "60%"}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Formatting Compliance:</span>
              <span className="font-mono-data text-ink font-bold">
                {score > 80 ? "100%" : "80%"}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Readability Level:</span>
              <span className="font-mono-data text-ink font-bold">Excellent</span>
            </div>
          </div>
        </div>

        {/* Right Side: Suggestions list panel */}
        <div className="space-y-4 overflow-y-auto lg:col-span-2">
          <h3 className="font-display text-ink text-xl font-bold">Action Suggestions</h3>

          <div className="font-body space-y-4">
            {suggestions.map((item) => (
              <div
                key={item.id}
                className={`border-mist flex flex-col items-start justify-between gap-4 rounded-lg border p-5 shadow-sm transition md:flex-row md:items-center ${item.color}`}
              >
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span
                      className={`font-mono-data rounded-full px-2.5 py-0.5 text-xs font-bold uppercase ${item.badgeClass}`}
                    >
                      {item.type}
                    </span>
                    <span className="text-ink/70 text-xs font-semibold tracking-wide uppercase">
                      {item.label}
                    </span>
                  </div>
                  <p className="text-ink font-body text-sm leading-relaxed font-medium">
                    {item.text}
                  </p>
                </div>

                <div className="w-full shrink-0 md:w-auto">
                  {item.applied ? (
                    <div className="text-deep-teal flex items-center py-2 text-sm font-semibold">
                      <Check className="mr-2 h-4 w-4" />
                      Applied
                    </div>
                  ) : (
                    <button
                      onClick={() => handleApply(item.id, item.type)}
                      className="bg-ink hover:bg-ink/90 w-full rounded px-4 py-2 text-xs font-semibold text-white transition md:w-auto"
                    >
                      Apply Action
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
