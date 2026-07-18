"use client";

import { ArrowLeft, Layers } from "lucide-react";
import Link from "next/link";
import React from "react";

interface AuthLayoutViewProps {
  children: React.ReactNode;
}

// Animated SVG noise-like floating particles
function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Large ambient orb - top right */}
      <div
        className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(circle, #1C5C56 0%, transparent 65%)" }}
      />
      {/* Medium accent - bottom left */}
      <div
        className="absolute -bottom-24 -left-24 h-[380px] w-[380px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #D6A44C 0%, transparent 65%)" }}
      />
      {/* Small teal - mid right */}
      <div
        className="absolute top-1/3 -right-16 h-[200px] w-[200px] rounded-full opacity-[0.08]"
        style={{ background: "radial-gradient(circle, #1C5C56 0%, transparent 65%)" }}
      />
    </div>
  );
}

function GridPattern() {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      aria-hidden
      style={{
        backgroundImage: `
          linear-gradient(rgba(28,92,86,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(28,92,86,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
      }}
    />
  );
}

// Floating metric badges — pure decoration
const METRICS = [
  {
    label: "ATS Pass Rate",
    value: "88%",
    color: "border-signal-gold/20 bg-signal-gold/5 text-signal-gold",
  },
  {
    label: "Interview Rate",
    value: "2.4×",
    color: "border-deep-teal/20 bg-deep-teal/5 text-deep-teal",
  },
  { label: "Time Saved", value: "4h/app", color: "border-mist/30 bg-paper text-ink/60" },
];

export function AuthLayoutView({ children }: AuthLayoutViewProps) {
  return (
    <div className="bg-paper text-ink relative min-h-screen overflow-hidden">
      <GridPattern />
      <FloatingOrbs />

      {/* ── Top nav bar ── */}
      <nav className="border-mist/40 relative z-20 flex h-16 items-center justify-between border-b px-6 sm:px-10">
        <Link
          href="/"
          className="font-display text-ink flex items-center gap-2.5 text-lg font-bold tracking-tight transition hover:opacity-80"
        >
          <Layers className="text-signal-gold h-5 w-5" />
          ApplyCraft
        </Link>
        <Link
          href="/"
          className="font-mono-data text-ink/40 hover:text-ink/70 flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase transition"
        >
          <ArrowLeft className="h-3 w-3" />
          Back to home
        </Link>
      </nav>

      {/* ── Main layout ── */}
      <div className="relative z-10 flex min-h-[calc(100vh-4rem)]">
        {/* ── Left: Editorial hero panel (Desktop only) ── */}
        <div className="border-mist/40 hidden flex-col justify-between border-r px-12 py-14 lg:flex lg:w-[46%] xl:w-[42%] xl:px-16">
          {/* Hero copy */}
          <div className="flex max-w-[400px] flex-1 flex-col justify-center">
            {/* Eyebrow */}
            <div className="mb-8 flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="bg-signal-gold h-1.5 w-1.5 animate-pulse rounded-full" />
                <span className="font-mono-data text-ink/50 text-[10px] font-bold tracking-[0.22em] uppercase">
                  ATS Calibration Engine
                </span>
              </div>
            </div>

            {/* Huge display number */}
            <div className="relative mb-6">
              <span
                className="font-display block leading-none font-bold select-none"
                style={{
                  fontSize: "clamp(5rem, 12vw, 9rem)",
                  color: "transparent",
                  WebkitTextStroke: "1.5px rgba(28,92,86,0.15)",
                }}
              >
                88%
              </span>
              <div className="absolute bottom-3 left-1 flex flex-col gap-1">
                <h1 className="font-display text-ink text-3xl leading-tight font-bold tracking-tight xl:text-4xl">
                  Your resume,
                  <br />
                  perfectly tuned.
                </h1>
              </div>
            </div>

            <p className="font-body text-ink/55 mt-4 max-w-[320px] text-sm leading-relaxed">
              Calibrate your resume against any job description with deterministic ATS scoring. Know
              exactly what to change, why, and what it gains you.
            </p>

            {/* Floating metric pills */}
            <div className="mt-10 flex flex-wrap gap-2.5">
              {METRICS.map(({ label, value, color }) => (
                <div
                  key={label}
                  className={`font-body flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-semibold ${color}`}
                >
                  <span className="font-mono-data font-bold">{value}</span>
                  <span className="text-inherit opacity-70">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right: Auth form area ── */}
        <div className="flex flex-1 flex-col items-center justify-center px-6 py-12 sm:px-10">
          <div className="w-full max-w-[400px]">{children}</div>

          {/* Legal */}
          <p className="font-body text-ink/35 mt-8 max-w-xs text-center text-[11px] leading-relaxed">
            By continuing you agree to our{" "}
            <Link href="#" className="hover:text-ink/60 underline underline-offset-2 transition">
              Terms of Service
            </Link>
            {" & "}
            <Link href="#" className="hover:text-ink/60 underline underline-offset-2 transition">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
