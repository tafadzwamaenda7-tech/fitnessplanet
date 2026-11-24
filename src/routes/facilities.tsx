import { Reveal } from "@/components/Reveal";
import { createFileRoute } from "@tanstack/react-router";
import {
  FITNESSPLANET_ASSETS,
  FITNESSPLANET_CONTACT,
  FITNESSPLANET_IMAGES,
} from "@/data/fitnessplanet";

function facilityId(title: string) {
  return `facility-${title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}`;
}

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities | Fitnessplanet Harare" },
      {
        name: "description",
        content:
          "Fitnessplanet Harare: Technogym training floor, cardio and studio spaces, change rooms, pool, sauna, cold plunge and Raw Roots Co. cafe.",
      },
      { property: "og:title", content: "Facilities | Fitnessplanet Harare" },
      {
        property: "og:description",
        content:
          "Fitnessplanet Harare: Technogym training floor, cardio and studio spaces, change rooms, pool, sauna, cold plunge and Raw Roots Co. cafe.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FacilitiesPage,
});

function FacilitiesPage() {
  return (
    <>
      <section className="fp-facility-opening" aria-labelledby="facilities-heading">
        <div className="section-shell fp-facility-opening__heading" data-enter>
          <h1 id="facilities-heading">Everything on one site.</h1>
          <p className="fp-lead fp-muted">
            A training floor, studios, change rooms, pool, sauna, cold plunge and Raw Roots Co. at
            Harare Show Grounds.
          </p>
        </div>

        <div className="fp-facility-opening__strip" data-spatial>
          <Reveal>
            <span className="fp-image fp-image--wide" data-reveal>
              <img
                src={FITNESSPLANET_IMAGES.floor}
                alt="Fitnessplanet training floor footage"
                loading="eager"
                decoding="async"
              />
            </span>
          </Reveal>
        </div>

        <div className="section-shell">
          <nav className="fp-facility-opening__index" aria-label="On-site index">
            {FITNESSPLANET_ASSETS.facilities.map((item) => (
              <a key={item.title} href={`#${facilityId(item.title)}`} className="fp-text-link">
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="fp-facility-gallery-section" aria-label="Facility photography">
        <div className="section-shell fp-facility-gallery" data-spatial>
          <Reveal>
            <span className="fp-image fp-image--wide" data-reveal>
              <img
                src={FITNESSPLANET_IMAGES.classes}
                alt="Fitnessplanet studio footage"
                loading="lazy"
                decoding="async"
              />
            </span>
          </Reveal>
          <Reveal>
            <span className="fp-image fp-image--wide" data-reveal data-reveal-delay="80">
              <img
                src={FITNESSPLANET_IMAGES.recovery}
                alt="Fitnessplanet recovery area footage"
                loading="lazy"
                decoding="async"
              />
            </span>
          </Reveal>
          <Reveal>
            <span className="fp-image fp-image--wide" data-reveal data-reveal-delay="160">
              <img
                src={FITNESSPLANET_IMAGES.insideSmall}
                alt="Fitnessplanet training footage"
                loading="lazy"
                decoding="async"
              />
            </span>
          </Reveal>
        </div>
      </section>

      <section className="fp-amenities" aria-labelledby="amenities-heading">
        <div className="section-shell">
          <h2 id="amenities-heading" className="fp-section-title fp-section-title--compact">
            Built for the whole session.
          </h2>
          <ul className="fp-amenities__list mt-10">
            {FITNESSPLANET_ASSETS.facilities.map((item, index) => (
              <Reveal key={item.title}>
                <li
                  id={facilityId(item.title)}
                  className="scroll-mt-28"
                  data-reveal
                  data-reveal-delay={index * 80}
                >
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="fp-raw" aria-labelledby="raw-heading">
        <Reveal>
          <div className="section-shell fp-raw__layout" data-reveal>
            <h2 id="raw-heading" className="fp-section-title fp-section-title--compact">
              Raw Roots Co.
            </h2>
            <p className="fp-lead fp-muted">
              Whole-food meals, protein-packed smoothie bowls, salads and wraps are available inside
              the gym, with Gluten-Free, Paleo and Vegan options. Raw Roots Express is also at 167
              Enterprise Road for a quick refuel outside the gym.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="fp-facility-visit" aria-labelledby="facility-visit-heading">
        <div className="section-shell fp-facility-visit__layout">
          <Reveal>
            <span className="fp-image fp-image--wide" data-reveal>
              <img
                src={FITNESSPLANET_IMAGES.insideTop}
                alt="Fitnessplanet training footage"
                loading="lazy"
                decoding="async"
              />
            </span>
          </Reveal>
          <Reveal>
            <div data-reveal data-reveal-delay="80">
              <h2 id="facility-visit-heading">Come by during opening hours.</h2>
              <p className="fp-lead fp-muted">
                {FITNESSPLANET_CONTACT.address}. Call {FITNESSPLANET_CONTACT.phone} to arrange a
                tour.
              </p>
              <div className="fp-contact__hours">
                {FITNESSPLANET_CONTACT.hours.map((row) => (
                  <p key={row.days}>
                    <span>{row.days}</span>
                    <span className="tabular-nums">{row.time}</span>
                  </p>
                ))}
              </div>
              <a href={FITNESSPLANET_CONTACT.phoneHref} className="fp-button-signal">
                <span>Plan a visit</span>
                <small>{FITNESSPLANET_CONTACT.phone}</small>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
