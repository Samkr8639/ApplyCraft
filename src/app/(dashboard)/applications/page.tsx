import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import React from "react";

export default function ApplicationsTrackerPage() {
  const applications = [
    {
      id: "app-1",
      role: "Senior Frontend Engineer",
      company: "ApplyCraft Tech Solutions",
      date: "Jul 18, 2026",
      status: "Interview",
      statusColor: "text-signal-gold bg-signal-gold/10 border-signal-gold/20",
      score: 87,
    },
    {
      id: "app-2",
      role: "React Web Developer",
      company: "ScaleTech Platforms",
      date: "Jul 10, 2026",
      status: "Applied",
      statusColor: "text-deep-teal bg-deep-teal/10 border-deep-teal/20",
      score: 72,
    },
  ];

  return (
    <div className="max-w-6xl space-y-8">
      <div>
        <h1 className="font-display text-ink text-3xl font-bold">Applications</h1>
        <p className="text-ink/75 font-body text-sm">
          Track status, interview schedules, and feedback metrics for your submissions.
        </p>
      </div>

      <div className="border-mist bg-paper overflow-hidden rounded-lg border shadow-sm">
        <div className="divide-mist font-body divide-y">
          {applications.map((app) => (
            <div
              key={app.id}
              className="hover:bg-mist/10 flex flex-col items-start justify-between gap-4 p-6 transition sm:flex-row sm:items-center"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-deep-teal/10 text-deep-teal shrink-0 rounded-md p-3">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-ink font-display text-base font-bold">{app.role}</h3>
                  <p className="text-deep-teal mt-0.5 text-sm font-medium">{app.company}</p>
                  <span className="text-ink/70 mt-2 flex items-center text-xs">
                    <Calendar className="mr-1 h-3.5 w-3.5" />
                    Applied on {app.date}
                  </span>
                </div>
              </div>

              <div className="border-mist/40 flex w-full items-center justify-between space-x-6 border-t pt-4 sm:w-auto sm:justify-end sm:border-t-0 sm:pt-0">
                <div className="text-center">
                  <span className="font-mono-data bg-signal-gold/15 text-signal-gold rounded-full px-2.5 py-0.5 text-sm font-bold">
                    {app.score}% Match
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <span
                    className={`rounded border px-3 py-1 text-xs font-semibold tracking-wider uppercase ${app.statusColor}`}
                  >
                    {app.status}
                  </span>
                  <ChevronRight className="text-ink/60 h-5 w-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
