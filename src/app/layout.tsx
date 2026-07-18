import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";

import { MotionProvider } from "@/components/common/MotionProvider";
import "@/styles/globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "ApplyCraft | ATS Resume Optimizer & Auto-Apply",
    template: "%s | ApplyCraft",
  },
  description:
    "Build ATS-parseable resumes, calibrate them against job descriptions, discover live openings, and auto-apply tailored to every job description.",
  metadataBase: new URL("https://applycraft.in"),
  openGraph: {
    title: "ApplyCraft | ATS Resume Optimizer & Auto-Apply",
    description:
      "Build ATS-parseable resumes, calibrate them against job descriptions, discover live openings, and auto-apply tailored to every job description.",
    url: "https://applycraft.in",
    siteName: "ApplyCraft",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ApplyCraft | ATS Resume Optimizer & Auto-Apply",
    description:
      "Build ATS-parseable resumes, calibrate them against job descriptions, discover live openings, and auto-apply tailored to every job description.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ClerkProvider>
          <MotionProvider>{children}</MotionProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
