import React from "react";

interface TimelineItemProps {
  title: string;
  date: string;
  institution: string;
  isFirst?: boolean;
}

export function TimelineItem({
  title,
  date,
  institution,
  isFirst = false,
}: TimelineItemProps) {
  return (
    <div className={`relative ${isFirst ? "mb-8" : ""}`}>
      <div
        className={`absolute w-2 h-2 rounded-full left-[-28.5px] top-1.5 ring-4 ring-background ${
          isFirst ? "bg-primary" : "bg-surface-variant"
        }`}
      ></div>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
        <h4
          className="text-body-md font-medium text-primary"
          style={{ fontFamily: "var(--font-body-md)" }}
        >
          {title}
        </h4>

        <span
          className="text-code-sm text-text-muted"
          style={{ fontFamily: "var(--font-code-sm)" }}
        >
          {date}
        </span>
      </div>
      <p
        className="text-code-sm text-on-surface-variant"
        style={{ fontFamily: "var(--font-code-sm)" }}
      >
        {institution}
      </p>
    </div>
  );
}
