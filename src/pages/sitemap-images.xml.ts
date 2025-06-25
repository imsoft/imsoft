import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  // Lista de imágenes importantes del sitio
  const images = [
    {
      url: "https://res.cloudinary.com/https-imsoft-io/image/upload/v1740963749/imsoft-images/imsoft/logo-imsoft-blue.png",
      title: "imSoft Logo",
      caption: "Logo oficial de imSoft - Desarrollo de Software",
      geoLocation: "Guadalajara, México",
      license: "https://imsoft.io/aviso-de-privacidad"
    },
    {
      url: "https://res.cloudinary.com/https-imsoft-io/image/upload/v1740963749/imsoft-images/imsoft/hero-image.jpg",
      title: "imSoft Desarrollo de Software",
      caption: "Equipo de desarrollo trabajando en proyectos de software",
      geoLocation: "Guadalajara, México"
    }
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://imsoft.io/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    ${images.map(img => `
    <image:image>
      <image:loc>${img.url}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
      ${img.geoLocation ? `<image:geo_location>${img.geoLocation}</image:geo_location>` : ''}
      ${img.license ? `<image:license>${img.license}</image:license>` : ''}
    </image:image>`).join('')}
  </url>
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400", // Cache por 24 horas
    },
  });
}; 