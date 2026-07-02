import React from "react";

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="px-3 py-1 bg-surface-elevated border border-border-subtle rounded-md text-code-sm text-on-surface-variant font-normal"
      style={{ fontFamily: "var(--font-code-sm)" }}
    >
      {children}
    </span>
  );
}
