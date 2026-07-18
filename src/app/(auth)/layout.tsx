import React from "react";

import { AuthLayoutView } from "@/features/auth";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <AuthLayoutView>{children}</AuthLayoutView>;
}
