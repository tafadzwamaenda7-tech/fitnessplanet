import { Reveal } from "@/components/Reveal";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { toast } from "sonner";
import {
  FITNESSPLANET_CONTACT,
  FITNESSPLANET_IMAGES,
  MEMBERSHIP_TIERS,
} from "@/data/fitnessplanet";

function interestForTier(tier: (typeof MEMBERSHIP_TIERS)[number]) {
  return `${tier.name} ($${tier.price}${tier.period ?? ""})`;
}

const DEFAULT_INTEREST = MEMBERSHIP_TIERS[0]
  ? interestForTier(MEMBERSHIP_TIERS[0])
  : "Standard Membership ($120/mo)";

const INTEREST_VALUES = [
  ...MEMBERSHIP_TIERS.map(interestForTier),
  "Non-member Class Booking",
  "Facility Tour",
];

const INTEREST_SET = new Set<string>(INTEREST_VALUES);

type ContactSearch = { interest?: string };

function validateInterest(value: unknown): string | undefined {
  return typeof value === "string" && INTEREST_SET.has(value) ? value : undefined;
}

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): ContactSearch => {
    const interest = validateInterest(search["interest"]);
    return interest ? { interest } : {};
  },
  head: () => ({
    meta: [
      { title: "Contact Us | Fitnessplanet Harare" },
      {
        name: "description",
        content:
          "Visit Fitnessplanet Harare at Harare Show Grounds, Stand 126, Harare, Zimbabwe, view opening hours, or send an inquiry for memberships and class bookings.",
      },
      { property: "og:title", content: "Contact Us | Fitnessplanet Harare" },
      {
        property: "og:description",
        content:
          "Visit Fitnessplanet Harare at Harare Show Grounds, Stand 126, Harare, Zimbabwe, view opening hours, or send an inquiry for memberships and class bookings.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { interest: searchInterest } = Route.useSearch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState(searchInterest ?? DEFAULT_INTEREST);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (searchInterest) setInterest(searchInterest);
  }, [searchInterest]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      toast.error("Please enter your name and email address.");
      return;
    }
    setSubmitted(true);
    toast.success("Inquiry received! Our reception team will reach out shortly.");
  }

  return (
    <>
      <section className="fp-contact" aria-label="Contact details and inquiry form">
        <div className="section-shell fp-contact__strip" data-spatial>
          <span className="fp-image fp-image--wide" data-enter>
            <img
              src={FITNESSPLANET_IMAGES.contactWide}
              alt="Fitnessplanet training footage"
              loading="eager"
              decoding="async"
            />
          </span>
          <span className="fp-image fp-image--wide" data-enter>
            <img
              src={FITNESSPLANET_IMAGES.contactSmall}
              alt="Fitnessplanet training footage"
              loading="lazy"
              decoding="async"
            />
          </span>
        </div>

        <div className="section-shell fp-contact__layout">
          <Reveal>
            <div className="fp-contact__form-surface" data-reveal>
              <h1 className="fp-contact__form-heading">Start a conversation.</h1>
              <p className="fp-contact__text">
                Send an inquiry or book a tour at Harare Show Grounds, Stand 126.
              </p>
              <p className="fp-contact__quick">
                Prefer to talk now?
                <a
                  href={FITNESSPLANET_CONTACT.phoneHref}
                  className="fp-text-link fp-text-link--ink"
                >
                  {FITNESSPLANET_CONTACT.phone}
                </a>
              </p>

              {submitted ? (
                <div className="fp-contact__success" role="status">
                  <p className="fp-contact__success-title">Thank you, {name}!</p>
                  <p>
                    We noted your interest in {interest}. You can also call us on{" "}
                    {FITNESSPLANET_CONTACT.phone}.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setEmail("");
                      setPhone("");
                      setMessage("");
                    }}
                    className="fp-text-link fp-text-link--ink"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="fp-contact__form">
                  <label className="fp-field-label">
                    Full Name <span aria-hidden="true">*</span>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="fp-field"
                    />
                  </label>
                  <div className="fp-contact__field-pair">
                    <label className="fp-field-label">
                      Email <span aria-hidden="true">*</span>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="fp-field"
                      />
                    </label>
                    <label className="fp-field-label">
                      Phone
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="fp-field"
                      />
                    </label>
                  </div>
                  <label className="fp-field-label">
                    I’m interested in
                    <select
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="fp-field"
                    >
                      {INTEREST_VALUES.map((value) => (
                        <option key={value} value={value}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="fp-field-label">
                    Message
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="fp-field"
                    />
                  </label>
                  <button type="submit" className="fp-button-signal w-full">
                    Submit inquiry
                  </button>
                </form>
              )}

              <p className="fp-contact__next">
                Choose your access, sort it at reception, then book your training.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="fp-contact__details" data-reveal data-reveal-delay="80">
              <h2 className="fp-contact__heading">Visit &amp; hours</h2>
              <p className="fp-contact__text">{FITNESSPLANET_CONTACT.address}</p>
              <div className="fp-contact__hours">
                {FITNESSPLANET_CONTACT.hours.map((row) => (
                  <p key={row.days}>
                    <span>{row.days}</span>
                    <span className="tabular-nums">{row.time}</span>
                  </p>
                ))}
              </div>
              <a href={FITNESSPLANET_CONTACT.phoneHref} className="fp-text-link">
                {FITNESSPLANET_CONTACT.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
