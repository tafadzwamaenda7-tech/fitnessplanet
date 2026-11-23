import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { MEMBERSHIP_TIERS, MIGYM_CONTACT } from "@/data/migym";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | MiGym Harare" },
      { name: "description", content: "Visit MiGym Harare at 216 Rolf Ave, view opening hours, or send an inquiry for memberships and class bookings." },
      { property: "og:title", content: "Contact Us | MiGym Harare" },
      { property: "og:description", content: "Visit MiGym Harare at 216 Rolf Ave, view opening hours, or send an inquiry for memberships and class bookings." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("Standard Membership ($120/mo)");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

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
      <section className="bg-surface-dark py-16 text-center text-surface-dark-foreground">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="migym-heading text-4xl sm:text-5xl">Contact Us</h1>
          <span className="migym-yellow-bar mx-auto mt-4" />
          <p className="mt-6 text-base text-surface-dark-foreground/85">
            Visit MiGym at 216 Rolf Ave, Harare for a facility tour or reach out to book a class.
          </p>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-2">
          <div>
            <h2 className="migym-heading text-2xl text-foreground">Opening Hours</h2>
            <span className="migym-yellow-bar mt-3" />
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground sm:text-base">
              {MIGYM_CONTACT.hours.map((row) => (
                <li key={row.days} className="flex justify-between border-b border-border py-2">
                  <span className="font-semibold text-foreground">{row.days}</span>
                  <span>{row.time}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-2 text-sm text-muted-foreground sm:text-base">
              <p><strong className="text-foreground">Address:</strong> {MIGYM_CONTACT.address}</p>
              <p>
                <strong className="text-foreground">Phone:</strong>{" "}
                <a href={MIGYM_CONTACT.phoneHref} className="underline decoration-primary decoration-2 underline-offset-4">
                  {MIGYM_CONTACT.phone}
                </a>
              </p>
              <p>
                <strong className="text-foreground">Email:</strong>{" "}
                <a href={`mailto:${MIGYM_CONTACT.email}`} className="underline decoration-primary decoration-2 underline-offset-4">
                  {MIGYM_CONTACT.email}
                </a>
              </p>
            </div>
          </div>

          <div className="border border-border bg-card p-6 sm:p-8">
            <h2 className="text-xl font-bold text-foreground">Send an Inquiry or Book a Tour</h2>
            {submitted ? (
              <div className="mt-6 rounded bg-surface-dark p-6 text-surface-dark-foreground">
                <p className="font-semibold text-primary">Thank you, {name}!</p>
                <p className="mt-2 text-sm text-surface-dark-foreground/85">
                  We noted your interest in {interest}. You can also call or WhatsApp reception on {MIGYM_CONTACT.phone}.
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
                  className="btn-migym-yellow mt-5 text-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <label className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Full Name *
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1.5 w-full rounded border border-input bg-background px-3 py-2 text-sm text-foreground"
                  />
                </label>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Email *
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1.5 w-full rounded border border-input bg-background px-3 py-2 text-sm text-foreground"
                    />
                  </label>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Phone / WhatsApp
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="mt-1.5 w-full rounded border border-input bg-background px-3 py-2 text-sm text-foreground"
                    />
                  </label>
                </div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  I’m interested in
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="mt-1.5 w-full rounded border border-input bg-background px-3 py-2 text-sm text-foreground"
                  >
                    {MEMBERSHIP_TIERS.map((tier) => (
                      <option key={tier.name} value={`${tier.name} ($${tier.price}${tier.period ?? ""})`}>
                        {tier.name} (${tier.price}{tier.period ?? ""})
                      </option>
                    ))}
                    <option value="Non-member Class Booking">Non-member Class Booking</option>
                    <option value="Facility Tour">Facility Tour</option>
                  </select>
                </label>
                <label className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Message
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-1.5 w-full rounded border border-input bg-background px-3 py-2 text-sm text-foreground"
                  />
                </label>
                <button type="submit" className="btn-migym-dark w-full">
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}