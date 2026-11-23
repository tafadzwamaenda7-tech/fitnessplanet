import { createFileRoute, Link } from "@tanstack/react-router";
import { JoinNowBanner } from "@/components/SiteChrome";
import { MIGYM_ASSETS, TRAINERS } from "@/data/migym";

export const Route = createFileRoute("/trainers")({
  head: () => ({
    meta: [
      { title: "Our Team & Personal Trainers | MiGym Harare" },
      { name: "description", content: "Meet MiGym Harare's dedicated personal trainers, class instructors, and support staff." },
      { property: "og:title", content: "Our Team & Personal Trainers | MiGym Harare" },
      { property: "og:description", content: "Meet MiGym Harare's dedicated personal trainers, class instructors, and support staff." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TrainersPage,
});

function TrainersPage() {
  return (
    <>
      <section className="bg-surface-dark py-16 text-center text-surface-dark-foreground">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="migym-heading text-4xl sm:text-5xl">Meet Our Personal Trainers</h1>
          <span className="migym-yellow-bar mx-auto mt-4" />
          <p className="mt-6 text-base text-surface-dark-foreground/85">
            Our trainers bring expertise in strength training, weight loss, HYROX, and injury rehabilitation to build a
            personalised plan for your goals.
          </p>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TRAINERS.map((trainer) => (
              <div key={trainer.name} className="flex flex-col justify-between border border-border bg-card p-6">
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-surface-dark font-display text-xl font-extrabold text-primary">
                    {trainer.name.slice(0, 2).toUpperCase()}
                  </div>
                  <h2 className="mt-4 text-xl font-bold text-foreground">{trainer.name}</h2>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{trainer.role}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{trainer.specialty}</p>
                </div>
                <div className="mt-6">
                  <Link to="/contact" className="text-sm font-semibold text-foreground underline decoration-primary decoration-2 underline-offset-4 hover:text-muted-foreground">
                    Book a session
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div id="instructors" className="mt-16 grid scroll-mt-24 grid-cols-1 items-center gap-10 border-t border-border pt-14 md:grid-cols-2">
            <div>
              <h2 className="migym-heading text-2xl text-foreground sm:text-3xl">Class Instructors & Staff</h2>
              <span className="migym-yellow-bar mt-4" />
              <p id="staff" className="mt-6 text-sm leading-7 text-muted-foreground sm:text-base">
                From high-energy MiSpin and MiHIIT instructors to our welcoming reception and induction team at 216 Rolf
                Ave, everyone at MiGym is here to support your training journey from day one.
              </p>
            </div>
            <img src={MIGYM_ASSETS.teamPhoto} alt="MiGym coaching team" className="aspect-[4/3] w-full object-cover shadow-md" />
          </div>
        </div>
      </section>

      <JoinNowBanner />
    </>
  );
}