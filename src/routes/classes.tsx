import { createFileRoute, Link } from "@tanstack/react-router";
import { JoinNowBanner } from "@/components/SiteChrome";
import { PROGRAM_SLIDES } from "@/data/migym";

export const Route = createFileRoute("/classes")({
  head: () => ({
    meta: [
      { title: "Classes | MiGym Harare" },
      { name: "description", content: "Explore CrossFit, MiHIIT, HYROX, MiStudio, MiStrength, MiSpin, and MiCardio classes at MiGym Harare." },
      { property: "og:title", content: "Classes | MiGym Harare" },
      { property: "og:description", content: "Explore CrossFit, MiHIIT, HYROX, MiStudio, MiStrength, MiSpin, and MiCardio classes at MiGym Harare." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ClassesPage,
});

function ClassesPage() {
  return (
    <>
      <section className="bg-surface-dark py-16 text-center text-surface-dark-foreground">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="migym-heading text-4xl sm:text-5xl">Classes</h1>
          <span className="migym-yellow-bar mx-auto mt-4" />
          <p className="mt-6 text-base text-surface-dark-foreground/85">
            All membership types provide full gym access, including participation in all scheduled classes.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-2.5">
            {PROGRAM_SLIDES.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="rounded border border-primary/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-surface-dark-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {p.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-6xl space-y-12 px-6">
          {PROGRAM_SLIDES.map((prog, index) => (
            <article
              key={prog.id}
              id={prog.id}
              className="grid scroll-mt-24 grid-cols-1 items-center gap-8 border-b border-border pb-12 last:border-b-0 md:grid-cols-2"
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="relative overflow-hidden">
                  <img src={prog.image} alt={prog.name} className="aspect-[3/2] w-full object-cover" />
                  <div className="absolute bottom-3 left-3 rounded bg-surface-dark/80 px-3 py-1.5">
                    <img src={prog.badge} alt={`${prog.name} badge`} className="h-8 w-auto object-contain" />
                  </div>
                </div>
              </div>
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <h2 className="migym-heading text-2xl text-foreground sm:text-3xl">{prog.name}</h2>
                <span className="migym-yellow-bar mt-3" />
                <h3 className="mt-4 text-lg font-bold text-foreground">{prog.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">{prog.description}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-foreground">
                  Schedule: <span className="font-normal normal-case text-muted-foreground">{prog.schedule}</span>
                </p>
                <div className="mt-6">
                  <Link to="/contact" className="btn-migym-dark text-sm">
                    Book a Class
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <JoinNowBanner />
    </>
  );
}