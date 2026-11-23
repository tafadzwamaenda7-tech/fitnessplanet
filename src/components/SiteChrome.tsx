import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, X, MessageCircle } from "lucide-react";
import { useState } from "react";
import { MIGYM_ASSETS, MIGYM_CONTACT, PROGRAM_SLIDES } from "@/data/migym";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const navLinkClass = (path: string) =>
    `text-sm font-medium transition-colors ${
      pathname === path ? "text-primary" : "text-surface-dark-foreground hover:text-primary"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-surface-dark text-surface-dark-foreground border-b border-surface-dark-foreground/10">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center shrink-0" aria-label="MiGym Harare Home">
          <img src={MIGYM_ASSETS.logo} alt="MiGym" className="h-10 w-auto object-contain" />
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          <Link to="/" className={navLinkClass("/")}>Home</Link>

          <div className="group relative py-2">
            <Link to="/trainers" className={`inline-flex items-center gap-1 ${navLinkClass("/trainers")}`}>
              Our Team <ChevronDown className="h-3.5 w-3.5" />
            </Link>
            <div className="invisible absolute left-0 top-full w-48 border-t-2 border-primary bg-surface-dark py-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
              <Link to="/trainers" className="block px-4 py-2 text-sm text-surface-dark-foreground hover:bg-surface-dark-foreground/10 hover:text-primary">
                Personal Trainers
              </Link>
              <Link to="/trainers" hash="instructors" className="block px-4 py-2 text-sm text-surface-dark-foreground hover:bg-surface-dark-foreground/10 hover:text-primary">
                Class Instructors
              </Link>
              <Link to="/trainers" hash="staff" className="block px-4 py-2 text-sm text-surface-dark-foreground hover:bg-surface-dark-foreground/10 hover:text-primary">
                Staff
              </Link>
            </div>
          </div>

          <div className="group relative py-2">
            <Link to="/classes" className={`inline-flex items-center gap-1 ${navLinkClass("/classes")}`}>
              Classes <ChevronDown className="h-3.5 w-3.5" />
            </Link>
            <div className="invisible absolute left-0 top-full w-44 border-t-2 border-primary bg-surface-dark py-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
              {PROGRAM_SLIDES.map((prog) => (
                <Link
                  key={prog.id}
                  to="/classes"
                  hash={prog.id}
                  className="block px-4 py-2 text-sm text-surface-dark-foreground hover:bg-surface-dark-foreground/10 hover:text-primary"
                >
                  {prog.name}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/facilities" className={navLinkClass("/facilities")}>Facilities</Link>
          <Link to="/community" className={navLinkClass("/community")}>Community</Link>
          <Link to="/contact" className={navLinkClass("/contact")}>Contact</Link>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex items-center justify-center p-2 text-surface-dark-foreground hover:text-primary md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-surface-dark-foreground/15 bg-surface-dark px-6 py-4 md:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-3">
            <Link to="/" onClick={() => setMobileOpen(false)} className={navLinkClass("/")}>Home</Link>
            <Link to="/trainers" onClick={() => setMobileOpen(false)} className={navLinkClass("/trainers")}>Our Team</Link>
            <Link to="/classes" onClick={() => setMobileOpen(false)} className={navLinkClass("/classes")}>Classes</Link>
            <Link to="/facilities" onClick={() => setMobileOpen(false)} className={navLinkClass("/facilities")}>Facilities</Link>
            <Link to="/community" onClick={() => setMobileOpen(false)} className={navLinkClass("/community")}>Community</Link>
            <Link to="/contact" onClick={() => setMobileOpen(false)} className={navLinkClass("/contact")}>Contact</Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function JoinNowBanner() {
  return (
    <section className="relative overflow-hidden py-24 text-center text-surface-dark-foreground">
      <img
        src={MIGYM_ASSETS.joinNowBg}
        alt="Members training at MiGym Harare"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-surface-dark/65" />
      <div className="relative z-10 mx-auto max-w-2xl px-6">
        <h2 className="migym-heading text-4xl sm:text-5xl">Join Now</h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-surface-dark-foreground/90">
          Sign up and become a member of the MiGym fitness and lifestyle community. Visit MiGym for a tour of our facilities and watch classes in action.
        </p>
        <div className="mt-8">
          <Link to="/contact" className="btn-migym-yellow">
            Click Here
          </Link>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-surface-dark py-14 text-surface-dark-foreground">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 text-center md:grid-cols-4 md:items-start">
        <div className="flex flex-col items-center md:items-start md:text-left">
          <img src={MIGYM_ASSETS.logo} alt="MiGym" className="h-12 w-auto object-contain" />
          <p className="mt-5 text-xs text-surface-dark-foreground/55">
            ©Copyright 2023 MiGym. All rights reserved.
          </p>
          <p className="mt-1 text-xs text-surface-dark-foreground/45">
            216 Rolf Ave, Harare
          </p>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-sm font-bold tracking-wide text-surface-dark-foreground">Get Social</h3>
          <div className="mt-3 flex items-center gap-2.5">
            <a
              href={MIGYM_CONTACT.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="MiGym Facebook"
              className="flex h-8 w-8 items-center justify-center rounded bg-surface-dark-foreground/15 text-xs font-bold text-surface-dark-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              f
            </a>
            <a
              href={MIGYM_CONTACT.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="MiGym Instagram"
              className="flex h-8 w-8 items-center justify-center rounded bg-surface-dark-foreground/15 text-xs font-bold text-surface-dark-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              ig
            </a>
            <a
              href={MIGYM_CONTACT.social.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="MiGym YouTube"
              className="flex h-8 w-8 items-center justify-center rounded bg-surface-dark-foreground/15 text-xs font-bold text-surface-dark-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              yt
            </a>
          </div>
          <h3 className="mt-6 text-sm font-bold tracking-wide text-surface-dark-foreground">Contact</h3>
          <a href={MIGYM_CONTACT.phoneHref} className="mt-2 text-sm text-surface-dark-foreground/75 hover:text-primary">
            {MIGYM_CONTACT.phone}
          </a>
          <a href={`mailto:${MIGYM_CONTACT.email}`} className="mt-1 text-sm text-surface-dark-foreground/75 hover:text-primary">
            {MIGYM_CONTACT.email}
          </a>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-sm font-bold tracking-wide text-surface-dark-foreground">Quick Links</h3>
          <ul className="mt-3 space-y-1.5 text-sm text-surface-dark-foreground/75">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/community" className="hover:text-primary">Community</Link></li>
            <li><Link to="/facilities" className="hover:text-primary">Facilities</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <Link to="/contact" className="btn-migym-yellow">
            Join Now
          </Link>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <a
      href={MIGYM_CONTACT.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with MiGym on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-surface-dark-foreground shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}