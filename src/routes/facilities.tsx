import { createFileRoute } from "@tanstack/react-router";
import { JoinNowBanner } from "@/components/SiteChrome";
import { MIGYM_ASSETS } from "@/data/migym";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities | MiGym Harare" },
      { name: "description", content: "Explore MiGym Harare's Technogym floor, modern change rooms, pool, recovery sauna & cold plunge, and Raw Roots Co. cafe." },
      { property: "og:title", content: "Facilities | MiGym Harare" },
      { property: "og:description", content: "Explore MiGym Harare's Technogym floor, modern change rooms, pool, recovery sauna & cold plunge, and Raw Roots Co. cafe." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FacilitiesPage,
});

function FacilitiesPage() {
  return (
    <>
      <section className="bg-surface-dark py-16 text-center text-surface-dark-foreground">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="migym-heading text-4xl sm:text-5xl">Our Facilities</h1>
          <span className="migym-yellow-bar mx-auto mt-4" />
          <p className="mt-6 text-base text-surface-dark-foreground/85">
            State-of-the-art Technogym equipment, modern change rooms, pool, sauna & cold plunge, and Raw Roots Co.
          </p>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-6xl space-y-14 px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {MIGYM_ASSETS.facilities.map((item) => (
              <div key={item.title} className="flex flex-col border border-border bg-card">
                <img src={item.src} alt={item.alt} className="aspect-[3/2] w-full object-cover" />
                <div className="flex-1 p-6">
                  <h2 className="text-lg font-bold text-foreground">{item.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 items-center gap-10 border-t border-border pt-14 md:grid-cols-2">
            <div>
              <h2 className="migym-heading text-2xl text-foreground sm:text-3xl">Fuel Your Fitness at Raw Roots Co.</h2>
              <span className="migym-yellow-bar mt-4" />
              <p className="mt-6 text-sm leading-7 text-muted-foreground sm:text-base">
                Located right here at MiGym, Raw Roots Co. is your go-to destination for vibrant, whole-food nutrition.
                From protein-packed smoothie bowls and hearty salads to signature wraps, the menu supports every active
                lifestyle including Gluten-Free, Paleo, and Vegan options.
              </p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                You can also find Raw Roots Express outside the gym at 167 Enterprise Road — perfect for a quick,
                healthy refuel on the go.
              </p>
            </div>
            <img
              src={MIGYM_ASSETS.facilities[2]?.src ?? MIGYM_ASSETS.aboutPhoto}
              alt="Raw Roots Co. at MiGym Harare"
              className="aspect-[3/2] w-full object-cover shadow-md"
            />
          </div>
        </div>
      </section>

      <JoinNowBanner />
    </>
  );
}