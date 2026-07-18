"use client";

import { X } from "lucide-react";
import React, { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="bg-ink/40 fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div
        className="border-mist bg-paper animate-in fade-in zoom-in-95 w-full max-w-lg rounded-lg border p-6 shadow-lg duration-200"
        role="dialog"
        aria-modal="true"
      >
        <div className="border-mist mb-4 flex items-center justify-between border-b pb-3">
          <h3 className="font-display text-ink text-lg font-bold">{title}</h3>
          <button
            onClick={onClose}
            className="hover:bg-mist/30 text-ink/80 hover:text-ink cursor-pointer rounded p-1 transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="font-body text-ink text-sm">{children}</div>
      </div>
    </div>
  );
}
