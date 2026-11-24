import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { MotionRuntime } from "@/components/MotionRuntime";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { FITNESSPLANET_CONTACT } from "@/data/fitnessplanet";
import { Toaster } from "sonner";

const appCssHref = import.meta.env.DEV ? "/src/styles.css?direct" : appCss;

function NotFoundComponent() {
  return (
    <main className="fp-status-panel">
      <div className="section-shell fp-status-panel__inner">
        <div>
          <p className="fp-kicker text-muted-dark">Status 404</p>
          <h1 className="fp-section-title">Page not found.</h1>
          <p className="fp-lead fp-muted">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="fp-text-link">
            Go home
          </Link>
        </div>
        <div className="fp-status-panel__meta">
          <p className="fp-kicker text-muted-dark">Fitnessplanet Harare</p>
          <p>{FITNESSPLANET_CONTACT.address}</p>
          <a href={FITNESSPLANET_CONTACT.phoneHref} className="fp-text-link fp-text-link--ink mt-2">
            {FITNESSPLANET_CONTACT.phone}
          </a>
        </div>
      </div>
    </main>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <main className="fp-status-panel">
      <div className="section-shell fp-status-panel__inner">
        <div>
          <p className="fp-kicker text-muted-dark">Load error</p>
          <h1 className="fp-section-title">This page didn't load.</h1>
          <p className="fp-lead fp-muted">
            Something went wrong on our end. You can try refreshing or head back home.
          </p>
          <div className="fp-status-panel__actions">
            <button
              type="button"
              onClick={() => {
                router.invalidate();
                reset();
              }}
              className="fp-button-signal"
            >
              Try again
            </button>
            <Link to="/" className="fp-text-link">
              Go home
            </Link>
          </div>
        </div>
        <div className="fp-status-panel__meta">
          <p className="fp-kicker text-muted-dark">Need help now?</p>
          <a href={FITNESSPLANET_CONTACT.phoneHref} className="fp-text-link fp-text-link--ink">
            {FITNESSPLANET_CONTACT.phone}
          </a>
        </div>
      </div>
    </main>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Fitnessplanet Harare | Gym, Classes & Coaching" },
      {
        name: "description",
        content:
          "Fitnessplanet Harare at Harare Show Grounds, Stand 126. Gym floor, cardio, aerobics, boxing, karate, CrossFit, HYROX, HIIT, Spin, coaching, sauna, pool, and Raw Roots Co.",
      },
      {
        property: "og:title",
        content: "Fitnessplanet Harare | Gym, Classes & Coaching",
      },
      {
        property: "og:description",
        content:
          "Fitnessplanet Harare at Harare Show Grounds, Stand 126. Gym floor, cardio, aerobics, boxing, karate, CrossFit, HYROX, HIIT, Spin, coaching, sauna, pool, and Raw Roots Co.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800;900&family=Open+Sans:wght@400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCssHref,
      },
      {
        rel: "icon",
        href: "/914444258_1769702841827524_4787157234768054672_n.jpg",
        type: "image/jpeg",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <MotionRuntime />
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main id="main" tabIndex={-1} className="flex-1 outline-none">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
      <Toaster
        position="bottom-left"
        richColors
        toastOptions={{
          classNames: {
            toast: "fp-toast",
            content: "fp-toast__content",
          },
        }}
      />
    </QueryClientProvider>
  );
}
