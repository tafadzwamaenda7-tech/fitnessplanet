import { Reveal } from "@/components/Reveal";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ClassPreview } from "@/components/ClassPreview";
import { CoachList } from "@/components/CoachList";
import {
  FITNESSPLANET_ASSETS,
  FITNESSPLANET_CONTACT,
  FITNESSPLANET_IMAGES,
  MEMBERSHIP_TIERS,
  TRAINING_PATHS,
} from "@/data/fitnessplanet";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fitnessplanet Harare | Gym, Classes & Coaching" },
      {
        name: "description",
        content:
          "Fitnessplanet Harare at Harare Show Grounds, Stand 126. Gym floor, cardio, aerobics, boxing, karate, CrossFit, HYROX, HIIT, Spin, coaching, sauna, pool, and Raw Roots Co.",
      },
      {
        property: "og:title",
        content: "Fitnessplanet Harare | Gym, Classes & Coaching",
      },
      {
        property: "og:description",
        content:
          "Fitnessplanet Harare at Harare Show Grounds, Stand 126. Gym floor, cardio, aerobics, boxing, karate, CrossFit, HYROX, HIIT, Spin, coaching, sauna, pool, and Raw Roots Co.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const bentoImages = [
  FITNESSPLANET_IMAGES.floor,
  FITNESSPLANET_IMAGES.classes,
  FITNESSPLANET_IMAGES.coaching,
  FITNESSPLANET_IMAGES.recovery,
];

function Index() {
  return (
    <>
      {/* Hero — original video/centred-slogan/button structure, rebranded */}
      <section className="fp-original-hero" aria-label="Fitnessplanet Harare" data-hero-spatial>
        <video
          className="fp-original-hero__video"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src="/hero/fitnessplanet-hero.mp4" type="video/mp4" />
        </video>

        <div className="fp-original-hero__inner">
          <h1 className="sr-only">Fitnessplanet Harare gym, classes and coaching</h1>
          <img
            className="fp-original-hero__slogan"
            width={2344}
            height={219}
            src="/hero/fitnessplanet-slogan.svg"
            alt="Fitnessplanet"
          />

          <a className="fp-original-hero__button" href="/contact">
            Join Now
          </a>
        </div>
      </section>

      <section className="fp-facts" aria-label="Fitnessplanet at a glance">
        <div className="section-shell">
          <div className="fp-facts__surface" data-enter>
            <div className="fp-facts__item">
              <p className="fp-kicker">Location</p>
              <p className="fp-facts__value">{FITNESSPLANET_CONTACT.address}</p>
            </div>
            <div className="fp-facts__item">
              <p className="fp-kicker">Opening hours</p>
              <p className="fp-facts__value">
                {FITNESSPLANET_CONTACT.hours.map((row) => `${row.days} ${row.time}`).join(" · ")}
              </p>
            </div>
            <div className="fp-facts__item">
              <p className="fp-kicker">Reception</p>
              <a href={FITNESSPLANET_CONTACT.phoneHref} className="fp-facts__value fp-facts__phone">
                {FITNESSPLANET_CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="fp-inside" aria-labelledby="inside-heading">
        <div className="section-shell fp-inside__layout">
          <div className="fp-inside__gallery" data-spatial>
            <Reveal>
              <span className="fp-image fp-image--wide" data-reveal>
                <img
                  src={FITNESSPLANET_IMAGES.insideWide}
                  alt="Fitnessplanet training footage"
                  loading="lazy"
                  decoding="async"
                />
              </span>
            </Reveal>
            <Reveal>
              <span className="fp-image fp-image--square" data-reveal data-reveal-delay="80">
                <img
                  src={FITNESSPLANET_IMAGES.insideTop}
                  alt="Fitnessplanet training footage"
                  loading="lazy"
                  decoding="async"
                />
              </span>
            </Reveal>
            <Reveal>
              <span className="fp-image fp-image--square" data-reveal data-reveal-delay="160">
                <img
                  src={FITNESSPLANET_IMAGES.insideSmall}
                  alt="Fitnessplanet training footage"
                  loading="lazy"
                  decoding="async"
                />
              </span>
            </Reveal>
          </div>
          <Reveal>
            <div className="fp-inside__copy" data-reveal>
              <h2 id="inside-heading" className="fp-section-title fp-section-title--lead">
                A real training floor, not a concept.
              </h2>
              <p className="fp-lead fp-muted">
                Train on the floor, join a scheduled class, then cool down and refuel without
                leaving Harare Show Grounds. The pool, sauna, cold plunge and Raw Roots Co. are part
                of the same visit.
              </p>
              <Link to="/facilities" className="fp-text-link fp-text-link--ink">
                See the facilities
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="fp-bento" aria-labelledby="training-heading">
        <div className="section-shell">
          <div className="fp-bento__head">
            <h2 id="training-heading" className="fp-section-title fp-section-title--compact">
              Pick your kind of session.
            </h2>
          </div>

          <div className="fp-bento__grid" data-spatial>
            {TRAINING_PATHS.map((path, index) => (
              <Reveal key={path.title}>
                <article
                  className={`fp-bento__cell fp-bento__cell--${index + 1}`}
                  data-reveal
                  data-reveal-delay={index * 80}
                >
                  <span className="fp-image">
                    <img src={bentoImages[index]} alt="" loading="lazy" decoding="async" />
                  </span>
                  <div>
                    <h3 className="fp-bento__title">{path.title}</h3>
                    <p className="fp-bento__copy">{path.sentence}</p>
                  </div>
                  <Link
                    to={path.to}
                    {...(path.hash ? { hash: path.hash } : {})}
                    className="fp-text-link fp-text-link--ink"
                  >
                    {path.linkLabel}
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="fp-rates" aria-labelledby="rates-heading">
        <div className="section-shell fp-rates__layout">
          <Reveal>
            <div className="fp-rates__copy" data-reveal>
              <h2 id="rates-heading" className="fp-section-title fp-section-title--compact">
                Membership rates.
              </h2>
              <p className="fp-lead">
                Every membership includes full gym access and all scheduled classes. Accounts are
                set up at reception during opening hours.
              </p>
              <p className="fp-rates__small">
                Payments can be made monthly or for a set term paid in full upfront. Your first
                month is paid at sign-up. All new members pay a once-off $30 sign-up fee, which
                covers administration and a full induction at Fitnessplanet.
              </p>
              <a
                href={FITNESSPLANET_CONTACT.phoneHref}
                className="fp-text-link fp-text-link--ink fp-text-link--stack fp-rates__action"
              >
                <span>Join at reception</span>
                <small>{FITNESSPLANET_CONTACT.phone}</small>
              </a>
            </div>
          </Reveal>

          <Reveal>
            <div data-reveal data-reveal-delay="80">
              <table className="fp-rates__table">
                <caption className="sr-only">Fitnessplanet membership rates</caption>
                <thead>
                  <tr>
                    <th scope="col">Plan</th>
                    <th scope="col">Access</th>
                    <th scope="col">Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {MEMBERSHIP_TIERS.map((tier) => (
                    <tr key={tier.name}>
                      <th scope="row">{tier.name}</th>
                      <td>{tier.description}</td>
                      <td>
                        <span className="fp-rates__price">
                          <span aria-hidden="true">$</span>
                          <span className="sr-only">USD </span>
                          {tier.price}
                          {tier.period && <small>{tier.period}</small>}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <ClassPreview />

      <section className="fp-coaches" aria-labelledby="home-coaches-heading">
        <div className="section-shell fp-coaches__layout">
          <Reveal>
            <div data-reveal>
              <span className="fp-image fp-image--tall">
                <img
                  src={FITNESSPLANET_IMAGES.coaching}
                  alt="Fitnessplanet coaching footage"
                  loading="lazy"
                  decoding="async"
                />
              </span>
            </div>
          </Reveal>
          <Reveal>
            <div data-reveal data-reveal-delay="80">
              <h2 id="home-coaches-heading" className="fp-section-title fp-section-title--compact">
                Start with the people who coach you.
              </h2>
              <div className="fp-coaches__note">
                <p>
                  Charlene and Clive help members choose a starting point. Tell reception what you
                  want to work on and book a session when you are ready.
                </p>
              </div>
              <div className="mt-8">
                <CoachList />
              </div>
              <Link to="/trainers" className="fp-text-link fp-text-link--ink mt-8">
                Meet the coaches
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="fp-facilities-home" aria-labelledby="home-facilities-heading">
        <div className="section-shell fp-facilities-home__layout">
          <div className="fp-facilities-home__images" data-spatial>
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
              <span className="fp-image fp-image--square" data-reveal data-reveal-delay="80">
                <img
                  src={FITNESSPLANET_IMAGES.recovery}
                  alt="Fitnessplanet training footage"
                  loading="lazy"
                  decoding="async"
                />
              </span>
            </Reveal>
          </div>
          <Reveal>
            <div data-reveal data-reveal-delay="80">
              <h2
                id="home-facilities-heading"
                className="fp-section-title fp-section-title--compact"
              >
                Everything in one place.
              </h2>
              <p className="fp-lead fp-muted">
                The floor, studios, pool, sauna, cold plunge and Raw Roots Co. are all part of the
                same visit.
              </p>
              <div className="fp-facility-list">
                {FITNESSPLANET_ASSETS.facilities.map((item, index) => (
                  <Reveal key={item.title}>
                    <div data-reveal data-reveal-delay={index * 70}>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Link to="/facilities" className="fp-text-link fp-text-link--ink mt-8">
                Read the full facilities guide
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="fp-home-visit" aria-labelledby="final-heading">
        <div className="section-shell fp-home-visit__layout">
          <Reveal>
            <span className="fp-image fp-image--wide" data-reveal>
              <img
                src={FITNESSPLANET_IMAGES.insideSmall}
                alt="Fitnessplanet training footage"
                loading="lazy"
                decoding="async"
              />
            </span>
          </Reveal>
          <Reveal>
            <div data-reveal data-reveal-delay="80">
              <h2 id="final-heading" className="fp-section-title fp-section-title--compact">
                Visit during opening hours.
              </h2>
              <p className="fp-lead fp-muted">
                Ask reception your questions and choose the right access for you.
              </p>
              <a
                href={FITNESSPLANET_CONTACT.phoneHref}
                className="fp-text-link fp-text-link--ink fp-text-link--stack"
              >
                <span>Plan your visit</span>
                <small>{FITNESSPLANET_CONTACT.phone}</small>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
