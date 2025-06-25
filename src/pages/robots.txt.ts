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
  const sitemapImagesUrl = new URL("sitemap-images.xml", base).href;

  const body = `# robots.txt para imSoft.io
# https://imsoft.io/robots.txt

# Permitir acceso a todos los crawlers
User-agent: *
Allow: /

# Permitir acceso específico a Googlebot
User-agent: Googlebot
Allow: /
Crawl-delay: 1

# Permitir acceso específico a Bingbot
User-agent: Bingbot
Allow: /
Crawl-delay: 1

# Permitir acceso específico a DuckDuckBot
User-agent: DuckDuckBot
Allow: /

# Permitir acceso específico a Twitterbot
User-agent: Twitterbot
Allow: /

# Permitir acceso específico a Facebookexternalhit
User-agent: facebookexternalhit
Allow: /

# Permitir acceso específico a LinkedInBot
User-agent: LinkedInBot
Allow: /

# Bloquear acceso a bots maliciosos conocidos
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /

# Bloquear acceso a archivos y directorios sensibles
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_astro/
Disallow: /node_modules/
Disallow: /*.json$
Disallow: /*.xml$
Disallow: /*.txt$

# Permitir acceso a recursos importantes
Allow: /sitemap-index.xml
Allow: /sitemap-0.xml
Allow: /sitemap-images.xml
Allow: /robots.txt
Allow: /favicon.ico
Allow: /favicon.svg

# Configuración de crawl delay para todos los bots
Crawl-delay: 1

# Sitemaps
Sitemap: ${sitemapIndexUrl}
Sitemap: ${sitemapImagesUrl}

# Información adicional
# Última actualización: ${new Date().toISOString()}
# Sitio web: ${base}
`.trim();

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600", // Cache por 1 hora
    },
  });
};
