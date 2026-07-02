"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  href = "#",
}: ProjectCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.fromTo(
      card,
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.35,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      },
    );

    const onMouseEnter = () => {
      gsap.to(arrowRef.current, {
        x: 3,
        y: -3,
        scale: 1.5,
        duration: 1.2,
        ease: "elastic.out(1, 0.75)",
      });
    };

    const onMouseLeave = () => {
      gsap.to(arrowRef.current, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
      });
    };

    card.addEventListener("mouseenter", onMouseEnter);
    card.addEventListener("mouseleave", onMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", onMouseEnter);
      card.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <a
      ref={cardRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="clickable group relative block py-6 border-b border-border-subtle/50 bg-transparent hover:bg-surface-elevated/10 transition-all duration-300 rounded-lg px-2 -mx-2 opacity-0
                 before:absolute before:bottom-0 before:left-2 before:right-2 before:h-px before:bg-primary before:rounded-full before:scale-x-0 before:origin-left before:transition-transform before:duration-500 before:ease-out hover:before:scale-x-100"
    >
      <div className="flex items-center gap-2 mb-3">
        <h3
          className="text-headline-md text-primary group-hover:text-primary-fixed transition-colors font-medium"
          style={{ fontFamily: "var(--font-headline-md)" }}
        >
          {title}
        </h3>
        <div ref={arrowRef} className="inline-flex">
          <ArrowUpRight className="w-4 h-4 text-on-surface-variant group-hover:text-primary transition-colors" />
        </div>
      </div>

      <p
        className="text-body-md text-on-surface-variant max-w-3xl mb-4 leading-relaxed font-normal"
        style={{ fontFamily: "var(--font-body-md)" }}
      >
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] text-text-muted bg-surface-elevated/40 border border-border-subtle/60 px-2.5 py-0.5 rounded-md transition-colors duration-300 group-hover:border-border-subtle font-normal"
            style={{ fontFamily: "var(--font-code-sm)" }}
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
