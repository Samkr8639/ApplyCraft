import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/resume(.*)",
  "/jobs(.*)",
  "/applications(.*)",
  "/settings(.*)",
]);

const isAuthRoute = createRouteMatcher(["/login(.*)", "/register(.*)", "/forgot-password(.*)"]);

export default async function middleware(req: NextRequest) {
  // If Clerk environment variables are missing on Vercel
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || !process.env.CLERK_SECRET_KEY) {
    if (isProtectedRoute(req)) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    return NextResponse.next();
  }

  try {
    // Invoke clerkMiddleware safely
    const clerkHandler = clerkMiddleware(async (auth, request) => {
      const { userId } = await auth();

      if (userId && isAuthRoute(request)) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
      }

      if (!userId && isProtectedRoute(request)) {
        const loginUrl = new URL("/login", request.url);
        loginUrl.searchParams.set("redirect_url", request.nextUrl.pathname);
        return NextResponse.redirect(loginUrl);
      }
    });

    return await clerkHandler(req, {} as never);
  } catch (error) {
    console.error("Clerk Middleware Execution Error:", error);
    if (isProtectedRoute(req)) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
    "/__clerk/:path*",
  ],
};
