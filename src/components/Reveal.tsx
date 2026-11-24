import {
  Children,
  cloneElement,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
} from "react";

const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

type RevealChild = ReactElement<Record<string, unknown>>;

/**
 * Per-node reveal observer. The child keeps its original markup; only a deterministic
 * inline delay and the post-hydration `is-visible` class are injected here, so the
 * server and first client render always match exactly.
 */
export function Reveal({ children }: { children: ReactNode }) {
  const child = Children.only(children) as RevealChild;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useIsomorphicLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    document.documentElement.classList.add("fp-motion-ready");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const rawDelay = child.props["data-reveal-delay"];
  const parsedDelay = Number(rawDelay ?? 0);
  const delay = Number.isFinite(parsedDelay) ? parsedDelay : 0;

  const style = {
    ...(child.props["style"] as CSSProperties | undefined),
    "--fp-reveal-delay": `${delay}ms`,
  } as CSSProperties;

  const baseClassName =
    typeof child.props["className"] === "string" ? child.props["className"] : undefined;
  const className = visible
    ? [baseClassName, "is-visible"].filter(Boolean).join(" ")
    : baseClassName;

  return cloneElement(child, {
    ref,
    ...(className ? { className } : {}),
    style,
  } as Record<string, unknown>);
}
