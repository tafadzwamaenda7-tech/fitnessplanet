import { createFileRoute, Link } from "@tanstack/react-router";
import { ProgramsCarousel } from "@/components/ProgramsCarousel";
import { JoinNowBanner } from "@/components/SiteChrome";
import { MEMBERSHIP_TIERS, MIGYM_ASSETS } from "@/data/migym";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MiGym Harare | Join Harare's premium gym and fitness community" },
      {
        name: "description",
        content:
          "Join MiGym Harare at 216 Rolf Ave for Technogym equipment, CrossFit, HYROX, MiHIIT, MiSpin, personal training, pool, and Raw Roots Co.",
      },
      { property: "og:title", content: "MiGym Harare | Join Harare's premium gym and fitness community" },
      {
        property: "og:description",
        content:
          "Join MiGym Harare at 216 Rolf Ave for Technogym equipment, CrossFit, HYROX, MiHIIT, MiSpin, personal training, pool, and Raw Roots Co.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: MIGYM_ASSETS.aboutPhoto },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: MIGYM_ASSETS.aboutPhoto },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero with looping video */}
      <section className="relative flex min-h-[76vh] items-center justify-center overflow-hidden bg-surface-dark text-center text-surface-dark-foreground">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={MIGYM_ASSETS.aboutPhoto}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={MIGYM_ASSETS.heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-surface-dark/55" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 py-24 sm:px-6">
          <h1 className="text-[clamp(1.45rem,6.8vw,4.5rem)] font-extrabold leading-tight tracking-tight">
            M<span className="text-primary">i</span>F<span className="text-primary">i</span>tness.M
            <span className="text-primary">i</span>Future.M<span className="text-primary">i</span>L
            <span className="text-primary">i</span>fe
          </h1>
          <div className="mt-8">
            <Link to="/contact" className="btn-migym-yellow">
              Join Now
            </Link>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
          <div>
            <h2 className="migym-heading text-3xl text-foreground sm:text-4xl">About Us</h2>
            <span className="migym-yellow-bar mt-4" />
            <p className="mt-7 text-sm leading-7 text-muted-foreground sm:text-base">
              At MiGym, the focus is on personal choice and individual goals. No one can force you to go to the gym or
              exercise, but it’s your own decision and goals that will determine your outcomes and results. MiGym Harare
              provides a supportive environment where you can challenge yourself, not to outdo others, but to improve
              yourself and achieve your own victories. We recognise that everyone has unique goals, whether it’s getting
              fit, gaining strength, staying healthy, or losing weight. That’s why MiGym Harare offers a variety of
              exercise options to suit your individual needs. With personal support and guidance, the journey to a
              healthier life becomes less daunting and more achievable.
            </p>
          </div>
          <div>
            <img
              src={MIGYM_ASSETS.aboutPhoto}
              alt="MiGym Harare main training floor"
              className="w-full object-cover shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Memberships */}
      <section className="relative overflow-hidden bg-surface-dark py-20 text-surface-dark-foreground">
        <img
          src={MIGYM_ASSETS.membershipsBg}
          alt="MiGym group training session"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-dark/90 via-surface-dark/75 to-surface-dark/65" />

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                {MEMBERSHIP_TIERS.map((tier) => (
                  <div key={tier.name} className="flex flex-col overflow-hidden rounded-xl text-center">
                    <div className="flex-1 bg-tier-header px-4 py-5 text-primary-foreground">
                      <h3 className="text-base font-bold uppercase tracking-wide">{tier.name}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-primary-foreground/90">{tier.description}</p>
                    </div>
                    <div className="bg-tier-price px-4 py-6 text-primary-foreground">
                      <div className="flex items-start justify-center font-extrabold leading-none">
                        <span className="mt-1 text-base opacity-80">$</span>
                        <span className="text-4xl tracking-tight">{tier.price}</span>
                        {tier.period && <span className="self-end pb-1 text-sm font-semibold opacity-80">{tier.period}</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-xs leading-relaxed text-surface-dark-foreground/85 sm:text-sm">
                <strong className="font-bold text-surface-dark-foreground">Please note:</strong> To provide the best
                training experience, MiGym now operates on membership-based access only. All new members are required to
                pay a once-off $30 sign-up fee, which covers administration and a full induction at MiGym.
              </p>
            </div>

            <div className="lg:col-span-5 lg:pt-6">
              <h2 className="migym-heading text-3xl text-surface-dark-foreground/60 sm:text-4xl">Memberships</h2>
              <span className="migym-yellow-bar mt-4" />
              <p className="mt-7 text-sm leading-7 text-surface-dark-foreground/90 sm:text-base">
                At MiGym we offer a range of membership options to suit different training needs. Membership accounts
                can be set up at reception during our opening hours.
              </p>
              <p className="mt-4 text-sm leading-7 text-surface-dark-foreground/90 sm:text-base">
                All membership types provide full gym access, including participation in all scheduled classes. Payments
                can be made monthly or for a set term paid in full upfront. Payment for your first month is required at
                the time of sign-up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Class Buttons + Yellow Chevron Divider */}
      <section className="relative bg-background pt-14">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-6 px-6 pb-16 sm:flex-row sm:gap-12">
          <Link to="/classes" className="btn-migym-dark w-full sm:w-auto sm:min-w-[290px]">
            Members - Book a Class
          </Link>
          <Link to="/contact" className="btn-migym-dark w-full sm:w-auto sm:min-w-[290px]">
            Non-members - Book a Class
          </Link>
        </div>
        <div className="w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1280 56" preserveAspectRatio="none" className="block h-10 w-full sm:h-14" aria-hidden="true">
            <polygon points="0,0 640,52 1280,0 1280,56 0,56" className="fill-primary" />
          </svg>
        </div>
      </section>

      {/* 7-Slide Programs Carousel */}
      <ProgramsCarousel />

      {/* Our Team with curved top wave */}
      <section className="relative bg-surface-dark pb-20 text-surface-dark-foreground">
        <div className="w-full overflow-hidden bg-background leading-none">
          <svg viewBox="0 0 1440 110" preserveAspectRatio="none" className="block h-16 w-full sm:h-24" aria-hidden="true">
            <path d="M0,0 C360,95 960,115 1440,100 L1440,110 L0,110 Z" className="fill-surface-dark" />
          </svg>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pt-6 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="migym-heading text-3xl sm:text-4xl">Our Team</h2>
            <p className="mt-6 text-sm leading-7 text-surface-dark-foreground/85 sm:text-base">
              At MiGym, our team is made up of dedicated fitness professionals who are passionate about helping you
              achieve your health goals. From personal trainers to class instructors, we have the expertise to guide and
              motivate you on your fitness journey.
            </p>
            <div className="mt-8">
              <Link to="/trainers" className="btn-migym-yellow">
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:col-span-7">
            <img
              src={MIGYM_ASSETS.teamPhoto}
              alt="MiGym personal trainer coaching a member"
              className="max-h-[460px] w-full object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Our Facilities */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="migym-heading text-3xl text-muted-foreground/55 sm:text-4xl">Our Facilities</h2>
          <span className="migym-yellow-bar mt-4" />
          <p className="mt-7 max-w-5xl text-sm leading-7 text-foreground/85 sm:text-base">
            At MiGym, we offer state-of-the-art facilities that cater to all your fitness needs. Our gym sections are
            equipped with the latest Technogym fitness equipment and technology, including free weights, cardio
            machines, and strength training equipment. Our spacious and modern change rooms provide a comfortable and
            private space for you to prepare for your workout. Cool off with a refreshing swim in our pristine pool, or
            refuel at Raw Roots Co. with a delicious and healthy meal.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {MIGYM_ASSETS.facilities.map((item) => (
              <div key={item.title} className="overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="aspect-[3/2] w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/facilities" className="btn-migym-dark">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <JoinNowBanner />
    </>
  );
}
