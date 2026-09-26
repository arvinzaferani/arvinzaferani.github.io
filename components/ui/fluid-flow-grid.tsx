"use client";

import { useEffect, useRef } from "react";

/**
 * FluidFlowGrid — a decorative directional flow field drawn on a <canvas>.
 *
 * Adapted from the supplied component so it fits this site instead of
 * replacing its design language:
 * - The original hardcoded a slate/blue palette, an opaque `bg-slate-950` root
 *   and its own demo headline. Here the canvas is transparent, sized to its
 *   parent, and reads the editorial palette from CSS custom properties
 *   (warm grey lines, saffron pointer field) — §16.
 * - Sizing follows the container via `ResizeObserver` instead of `window`, and
 *   `setTransform` replaces the original `ctx.scale`, which compounded on every
 *   resize event.
 * - The demo copy is dropped: the component is a background layer, so the
 *   existing hero typography stays the dominant element — §15 / §25.
 * - Honours `prefers-reduced-motion` (one static frame) and stops the loop when
 *   scrolled out of view.
 *
 * Must be rendered inside a positioned ancestor (`relative` / `absolute` /
 * `fixed` / `sticky`).
 */
export type FluidFlowGridProps = {
  className?: string;
  /** Grid pitch in CSS pixels. */
  spacing?: number;
  /** Radius of the pointer force field, in CSS pixels. */
  radius?: number;
};

/** Used only if the CSS custom properties are missing, e.g. before hydration. */
const FALLBACK = { line: "120 111 94", accent: "225 143 0" };

function readChannels(property: string, fallback: string): string {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(property)
    .trim();
  return value || fallback;
}

export default function FluidFlowGrid({
  className,
  spacing = 35,
  radius = 220,
}: FluidFlowGridProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const line = readChannels("--flow-line", FALLBACK.line);
    const accent = readChannels("--flow-accent", FALLBACK.accent);
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");

    let width = 0;
    let height = 0;
    let inView = true;
    let time = 0;
    let frame = 0;

    const pointer = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      // Assigning width/height clears the context, so the scale is re-applied
      // here rather than accumulated.
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      if (width === 0 || height === 0) return;

      pointer.x += (pointer.targetX - pointer.x) * 0.08;
      pointer.y += (pointer.targetY - pointer.y) * 0.08;

      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1.2;
      ctx.lineCap = "round";

      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing;
          const y = j * spacing;

          const turbulence =
            Math.sin(x * 0.003 + time) + Math.cos(y * 0.003 + time);

          const dx = pointer.x - x;
          const dy = pointer.y - y;
          const dist = Math.hypot(dx, dy);

          let angle = turbulence;
          let isNear = false;
          if (dist < radius && dist > 0) {
            isNear = true;
            const pushAngle = Math.atan2(dy, dx) + Math.PI;
            const force = 1 - dist / radius;
            angle = angle * (1 - force) + pushAngle * force;
          }

          const length = isNear ? 22 : 14;
          const alpha = isNear
            ? 0.7
            : 0.14 + Math.sin(x * 0.01 + y * 0.01 + time) * 0.08;

          ctx.strokeStyle = `rgba(${isNear ? accent : line}, ${Math.max(
            0,
            alpha,
          )})`;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + Math.cos(angle) * length, y + Math.sin(angle) * length);
          ctx.stroke();
        }
      }
    };

    const loop = () => {
      time += 0.008;
      draw();
      frame = requestAnimationFrame(loop);
    };

    const start = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      if (motion.matches || !inView) {
        draw();
        return;
      }
      frame = requestAnimationFrame(loop);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.targetX = event.clientX - rect.left;
      pointer.targetY = event.clientY - rect.top;
    };

    const handlePointerLeave = () => {
      pointer.targetX = -1000;
      pointer.targetY = -1000;
    };

    const sizeObserver = new ResizeObserver(() => {
      resize();
      start();
    });
    sizeObserver.observe(canvas);

    const viewObserver = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        start();
      },
      { threshold: 0 },
    );
    viewObserver.observe(canvas);

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    motion.addEventListener("change", start);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      motion.removeEventListener("change", start);
      sizeObserver.disconnect();
      viewObserver.disconnect();
    };
  }, [spacing, radius]);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${
        className ?? ""
      }`}
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
