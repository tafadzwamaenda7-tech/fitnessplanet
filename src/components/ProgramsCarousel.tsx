import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { PROGRAM_SLIDES } from "@/data/migym";

export function ProgramsCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const count = PROGRAM_SLIDES.length;
  const prev = () => setActive((i) => (i - 1 + count) % count);
  const next = () => setActive((i) => (i + 1) % count);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % count);
    }, 6500);
    return () => window.clearInterval(id);
  }, [paused, count]);

  const slide = PROGRAM_SLIDES[active] ?? PROGRAM_SLIDES[0];
  if (!slide) return null;

  return (
    <section
      aria-label="MiGym Programs"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative min-h-[540px] w-full overflow-hidden bg-surface-dark text-surface-dark-foreground sm:min-h-[600px]"
    >
      <img
        key={slide.id}
        src={slide.image}
        alt={slide.name}
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-surface-dark/70 via-surface-dark/55 to-surface-dark/75" />

      <div className="relative z-10 mx-auto flex min-h-[540px] max-w-6xl items-center px-12 py-16 sm:min-h-[600px] sm:px-16">
        <div className="grid w-full grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="flex items-center justify-center md:justify-start">
            <img
              src={slide.badge}
              alt={`${slide.name} logo`}
              className="max-h-36 w-auto max-w-[260px] object-contain drop-shadow-lg sm:max-h-44"
            />
          </div>

          <div className="text-left">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              {slide.title}
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-surface-dark-foreground/90">
              {slide.description}
            </p>
            <div className="mt-7">
              <Link to="/classes" hash={slide.id} className="btn-migym-yellow">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous program"
        className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-surface-dark/45 p-2.5 text-surface-dark-foreground transition-colors hover:bg-primary hover:text-primary-foreground sm:left-5"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        type="button"
        onClick={next}
        aria-label="Next program"
        className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-surface-dark/45 p-2.5 text-surface-dark-foreground transition-colors hover:bg-primary hover:text-primary-foreground sm:right-5"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2.5">
        {PROGRAM_SLIDES.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActive(idx)}
            aria-label={`View ${item.name}`}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              idx === active
                ? "scale-125 bg-surface-dark-foreground"
                : "bg-surface-dark-foreground/45 hover:bg-surface-dark-foreground/75"
            }`}
          />
        ))}
      </div>
    </section>
  );
}