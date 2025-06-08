// src/pages/robots.txt.ts
import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    return new Response("`site` no está definido en astro.config.mjs", {
      status: 500,
    });
  }

  const base = site.href;
  const sitemapIndexUrl = new URL("sitemap-index.xml", base).href;

  const body =
    `
User-agent: *
Allow: /

Sitemap: ${sitemapIndexUrl}
`.trim() + "\n";

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
