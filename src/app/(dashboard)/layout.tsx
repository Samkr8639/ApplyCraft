import React from "react";

import { DashboardLayoutView } from "@/features/dashboard";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <DashboardLayoutView>{children}</DashboardLayoutView>;
}
