// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import solidJs from "@astrojs/solid-js";
import sitemap, { ChangeFreqEnum } from "@astrojs/sitemap";

export default defineConfig({
  site: "https://imsoft.io",

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),

  integrations: [
    solidJs(),
    sitemap({
      changefreq: ChangeFreqEnum.DAILY,
      priority: 0.8,
      lastmod: new Date(),

      filter: (url) => !/\/404\/?$/.test(url) && !/\/admin\//.test(url),

      serialize: (item) => {
        if (/^https:\/\/imsoft\.io\/blog\//.test(item.url)) {
          return {
            ...item,
            lastmod: new Date().toISOString(),
            changefreq: ChangeFreqEnum.DAILY,
            priority: 0.9,
          };
        }
        if (item.url === "https://imsoft.io/") {
          return {
            ...item,
            lastmod: new Date().toISOString(),
            changefreq: ChangeFreqEnum.DAILY,
            priority: 1.0,
          };
        }
        return item;
      },

      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es-ES",
          en: "en-US",
        },
      },
    }),
  ],

  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
});
