"use client";

import { SignUp } from "@clerk/nextjs";
import React from "react";

const clerkAppearance = {
  elements: {
    rootBox: "w-full",
    card: ["!bg-paper !shadow-none !border !border-mist !rounded-lg", "!p-7 sm:!p-8 w-full"].join(
      " ",
    ),

    headerTitle: "!font-display !text-2xl !font-bold !text-ink !tracking-tight",
    headerSubtitle: "!text-xs !text-ink/60 !font-body !mt-1",
    logoBox: "!hidden",
    logoImage: "!hidden",

    formFieldLabel:
      "!text-[11px] !font-mono-data !font-bold !uppercase !tracking-wide !text-ink/70 !mb-1",
    formFieldInput: [
      "!bg-paper !border !border-mist !text-ink !text-sm !rounded",
      "!py-2.5 !px-3 focus:!border-deep-teal focus:!ring-0 focus:!outline-none",
      "!placeholder-ink/35 !transition-colors",
    ].join(" "),
    formFieldInputShowPasswordButton: "!text-ink/50 hover:!text-ink",

    formButtonPrimary: [
      "!bg-deep-teal hover:!bg-deep-teal/90 !text-white !transition",
      "!font-mono-data !font-bold !text-xs !uppercase !tracking-wider",
      "!py-3 !rounded !shadow-sm !mt-1",
    ].join(" "),

    socialButtonsBlockButton: [
      "!border !border-mist !bg-paper hover:!bg-mist/20",
      "!text-ink !text-xs !font-semibold !font-body !transition !rounded !py-2.5",
    ].join(" "),
    socialButtonsBlockButtonText: "!text-ink !text-xs",
    socialButtonsProviderIcon: "!w-4 !h-4",

    dividerRow: "!my-4",
    dividerText: "!text-[11px] !font-mono-data !font-bold !uppercase !tracking-widest !text-ink/40",
    dividerLine: "!border-mist",

    footerActionText: "!text-xs !text-ink/50 !font-body",
    footerActionLink: "!text-deep-teal !font-bold hover:!underline !text-xs !font-body",
    footer: "!mt-4",
    footerPages: "!hidden",

    identityPreviewText: "!text-xs !font-body !text-ink",
    identityPreviewEditButton: "!text-deep-teal !text-xs !font-bold",
    alertText: "!text-xs !font-body",
    alert: "!bg-brick/10 !border-brick/30 !text-brick !rounded",
    formFieldErrorText: "!text-brick !text-[11px] !font-body",

    otpCodeFieldInput: [
      "!border !border-mist !bg-paper !text-ink !font-mono-data",
      "!text-xl !font-bold !rounded focus:!border-deep-teal",
    ].join(" "),
  },
};

export function RegisterForm() {
  return (
    <SignUp
      routing="path"
      path="/register"
      signInUrl="/login"
      forceRedirectUrl="/dashboard"
      appearance={clerkAppearance}
    />
  );
}
