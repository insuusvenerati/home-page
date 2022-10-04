import type { ErrorBoundaryComponent, LinksFunction, MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/beercss@2.2.11/dist/cdn/beer.min.css",
    },
    {
      rel: "stylesheet",
      href: "/overrides.css",
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <script
          src="https://cdn.jsdelivr.net/npm/beercss@2.2.11/dist/cdn/beer.min.js"
          type="text/javascript"
        ></script>

        <Meta />
        <Links />
      </head>
      <body className="light">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  return <div>ERROR: {error.message}</div>;
};
