import { createSignal, onMount } from "solid-js";
import type { JSX } from "solid-js";
import type { HeaderProps } from "../../interfaces/NavItem";

export default function Header(props: HeaderProps): JSX.Element {
  const [open, setOpen] = createSignal(false);
  const [isDarkMode, setIsDarkMode] = createSignal(false);
  const [homeHref, setHomeHref] = createSignal("/");
  const [currentLang, setCurrentLang] = createSignal<"es" | "en">("es");
  const [altHref, setAltHref] = createSignal("/en/");

  // 1) Mapas para páginas estáticas
  const pageMapES2EN: Record<string, string> = {
    "": "",
    blog: "blog",
    contacto: "contact",
    historia: "history",
    portafolio: "portfolio",
    servicios: "services",
    "aviso-de-privacidad": "privacy-notice",
  } as const;
  const pageMapEN2ES = Object.fromEntries(
    Object.entries(pageMapES2EN).map(([es, en]) => [en, es])
  ) as Record<string, string>;

  // 2) Mapas para slugs de servicios
  const slugMapES2EN: Record<string, string> = {
    "tienda-en-linea": "online-store",
    "sitios-web": "website-development",
    "aplicaciones-web": "web-applications",
    "aplicaciones-moviles": "mobile-apps",
    "consultoria-en-ia-y-ml": "ai-ml-consulting",
    "analisis-de-datos": "data-analysis",
  } as const;
  const slugMapEN2ES = Object.fromEntries(
    Object.entries(slugMapES2EN).map(([es, en]) => [en, es])
  ) as Record<string, string>;

  // 3) Mapas para slugs de blog
  const blogSlugES2EN: Record<string, string> = {
    "como-hacer-que-tu-negocio-aparezca-en-google":
      "how-to-make-your-business-appear-on-google",
    "cuanto-cuesta-desarrollar-una-app-movil-en-mexico-precios-tiempos-y-factores-clave":
      "how-much-does-it-cost-to-develop-a-mobile-app-in-mexico-prices-timelines-and-key-factors",
    "inteligencia-artificial-para-pymes-realmente-funciona":
      "does-artificial-intelligence-for-smes-really-work",
    "las-mejores-ideas-para-digitalizar-tu-negocio-este-ano-y-como-empezar":
      "the-best-ideas-to-digitize-your-business-this-year-and-how-to-start",
    "que-necesita-una-tienda-en-linea-para-vender-mas-en-2025":
      "what-does-an-online-store-need-to-sell-more-in-2025",
    "aplicacion-web-o-movil-como-elegir-la-mejor-para-tu-negocio":
      "web-app-or-mobile-app-how-to-choose-the-best-for-your-business",
    "como-funciona-el-seo-local-y-como-aplicarlo-a-tu-negocio":
      "how-local-seo-works-and-how-to-apply-it-to-your-business",
    "vale-la-pena-invertir-en-google-ads-pros-contras-y-cuanto-deberias-invertir":
      "is-it-worth-investing-in-google-ads-pros-cons-and-how-much-you-should-invest",
    "nuestro-proceso-paso-a-paso-para-crear-un-sitio-web-exitoso-en-imsoft":
      "our-step-by-step-process-to-create-a-successful-website-at-imsoft",
    "cinco-funcionalidades-que-toda-aplicacion-web-para-negocios-debe-tener":
      "five-features-every-business-web-application-must-have",
    "como-usar-el-analisis-de-datos-para-tomar-decisiones-inteligentes-incluso-si-no-eres-tecnico":
      "how-to-use-data-analysis-to-make-smart-decisions-even-if-youre-not-technical",
  } as const;
  const blogSlugEN2ES = Object.fromEntries(
    Object.entries(blogSlugES2EN).map(([es, en]) => [en, es])
  ) as Record<string, string>;

  onMount(() => {
    // — Tema —
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else if (stored === "light") {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }

    // — Cálculo de altHref —
    const raw = window.location.pathname.replace(/^\/|\/$/g, "");
    const parts = raw.split("/");
    const isEN = parts[0] === "en";

    setCurrentLang(isEN ? "en" : "es");
    setHomeHref(isEN ? "/en/" : "/");

    // — 1) Español → Inglés —
    if (!isEN) {
      const [first, ...rest] = parts;

      // 1.a) Home
      if (first === "") {
        setAltHref("/en/");
        return;
      }

      // 1.b) Blog listado / Blog post
      if (first === "blog") {
        if (rest.length === 0 || rest[0] === "") {
          setAltHref("/en/blog");
        } else {
          const slugES = rest[0];
          const slugEN = blogSlugES2EN[slugES] ?? slugES;
          setAltHref(`/en/blog/${slugEN}`);
        }
        return;
      }

      // 1.c) Servicios listado / Detalle de servicio
      if (first === "servicios") {
        if (rest.length === 0) {
          setAltHref("/en/services");
        } else {
          const serviceES = rest[0];
          const serviceEN = slugMapES2EN[serviceES] ?? serviceES;
          setAltHref(`/en/services/${serviceEN}`);
        }
        return;
      }

      // 1.d) Cualquier otra página estática
      const pageEN = pageMapES2EN[first] ?? first;
      setAltHref(`/en/${pageEN}`);
      return;
    }

    // — 2) Inglés → Español —
    {
      const [, first, ...rest] = parts;

      // 2.a) Home
      if (!first) {
        setAltHref("/");
        return;
      }

      // 2.b) Blog listado / Blog post
      if (first === "blog") {
        if (rest.length === 0) {
          setAltHref("/blog");
        } else {
          const slugEN = rest[0];
          const slugES = blogSlugEN2ES[slugEN] ?? slugEN;
          setAltHref(`/blog/${slugES}`);
        }
        return;
      }

      // 2.c) Servicios listado / Detalle de servicio
      if (first === "services") {
        if (rest.length === 0) {
          setAltHref("/servicios");
        } else {
          const serviceEN = rest[0];
          const serviceES = slugMapEN2ES[serviceEN] ?? serviceEN;
          setAltHref(`/servicios/${serviceES}`);
        }
        return;
      }

      // 2.d) Cualquier otra página estática
      const pageES = pageMapEN2ES[first] ?? first;
      setAltHref(`/${pageES}`);
      return;
    }
  });

  const toggleTheme = () => {
    const htmlEl = document.documentElement;
    const nowDark = htmlEl.classList.toggle("dark");
    setIsDarkMode(nowDark);
    localStorage.setItem("theme", nowDark ? "dark" : "light");
  };

  return (
    <header class="w-full fixed top-0 left-0 z-50 bg-[var(--background)] text-[var(--foreground)]">
      <nav
        class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <a href={homeHref()} class="-m-1.5 p-1.5">
          <span class="sr-only">imSoft</span>
          <img
            class="h-14 w-auto"
            src="https://res.cloudinary.com/https-imsoft-io/image/upload/v1740963749/imsoft-images/imsoft/logo-imsoft-blue.png"
            alt="imSoft Logo"
          />
        </a>

        {/* Enlaces + Índice de idioma + Tema */}
        <div class={`flex items-center gap-x-4 ${open() ? "hidden" : ""}`}>
          <div class="hidden lg:flex lg:items-center lg:gap-x-6 lg:ml-6">
            {props.navItems.map((item) => (
              <a
                href={item.href}
                class="text-sm/6 font-semibold text-[var(--foreground)] hover:text-[var(--primary)]"
              >
                {item.name}
              </a>
            ))}
          </div>
          <button
            onClick={() => setOpen(true)}
            class="lg:hidden -m-2.5 p-2.5 text-[var(--foreground)] hover:text-[var(--primary)]"
          >
            {/* ícono hamburguesa */}
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          {/* Selector de idioma */}
          <div class="dropdown dropdown-end">
            <label tabIndex={0} class="btn btn-ghost m-1 hover:bg-blue-500">
              {currentLang().toUpperCase()}
            </label>
            <ul
              tabIndex={0}
              class="dropdown-content menu p-2 shadow bg-blue-500 rounded-box w-24"
            >
              <li class="">
                <a class="text-white" href={altHref()}>
                  {currentLang() === "es" ? "English" : "Español"}
                </a>
              </li>
            </ul>
          </div>

          {/* Toggle de tema */}
          <label class="swap swap-rotate">
            <input
              type="checkbox"
              checked={isDarkMode()}
              onInput={toggleTheme}
            />
            {/* Sol */}
            <svg
              class="swap-off h-4 w-4 fill-current lg:h-6 lg:w-6 text-[var(--foreground)]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            {/* Luna */}
            <svg
              class="swap-on h-4 w-4 fill-current lg:h-6 lg:w-6 text-[var(--foreground)]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>

        {/* Menú móvil */}
        <div
          class={`lg:hidden ${open() ? "" : "hidden"}`}
          role="dialog"
          aria-modal="true"
        >
          <div class="fixed inset-y-0 right-0 z-20 w-full max-w-sm overflow-y-auto bg-[var(--background)] px-6 py-6 sm:ring-1 sm:ring-gray-900/10">
            <div class="flex items-center justify-between">
              <a href={homeHref()} class="-m-1.5 p-1.5">
                <span class="sr-only">imSoft</span>
                <img
                  class="h-14 w-auto"
                  src="https://res.cloudinary.com/https-imsoft-io/image/upload/v1740963749/imsoft-images/imsoft/logo-imsoft-blue.png"
                  alt="imSoft Logo"
                />
              </a>
              <button
                onClick={() => setOpen(false)}
                class="-m-2.5 p-2.5 text-[var(--foreground)] hover:text-[var(--primary)]"
                aria-label="Close menu"
              >
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-[var(--border)]">
                <div class="space-y-2 py-6">
                  {props.navItems.map((item) => (
                    <a
                      onClick={() => setOpen(false)}
                      href={item.href}
                      class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-[var(--foreground)] hover:bg-[var(--popover)]"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
