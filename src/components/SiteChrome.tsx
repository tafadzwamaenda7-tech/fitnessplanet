import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import {
  CLASS_CATEGORIES,
  FITNESSPLANET_ASSETS,
  FITNESSPLANET_CONTACT,
} from "@/data/fitnessplanet";

type NavDestination = "/" | "/classes" | "/facilities" | "/trainers" | "/contact";

interface NavItem {
  label: string;
  to?: NavDestination | "/community";
  href?: string;
  detail?: string;
  hash?: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

type RoutedNavItem = NavItem & { to: NavDestination | "/community" };

function NavDropdown({
  label,
  to,
  sections,
  pathname,
}: {
  label: string;
  to: NavDestination;
  sections: NavSection[];
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerId = useId();
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: PointerEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const active = pathname === to;

  return (
    <div
      ref={wrapperRef}
      className="fp-dropdown"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        id={triggerId}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
        className="fp-nav__trigger"
      >
        {label}
        {active ? <span className="fp-nav__dot" aria-hidden="true" /> : null}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      <div
        id={menuId}
        role="group"
        aria-labelledby={triggerId}
        className={`fp-dropdown__panel ${open ? "is-open" : ""}`}
      >
        <div className="fp-dropdown__surface">
          {sections.map((section) => (
            <div key={section.title} className="mb-3 last:mb-0">
              <p className="fp-dropdown__label">{section.title}</p>
              {section.items.map((item) =>
                item.href ? (
                  <a
                    key={`${item.href}-${item.label}`}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`fp-sub-link${item.detail ? " fp-sub-link--detail" : ""}`}
                  >
                    <span>{item.label}</span>
                    {item.detail ? <small>{item.detail}</small> : null}
                  </a>
                ) : item.to ? (
                  <Link
                    key={`${item.to}-${item.hash ?? ""}-${item.label}`}
                    to={item.to}
                    {...(item.hash ? { hash: item.hash } : {})}
                    onClick={() => setOpen(false)}
                    className="fp-sub-link"
                  >
                    {item.label}
                  </Link>
                ) : null,
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const mobileLinks: RoutedNavItem[] = [
  { label: "Home", to: "/" },
  { label: "Training", to: "/classes" },
  { label: "Facilities", to: "/facilities" },
  { label: "Coaches", to: "/trainers" },
  { label: "Contact", to: "/contact" },
];

const footerSiteLinks: RoutedNavItem[] = [
  { label: "Home", to: "/" },
  { label: "Training", to: "/classes" },
  { label: "Facilities", to: "/facilities" },
  { label: "Coaches", to: "/trainers" },
  { label: "Contact", to: "/contact" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const coachSections: NavSection[] = [
    {
      title: "Coaches",
      items: [
        { label: "Charlene", to: "/trainers", hash: "charlene" },
        { label: "Clive", to: "/trainers", hash: "clive" },
        {
          label: "Book a session",
          href: FITNESSPLANET_CONTACT.phoneHref,
          detail: FITNESSPLANET_CONTACT.phone,
        },
      ],
    },
  ];

  const trainingSections: NavSection[] = [
    {
      title: "Class groups",
      items: CLASS_CATEGORIES.map((category) => ({
        label: category.label,
        to: "/classes" as const,
        hash: category.id,
      })),
    },
  ];

  return (
    <header className="fp-header">
      <div className="section-shell fp-header__inner">
        <Link to="/" className="fp-brand" aria-label="Fitnessplanet Harare Home">
          <span className="fp-brand__mark">
            <img src={FITNESSPLANET_ASSETS.logo} alt="" />
          </span>
          <span className="fp-brand__name">Fitnessplanet</span>
        </Link>

        <nav className="fp-nav" aria-label="Main navigation">
          <Link
            to="/"
            className="fp-nav__link"
            {...(pathname === "/" ? { "aria-current": "page" as const } : {})}
          >
            Home
          </Link>
          <NavDropdown
            label="Training"
            to="/classes"
            sections={trainingSections}
            pathname={pathname}
          />
          <Link
            to="/facilities"
            className="fp-nav__link"
            {...(pathname === "/facilities" ? { "aria-current": "page" as const } : {})}
          >
            Facilities
          </Link>
          <NavDropdown
            label="Coaches"
            to="/trainers"
            sections={coachSections}
            pathname={pathname}
          />
          <Link
            to="/contact"
            className="fp-nav__link"
            {...(pathname === "/contact" ? { "aria-current": "page" as const } : {})}
          >
            Contact
          </Link>
        </nav>

        <div className="fp-header__actions">
          <a href={FITNESSPLANET_CONTACT.phoneHref} className="fp-header__action">
            <span>Join now</span>
            <small>{FITNESSPLANET_CONTACT.phone}</small>
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            className="fp-header__menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`fp-mobile-nav ${mobileOpen ? "fp-mobile-nav--open" : ""}`}
      >
        <div className="section-shell fp-mobile-nav__inner">
          {mobileLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="fp-mobile-nav__link"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={FITNESSPLANET_CONTACT.phoneHref}
            onClick={() => setMobileOpen(false)}
            className="fp-mobile-nav__action"
          >
            <span>Join now</span>
            <small>{FITNESSPLANET_CONTACT.phone}</small>
          </a>
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="section-shell fp-footer">
        <div>
          <span className="fp-footer__brand-mark">
            <img
              src={FITNESSPLANET_ASSETS.logo}
              alt="Fitnessplanet"
              className="h-full w-full object-cover"
            />
          </span>
          <p className="fp-footer__name">Fitnessplanet Harare</p>
          <p className="fp-footer__address">{FITNESSPLANET_CONTACT.address}</p>
          <a href={FITNESSPLANET_CONTACT.phoneHref} className="fp-footer__link">
            {FITNESSPLANET_CONTACT.phone}
          </a>
        </div>

        <nav className="fp-footer__column" aria-label="Footer navigation">
          <p className="fp-footer__label">Site</p>
          {footerSiteLinks.map((link) => (
            <Link key={link.to} to={link.to} className="fp-footer__link">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="fp-footer__column">
          <p className="fp-footer__label">More</p>
          <Link to="/community" className="fp-footer__link">
            Health tools
          </Link>
          <div aria-label="Opening hours" className="mt-2">
            {FITNESSPLANET_CONTACT.hours.map((row) => (
              <div key={row.days} className="fp-footer__hour">
                <span>{row.days}</span>
                <span className="tabular-nums">{row.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
