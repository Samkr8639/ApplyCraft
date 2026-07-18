"use client";

import React, { useRef, useState } from "react";

import { gsap, useGSAP } from "@/lib/animation/gsap";

interface MatchDialProps {
  score: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

export function MatchDial({ score, size = "md", showLabel = true }: MatchDialProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const needleGroupRef = useRef<SVGGElement>(null);
  const fillRef = useRef<SVGCircleElement>(null);

  const [displayScore, setDisplayScore] = useState(0);

  // Gauge Geometry Constants:
  // 240 degree total sweep, symmetrical about top (12 o'clock = 0 deg)
  // Start: -120 deg (8 o'clock), End: +120 deg (4 o'clock)
  const radius = 38;
  const circumference = 2 * Math.PI * radius; // ~238.76
  const totalArcLength = circumference * (240 / 360); // ~159.17

  useGSAP(
    () => {
      const targetScore = Math.min(Math.max(score, 0), 100);

      // Filled length along the 240-deg arc
      const targetFilledLength = (totalArcLength * targetScore) / 100;

      // Needle angle: -120 deg to +120 deg
      const targetRotation = -120 + targetScore * 2.4;

      const tl = gsap.timeline({
        defaults: { duration: 1.2, ease: "power2.out" },
      });

      // Animate filled arc stroke length
      tl.to(
        fillRef.current,
        {
          strokeDasharray: `${targetFilledLength} ${circumference}`,
        },
        0,
      );

      // Animate needle rotation precisely around SVG point (50, 50) using svgOrigin
      tl.to(
        needleGroupRef.current,
        {
          rotation: targetRotation,
          svgOrigin: "50 50",
        },
        0,
      );

      // Animate numeric score count
      const countObj = { val: displayScore };
      tl.to(
        countObj,
        {
          val: targetScore,
          roundProps: "val",
          onUpdate: () => {
            setDisplayScore(Math.round(countObj.val));
          },
        },
        0,
      );
    },
    { dependencies: [score], scope: containerRef, revertOnUpdate: true },
  );

  const sizeClasses = {
    sm: "w-28 h-28",
    md: "w-48 h-48",
    lg: "w-64 h-64",
  };

  // Draw 21 tick marks (every 5% from score 0 to 100)
  // Angle for each tick: -120 + (i / 20) * 240
  const ticks = Array.from({ length: 21 }, (_, i) => {
    const angle = -120 + (i / 20) * 240;
    const isMajor = i % 4 === 0; // Major ticks every 20%
    return (
      <line
        key={i}
        x1="50"
        y1="9"
        x2="50"
        y2={isMajor ? "14" : "12"}
        stroke="currentColor"
        strokeWidth={isMajor ? "1.5" : "0.8"}
        className={isMajor ? "text-ink/65" : "text-mist/50"}
        transform={`rotate(${angle}, 50, 50)`}
      />
    );
  });

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-center">
      <div className={`relative ${sizeClasses[size]}`}>
        <svg className="h-full w-full" viewBox="0 0 100 100">
          {/* Tick Marks */}
          <g>{ticks}</g>

          {/* Background Track Arc (Gray, 240 deg from 8 o'clock to 4 o'clock) */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="var(--color-mist)"
            strokeWidth="4.5"
            fill="transparent"
            strokeDasharray={`${totalArcLength} ${circumference}`}
            strokeLinecap="round"
            className="opacity-25"
            transform="rotate(150 50 50)" // 90° default + 150° = 240° (8 o'clock)
          />

          {/* Active Filled Arc (Signal Gold) */}
          <circle
            ref={fillRef}
            cx="50"
            cy="50"
            r={radius}
            stroke="var(--color-signal-gold)"
            strokeWidth="5"
            fill="transparent"
            strokeDasharray={`0 ${circumference}`} // Animated by GSAP
            strokeLinecap="round"
            transform="rotate(150 50 50)"
          />

          {/* Dial Needle Group (Pivoted strictly at SVG origin 50 50) */}
          <g ref={needleGroupRef} transform="rotate(-120 50 50)">
            {/* Tapered Needle Shape */}
            <polygon points="48.5,50 51.5,50 50,18" fill="var(--color-ink)" />
          </g>

          {/* Pivot Center Hub (On top of needle base) */}
          <circle cx="50" cy="50" r="4" fill="var(--color-ink)" />
          <circle cx="50" cy="50" r="1.8" fill="var(--color-paper)" />

          {/* Digital Score Readout inside bottom gap */}
          <text
            x="50"
            y="69"
            textAnchor="middle"
            className="font-mono-data fill-ink text-[17px] font-bold tracking-tighter select-none"
          >
            {displayScore}
          </text>
          {showLabel && (
            <text
              x="50"
              y="77"
              textAnchor="middle"
              className="font-body fill-ink/60 text-[5px] font-bold tracking-widest uppercase select-none"
            >
              Match Score
            </text>
          )}
        </svg>
      </div>
    </div>
  );
}
