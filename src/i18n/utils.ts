import {
  translations,
  defaultLang,
  showDefaultLang,
  languages,
} from "./translations";

// Detecta el idioma actual a partir de la URL (/en/... o /...)
export function getLangFromUrl(url: URL): keyof typeof translations {
  const [, maybeLang] = url.pathname.split("/");
  return maybeLang && maybeLang in translations
    ? (maybeLang as keyof typeof translations)
    : defaultLang;
}

// Devuelve función t(key) para el idioma actual
export function useTranslations(lang: keyof typeof translations) {
  return (key: keyof (typeof translations)[typeof defaultLang]) =>
    translations[lang][key] ?? translations[defaultLang][key];
}

// Construye rutas localizadas: si no mostramos defaultLang, evita el prefijo
export function useTranslatedPath(lang: keyof typeof translations) {
  return (path: string, l: keyof typeof translations = lang) => {
    const cleaned = path.startsWith("/") ? path : `/${path}`;
    if (!showDefaultLang && l === defaultLang) return cleaned;
    return `/${l}${cleaned}`;
  };
}

// Para tu <LanguagePicker />
export function getLanguageEntries() {
  return Object.entries(languages) as [keyof typeof languages, string][];
}
