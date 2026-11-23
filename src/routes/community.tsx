import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { JoinNowBanner } from "@/components/SiteChrome";
import { MIGYM_CONTACT } from "@/data/migym";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community & Health Calculators | MiGym Harare" },
      { name: "description", content: "Use MiGym Harare's BMI and Target Heart Rate health calculators and stay connected with our fitness community." },
      { property: "og:title", content: "Community & Health Calculators | MiGym Harare" },
      { property: "og:description", content: "Use MiGym Harare's BMI and Target Heart Rate health calculators and stay connected with our fitness community." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CommunityPage,
});

function CommunityPage() {
  const [weightKg, setWeightKg] = useState("72");
  const [heightCm, setHeightCm] = useState("175");
  const [age, setAge] = useState("30");

  const w = Number(weightKg);
  const h = Number(heightCm);
  const a = Number(age);

  const bmiValid = Number.isFinite(w) && w > 20 && w < 350 && Number.isFinite(h) && h > 80 && h < 260;
  const bmi = bmiValid ? w / ((h / 100) * (h / 100)) : null;
  const bmiLabel =
    bmi === null
      ? ""
      : bmi < 18.5
        ? "Underweight"
        : bmi < 25
          ? "Healthy weight"
          : bmi < 30
            ? "Overweight"
            : "Obese";

  const hrValid = Number.isFinite(a) && a >= 14 && a <= 100;
  const maxHr = hrValid ? 220 - a : null;
  const zoneLow = maxHr ? Math.round(maxHr * 0.65) : null;
  const zoneHigh = maxHr ? Math.round(maxHr * 0.85) : null;

  return (
    <>
      <section className="bg-surface-dark py-16 text-center text-surface-dark-foreground">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="migym-heading text-4xl sm:text-5xl">Community</h1>
          <span className="migym-yellow-bar mx-auto mt-4" />
          <p className="mt-6 text-base text-surface-dark-foreground/85">
            Health calculators, HYROX simulations, and updates from the MiGym Harare community.
          </p>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="migym-heading text-2xl text-foreground sm:text-3xl">Health Calculators</h2>
          <span className="migym-yellow-bar mt-3" />

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="border border-border bg-card p-6">
              <h3 className="text-lg font-bold text-foreground">Body Mass Index (BMI)</h3>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Weight (kg)
                  <input
                    type="number"
                    min={21}
                    max={349}
                    value={weightKg}
                    onChange={(e) => setWeightKg(e.target.value)}
                    className="mt-1.5 w-full rounded border border-input bg-background px-3 py-2 text-sm text-foreground"
                  />
                </label>
                <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Height (cm)
                  <input
                    type="number"
                    min={81}
                    max={259}
                    value={heightCm}
                    onChange={(e) => setHeightCm(e.target.value)}
                    className="mt-1.5 w-full rounded border border-input bg-background px-3 py-2 text-sm text-foreground"
                  />
                </label>
              </div>
              <div className="mt-5 rounded bg-surface-dark p-4 text-surface-dark-foreground">
                {bmi !== null ? (
                  <p className="text-sm">
                    BMI: <strong className="text-xl text-primary">{bmi.toFixed(1)}</strong> — {bmiLabel}
                  </p>
                ) : (
                  <p className="text-sm text-surface-dark-foreground/75">Enter a valid weight (21–349 kg) and height (81–259 cm).</p>
                )}
              </div>
            </div>

            <div className="border border-border bg-card p-6">
              <h3 className="text-lg font-bold text-foreground">Target Heart Rate Zone</h3>
              <label className="mt-4 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Age (years)
                <input
                  type="number"
                  min={14}
                  max={100}
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="mt-1.5 w-full rounded border border-input bg-background px-3 py-2 text-sm text-foreground"
                />
              </label>
              <div className="mt-5 rounded bg-surface-dark p-4 text-surface-dark-foreground">
                {maxHr !== null && zoneLow !== null && zoneHigh !== null ? (
                  <p className="text-sm">
                    Training zone (65–85%): <strong className="text-xl text-primary">{zoneLow}–{zoneHigh} bpm</strong>{" "}
                    <span className="text-surface-dark-foreground/70">(Max {maxHr} bpm)</span>
                  </p>
                ) : (
                  <p className="text-sm text-surface-dark-foreground/75">Enter an age between 14 and 100.</p>
                )}
              </div>
            </div>
          </div>

          <div className="mt-12 border border-border bg-secondary p-6 text-center">
            <h3 className="text-lg font-bold text-foreground">Follow @migym_zw</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Weekly class schedules, HYROX simulations, and community highlights from Harare.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              <a href={MIGYM_CONTACT.social.instagram} target="_blank" rel="noreferrer" className="btn-migym-dark text-sm">
                Instagram
              </a>
              <a href={MIGYM_CONTACT.social.facebook} target="_blank" rel="noreferrer" className="btn-migym-dark text-sm">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      <JoinNowBanner />
    </>
  );
}