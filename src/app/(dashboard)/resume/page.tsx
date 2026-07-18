import { Plus, FileText, Sparkles } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ResumesListPage() {
  return (
    <div className="max-w-6xl space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-ink text-3xl font-bold">My Resumes</h1>
          <p className="text-ink/75 font-body text-sm">
            Manage your resumes, optimize variants, and parse new PDFs.
          </p>
        </div>
        <Link
          href="/resume/new"
          className="bg-deep-teal hover:bg-deep-teal/90 flex items-center rounded-md px-4 py-2.5 text-sm font-medium text-white shadow-sm transition"
        >
          <Plus className="mr-2 h-4 w-4" />
          Build or Import
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Active Resumes */}
        <div className="border-mist bg-paper hover:border-deep-teal space-y-4 rounded-lg border p-6 transition">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-deep-teal/10 text-deep-teal rounded-md p-2.5">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-body text-ink text-lg font-bold">Primary Resume</h3>
                <span className="bg-deep-teal/10 text-deep-teal font-mono-data rounded-full px-2 py-0.5 text-xs font-bold">
                  DEFAULT
                </span>
              </div>
            </div>
            <span className="font-mono-data bg-signal-gold/15 text-signal-gold rounded-full px-2.5 py-0.5 text-sm font-bold">
              65% Health
            </span>
          </div>

          <p className="text-ink/75 font-body text-sm">
            Base template used as the source for all target job description optimizations.
          </p>

          <div className="border-mist/50 flex space-x-4 border-t pt-4">
            <Link
              href="/resume/1"
              className="text-deep-teal flex items-center text-sm font-medium hover:underline"
            >
              Edit Content
            </Link>
            <Link
              href="/resume/1/optimize"
              className="text-deep-teal flex items-center text-sm font-medium hover:underline"
            >
              <Sparkles className="text-signal-gold mr-1 h-4 w-4" />
              Calibrate to Job
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
