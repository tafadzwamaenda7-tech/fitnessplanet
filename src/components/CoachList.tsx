import { Reveal } from "@/components/Reveal";
import { FITNESSPLANET_CONTACT, TRAINERS } from "@/data/fitnessplanet";

export function CoachList() {
  return (
    <div id="instructors" className="fp-coach-list scroll-mt-28">
      {TRAINERS.map((trainer, index) => (
        <Reveal key={trainer.name}>
          <article
            id={trainer.name.toLowerCase()}
            className="fp-coach scroll-mt-28"
            data-reveal
            data-reveal-delay={index * 80}
          >
            <div>
              <h3>{trainer.name}</h3>
              <p className="fp-coach__role">{trainer.role}</p>
            </div>
            <a
              href={FITNESSPLANET_CONTACT.phoneHref}
              className="fp-text-link fp-text-link--ink fp-text-link--stack"
            >
              <span>Book a session</span>
              <small>{FITNESSPLANET_CONTACT.phone}</small>
            </a>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
