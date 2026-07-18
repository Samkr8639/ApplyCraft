"use client";

import { useClerk, useUser } from "@clerk/nextjs";
import {
  Briefcase,
  ClipboardList,
  FileText,
  LayoutDashboard,
  Layers,
  LogOut,
  Settings,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

interface DashboardLayoutViewProps {
  children: React.ReactNode;
}

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "My Resumes", href: "/resume", icon: FileText },
  { name: "Find Jobs", href: "/jobs", icon: Briefcase },
  { name: "Applications", href: "/applications", icon: ClipboardList },
  { name: "Settings", href: "/settings", icon: Settings },
];

function UserAvatar({
  initials,
  imageUrl,
  size = "md",
}: {
  initials: string;
  imageUrl?: string | undefined;
  size?: "sm" | "md";
}) {
  const sizeClasses = size === "sm" ? "w-7 h-7 text-[11px]" : "w-9 h-9 text-xs";

  if (imageUrl) {
    return (
      <div
        className={`relative ${sizeClasses} ring-mist/60 shrink-0 overflow-hidden rounded-full shadow-sm ring-1`}
      >
        <Image src={imageUrl} alt="User Avatar" fill className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className={`relative ${sizeClasses} from-deep-teal text-paper font-mono-data ring-deep-teal/20 flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br to-[#164642] font-bold shadow-sm ring-1`}
    >
      {initials}
      <span className="bg-signal-gold ring-paper absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full ring-2" />
    </div>
  );
}

export function DashboardLayoutView({ children }: DashboardLayoutViewProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { signOut } = useClerk();
  const { user } = useUser();

  const [signingOut, setSigningOut] = useState(false);

  // Derive display name & initials from Clerk user
  const displayName =
    user?.fullName || user?.primaryEmailAddress?.emailAddress?.split("@")[0] || "User";
  const email = user?.primaryEmailAddress?.emailAddress || "";
  const initials =
    (user?.firstName?.[0] || displayName[0] || "U").toUpperCase() + (user?.lastName?.[0] || "");

  const handleSignOut = async () => {
    setSigningOut(true);
    await signOut();
    router.push("/login");
  };

  return (
    <div className="bg-paper text-ink flex h-screen overflow-hidden">
      {/* ── Desktop Sidebar ── */}
      <aside className="border-mist bg-paper/60 hidden border-r backdrop-blur-sm md:flex md:w-64 md:flex-col">
        {/* Brand */}
        <div className="border-mist/80 flex h-16 shrink-0 items-center gap-2.5 border-b px-6">
          <div className="bg-deep-teal/10 text-signal-gold border-deep-teal/15 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border">
            <Layers className="text-signal-gold h-4 w-4" />
          </div>
          <Link
            href="/dashboard"
            className="font-display text-ink text-lg font-bold tracking-tight transition hover:opacity-90"
          >
            ApplyCraft
          </Link>
        </div>

        {/* Nav links */}
        <nav className="font-body flex-1 space-y-1 overflow-y-auto px-3 py-5">
          {navigation.map(({ name, href, icon: Icon }) => {
            const isActive =
              pathname === href || (href !== "/dashboard" && pathname.startsWith(href));
            return (
              <Link
                key={name}
                href={href}
                className={`flex items-center gap-3 rounded-lg px-3.5 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? "bg-deep-teal font-semibold text-white shadow-sm"
                    : "text-ink/70 hover:bg-mist/30 hover:text-ink"
                }`}
              >
                <Icon
                  className={`h-4 w-4 shrink-0 ${isActive ? "text-signal-gold" : "text-ink/50"}`}
                />
                {name}
              </Link>
            );
          })}
        </nav>

        {/* User + Sign-out icon footer */}
        <div className="border-mist/80 bg-ink/[0.02] shrink-0 border-t p-3">
          <div className="border-mist/60 hover:border-mist flex items-center justify-between gap-3 rounded-xl border bg-white/70 p-2.5 shadow-xs transition">
            <div className="flex min-w-0 flex-1 items-center gap-3">
              <UserAvatar initials={initials} imageUrl={user?.imageUrl} size="md" />
              <div className="min-w-0 flex-1">
                <p className="text-ink font-body truncate text-xs leading-tight font-bold">
                  {displayName}
                </p>
                <p className="font-body text-ink/50 mt-0.5 truncate text-[11px]">{email}</p>
              </div>
            </div>

            {/* Icon-only sign out button */}
            <button
              type="button"
              onClick={handleSignOut}
              disabled={signingOut}
              title="Sign out"
              aria-label="Sign out"
              className="text-brick/80 hover:text-brick hover:bg-brick/10 shrink-0 cursor-pointer rounded-lg p-2 transition active:scale-95 disabled:opacity-50"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* ── Main Content ── */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="border-mist bg-paper/40 flex h-16 shrink-0 items-center justify-between border-b px-6 backdrop-blur-md">
          {/* Mobile brand */}
          <div className="flex items-center gap-2 md:hidden">
            <div className="bg-deep-teal/10 text-signal-gold border-deep-teal/15 flex h-7 w-7 items-center justify-center rounded-md border">
              <Layers className="text-signal-gold h-3.5 w-3.5" />
            </div>
            <Link href="/dashboard" className="font-display text-ink text-lg font-bold">
              ApplyCraft
            </Link>
          </div>

          {/* Desktop breadcrumb */}
          <div className="hidden md:block">
            <span className="font-mono-data text-ink/40 text-[11px] font-bold tracking-widest uppercase">
              Workspace //{" "}
              {navigation.find((n) => pathname.startsWith(n.href))?.name ?? "Dashboard"}
            </span>
          </div>

          {/* Right: user avatar + mobile sign-out */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <UserAvatar initials={initials} imageUrl={user?.imageUrl} size="sm" />
              <span className="text-ink font-body hidden text-xs font-semibold sm:inline">
                {displayName}
              </span>
            </div>
            {/* Mobile sign-out button */}
            <button
              type="button"
              onClick={handleSignOut}
              disabled={signingOut}
              className="text-brick hover:bg-brick/10 cursor-pointer rounded-md p-2 transition disabled:opacity-50 md:hidden"
              aria-label="Sign out"
              title="Sign out"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </header>

        {/* Page content */}
        <main className="bg-paper/10 flex-1 overflow-y-auto p-6 md:p-8">{children}</main>
      </div>
    </div>
  );
}
