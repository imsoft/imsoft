export function setupScrollAnimations(): void {
  const elements = document.querySelectorAll<HTMLElement>(".animate-on-scroll");

  if (!("IntersectionObserver" in window)) {
    elements.forEach((el) => {
      const delayValue = el.dataset.delay || "0";
      el.classList.remove("opacity-0");

      if (delayValue === "0") {
        el.classList.add("animate-fade-in");
      } else {
        el.classList.add(`animate-fade-in-delay-${delayValue}`);
      }
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delayValue = el.dataset.delay || "0";
          el.classList.remove("opacity-0");

          if (delayValue === "0") {
            el.classList.add("animate-fade-in");
          } else {
            el.classList.add(`animate-fade-in-delay-${delayValue}`);
          }

          obs.unobserve(el);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -100px 0px",
      threshold: 0.1,
    }
  );

  elements.forEach((el) => observer.observe(el));
}
