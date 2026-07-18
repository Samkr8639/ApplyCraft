import { ArrowLeft, MapPin, DollarSign, Calendar, Sparkles } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function JobDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-4xl space-y-6">
      <div className="border-mist flex items-center space-x-3 border-b pb-4">
        <Link href="/jobs" className="text-ink/80 hover:text-deep-teal transition">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div>
          <h1 className="font-display text-ink text-2xl font-bold">Job Details</h1>
          <p className="text-ink/70 font-body font-mono-data text-xs">ID: {params.id}</p>
        </div>
      </div>

      <div className="border-mist bg-paper space-y-6 rounded-lg border p-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-ink text-xl font-bold">
              Senior Frontend Engineer - React/TypeScript
            </h2>
            <p className="text-deep-teal mt-1 text-sm font-medium">ApplyCraft Tech Solutions</p>
          </div>
          <div className="flex space-x-3">
            <Link
              href="/resume/1/optimize"
              className="bg-deep-teal hover:bg-deep-teal/90 flex items-center rounded px-4 py-2 text-sm font-medium text-white shadow-sm transition"
            >
              <Sparkles className="text-signal-gold mr-2 h-4 w-4" />
              Calibrate Resume
            </Link>
          </div>
        </div>

        <div className="border-mist/50 font-body text-ink/80 grid grid-cols-1 gap-4 border-t border-b py-4 text-xs md:grid-cols-3">
          <div className="flex items-center">
            <MapPin className="text-deep-teal mr-2 h-4 w-4" />
            Bengaluru, India (Hybrid)
          </div>
          <div className="flex items-center">
            <DollarSign className="text-deep-teal mr-2 h-4 w-4" />
            ₹1,800,000 - ₹2,400,000 / yr
          </div>
          <div className="flex items-center">
            <Calendar className="text-deep-teal mr-2 h-4 w-4" />
            Posted 2 days ago
          </div>
        </div>

        <div className="font-body text-ink/90 space-y-4 text-sm">
          <h3 className="font-display text-ink text-base font-bold">Job Description</h3>
          <p>
            We are looking for a Senior Frontend Engineer who is passionate about creating clean,
            responsive, and high-performance user interfaces. You will work closely with product
            managers, designers, and backend developers to architect and implement our
            next-generation platform.
          </p>

          <h3 className="font-display text-ink pt-2 text-base font-bold">Key Requirements</h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>5+ years of experience building modern web applications.</li>
            <li>Strong expertise in React, TypeScript, and modern state management.</li>
            <li>Experience with Tailwind CSS and advanced layouts.</li>
            <li>Familiarity with REST APIs and API integration.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
