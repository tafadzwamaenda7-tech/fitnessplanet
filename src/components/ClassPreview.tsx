import { Reveal } from "@/components/Reveal";
import { Link } from "@tanstack/react-router";
import { CLASS_CATEGORIES, FITNESSPLANET_IMAGES, PROGRAM_SLIDES } from "@/data/fitnessplanet";

const pathImages = [
  FITNESSPLANET_IMAGES.floor,
  FITNESSPLANET_IMAGES.classes,
  FITNESSPLANET_IMAGES.coaching,
  FITNESSPLANET_IMAGES.recovery,
];

export function ClassPreview() {
  return (
    <section className="fp-paths" aria-labelledby="paths-heading">
      <div className="section-shell">
        <Reveal>
          <div className="fp-paths__head" data-reveal>
            <div>
              <h2 id="paths-heading" className="fp-section-title fp-section-title--compact">
                Four ways to train.
              </h2>
            </div>
            <Link to="/classes" className="fp-text-link fp-text-link--ink">
              Full class directory
            </Link>
          </div>
        </Reveal>

        <div className="fp-path-list">
          {CLASS_CATEGORIES.map((category, index) => {
            const names = PROGRAM_SLIDES.filter(
              (program) => program.category === category.label,
            ).map((program) => program.name);

            return (
              <Reveal key={category.id}>
                <article className="fp-path-row" data-reveal data-reveal-delay={index * 80}>
                  <span className="fp-image fp-image--square">
                    <img src={pathImages[index]} alt="" loading="lazy" decoding="async" />
                  </span>
                  <h3>{category.label}</h3>
                  <p>
                    {category.summary} {names.slice(0, 3).join(" · ")}.
                  </p>
                  <Link to="/classes" hash={category.id} className="fp-text-link fp-text-link--ink">
                    Explore
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
