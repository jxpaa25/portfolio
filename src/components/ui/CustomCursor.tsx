"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation"; // <-- Dodato za detekciju promene rute
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const cursor = cursorRef.current;
    if (cursor) {
      gsap.to(cursor, {
        width: 24,
        height: 24,
        duration: 0.2,
        ease: "power2.out",
      });
    }
  }, [pathname]);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest(".clickable");

      if (isClickable) {
        gsap.to(cursor, {
          width: 48,
          height: 48,
          duration: 0.6,
          ease: "power2.out",
        });
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const relatedTarget = e.relatedTarget as HTMLElement;

      const leftClickable = target.closest(".clickable");
      const enteredClickable = relatedTarget?.closest(".clickable");

      if (leftClickable && !enteredClickable) {
        gsap.to(cursor, {
          width: 24,
          height: 24,
          duration: 0.6,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("mouseout", onMouseOut);

    const animateCursor = () => {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;

      if (cursor) {
        cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animateCursor);
    };

    const animationId = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mouseout", onMouseOut);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-9999 hidden md:block
                 w-6 h-6 bg-white rounded-full mix-blend-difference will-change-transform"
    />
  );
}
