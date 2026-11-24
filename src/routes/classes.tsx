import { Reveal } from "@/components/Reveal";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CoachList } from "@/components/CoachList";
import { HealthTools } from "@/components/HealthTools";
import {
  CLASS_CATEGORIES,
  FITNESSPLANET_CONTACT,
  FITNESSPLANET_IMAGES,
  PROGRAM_SLIDES,
  type ClassCategory,
  type ProgramSlide,
} from "@/data/fitnessplanet";

const programById = new Map(PROGRAM_SLIDES.map((program) => [program.id, program]));

const PANEL_CONFIG: Record<ClassCategory["label"], { leadId: string; chipIds: string[] }> = {
  "Floor & Strength": { leadId: "strength", chipIds: ["gym-floor", "weight"] },
  Conditioning: { leadId: "hiit", chipIds: ["cardio", "crossfit", "spin"] },
  "Group & Skills": { leadId: "studio", chipIds: ["aerobics", "boxing", "karate"] },
  Goals: { leadId: "weight", chipIds: ["strength", "gym-floor"] },
};

function SessionDisclosure({
  programs,
  anchoredIds,
}: {
  programs: ProgramSlide[];
  anchoredIds: Set<string>;
}) {
  const [open, setOpen] = useState(false);
  const idsKey = programs.map((program) => program.id).join("|");

  useEffect(() => {
    const ids = idsKey.split("|");
    const sync = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && ids.includes(hash)) setOpen(true);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [idsKey]);

  return (
    <details
      className="fp-panel__disclosure"
      open={open}
      onToggle={(event) => setOpen(event.currentTarget.open)}
    >
      <summary>See all sessions</summary>
      <div className="fp-panel__sessions">
        {programs.map((program) => (
          <article
            key={program.id}
            id={anchoredIds.has(program.id) ? undefined : program.id}
            className="fp-panel__session scroll-mt-28"
          >
            <h4>{program.name}</h4>
            <p className="fp-panel__session-copy">{program.description}</p>
            <p className="fp-panel__session-time">{program.schedule}</p>
          </article>
        ))}
      </div>
    </details>
  );
}

function ProgramChip({ program, anchored }: { program: ProgramSlide; anchored: boolean }) {
  const content = (
    <>
      <span className="fp-panel__chip-name">{program.name}</span>
      <span className="fp-panel__chip-time">{program.schedule}</span>
    </>
  );

  if (/ask reception|by arrangement at reception/i.test(program.schedule)) {
    return (
      <div id={anchored ? program.id : undefined} className="fp-panel__chip fp-panel__chip--static">
        {content}
      </div>
    );
  }

  return (
    <a href={`#${program.id}`} id={anchored ? program.id : undefined} className="fp-panel__chip">
      {content}
    </a>
  );
}

function TrainingPanel({ category }: { category: ClassCategory }) {
  const config = PANEL_CONFIG[category.label];
  if (!config) return null;

  const programs = PROGRAM_SLIDES.filter((program) => program.category === category.label);
  const lead = programById.get(config.leadId);
  const chips = config.chipIds
    .map((id) => programById.get(id))
    .filter((program): program is ProgramSlide => Boolean(program));
  const anchoredIds = new Set([
    config.leadId,
    ...chips.filter((program) => program.category === category.label).map((program) => program.id),
  ]);

  if (!lead) return null;

  return (
    <Reveal>
      <section
        id={category.id}
        className="fp-panel scroll-mt-28"
        aria-labelledby={`${category.id}-heading`}
        data-reveal
      >
        <div className="fp-panel__head">
          <h2 id={`${category.id}-heading`}>{category.label}</h2>
          <p>{category.summary}</p>
        </div>

        <div className="fp-panel__body">
          <Reveal>
            <article
              id={lead.id}
              className="fp-panel__lead scroll-mt-28"
              data-reveal
              data-reveal-delay="80"
            >
              <h3>{lead.name}</h3>
              <p className="fp-panel__lead-copy">{lead.description}</p>
              <p className="fp-panel__lead-time">{lead.schedule}</p>
            </article>
          </Reveal>

          <div className="fp-panel__chips" aria-label={`${category.label} sessions`}>
            {chips.map((program) => (
              <ProgramChip
                key={program.id}
                program={program}
                anchored={program.category === category.label}
              />
            ))}
          </div>
        </div>

        <SessionDisclosure programs={programs} anchoredIds={anchoredIds} />
      </section>
    </Reveal>
  );
}

export const Route = createFileRoute("/classes")({
  head: () => ({
    meta: [
      { title: "Training | Fitnessplanet Harare" },
      {
        name: "description",
        content:
          "Training at Fitnessplanet Harare: gym floor, strength, cardio, HIIT, CrossFit, HYROX, Spin, aerobics, boxing, karate, studio and weight-loss/gain support.",
      },
      { property: "og:title", content: "Training | Fitnessplanet Harare" },
      {
        property: "og:description",
        content:
          "Training at Fitnessplanet Harare: gym floor, strength, cardio, HIIT, CrossFit, HYROX, Spin, aerobics, boxing, karate, studio and weight-loss/gain support.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ClassesPage,
});

function ClassesPage() {
  return (
    <>
      <section className="fp-training-opening" aria-labelledby="training-page-heading">
        <div className="section-shell fp-training-opening__layout" data-enter>
          <div className="fp-training-opening__intro">
            <h1 id="training-page-heading">Training, chosen by how you move.</h1>
            <p className="fp-lead fp-muted">
              Membership includes scheduled sessions. Start with the group that fits your day, then
              check the published time before you visit.
            </p>
            <a href="#floor-strength" className="fp-text-link fp-text-link--ink">
              Start with the four groups
            </a>
          </div>

          <nav className="fp-training-opening__switch" aria-label="Training groups">
            {CLASS_CATEGORIES.map((category, index) => (
              <Reveal key={category.id}>
                <a
                  href={`#${category.id}`}
                  className="fp-training-opening__item"
                  data-reveal
                  data-reveal-delay={index * 80}
                >
                  <span className="fp-training-opening__item-title">{category.label}</span>
                  <span className="fp-training-opening__item-summary">{category.summary}</span>
                </a>
              </Reveal>
            ))}
          </nav>
        </div>

        <div className="fp-training-opening__strip" data-spatial>
          <Reveal>
            <span className="fp-image fp-image--wide" data-reveal>
              <img
                src={FITNESSPLANET_IMAGES.classes}
                alt="Fitnessplanet group training footage"
                loading="eager"
                decoding="async"
              />
            </span>
          </Reveal>
        </div>
      </section>

      <section className="fp-training-panels" aria-labelledby="training-panels-heading">
        <div className="section-shell">
          <Reveal>
            <div className="fp-training-panels__head" data-reveal>
              <h2
                id="training-panels-heading"
                className="fp-section-title fp-section-title--compact"
              >
                Four groups. Every session.
              </h2>
              <p className="fp-lead fp-muted">
                Each group has a lead session and the nearby options worth comparing. Open the full
                list when you want every published time.
              </p>
            </div>
          </Reveal>

          {CLASS_CATEGORIES.map((category) => (
            <TrainingPanel key={category.id} category={category} />
          ))}
        </div>
      </section>

      <section className="fp-coaches" aria-labelledby="training-coaches-heading">
        <div className="section-shell fp-training-coaches__layout">
          <Reveal>
            <div data-reveal>
              <h2
                id="training-coaches-heading"
                className="fp-section-title fp-section-title--compact"
              >
                Coaching when you want it.
              </h2>
              <p className="fp-lead fp-muted">
                Charlene and Clive can help you choose a starting point and build a session around
                your goal.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div data-reveal data-reveal-delay="80">
              <CoachList />
            </div>
          </Reveal>
        </div>
      </section>

      <HealthTools headingId="training-health-heading" compact showRouteLink />

      <section className="fp-training-reception" aria-labelledby="training-reception-heading">
        <Reveal>
          <div className="section-shell fp-training-reception__inner" data-reveal>
            <div>
              <h2 id="training-reception-heading">Need a timetable confirmed?</h2>
              <p>
                For sessions without a published timetable, ask reception what is currently running
                and what to bring.
              </p>
            </div>
            <a href={FITNESSPLANET_CONTACT.phoneHref} className="fp-button-signal">
              <span>Ask reception</span>
              <small>{FITNESSPLANET_CONTACT.phone}</small>
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
