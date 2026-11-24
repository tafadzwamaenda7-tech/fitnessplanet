import { Reveal } from "@/components/Reveal";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function HealthTools({
  headingId = "health-tools-heading",
  compact = false,
  showRouteLink = false,
}: {
  headingId?: string;
  compact?: boolean;
  showRouteLink?: boolean;
}) {
  const [weightKg, setWeightKg] = useState("72");
  const [heightCm, setHeightCm] = useState("175");
  const [age, setAge] = useState("30");

  const w = Number(weightKg);
  const h = Number(heightCm);
  const a = Number(age);

  const bmiValid =
    Number.isFinite(w) && w > 20 && w < 350 && Number.isFinite(h) && h > 80 && h < 260;
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
    <section className="fp-health" id="health-tools" aria-labelledby={headingId}>
      <div className="section-shell fp-health__layout">
        <Reveal>
          <div className="fp-health__intro" data-reveal>
            <h2 id={headingId} className="fp-section-title fp-section-title--compact">
              {compact ? "Check the basics." : "Reference tools."}
            </h2>
            <p className="fp-lead fp-muted">
              Body mass index and a target heart-rate training zone, ready to use. Ask a coach if
              you want help putting the numbers into context.
            </p>
            {showRouteLink ? (
              <Link to="/community" className="fp-text-link">
                Open the health tools page
              </Link>
            ) : null}
          </div>
        </Reveal>

        <div>
          <div className="fp-health__grid">
            <Reveal>
              <div id="bmi" className="fp-health-card scroll-mt-28" data-reveal>
                <h3>Body Mass Index (BMI)</h3>
                <div className="fp-health-card__inputs fp-health-card__inputs--pair">
                  <label className="fp-field-label">
                    Weight (kg)
                    <input
                      type="number"
                      min={21}
                      max={349}
                      value={weightKg}
                      onChange={(event) => setWeightKg(event.target.value)}
                      className="fp-field"
                    />
                  </label>
                  <label className="fp-field-label">
                    Height (cm)
                    <input
                      type="number"
                      min={81}
                      max={259}
                      value={heightCm}
                      onChange={(event) => setHeightCm(event.target.value)}
                      className="fp-field"
                    />
                  </label>
                </div>
                <div
                  className="fp-result"
                  role="status"
                  aria-label="BMI result"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  <p className="fp-result__label">Result</p>
                  {bmi !== null ? (
                    <p>
                      <strong className="fp-readout">{bmi.toFixed(1)}</strong>
                      <span>{bmiLabel}</span>
                    </p>
                  ) : (
                    <p className="fp-result__empty">
                      Enter a valid weight (21–349 kg) and height (81–259 cm).
                    </p>
                  )}
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div
                id="heart-rate"
                className="fp-health-card scroll-mt-28"
                data-reveal
                data-reveal-delay="80"
              >
                <h3>Target Heart Rate Zone</h3>
                <div className="fp-health-card__inputs">
                  <label className="fp-field-label">
                    Age (years)
                    <input
                      type="number"
                      min={14}
                      max={100}
                      value={age}
                      onChange={(event) => setAge(event.target.value)}
                      className="fp-field"
                    />
                  </label>
                </div>
                <div
                  className="fp-result"
                  role="status"
                  aria-label="Target heart rate result"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  <p className="fp-result__label">Result</p>
                  {maxHr !== null && zoneLow !== null && zoneHigh !== null ? (
                    <p>
                      <strong className="fp-readout">
                        {zoneLow}–{zoneHigh}
                      </strong>
                      <span>bpm target · max {maxHr} bpm</span>
                    </p>
                  ) : (
                    <p className="fp-result__empty">Enter an age between 14 and 100.</p>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <p className="fp-health__note" data-reveal>
              These are general reference tools, not medical advice.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
