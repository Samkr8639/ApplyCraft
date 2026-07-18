import { User, RotateCcw } from "lucide-react";
import React from "react";

export default function SettingsPage() {
  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="font-display text-ink text-3xl font-bold">Settings</h1>
        <p className="text-ink/75 font-body text-sm">
          Manage your profile, system credentials, billing plans, and tour options.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Left Side menu */}
        <div className="border-mist bg-paper font-body h-fit space-y-1 rounded-lg border p-4 text-sm font-medium md:col-span-1">
          <button className="bg-deep-teal/15 text-deep-teal w-full rounded px-3 py-2 text-left">
            Profile info
          </button>
          <button className="text-ink/80 hover:bg-mist/20 w-full rounded px-3 py-2 text-left">
            Security & Credentials
          </button>
          <button className="text-ink/80 hover:bg-mist/20 w-full rounded px-3 py-2 text-left">
            Billing Details
          </button>
        </div>

        {/* Right side form workspace */}
        <div className="space-y-6 md:col-span-2">
          {/* Section 1: Profile */}
          <div className="border-mist bg-paper space-y-4 rounded-lg border p-6">
            <h3 className="font-display text-ink border-mist flex items-center border-b pb-2 text-lg font-bold">
              <User className="text-deep-teal mr-2 h-5 w-5" />
              General Profile
            </h3>
            <div className="font-body grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
              <div>
                <label className="text-ink/70 mb-1 block text-xs font-semibold uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  disabled
                  defaultValue="sameer@example.com"
                  className="border-mist bg-mist/10 text-ink/65 w-full cursor-not-allowed rounded border px-3 py-2 outline-none"
                />
              </div>
              <div>
                <label className="text-ink/70 mb-1 block text-xs font-semibold uppercase">
                  Target Location
                </label>
                <input
                  type="text"
                  defaultValue="Bengaluru, India"
                  className="border-mist bg-paper/50 focus:border-deep-teal w-full rounded border px-3 py-2 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Onboarding options */}
          <div className="border-mist bg-paper space-y-4 rounded-lg border p-6">
            <h3 className="font-display text-ink border-mist flex items-center border-b pb-2 text-lg font-bold">
              <RotateCcw className="text-deep-teal mr-2 h-5 w-5" />
              App Interface Options
            </h3>
            <div className="font-body flex items-center justify-between text-sm">
              <div>
                <h4 className="text-ink font-bold">Replay Onboarding Tour</h4>
                <p className="text-ink/70 mt-0.5 text-xs">
                  Reset the guided walk-through helper highlights.
                </p>
              </div>
              <button className="bg-ink hover:bg-ink/90 rounded px-4 py-2 text-xs font-semibold text-white transition">
                Reset Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
