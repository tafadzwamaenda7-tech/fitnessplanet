import { Reveal } from "@/components/Reveal";
import { createFileRoute } from "@tanstack/react-router";
import { HealthTools } from "@/components/HealthTools";
import { FITNESSPLANET_IMAGES } from "@/data/fitnessplanet";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community & Health Calculators | Fitnessplanet Harare" },
      {
        name: "description",
        content:
          "Use Fitnessplanet Harare's BMI and Target Heart Rate health calculators and stay connected with our fitness community.",
      },
      { property: "og:title", content: "Community & Health Calculators | Fitnessplanet Harare" },
      {
        property: "og:description",
        content:
          "Use Fitnessplanet Harare's BMI and Target Heart Rate health calculators and stay connected with our fitness community.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CommunityPage,
});

function CommunityPage() {
  return (
    <>
      <section className="fp-tools-opening" aria-labelledby="community-heading">
        <div className="section-shell fp-tools-opening__inner" data-enter>
          <div>
            <h1 id="community-heading">Know your starting point.</h1>
            <p className="fp-lead fp-muted">
              Two quick reference tools for members: body mass index and a target heart-rate
              training zone. Ask a coach if you want help putting the numbers into context.
            </p>
          </div>
          <nav className="fp-tools-opening__jump" aria-label="Calculators">
            <a href="#bmi" className="fp-text-link fp-text-link--ink">
              Body mass index
            </a>
            <a href="#heart-rate" className="fp-text-link fp-text-link--ink">
              Heart-rate zone
            </a>
          </nav>
        </div>

        <div className="fp-tools-opening__image" data-spatial>
          <Reveal>
            <span className="fp-image fp-image--wide" data-reveal>
              <img
                src={FITNESSPLANET_IMAGES.community}
                alt="Fitnessplanet training footage"
                loading="eager"
                decoding="async"
              />
            </span>
          </Reveal>
        </div>
      </section>

      <HealthTools headingId="community-tools-heading" />
    </>
  );
}
