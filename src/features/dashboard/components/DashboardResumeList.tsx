import { Plus, ArrowRight, FileText } from "lucide-react";
import Link from "next/link";
import React from "react";

import { DashboardResumeSummary } from "../types";

interface DashboardResumeListProps {
  resumes: DashboardResumeSummary[];
}

export function DashboardResumeList({ resumes }: DashboardResumeListProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-ink text-xl font-bold">My Resumes</h2>
        <Link
          href="/resume/new"
          className="text-deep-teal font-body flex items-center text-sm font-medium hover:underline"
        >
          <Plus className="mr-1 h-4 w-4" />
          Build/Import
        </Link>
      </div>

      {resumes.map((resume) => (
        <div
          key={resume.id}
          className="border-mist bg-paper/60 hover:border-deep-teal flex items-center justify-between rounded-lg border p-6 shadow-sm transition"
        >
          <div className="flex items-center space-x-4">
            <div className="bg-deep-teal/10 text-deep-teal rounded-md p-3">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-body text-ink font-bold">{resume.filename}</h3>
              <p className="text-ink/70 font-body text-xs">Updated {resume.updatedAt}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-mono-data bg-signal-gold/15 text-signal-gold rounded-full px-2.5 py-0.5 text-sm font-bold">
              Score: {resume.score}%
            </span>
            <Link
              href={`/resume/${resume.id}`}
              className="text-deep-teal font-body flex items-center text-sm font-medium hover:underline"
            >
              Edit <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
