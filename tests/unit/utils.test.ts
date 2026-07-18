import { describe, it, expect } from "vitest";

import { cn } from "@/lib/utils";

describe("cn helper", () => {
  it("should merge tailwind classes correctly", () => {
    const result = cn("bg-red-500", "bg-blue-500 text-white");
    expect(result).toContain("bg-blue-500");
    expect(result).toContain("text-white");
    expect(result).not.toContain("bg-red-500");
  });
});
