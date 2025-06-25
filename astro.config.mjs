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
      changefreq: ChangeFreqEnum.WEEKLY,
      priority: 0.7,
      lastmod: new Date(),

      filter: (url) => {
        if (/\/404\/?$/.test(url) || /\/admin\//.test(url)) {
          return false;
        }
        
        if (/\.(css|js|png|jpg|jpeg|gif|svg|ico|xml|txt|json)$/.test(url)) {
          return false;
        }
        
        if (/\/api\//.test(url) || /\/private\//.test(url)) {
          return false;
        }
        
        return true;
      },

      serialize: (item) => {
        const url = item.url;
        
        if (url === "https://imsoft.io/") {
          return {
            ...item,
            lastmod: new Date().toISOString(),
            changefreq: ChangeFreqEnum.DAILY,
            priority: 1.0,
          };
        }
        
        if (/^https:\/\/imsoft\.io\/blog\//.test(url)) {
          return {
            ...item,
            lastmod: new Date().toISOString(),
            changefreq: ChangeFreqEnum.WEEKLY,
            priority: 0.9,
          };
        }
        
        if (/^https:\/\/imsoft\.io\/servicios\//.test(url)) {
          return {
            ...item,
            lastmod: new Date().toISOString(),
            changefreq: ChangeFreqEnum.MONTHLY,
            priority: 0.8,
          };
        }
        
        if (/^https:\/\/imsoft\.io\/portafolio\//.test(url)) {
          return {
            ...item,
            lastmod: new Date().toISOString(),
            changefreq: ChangeFreqEnum.MONTHLY,
            priority: 0.7,
          };
        }
        
        if (/^https:\/\/imsoft\.io\/(contacto|historia|aviso-de-privacidad)\//.test(url)) {
          return {
            ...item,
            lastmod: new Date().toISOString(),
            changefreq: ChangeFreqEnum.MONTHLY,
            priority: 0.6,
          };
        }
        
        if (/^https:\/\/imsoft\.io\/en\//.test(url)) {
          return {
            ...item,
            lastmod: new Date().toISOString(),
            changefreq: ChangeFreqEnum.WEEKLY,
            priority: 0.7,
          };
        }
        
        return {
          ...item,
          lastmod: new Date().toISOString(),
          changefreq: ChangeFreqEnum.MONTHLY,
          priority: 0.5,
        };
      },

      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es-ES",
          en: "en-US",
        },
      },
      
      customPages: [
        "https://imsoft.io/",
        "https://imsoft.io/blog",
        "https://imsoft.io/servicios",
        "https://imsoft.io/portafolio",
        "https://imsoft.io/contacto",
        "https://imsoft.io/historia",
        "https://imsoft.io/aviso-de-privacidad",
        "https://imsoft.io/en/",
        "https://imsoft.io/en/blog",
        "https://imsoft.io/en/services",
        "https://imsoft.io/en/portfolio",
        "https://imsoft.io/en/contact",
        "https://imsoft.io/en/history",
        "https://imsoft.io/en/privacy-notice",
      ],
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
