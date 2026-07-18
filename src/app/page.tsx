"use client";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Sparkles,
  Check,
  ArrowRight,
  RefreshCw,
  Layers,
  ShieldCheck,
  Terminal,
  FileCode,
  AlertTriangle,
  CheckCircle2,
  Zap,
  Lock,
  FileText,
} from "lucide-react";
import Link from "next/link";
import React, { useRef, useState } from "react";

import { MatchDial } from "@/components/common/MatchDial";
import { gsap, useGSAP } from "@/lib/animation/gsap";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MarketingLandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  // ──────────────────────────────────────────────────────────────────────────
  // 1. HERO WORKBENCH STATE
  // ──────────────────────────────────────────────────────────────────────────
  const [heroScore, setHeroScore] = useState(60);
  const [appliedSteps, setAppliedSteps] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
  });

  const heroSuggestions = [
    {
      id: 1,
      type: "Add",
      label: "Keyword Fit",
      scoreChange: 15,
      badgeClass: "bg-signal-gold/15 text-signal-gold border border-signal-gold/25",
      desc: "Add 'REST APIs' — missing keyword found 3x in target description.",
      original: "• Maintained backend web services.",
      modified: "• Maintained backend web services, building high-throughput REST APIs.",
      diff: "building high-throughput REST APIs",
    },
    {
      id: 2,
      type: "Rephrase",
      label: "Impact Phrasing",
      scoreChange: 12,
      badgeClass: "bg-deep-teal/15 text-deep-teal border border-deep-teal/25",
      desc: "Quantify impact. Rephrase layout responsibilities with active metrics.",
      original: "• Responsible for UI design and client layouts.",
      modified: "• Orchestrated front-end UI design, boosting conversion rates by 15%.",
      diff: "boosting conversion rates by 15%",
    },
    {
      id: 3,
      type: "Fix formatting",
      label: "ATS Parseability",
      scoreChange: 10,
      badgeClass: "bg-brick/15 text-brick border border-brick/25",
      desc: "Replace nested layout tables. Parsers get stuck on side-by-side cells.",
      original: "[Layout: Table columns for Work History details]",
      modified: "[Layout: Linear single-column flow for perfect ATS parsing]",
      diff: "Linear single-column flow for perfect ATS parsing",
    },
  ];

  const handleApplyStep = (id: number, scoreChange: number) => {
    if (appliedSteps[id]) return;
    setAppliedSteps((prev) => ({ ...prev, [id]: true }));
    setHeroScore((prev) => Math.min(prev + scoreChange, 97));

    gsap.fromTo(
      `#step-card-${id}`,
      { scale: 1 },
      { scale: 0.97, duration: 0.1, yoyo: true, repeat: 1, ease: "power1.inOut" },
    );
  };

  const handleResetHero = () => {
    setAppliedSteps({ 1: false, 2: false, 3: false });
    setHeroScore(60);
  };

  // ──────────────────────────────────────────────────────────────────────────
  // 2. PARSER SIMULATOR STATE
  // ──────────────────────────────────────────────────────────────────────────
  const [parserMode, setParserMode] = useState<"raw" | "calibrated">("raw");

  // ──────────────────────────────────────────────────────────────────────────
  // 3. ATS RISK DIAGNOSTIC STATE
  // ──────────────────────────────────────────────────────────────────────────
  const [diagnosticChecks, setDiagnosticChecks] = useState<Record<string, boolean>>({
    tables: true,
    keywords: true,
    passive: true,
    workday: true,
  });

  const toggleDiagnostic = (key: string) => {
    setDiagnosticChecks((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const calculateRiskScore = () => {
    let riskCount = 0;
    if (diagnosticChecks.tables) riskCount += 30;
    if (diagnosticChecks.keywords) riskCount += 30;
    if (diagnosticChecks.passive) riskCount += 20;
    if (diagnosticChecks.workday) riskCount += 20;
    return riskCount;
  };

  // ──────────────────────────────────────────────────────────────────────────
  // 5. GSAP SCROLL TRIGGER ANIMATIONS
  // ──────────────────────────────────────────────────────────────────────────
  const pipelineRef = useRef<HTMLDivElement>(null);
  const pipelineLineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!pipelineRef.current || !pipelineLineRef.current) return;

      gsap.fromTo(
        pipelineLineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: pipelineRef.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: true,
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="bg-paper text-ink font-body selection:bg-deep-teal/20 min-h-screen"
    >
      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* HEADER */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      <header className="border-mist bg-paper/85 sticky top-0 z-50 border-b backdrop-blur-md transition-all duration-300">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="font-display text-deep-teal flex items-center gap-2 text-xl font-bold tracking-tight">
            <Layers className="h-5 w-5" />
            <span>ApplyCraft</span>
          </div>
          <nav className="font-mono-data hidden space-x-8 text-xs font-bold tracking-wider uppercase md:flex">
            <a href="#workbench" className="hover:text-deep-teal transition">
              Workbench
            </a>
            <a href="#simulator" className="hover:text-deep-teal transition">
              Parser Simulator
            </a>
            <a href="#pipeline" className="hover:text-deep-teal transition">
              Pipeline
            </a>
            <a href="#audit" className="hover:text-deep-teal transition">
              Self Audit
            </a>
          </nav>
          <div>
            <Link
              href="/dashboard"
              className="bg-deep-teal font-mono-data hover:bg-deep-teal/95 rounded px-5 py-2 text-xs font-semibold tracking-wider text-white uppercase shadow-sm transition"
            >
              Open Dashboard
            </Link>
          </div>
        </div>
      </header>

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* HERO SECTION: VALUE PROPOSITION + WORKBENCH */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      <section
        id="workbench"
        className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-12 lg:grid-cols-12 lg:py-20"
      >
        {/* Copy */}
        <div className="space-y-6 lg:col-span-5">
          <div className="bg-deep-teal/10 text-deep-teal font-mono-data inline-flex items-center space-x-2 rounded-full px-3 py-1 text-xs font-bold">
            <Sparkles className="text-signal-gold fill-signal-gold h-3.5 w-3.5" />
            <span>INDIA-FIRST ATS CALIBRATION</span>
          </div>
          <h1 className="font-display text-ink text-4xl leading-[1.08] font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Build it. <br />
            Tune it. <br />
            <span className="text-deep-teal">Apply.</span>
          </h1>
          <p className="text-ink/80 max-w-lg text-base leading-relaxed sm:text-lg">
            Stop sending un-calibrated resumes to recruiters. ApplyCraft tests your content against
            target job descriptions in real-time, surfacing missing keywords and score breakdowns
            before you submit.
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Link
              href="/dashboard"
              className="bg-deep-teal font-mono-data hover:bg-deep-teal/95 flex items-center justify-center gap-2 rounded px-8 py-3.5 text-center text-sm font-semibold tracking-wider text-white uppercase shadow-md transition"
            >
              Calibrate Resume Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Interactive Calibration Panel */}
        <div className="lg:col-span-7">
          <div className="border-mist bg-paper flex h-[520px] flex-col overflow-hidden rounded-lg border shadow-lg">
            {/* Top Bar */}
            <div className="bg-ink text-paper border-mist flex items-center justify-between border-b px-4 py-3">
              <div className="flex items-center space-x-2">
                <div className="bg-brick h-3 w-3 rounded-full"></div>
                <div className="bg-signal-gold h-3 w-3 rounded-full"></div>
                <div className="bg-deep-teal h-3 w-3 rounded-full"></div>
                <span className="font-display ml-2 text-xs font-semibold tracking-wider opacity-85">
                  WORKBENCH_INTERACTIVE_DEMO
                </span>
              </div>
              <button
                onClick={handleResetHero}
                className="font-mono-data bg-paper/10 text-paper/80 hover:bg-paper/20 flex cursor-pointer items-center gap-1 rounded px-2 py-1 text-[10px] font-semibold uppercase transition"
              >
                <RefreshCw className="h-2.5 w-2.5" />
                Reset Demo
              </button>
            </div>

            {/* Content area: Split Dial vs Editor */}
            <div className="grid flex-1 grid-cols-1 overflow-hidden md:grid-cols-5">
              {/* Dial Column */}
              <div className="border-mist/40 flex flex-col items-center justify-center space-y-4 border-r p-6 md:col-span-2">
                <MatchDial score={heroScore} size="md" />
                <div className="text-center">
                  <p className="font-mono-data text-ink/65 text-[10px] font-bold tracking-wider uppercase">
                    STATUS
                  </p>
                  <p
                    className={`font-display text-sm font-semibold transition duration-300 ${
                      heroScore >= 85 ? "text-deep-teal" : "text-signal-gold"
                    }`}
                  >
                    {heroScore >= 85 ? "SUBMISSION READY" : "TUNING CONTENT..."}
                  </p>
                </div>
              </div>

              {/* Suggestions / Editor Column */}
              <div className="flex h-full flex-col overflow-hidden md:col-span-3">
                {/* Suggestions List */}
                <div className="border-mist/40 max-h-[260px] flex-1 space-y-3 overflow-y-auto border-b p-4">
                  <p className="font-mono-data text-ink/65 mb-2 text-[10px] font-bold tracking-wider uppercase">
                    CLICK SUGGESTIONS TO TEST SCORE:
                  </p>
                  {heroSuggestions.map((item) => {
                    const isApplied = appliedSteps[item.id];
                    return (
                      <div
                        id={`step-card-${item.id}`}
                        key={item.id}
                        onClick={() => handleApplyStep(item.id, item.scoreChange)}
                        className={`relative flex items-start gap-3 rounded border p-3 text-left transition select-none ${
                          isApplied
                            ? "border-deep-teal/40 bg-deep-teal/[0.03] cursor-default opacity-80"
                            : "border-mist/60 bg-paper/20 hover:border-deep-teal cursor-pointer"
                        }`}
                      >
                        <div
                          className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition ${
                            isApplied
                              ? "border-deep-teal bg-deep-teal text-white"
                              : "border-mist bg-paper"
                          }`}
                        >
                          {isApplied && <Check className="h-3 w-3" />}
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5">
                            <span
                              className={`font-mono-data rounded px-1.5 py-0.5 text-[9px] font-bold uppercase ${item.badgeClass}`}
                            >
                              {item.type}
                            </span>
                            <span className="text-ink/70 text-[10px] font-bold tracking-wide uppercase">
                              {item.label}
                            </span>
                          </div>
                          <p className="text-ink/90 text-xs leading-normal font-medium">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Live Resume Visualizer */}
                <div className="bg-paper/50 font-body border-mist/10 h-[160px] flex-1 overflow-y-auto border-t p-4 text-xs">
                  <p className="font-mono-data text-ink/65 mb-2 text-[10px] font-bold tracking-wider uppercase">
                    LIVE CONTENT DIFF
                  </p>
                  <div className="text-ink/90 space-y-2 font-mono text-[11px] leading-relaxed">
                    {heroSuggestions.map((item) => {
                      const isApplied = appliedSteps[item.id];
                      return (
                        <div key={item.id} className="transition-all duration-300">
                          {isApplied ? (
                            <p className="text-deep-teal bg-deep-teal/5 border-deep-teal/10 rounded border px-2 py-0.5">
                              {item.modified.split(item.diff)[0]}
                              <span className="bg-deep-teal/20 text-deep-teal rounded px-1 font-bold">
                                {item.diff}
                              </span>
                              {item.modified.split(item.diff)[1]}
                            </p>
                          ) : (
                            <p className="text-ink/80 decoration-brick/30 px-2 py-0.5 line-through">
                              {item.original}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Status */}
            <div className="bg-mist/10 border-mist flex shrink-0 items-center justify-between border-t px-6 py-4">
              <span className="text-ink/75 font-body flex items-center gap-1.5 text-[11px] font-medium">
                <ShieldCheck className="text-deep-teal h-4 w-4" />
                Guaranteed safe rephrasing — zero invented experience.
              </span>
              <Link
                href="/dashboard"
                className={`font-mono-data flex items-center gap-1 rounded px-6 py-2 text-xs font-semibold tracking-wider uppercase transition duration-300 ${
                  heroScore >= 85
                    ? "bg-deep-teal hover:bg-deep-teal/95 text-white shadow-md"
                    : "bg-mist/30 text-ink/50 cursor-not-allowed"
                }`}
              >
                Apply Tailored Resume
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* SECTION 1: INTERACTIVE ATS PARSER SIMULATOR */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      <section id="simulator" className="border-mist bg-paper/40 border-t border-b px-6 py-20">
        <div className="mx-auto max-w-7xl space-y-12">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <div className="bg-mist/30 text-ink/80 font-mono-data inline-flex items-center space-x-2 rounded-full px-3 py-1 text-xs font-bold uppercase">
              <Terminal className="text-deep-teal h-3.5 w-3.5" />
              <span>ATS Parser Inspector</span>
            </div>
            <h2 className="font-display text-ink text-3xl font-bold tracking-tight sm:text-4xl">
              See How Recruiter Systems Read Your Resume
            </h2>
            <p className="text-ink/75 font-body text-base leading-relaxed">
              ATS parsers do not see your visual styling, custom fonts, or decorative columns. They
              reduce your document to raw text tokens. Test how a parser processes an un-optimized
              file vs a calibrated ApplyCraft resume below.
            </p>
          </div>

          {/* Toggle Switch */}
          <div className="flex justify-center">
            <div className="bg-mist/30 font-mono-data inline-flex space-x-1 rounded-lg p-1 text-xs font-bold">
              <button
                onClick={() => setParserMode("raw")}
                className={`flex cursor-pointer items-center gap-2 rounded px-5 py-2.5 transition ${
                  parserMode === "raw"
                    ? "bg-brick text-white shadow-sm"
                    : "text-ink/70 hover:text-ink"
                }`}
              >
                <AlertTriangle className="h-4 w-4" />
                Un-optimized PDF (Table-based)
              </button>
              <button
                onClick={() => setParserMode("calibrated")}
                className={`flex cursor-pointer items-center gap-2 rounded px-5 py-2.5 transition ${
                  parserMode === "calibrated"
                    ? "bg-deep-teal text-white shadow-sm"
                    : "text-ink/70 hover:text-ink"
                }`}
              >
                <CheckCircle2 className="text-signal-gold h-4 w-4" />
                Calibrated ApplyCraft Resume
              </button>
            </div>
          </div>

          {/* Terminal & Layout Display Split */}
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Visual Document View */}
            <div className="border-mist bg-paper space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="border-mist flex items-center justify-between border-b pb-3">
                <span className="font-display text-ink flex items-center gap-2 text-sm font-bold">
                  <FileText className="text-deep-teal h-4 w-4" />
                  Document Visual Render
                </span>
                <span
                  className={`font-mono-data rounded px-2 py-0.5 text-[10px] font-bold ${
                    parserMode === "raw"
                      ? "bg-brick/15 text-brick"
                      : "bg-deep-teal/15 text-deep-teal"
                  }`}
                >
                  {parserMode === "raw" ? "HIGH FORMAT RISK" : "PARSER COMPLIANT"}
                </span>
              </div>

              {parserMode === "raw" ? (
                <div className="font-body text-ink/80 border-brick/30 bg-brick/[0.02] space-y-4 rounded border p-4 text-xs">
                  <div className="border-brick/40 bg-paper grid grid-cols-2 gap-4 border border-dashed p-3">
                    <div>
                      <p className="text-brick font-bold">[Column 1: Contact Details]</p>
                      <p className="text-ink/60 mt-1 text-[11px]">
                        Side-by-side text block inside table element...
                      </p>
                    </div>
                    <div>
                      <p className="text-brick font-bold">[Column 2: Work History]</p>
                      <p className="text-ink/60 mt-1 text-[11px]">
                        Nested cells causing text overlap in Taleo parser...
                      </p>
                    </div>
                  </div>
                  <p className="text-brick font-semibold">
                    ⚠️ Issue: Taleo & Workday parsers merge two-column tables into scrambled text
                    strings.
                  </p>
                </div>
              ) : (
                <div className="font-body text-ink/80 border-deep-teal/30 bg-deep-teal/[0.02] space-y-4 rounded border p-4 text-xs">
                  <div className="bg-paper border-mist space-y-3 border p-4">
                    <div>
                      <h4 className="text-ink text-sm font-bold">
                        Sameer Kumar — Frontend Developer
                      </h4>
                      <p className="text-ink/60 text-[11px]">
                        Bengaluru, India • sameer@example.com • +91 99999 99999
                      </p>
                    </div>
                    <div className="border-mist/40 space-y-1 border-t pt-2">
                      <p className="text-deep-teal font-bold">EXPERIENCE</p>
                      <p>
                        • Engineered responsive React 19 web apps using TypeScript & Zustand state
                        architecture.
                      </p>
                      <p>• Built high-throughput REST APIs and reduced bundle payload by 25%.</p>
                    </div>
                  </div>
                  <p className="text-deep-teal font-semibold">
                    ✓ Clean linear sequence: Zero tables, zero graphics, 100% token extraction.
                  </p>
                </div>
              )}
            </div>

            {/* Simulated Terminal Output View */}
            <div className="border-mist bg-ink text-paper flex flex-col justify-between space-y-4 rounded-lg border p-6 font-mono text-xs shadow-md">
              <div>
                <div className="border-paper/20 text-paper/70 mb-4 flex items-center justify-between border-b pb-3">
                  <span className="flex items-center gap-2 text-[11px] font-bold">
                    <Terminal className="text-signal-gold h-4 w-4" />
                    PARSER_LOG_STREAM // PORT: 8080
                  </span>
                  <span className="text-signal-gold text-[10px]">WORKDAY_ENGINE_V4.2</span>
                </div>

                {parserMode === "raw" ? (
                  <div className="text-paper/80 space-y-2 font-mono text-[11px]">
                    <p className="text-brick">
                      [ERR_PARSING_FAILED] Table node detected at offset 0x4A.
                    </p>
                    <p className="text-brick">
                      [WARN] Scrambled columns: &quot;Contact Details Worked on React...&quot;
                    </p>
                    <p className="text-brick">
                      [WARN] Skill token &apos;REST APIs&apos;: NOT_FOUND in parsed tree.
                    </p>
                    <p className="text-paper/50 pt-2">{`// ATS Parsing Confidence: 42% (REJECTED BY AUTO-FILTER)`}</p>
                  </div>
                ) : (
                  <div className="text-paper/90 space-y-2 font-mono text-[11px]">
                    <p className="text-deep-teal">[OK] Document structure: LINEAR_SINGLE_COLUMN.</p>
                    <p className="text-deep-teal">
                      [OK] Extracted tokens: [React, TypeScript, GraphQL, REST APIs].
                    </p>
                    <p className="text-signal-gold">[OK] Match Score calculated: 94/100.</p>
                    <p className="text-paper/50 pt-2">{`// ATS Parsing Confidence: 99.8% (CLEARED RECRUITER GATE)`}</p>
                  </div>
                )}
              </div>

              <div className="border-paper/15 text-paper/60 flex items-center justify-between border-t pt-4 text-[10px]">
                <span className="text-signal-gold font-bold">ApplyCraft Engine</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* SECTION 2: GSAP SCROLL-TRIGGERED 3-STEP PIPELINE TIMELINE */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      <section id="pipeline" className="border-mist bg-paper/40 border-t border-b px-6 py-20">
        <div className="mx-auto max-w-7xl space-y-16">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <div className="bg-deep-teal/10 text-deep-teal font-mono-data inline-flex items-center space-x-2 rounded-full px-3 py-1 text-xs font-bold uppercase">
              <Zap className="text-signal-gold h-3.5 w-3.5" />
              <span>Application Workflow</span>
            </div>
            <h2 className="font-display text-ink text-3xl font-bold tracking-tight sm:text-4xl">
              The 3-Step ApplyCraft Loop
            </h2>
            <p className="text-ink/75 font-body text-base">
              From no resume to applied and tracked — in minutes, not hours.
            </p>
          </div>

          {/* Timeline Container */}
          <div ref={pipelineRef} className="relative mx-auto max-w-4xl">
            {/* GSAP Animated Vertical Connector Line */}
            <div className="bg-mist/40 absolute top-0 bottom-0 left-1/2 hidden w-0.5 -translate-x-1/2 transform md:block">
              <div ref={pipelineLineRef} className="bg-signal-gold h-full w-full origin-top" />
            </div>

            <div className="relative space-y-12">
              {/* Step 1 */}
              <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                <div className="space-y-2 md:text-right">
                  <span className="font-mono-data text-signal-gold text-xs font-bold tracking-wider uppercase">
                    STEP 01
                  </span>
                  <h3 className="font-display text-ink text-2xl font-bold">
                    Build from scratch or import PDF
                  </h3>
                  <p className="text-ink/75 font-body text-sm">
                    Enter your experience section-by-section using real bullet phrasing prompts, or
                    upload an existing PDF/DOCX to parse into our canonical resume object.
                  </p>
                </div>
                <div className="border-mist bg-paper rounded-lg border p-6 shadow-sm">
                  <div className="text-deep-teal font-mono-data flex items-center space-x-3 text-sm font-bold">
                    <FileCode className="h-5 w-5" />
                    <span>STRUCTURED_RESUME_SCHEMA.JSON</span>
                  </div>
                  <p className="text-ink/70 font-body mt-2 text-xs">
                    Parsed into clean JSON payload for downstream optimization.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                <div className="border-mist bg-paper order-2 rounded-lg border p-6 shadow-sm md:order-1">
                  <div className="font-mono-data flex items-center justify-between text-sm font-bold">
                    <span className="text-signal-gold font-mono-data">MATCH DIAL CALIBRATION</span>
                    <span className="bg-signal-gold/15 text-signal-gold rounded px-2 py-0.5 text-xs">
                      85%+ TARGET
                    </span>
                  </div>
                  <p className="text-ink/70 font-body mt-2 text-xs">
                    Real-time keyword diff engine surfaces missing skills and formatting risks.
                  </p>
                </div>
                <div className="order-1 space-y-2 md:order-2">
                  <span className="font-mono-data text-signal-gold text-xs font-bold tracking-wider uppercase">
                    STEP 02
                  </span>
                  <h3 className="font-display text-ink text-2xl font-bold">
                    Calibrate against Job Description
                  </h3>
                  <p className="text-ink/75 font-body text-sm">
                    Paste a JD URL or text. Apply suggestions item-by-item and watch your Match Dial
                    gauge sweep live until it clears ATS compliance thresholds.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                <div className="space-y-2 md:text-right">
                  <span className="font-mono-data text-signal-gold text-xs font-bold tracking-wider uppercase">
                    STEP 03
                  </span>
                  <h3 className="font-display text-ink text-2xl font-bold">
                    Apply & Track automatically
                  </h3>
                  <p className="text-ink/75 font-body text-sm">
                    Submit applications via pre-filled Auto-Fill or 1-Click Full Auto-Apply (where
                    partner APIs exist), automatically logging to your Application Tracker.
                  </p>
                </div>
                <div className="border-mist bg-paper rounded-lg border p-6 shadow-sm">
                  <div className="text-deep-teal font-mono-data flex items-center space-x-3 text-sm font-bold">
                    <CheckCircle2 className="h-5 w-5" />
                    <span>APPLICATION_LOGGED: STATUS_APPLIED</span>
                  </div>
                  <p className="text-ink/70 font-body mt-2 text-xs">
                    Application logged with tailored resume variant snapshot and score at apply
                    time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* SECTION 4: INTERACTIVE ATS RISK SELF-AUDIT TOOL */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      <section id="audit" className="mx-auto max-w-7xl space-y-12 px-6 py-20">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <div className="bg-brick/10 text-brick font-mono-data inline-flex items-center space-x-2 rounded-full px-3 py-1 text-xs font-bold uppercase">
            <AlertTriangle className="h-3.5 w-3.5" />
            <span>Interactive Diagnostic</span>
          </div>
          <h2 className="font-display text-ink text-3xl font-bold tracking-tight sm:text-4xl">
            Quick Resume Risk Self-Audit
          </h2>
          <p className="text-ink/75 font-body text-base">
            Check the boxes that apply to your current resume to calculate your estimated ATS
            filtering risk.
          </p>
        </div>

        <div className="border-mist bg-paper mx-auto max-w-3xl space-y-8 rounded-lg border p-8 shadow-sm">
          {/* Checkboxes */}
          <div className="font-body space-y-4 text-sm">
            <label
              onClick={() => toggleDiagnostic("tables")}
              className={`flex cursor-pointer items-start gap-4 rounded border p-4 transition select-none ${
                diagnosticChecks.tables
                  ? "border-brick/50 bg-brick/[0.03]"
                  : "border-mist/60 bg-paper"
              }`}
            >
              <input
                type="checkbox"
                checked={diagnosticChecks.tables}
                onChange={() => {}}
                className="accent-brick mt-1"
              />
              <div>
                <h4 className="text-ink font-bold">
                  My resume uses multi-column layout tables or graphical headers
                </h4>
                <p className="text-ink/70 mt-0.5 text-xs">
                  Risk: Taleo & Workday parsers scramble multi-column layouts into invalid text
                  blocks (+30% Risk).
                </p>
              </div>
            </label>

            <label
              onClick={() => toggleDiagnostic("keywords")}
              className={`flex cursor-pointer items-start gap-4 rounded border p-4 transition select-none ${
                diagnosticChecks.keywords
                  ? "border-brick/50 bg-brick/[0.03]"
                  : "border-mist/60 bg-paper"
              }`}
            >
              <input
                type="checkbox"
                checked={diagnosticChecks.keywords}
                onChange={() => {}}
                className="accent-brick mt-1"
              />
              <div>
                <h4 className="text-ink font-bold">
                  I send the exact same resume PDF to every job posting
                </h4>
                <p className="text-ink/70 mt-0.5 text-xs">
                  Risk: Keywords specific to target JDs are missing, dropping keyword coverage score
                  below 50% (+30% Risk).
                </p>
              </div>
            </label>

            <label
              onClick={() => toggleDiagnostic("passive")}
              className={`flex cursor-pointer items-start gap-4 rounded border p-4 transition select-none ${
                diagnosticChecks.passive
                  ? "border-brick/50 bg-brick/[0.03]"
                  : "border-mist/60 bg-paper"
              }`}
            >
              <input
                type="checkbox"
                checked={diagnosticChecks.passive}
                onChange={() => {}}
                className="accent-brick mt-1"
              />
              <div>
                <h4 className="text-ink font-bold">
                  My bullet points do not include quantifiable metrics or impact numbers
                </h4>
                <p className="text-ink/70 mt-0.5 text-xs">
                  Risk: Passive voice without measurable metrics lowers ATS readability ranking
                  (+20% Risk).
                </p>
              </div>
            </label>

            <label
              onClick={() => toggleDiagnostic("workday")}
              className={`flex cursor-pointer items-start gap-4 rounded border p-4 transition select-none ${
                diagnosticChecks.workday
                  ? "border-brick/50 bg-brick/[0.03]"
                  : "border-mist/60 bg-paper"
              }`}
            >
              <input
                type="checkbox"
                checked={diagnosticChecks.workday}
                onChange={() => {}}
                className="accent-brick mt-1"
              />
              <div>
                <h4 className="text-ink font-bold">
                  I am unsure what ATS match score my resume receives before applying
                </h4>
                <p className="text-ink/70 mt-0.5 text-xs">
                  Risk: Blind applications result in lower interview callback rates (+20% Risk).
                </p>
              </div>
            </label>
          </div>

          {/* Diagnostic Result */}
          <div className="bg-mist/15 border-mist/40 flex flex-col items-center justify-between gap-6 rounded border p-6 sm:flex-row">
            <div>
              <span className="font-mono-data text-ink/70 text-[10px] font-bold tracking-wider uppercase">
                ESTIMATED ATS FILTERING RISK
              </span>
              <div className="mt-1 flex items-baseline space-x-2">
                <span
                  className={`font-mono-data text-4xl font-bold ${
                    calculateRiskScore() > 50 ? "text-brick" : "text-deep-teal"
                  }`}
                >
                  {calculateRiskScore()}%
                </span>
                <span className="text-ink/80 text-xs font-bold">
                  {calculateRiskScore() > 50 ? "High Filter Risk" : "Low Filter Risk"}
                </span>
              </div>
            </div>

            <Link
              href="/dashboard"
              className="bg-deep-teal font-mono-data hover:bg-deep-teal/95 rounded px-6 py-3 text-xs font-semibold tracking-wider text-white uppercase shadow-sm transition"
            >
              Run In-App Calibration
            </Link>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* SECTION 5: TRANSPARENT APPLY MODES (AUTO-FILL VS FULL AUTO) */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      <section className="border-mist bg-paper/40 border-t border-b px-6 py-20">
        <div className="mx-auto max-w-7xl space-y-12">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <div className="bg-deep-teal/10 text-deep-teal font-mono-data inline-flex items-center space-x-2 rounded-full px-3 py-1 text-xs font-bold uppercase">
              <Lock className="text-deep-teal h-3.5 w-3.5" />
              <span>Honest Automation</span>
            </div>
            <h2 className="font-display text-ink text-3xl font-bold tracking-tight sm:text-4xl">
              Two Apply Modes. Zero ToS Violation.
            </h2>
            <p className="text-ink/75 font-body text-base">
              We never promise blind bot submissions against platforms that prohibit headless
              submission. We distinguish two clear modes upfront:
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {/* Mode A */}
            <div className="border-mist bg-paper space-y-4 rounded-lg border p-8 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-ink text-xl font-bold">Auto-Fill & Review</h3>
                <span className="bg-deep-teal/10 text-deep-teal font-mono-data rounded px-2.5 py-1 text-xs font-bold uppercase">
                  DEFAULT (ALL SOURCES)
                </span>
              </div>
              <p className="text-ink/75 font-body text-xs leading-relaxed">
                The system tailors your resume and pre-fills target application forms. You review
                the submission and click final submit. Works reliably across all career pages
                (Workday, Taleo, custom forms).
              </p>
            </div>

            {/* Mode B */}
            <div className="border-mist bg-paper space-y-4 rounded-lg border p-8 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-ink text-xl font-bold">Full Auto-Apply</h3>
                <span className="bg-signal-gold/15 text-signal-gold font-mono-data rounded px-2.5 py-1 text-xs font-bold uppercase">
                  PARTNER APIS ONLY
                </span>
              </div>
              <p className="text-ink/75 font-body text-xs leading-relaxed">
                1-Click automated submission for job boards with genuine application APIs (e.g.,
                Indeed Easy Apply-equivalent integrations). Clearly labeled with a badge on eligible
                listings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* FOOTER */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      <footer className="border-mist/60 bg-paper border-t px-6 py-12">
        <div className="text-ink/70 mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-xs sm:flex-row">
          <div className="font-display text-deep-teal flex items-center gap-1.5 font-bold">
            <Layers className="h-4 w-4" />
            <span>ApplyCraft</span>
          </div>
          <p>
            &copy; {new Date().getFullYear()} ApplyCraft. India launch priority. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
