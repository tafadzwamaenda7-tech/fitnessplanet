import { Reveal } from "@/components/Reveal";
import { createFileRoute } from "@tanstack/react-router";
import { CoachList } from "@/components/CoachList";
import { FITNESSPLANET_CONTACT, FITNESSPLANET_IMAGES } from "@/data/fitnessplanet";

export const Route = createFileRoute("/trainers")({
  head: () => ({
    meta: [
      { title: "Our Team & Coaches | Fitnessplanet Harare" },
      {
        name: "description",
        content: "Meet Charlene and Clive, the coaches at Fitnessplanet Harare.",
      },
      { property: "og:title", content: "Our Team & Coaches | Fitnessplanet Harare" },
      {
        property: "og:description",
        content: "Meet Charlene and Clive, the coaches at Fitnessplanet Harare.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TrainersPage,
});

function TrainersPage() {
  return (
    <>
      <section className="fp-coach-hero" aria-labelledby="coaches-page-heading">
        <img
          className="fp-coach-hero__image"
          src={FITNESSPLANET_IMAGES.coaching}
          alt=""
          aria-hidden="true"
          loading="eager"
          decoding="async"
        />
        <span className="fp-coach-hero__shade" aria-hidden="true" />
        <div className="section-shell fp-coach-hero__inner" data-enter>
          <h1 id="coaches-page-heading">Charlene &amp; Clive.</h1>
          <p>Two coaches. One starting point.</p>
          <div className="fp-coach-hero__names" aria-hidden="true">
            <span>Charlene</span>
            <span>Clive</span>
          </div>
        </div>
      </section>

      <section className="fp-coach-content" aria-labelledby="coaches-heading">
        <div className="section-shell fp-coach-content__layout">
          <Reveal>
            <div data-reveal>
              <h2 id="coaches-heading" className="fp-section-title fp-section-title--compact">
                Coaching on your terms.
              </h2>
              <p className="fp-lead fp-muted">
                Coaching is available when you want help with technique, progression or choosing a
                starting point. Both coaches work across the floor, strength and conditioning
                sessions.
              </p>
              <Reveal>
                <div id="staff" className="fp-coaches__note scroll-mt-28" data-reveal>
                  <p>
                    Class bookings, membership accounts, floor inductions and facility tours are
                    handled during opening hours. Call {FITNESSPLANET_CONTACT.phone} or send an
                    inquiry.
                  </p>
                </div>
              </Reveal>
            </div>
          </Reveal>

          <Reveal>
            <div data-reveal data-reveal-delay="80">
              <CoachList />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="fp-coach-booking" aria-labelledby="coaches-final-heading">
        <Reveal>
          <div className="section-shell fp-coach-booking__inner" data-reveal>
            <div>
              <h2 id="coaches-final-heading">Tell us what you want to work on.</h2>
              <p>
                Reception can arrange a coaching session or a floor induction during opening hours.
              </p>
            </div>
            <a href={FITNESSPLANET_CONTACT.phoneHref} className="fp-button-signal">
              <span>Book a session</span>
              <small>{FITNESSPLANET_CONTACT.phone}</small>
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
