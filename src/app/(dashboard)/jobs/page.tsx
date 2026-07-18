import { Search, MapPin, DollarSign, Calendar, Sparkles } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function JobsDiscoveryPage() {
  const jobs = [
    {
      id: "adz-1",
      title: "Senior Frontend Engineer - React/TypeScript",
      company: "ApplyCraft Tech Solutions",
      location: "Bengaluru, India (Hybrid)",
      salary: "₹18,000,000 - ₹24,000,000 / yr",
      posted: "2 days ago",
      matchScore: 88,
      matchClass: "text-signal-gold bg-signal-gold/15",
    },
    {
      id: "adz-2",
      title: "React Web Developer",
      company: "ScaleTech Platforms",
      location: "Remote (India)",
      salary: "₹12,000,000 - ₹16,000,000 / yr",
      posted: "1 week ago",
      matchScore: 72,
      matchClass: "text-ink/80 bg-mist/20",
    },
  ];

  return (
    <div className="max-w-6xl space-y-8">
      <div>
        <h1 className="font-display text-ink text-3xl font-bold">Find Jobs</h1>
        <p className="text-ink/75 font-body text-sm">
          Browse Indian developer openings matched to your active resume variant.
        </p>
      </div>

      {/* Filters Search Bar */}
      <div className="border-mist bg-paper/50 flex flex-col gap-4 rounded-lg border p-4 md:flex-row">
        <div className="relative flex flex-1 items-center">
          <Search className="text-ink/60 absolute left-3 h-5 w-5" />
          <input
            type="text"
            placeholder="Search by role, keyword, or company..."
            className="border-mist bg-paper focus:border-deep-teal font-body text-ink w-full rounded border py-2.5 pr-4 pl-10 text-sm outline-none"
          />
        </div>
        <div className="w-full md:w-48">
          <input
            type="text"
            placeholder="City or Remote..."
            className="border-mist bg-paper focus:border-deep-teal font-body text-ink w-full rounded border px-4 py-2.5 text-sm outline-none"
          />
        </div>
        <button className="bg-deep-teal hover:bg-deep-teal/90 rounded px-6 py-2.5 text-sm font-medium text-white shadow-sm transition">
          Search Jobs
        </button>
      </div>

      {/* Job Listing Cards */}
      <div className="space-y-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="border-mist bg-paper hover:border-deep-teal flex flex-col items-start justify-between gap-6 rounded-lg border p-6 transition md:flex-row md:items-center"
          >
            <div className="font-body flex-1 space-y-3">
              <div>
                <h3 className="text-ink font-display text-lg leading-tight font-bold">
                  {job.title}
                </h3>
                <p className="text-deep-teal mt-0.5 text-sm font-medium">{job.company}</p>
              </div>

              <div className="text-ink/75 flex flex-wrap gap-x-6 gap-y-2 text-xs">
                <span className="flex items-center">
                  <MapPin className="text-mist-foreground mr-1 h-4 w-4 shrink-0" />
                  {job.location}
                </span>
                <span className="flex items-center">
                  <DollarSign className="text-mist-foreground mr-1 h-4 w-4 shrink-0" />
                  {job.salary}
                </span>
                <span className="flex items-center">
                  <Calendar className="text-mist-foreground mr-1 h-4 w-4 shrink-0" />
                  {job.posted}
                </span>
              </div>
            </div>

            {/* Match scoring compact dial + details */}
            <div className="border-mist/40 flex w-full shrink-0 items-center space-x-6 border-t pt-4 md:w-auto md:border-t-0 md:pt-0">
              <div className="flex flex-col items-center">
                <div
                  className={`font-mono-data flex h-14 w-14 items-center justify-center rounded-full text-base font-bold ${job.matchClass}`}
                >
                  {job.matchScore}%
                </div>
                <span className="text-ink/70 font-body mt-1 text-[10px] font-bold tracking-wide uppercase">
                  Match
                </span>
              </div>

              <div className="flex w-full flex-col gap-2 md:w-auto">
                <Link
                  href={`/jobs/${job.id}`}
                  className="border-deep-teal text-deep-teal hover:bg-deep-teal/5 w-full rounded border py-2 text-center text-xs font-semibold transition md:w-32"
                >
                  Details
                </Link>
                <Link
                  href={`/resume/1/optimize`}
                  className="bg-deep-teal hover:bg-deep-teal/90 flex w-full items-center justify-center rounded py-2 text-center text-xs font-semibold text-white transition md:w-32"
                >
                  <Sparkles className="text-signal-gold mr-1 h-3 w-3" />
                  Calibrate
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
