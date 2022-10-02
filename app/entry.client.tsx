// entry.client.tsx
import React, { useEffect, useState } from "react";
import { hydrateRoot } from "react-dom/client";
import { CacheProvider } from "@emotion/react";
import { RemixBrowser, useLocation, useMatches } from "@remix-run/react";
import * as Sentry from "@sentry/remix";

import { ClientStyleContext } from "./context";
import createEmotionCache from "./createEmotionCache";

interface ClientCacheProviderProps {
  children: React.ReactNode;
}

Sentry.init({
  dsn: "https://25b0997eee7f49c1986cd476546dd3c8:a1944d7620554ba793af189cfd099f27@o122225.ingest.sentry.io/4503914817978368",
  tracesSampleRate: 1,
  integrations: [
    new Sentry.BrowserTracing({
      routingInstrumentation: Sentry.remixRouterInstrumentation(useEffect, useLocation, useMatches),
    }),
  ],
  // ...
});

function ClientCacheProvider({ children }: ClientCacheProviderProps) {
  const [cache, setCache] = useState(createEmotionCache());

  function reset() {
    setCache(createEmotionCache());
  }

  return (
    <ClientStyleContext.Provider value={{ reset }}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContext.Provider>
  );
}

hydrateRoot(
  document,
  <ClientCacheProvider>
    <RemixBrowser />
  </ClientCacheProvider>,
);
