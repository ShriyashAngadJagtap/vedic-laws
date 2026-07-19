import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="display text-7xl">404</h1>
        <p className="mt-4 italic-quote text-xl text-muted-foreground">This path is not yet illumined.</p>
        <div className="mt-8">
          <Link to="/" className="btn-primary">Return Home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="display text-4xl">A pause on the path</h1>
        <p className="mt-3 text-sm text-muted-foreground">Something interrupted the page. Try again, or return home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn-primary"
          >Try again</button>
          <a href="/" className="btn-gold">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dr. Shrikant Kallurkar — Vedic Leadership, Mentoring & Transformation" },
      {
        name: "description",
        content:
          "Dr. Shrikant Kallurkar — educator, mentor, researcher, author and founder of the Vedic Success System. Timeless Vedic wisdom for modern leadership and holistic transformation.",
      },
      { name: "author", content: "Dr. Shrikant Kallurkar" },
      { property: "og:title", content: "Dr. Shrikant Kallurkar — Vedic Leadership & Holistic Transformation" },
      {
        property: "og:description",
        content:
          "Educator, mentor, author and founder of the Vedic Success System. Guiding leaders, students and organisations through timeless wisdom.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Vedic Success System" },
      { property: "og:url", content: "https://vedic-laws.vercel.app/" },
      { property: "og:image", content: "https://vedic-laws.vercel.app/og-image.jpg" },
      { property: "og:image:alt", content: "Vedic Success System — Inspire · Align · Transform" },
      { property: "og:image:type", content: "image/jpeg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dr. Shrikant Kallurkar — Vedic Leadership & Holistic Transformation" },
      {
        name: "twitter:description",
        content:
          "Educator, mentor, author and founder of the Vedic Success System. Guiding leaders, students and organisations through timeless wisdom.",
      },
      { name: "twitter:image", content: "https://vedic-laws.vercel.app/og-image.jpg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.jpg", type: "image/jpeg" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.jpg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Source+Sans+3:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap",
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
      <head><HeadContent /></head>
      <body>
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
      <Outlet />
    </QueryClientProvider>
  );
}
