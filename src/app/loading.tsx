import React from "react";

export default function Loading() {
  return (
    <div className="max-w-6xl animate-pulse space-y-6 p-2">
      <div className="bg-mist/35 h-8 w-1/3 rounded-md"></div>
      <div className="bg-mist/30 h-4 w-1/4 rounded-md"></div>

      <div className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-3">
        <div className="border-mist/50 bg-paper/40 flex h-40 flex-col justify-between rounded-lg border p-6">
          <div className="bg-mist/30 h-4 w-1/4 rounded"></div>
          <div className="bg-mist/35 h-10 w-1/2 rounded"></div>
        </div>
        <div className="border-mist/50 bg-paper/40 flex h-40 flex-col justify-between rounded-lg border p-6">
          <div className="bg-mist/30 h-4 w-1/4 rounded"></div>
          <div className="bg-mist/35 h-10 w-1/2 rounded"></div>
        </div>
        <div className="border-mist/50 bg-paper/40 flex h-40 flex-col justify-between rounded-lg border p-6">
          <div className="bg-mist/30 h-4 w-1/4 rounded"></div>
          <div className="bg-mist/35 h-10 w-1/2 rounded"></div>
        </div>
      </div>

      <div className="border-mist/50 bg-paper/20 mt-8 h-48 rounded-lg border p-6">
        <div className="space-y-3">
          <div className="bg-mist/35 h-6 w-1/3 rounded"></div>
          <div className="bg-mist/30 h-4 w-2/3 rounded"></div>
          <div className="bg-mist/30 h-4 w-1/2 rounded"></div>
        </div>
      </div>
    </div>
  );
}
