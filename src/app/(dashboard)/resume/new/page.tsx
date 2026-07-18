import { Upload, FileText, ArrowRight } from "lucide-react";
import React from "react";

export default function NewResumePage() {
  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="font-display text-ink text-3xl font-bold">Create Resume</h1>
        <p className="text-ink/75 font-body text-sm">
          Choose how you want to build or import your resume data.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Import zone */}
        <div className="border-mist bg-paper hover:border-deep-teal flex cursor-pointer flex-col items-center justify-center space-y-4 rounded-lg border border-dashed p-8 text-center transition">
          <div className="bg-deep-teal/10 text-deep-teal rounded-full p-4">
            <Upload className="h-8 w-8" />
          </div>
          <div>
            <h3 className="font-display text-ink text-lg font-bold">Import Existing Resume</h3>
            <p className="text-ink/70 font-body mt-1 text-sm">
              Upload your PDF or DOCX file to pre-fill the builder using our parsing engine.
            </p>
          </div>
          <button className="bg-deep-teal hover:bg-deep-teal/90 rounded-md px-5 py-2 text-sm font-medium text-white transition">
            Choose File
          </button>
        </div>

        {/* Guided builder option */}
        <div className="border-mist bg-paper hover:border-deep-teal flex flex-col justify-between space-y-6 rounded-lg border p-8 transition">
          <div className="space-y-4">
            <div className="bg-signal-gold/10 text-signal-gold flex h-16 w-16 items-center justify-center rounded-full p-4">
              <FileText className="h-8 w-8" />
            </div>
            <div>
              <h3 className="font-display text-ink text-lg font-bold">Build From Scratch</h3>
              <p className="text-ink/70 font-body mt-1 text-sm">
                Enter your details section-by-section with live ATS-friendly hints and sample bullet
                phrases.
              </p>
            </div>
          </div>
          <button className="bg-deep-teal hover:bg-deep-teal/90 flex w-full items-center justify-center rounded-md py-2.5 text-sm font-medium text-white transition">
            Start Guided Builder
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
