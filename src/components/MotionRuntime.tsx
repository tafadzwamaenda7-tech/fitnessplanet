import { useEffect, useRef } from "react";

const SPATIAL_SELECTOR = "[data-spatial], [data-hero-spatial]";

function setCssVar(node: HTMLElement, name: string, value: string) {
  node.style.setProperty(name, value);
}

function applySpatial(node: HTMLElement, event: PointerEvent) {
  const rect = node.getBoundingClientRect();
  if (!rect.width || !rect.height) return;
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;
  setCssVar(node, "--fp-tilt-x", `${(-y * 2.4).toFixed(2)}deg`);
  setCssVar(node, "--fp-tilt-y", `${(x * 2.4).toFixed(2)}deg`);
  node.classList.add("is-spatial-active");
}

function resetSpatial(node: HTMLElement) {
  setCssVar(node, "--fp-tilt-x", "0deg");
  setCssVar(node, "--fp-tilt-y", "0deg");
  node.classList.remove("is-spatial-active");
}

function applyHero(node: HTMLElement, event: PointerEvent) {
  const rect = node.getBoundingClientRect();
  if (!rect.width || !rect.height) return;
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;
  setCssVar(node, "--fp-hero-x", `${(x * 12).toFixed(2)}px`);
  setCssVar(node, "--fp-hero-y", `${(y * 12).toFixed(2)}px`);
  setCssVar(node, "--fp-hero-video-x", `${(-x * 8).toFixed(2)}px`);
  setCssVar(node, "--fp-hero-video-y", `${(-y * 8).toFixed(2)}px`);
  setCssVar(node, "--fp-hero-rx", `${(-y * 2).toFixed(2)}deg`);
  setCssVar(node, "--fp-hero-ry", `${(x * 2).toFixed(2)}deg`);
  node.classList.add("is-hero-spatial-active");
}

function resetHero(node: HTMLElement) {
  node.classList.remove("is-hero-spatial-active");
  setCssVar(node, "--fp-hero-x", "0px");
  setCssVar(node, "--fp-hero-y", "0px");
  setCssVar(node, "--fp-hero-video-x", "0px");
  setCssVar(node, "--fp-hero-video-y", "0px");
  setCssVar(node, "--fp-hero-rx", "0deg");
  setCssVar(node, "--fp-hero-ry", "0deg");
}

/**
 * Pointer-depth layer only. It uses document-level event delegation so the root
 * layout effect never queries or mutates descendant markup; styles and classes
 * change only after a real pointer interaction. Reveal state belongs to the
 * per-node Reveal component, so hydration markup stays deterministic.
 */
export function MotionRuntime() {
  const active = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const resetActive = () => {
      const node = active.current;
      if (!node) return;
      if (node.hasAttribute("data-hero-spatial")) resetHero(node);
      else resetSpatial(node);
      active.current = null;
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const target = event.target;
      if (!(target instanceof Element)) return;

      const node = target.closest<HTMLElement>(SPATIAL_SELECTOR);
      if (node !== active.current) resetActive();
      if (!node) return;

      active.current = node;
      if (node.hasAttribute("data-hero-spatial")) applyHero(node, event);
      else applySpatial(node, event);
    };

    document.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", resetActive);
    window.addEventListener("blur", resetActive);

    return () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", resetActive);
      window.removeEventListener("blur", resetActive);
      resetActive();
    };
  }, []);

  return null;
}
