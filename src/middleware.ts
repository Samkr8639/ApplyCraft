import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// All routes that require an authenticated session
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/resume(.*)",
  "/jobs(.*)",
  "/applications(.*)",
  "/settings(.*)",
]);

// Auth routes — redirect away if already signed in
const isAuthRoute = createRouteMatcher(["/login(.*)", "/register(.*)", "/forgot-password(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  // If the user is signed in and tries to visit an auth page, send them to dashboard
  if (userId && isAuthRoute(req)) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // If the user is NOT signed in and tries to visit a protected page, redirect to /login
  if (!userId && isProtectedRoute(req)) {
    const loginUrl = new URL("/login", req.url);
    // Preserve the intended destination so we can redirect back after sign-in
    loginUrl.searchParams.set("redirect_url", req.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static assets
    "/((?!_next|[^?]*\\.(?:html|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
    "/__clerk/:path*",
  ],
};
