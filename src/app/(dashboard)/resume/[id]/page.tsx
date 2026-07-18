import { ArrowLeft, Save, Sparkles } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ResumeEditorPage({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-6xl space-y-6">
      <div className="border-mist flex items-center justify-between border-b pb-4">
        <div className="flex items-center space-x-3">
          <Link href="/resume" className="text-ink/80 hover:text-deep-teal transition">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="font-display text-ink text-2xl font-bold">Primary Resume</h1>
            <p className="text-ink/70 font-body font-mono-data text-xs">ID: {params.id}</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <Link
            href={`/resume/${params.id}/optimize`}
            className="border-deep-teal text-deep-teal hover:bg-deep-teal/5 flex items-center rounded-md border px-4 py-2 text-sm font-medium transition"
          >
            <Sparkles className="text-signal-gold mr-2 h-4 w-4" />
            Calibrate JD
          </Link>
          <button className="bg-deep-teal hover:bg-deep-teal/90 flex items-center rounded-md px-4 py-2 text-sm font-medium text-white transition">
            <Save className="mr-2 h-4 w-4" />
            Autosaved
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Navigation list */}
        <aside className="border-mist bg-paper font-body h-fit space-y-1 rounded-lg border p-4 text-sm font-medium lg:col-span-1">
          <button className="bg-deep-teal/15 text-deep-teal w-full rounded px-3 py-2 text-left">
            Contact Info
          </button>
          <button className="text-ink/80 hover:bg-mist/20 w-full rounded px-3 py-2 text-left">
            Work Experience
          </button>
          <button className="text-ink/80 hover:bg-mist/20 w-full rounded px-3 py-2 text-left">
            Education
          </button>
          <button className="text-ink/80 hover:bg-mist/20 w-full rounded px-3 py-2 text-left">
            Skills
          </button>
          <button className="text-ink/80 hover:bg-mist/20 w-full rounded px-3 py-2 text-left">
            Projects
          </button>
        </aside>

        {/* Editor forms */}
        <div className="border-mist bg-paper space-y-6 rounded-lg border p-6 lg:col-span-3">
          <h2 className="font-display border-mist text-ink border-b pb-2 text-lg font-bold">
            Contact Details
          </h2>
          <div className="font-body grid grid-cols-1 gap-6 text-sm md:grid-cols-2">
            <div>
              <label className="text-ink/70 mb-1 block text-xs font-semibold uppercase">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="Sameer Kumar"
                className="border-mist bg-paper/50 focus:border-deep-teal w-full rounded border px-3 py-2 outline-none"
              />
            </div>
            <div>
              <label className="text-ink/70 mb-1 block text-xs font-semibold uppercase">
                Target Job Title
              </label>
              <input
                type="text"
                defaultValue="Frontend Developer"
                className="border-mist bg-paper/50 focus:border-deep-teal w-full rounded border px-3 py-2 outline-none"
              />
            </div>
            <div>
              <label className="text-ink/70 mb-1 block text-xs font-semibold uppercase">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="sameer@example.com"
                className="border-mist bg-paper/50 focus:border-deep-teal w-full rounded border px-3 py-2 outline-none"
              />
            </div>
            <div>
              <label className="text-ink/70 mb-1 block text-xs font-semibold uppercase">
                Phone Number
              </label>
              <input
                type="tel"
                defaultValue="+91 99999 99999"
                className="border-mist bg-paper/50 focus:border-deep-teal w-full rounded border px-3 py-2 outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
