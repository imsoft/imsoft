import { createSignal, onMount } from "solid-js";
import type { JSX } from "solid-js";
import { navItems } from "../../data/navItems";

export default function Header(): JSX.Element {
  const [open, setOpen] = createSignal(false);
  const [isDarkMode, setIsDarkMode] = createSignal(false);

  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

  onMount(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else if (stored === "light") {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDark) {
        document.documentElement.classList.add("dark");
        setIsDarkMode(true);
      }
    }
  });

  const toggleTheme = () => {
    const htmlEl = document.documentElement;
    const nowDark = htmlEl.classList.toggle("dark");
    setIsDarkMode(nowDark);
    localStorage.setItem("theme", nowDark ? "dark" : "light");
  };

  return (
    <header class="bg-[var(--background)] text-[var(--foreground)]">
      <nav
        class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        {/* ===== Logo (siempre visible) ===== */}
        <a href="/" class="-m-1.5 p-1.5">
          <span class="sr-only">imSoft</span>
          <img
            class="h-14 w-auto"
            src="https://res.cloudinary.com/https-imsoft-io/image/upload/v1740963749/imsoft-images/imsoft/logo-imsoft-blue.png"
            loading="lazy"
            alt="imSoft Logo"
          />
        </a>

        {/* ===== Bloque derecho ===== */}
        <div class={`flex items-center gap-x-4 ${open() ? "hidden" : ""}`}>
          {/* — Enlaces de navegación (solo en escritorio) — */}
          <div class="hidden lg:flex lg:items-center lg:gap-x-6 lg:ml-6">
            {navItems.map((item) => (
              <a
                href={item.href}
                class="text-sm/6 font-semibold text-[var(--foreground)] hover:text-[var(--primary)]"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* — Botón hamburguesa (solo en móvil, primero) — */}
          <button
            type="button"
            class="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[var(--foreground)] hover:text-[var(--primary)]"
            aria-label="Open main menu"
            onClick={openMenu}
          >
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          {/* — Toggle de tema (siempre visible al extremo derecho) — */}
          <label class="swap swap-rotate">
            <input
              type="checkbox"
              checked={isDarkMode()}
              onInput={toggleTheme}
            />
            {/* Icono de sol */}
            <svg
              class="swap-off h-4 w-4 fill-current lg:h-6 lg:w-6 text-[var(--foreground)]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            {/* Icono de luna */}
            <svg
              class="swap-on h-4 w-4 fill-current lg:h-6 lg:w-6 text-[var(--foreground)]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>

        {/* ===== Menú móvil desplegado (slide-over) ===== */}
        <div
          class={`lg:hidden ${open() ? "" : "hidden"}`}
          role="dialog"
          aria-modal="true"
        >
          <div class="fixed inset-y-0 right-0 z-20 w-full max-w-sm overflow-y-auto bg-[var(--background)] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div class="flex items-center justify-between">
              <a href="/" class="-m-1.5 p-1.5">
                <span class="sr-only">imSoft</span>
                <img
                  class="h-14 w-auto"
                  src="https://res.cloudinary.com/https-imsoft-io/image/upload/v1740963749/imsoft-images/imsoft/logo-imsoft-blue.png"
                  loading="lazy"
                  alt="imSoft Logo"
                />
              </a>
              <button
                type="button"
                class="-m-2.5 rounded-md p-2.5 text-[var(--foreground)] hover:text-[var(--primary)]"
                aria-label="Close menu"
                onClick={closeMenu}
              >
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
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
                  {navItems.map((item) => (
                    <a
                      href={item.href}
                      class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-[var(--foreground)] hover:bg-[var(--popover)]"
                      onClick={closeMenu}
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
