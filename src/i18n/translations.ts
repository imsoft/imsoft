export const languages = {
  es: "Español",
  en: "English",
} as const;

export const defaultLang = "es";
export const showDefaultLang = false;

export const translations = {
  es: {
    index: {
      hero: {
        title: "Transformamos Ideas en Software",
        description:
          "En imSoft, convertimos tu visión en realidad con tecnología innovadora y desarrollo de software de alto impacto.",
        bullets: "📈 Más tráfico. Más clientes. Más crecimiento.",
      },
      features: {
        heading: "Lo Que Hace la Diferencia",
        subheading: "Estrategias que te hacen destacar",
        description:
          "Soluciones digitales diseñadas para posicionarte por encima de la competencia. Innovación, eficiencia y resultados que impulsan tu negocio.",
        differentiators: [
          {
            title: "Tecnología a tu medida",
            description:
              "Creamos soluciones que se adaptan 100% a tus necesidades.",
          },
          {
            title: "Crece sin límites",
            description:
              "Escala tu negocio con sistemas que evolucionan contigo.",
          },
          {
            title: "Resultados comprobados",
            description:
              "Casos de éxito que respaldan nuestra experiencia y compromiso.",
          },
          {
            title: "Estrategia inteligente",
            description:
              "Decisiones guiadas por datos, análisis y objetivos claros.",
          },
          {
            title: "Innovación continua",
            description:
              "Actualizaciones constantes con tecnología de última generación.",
          },
          {
            title: "Soporte confiable",
            description:
              "Te acompañamos en cada etapa de tu crecimiento digital.",
          },
        ] as const,
      },
      services: {
        heading: "Impulsa tu negocio hoy",
        description:
          "Estrategias digitales diseñadas para hacer crecer tu marca, atraer más clientes y generar resultados reales.",
        items: [
          {
            title: "Análisis de Datos",
            href: "/servicios/analisis-de-datos",
            description:
              "Toma decisiones acertadas con datos reales, no con suposiciones arriesgadas.",
            imageUrl:
              "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706898185/imsoft-images/services/analisis-de-datos-imsoft.jpg",
            alt: "Análisis de Datos - imSoft",
          },
          {
            title: "Aplicaciones Móviles",
            href: "/servicios/aplicaciones-moviles",
            description:
              "Conecta con tus clientes mediante una app rápida, intuitiva y funcional.",
            imageUrl:
              "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706898396/imsoft-images/services/aplicaciones-moviles-imsoft.jpg",
            alt: "Aplicaciones Móviles - imSoft",
          },
          {
            title: "Aplicaciones Web",
            href: "/servicios/aplicaciones-web",
            description:
              "Automatiza y optimiza procesos con soluciones personalizadas.",
            imageUrl:
              "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595026/imsoft-images/services/aplicacion-web-imsoft.jpg",
            alt: "Aplicaciones Web - imSoft",
          },
          {
            title: "Desarrollo de Sitios Web",
            href: "/servicios/sitios-web",
            description:
              "Sitios web veloces, seguros y diseñados estratégicamente para generar más ventas.",
            imageUrl:
              "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595026/imsoft-images/services/sitio-web-imsoft.jpg",
            alt: "Desarrollo de Sitios Web - imSoft",
          },
          {
            title: "Tienda en Línea",
            href: "/servicios/tienda-en-linea",
            description:
              "Vende las 24 horas con una tienda online optimizada y eficiente.",
            imageUrl:
              "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595027/imsoft-images/services/tienda-en-linea-imsoft.jpg",
            alt: "Tienda en Línea - imSoft",
          },
          {
            title: "Consultoría en IA y ML",
            href: "/servicios/consultoria-en-ia-y-ml",
            description:
              "Transforma tu negocio con inteligencia artificial y aprendizaje automático.",
            imageUrl:
              "https://res.cloudinary.com/https-imsoft-io/image/upload/v1747117146/imsoft-images/services/consultoria-en-ia-y-ml.jpg",
            alt: "Consultoría en IA y ML - imSoft",
          },
        ] as const,
      },
      testimonials: {
        heading: "Testimonios",
        subheading: "Empresas reales, experiencias reales",
        quote:
          "Desde que lanzamos nuestra tienda con imSoft, la experiencia para\n" +
          "nuestros lectores mejoró drásticamente. La plataforma es rápida,\n" +
          "intuitiva y nos permite vender nuestros ebooks las 24 horas sin\n" +
          "complicaciones. Ahora podemos enfocarnos en crear contenido,\n" +
          "mientras la tecnología hace el resto.",
        company: "Cursumi",
        service: "📊 Aplicación Web",
        image:
          "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748817038/imsoft-images/portfolio/logos/cursumi.png",
        columns: {
          firstColumn: [
            {
              quote:
                "Gracias al nuevo sitio, nuestros clientes encuentran todo mucho más fácil. La velocidad y diseño nos representan al 100%.",
              company: "BemästraDental",
              service: "🖥️ Sitio Web",
              image:
                "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748817334/imsoft-images/portfolio/logos/bemastradental.png",
            },
            {
              quote:
                "Ahora sí podemos decir que tenemos presencia digital de verdad. ¡Increíble el trabajo de imSoft!",
              company: "Profibra",
              service: "🖥️ Sitio Web",
              image:
                "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748817040/imsoft-images/portfolio/logos/profibra.png",
            },
            {
              quote:
                "Controlar el inventario ya no es un dolor de cabeza. La app nos ayuda día a día.",
              company: "Podstore",
              service: "📊 Aplicación Web",
              image:
                "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748817334/imsoft-images/portfolio/logos/podstore.png",
            },
            {
              quote:
                "Tuvimos cero complicaciones. El equipo entendió nuestras necesidades desde el día uno.",
              company: "Ortíz y Cia",
              service: "🖥️ Sitio Web",
              image:
                "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748817040/imsoft-images/portfolio/logos/ortiz-y-cia.png",
            },
            {
              quote:
                "Necesitábamos agilidad y claridad en la web. ImSoft lo resolvió a la perfección.",
              company: "JTP Logistics",
              service: "🖥️ Sitio Web",
              image:
                "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748817039/imsoft-images/portfolio/logos/jtp-logistics.png",
            },
          ] as const,
          secondColumn: [
            {
              quote:
                "El equipo de imSoft entendió exactamente lo que necesitábamos. El sitio luce profesional y funciona perfecto.",
              company: "Infinito Empresarial y Aduanero",
              service: "🖥️ Sitio Web",
              image:
                "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748817334/imsoft-images/portfolio/logos/infinito-empresarial-y-aduanero.png",
            },
            {
              quote:
                "La nueva web impulsa el turismo local. La gente ahora encuentra todo más fácil.",
              company: "Santa Maria Del Oro Jalisco",
              service: "🖥️ Sitio Web",
              image:
                "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748817040/imsoft-images/portfolio/logos/santa-maria-del-oro-jalisco.png",
            },
            {
              quote:
                "imSoft creó justo lo que necesitábamos: algo fácil, rápido y adaptado a nuestra empresa.",
              company: "Starfilters",
              service: "📊 Aplicación Web",
              image:
                "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748817040/imsoft-images/portfolio/logos/starfilters.png",
            },
          ] as const,
          thirdColumn: [
            {
              quote:
                "Desde que usamos nuestra app, todo es más rápido y ordenado. La operación diaria cambió por completo.",
              company: "La Casa Del Paste",
              service: "📊 Aplicación Web",
              image:
                "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748817334/imsoft-images/portfolio/logos/la-casa-del-paste.png",
            },
            {
              quote:
                "Transformaron nuestras hojas de cálculo en una plataforma moderna y funcional. ¡Qué diferencia!",
              company: "Steridental",
              service: "📊 Aplicación Web",
              image:
                "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748817040/imsoft-images/portfolio/logos/steridental.png",
            },
            {
              quote:
                "Nuestra página se ve y se siente como un portal oficial. El trabajo fue impecable.",
              company: "Tuxcacuesco",
              service: "🖥️ Sitio Web",
              image:
                "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748817041/imsoft-images/portfolio/logos/tuxcacuesco.png",
            },
          ] as const,
          fourthColumn: [
            {
              quote:
                "Nuestro sitio transmite confianza y profesionalismo. Hemos recibido muy buenos comentarios de clientes nuevos.",
              company: "Construcción Inteligente",
              service: "🖥️ Sitio Web",
              image:
                "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748817038/imsoft-images/portfolio/logos/construccion-inteligente.png",
            },
            {
              quote:
                "Todo fue rápido, sin complicaciones y con excelente soporte. Recomendamos a imSoft sin dudar.",
              company: "Ferreacabados Jalisco",
              service: "🖥️ Sitio Web",
              image:
                "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748817038/imsoft-images/portfolio/logos/ferreacabados-jalisco.png",
            },
            {
              quote:
                "Nuestra aplicación móvil y sitio web ofrecen una experiencia intuitiva, rápida y completa que ha transformado la forma en que interactuamos con nuestros clientes.",
              company: "Club De Estirpe",
              service: "📱 Aplicación Móvil y 🖥️ Sitio Web",
              image:
                "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748817334/imsoft-images/portfolio/logos/club-de-estirpe.png",
            },
            {
              quote:
                "El sitio que nos hicieron nos posiciona como una marca internacional. Gran diseño y performance.",
              company: "The Gaming Corps",
              service: "🖥️ Sitio Web",
              image:
                "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748817039/imsoft-images/portfolio/logos/the-gaming-corps.png",
            },
            {
              quote:
                "Buscábamos una web que transmitiera nuestra experiencia. Nos encantó el resultado.",
              company: "Constructora RM",
              service: "🖥️ Sitio Web",
              image:
                "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748817040/imsoft-images/portfolio/logos/constructora-rm.png",
            },
          ] as const,
        },
      },
      randomServices: {
        preText: "Descubre más sobre ",
        items: [
          {
            label: "Análisis de Datos",
            href: "/servicios/analisis-de-datos",
            linkText: "ver en acción →",
          },
          {
            label: "Aplicaciones Móviles",
            href: "/servicios/aplicaciones-moviles",
            linkText: "conoce cómo →",
          },
          {
            label: "Aplicaciones Web",
            href: "/servicios/aplicaciones-web",
            linkText: "descúbrelo →",
          },
          {
            label: "Desarrollo de Sitios Web",
            href: "/servicios/sitios-web",
            linkText: "explora más →",
          },
          {
            label: "Tienda en Línea",
            href: "/servicios/tienda-en-linea",
            linkText: "empieza a vender →",
          },
          {
            label: "Consultoría en IA y ML",
            href: "/servicios/consultoria-en-ia-y-ml",
            linkText: "transforma tu negocio →",
          },
        ] as const,
      },
    },
    portfolio: {
      heading: "Proyectos que Transforman Negocios",
      description:
        "Descubre cómo hemos ayudado a empresas a crecer con soluciones digitales innovadoras. Cada proyecto es una historia de éxito hecha con tecnología, estrategia y pasión.",
      items: [
        {
          name: "BemästraDental",
          type: "Sitio Web 👨‍💻",
          url: "https://xn--bemstradental-dfb.com/",
          alt: "Sitio Web - BemästraDental - imSoft",
          imageUrl:
            "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748299999/imsoft-images/portfolio/website-pro/website-Bemastra-Dental-imsoft.png",
        },
        {
          name: "Infinito Empresarial y Aduanero",
          type: "Sitio Web 👨‍💻",
          url: "http://infinitoad.com/",
          alt: "Sitio Web - Infinito Empresarial y Aduanero  - imSoft",
          imageUrl:
            "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595314/imsoft-images/portfolio/website/sitio-web-infinito-empresarial-y-aduanero.png",
        },
        {
          name: "Profibra",
          type: "Sitio Web 👨‍💻",
          url: "http://profibra.com.mx/",
          alt: "Sitio Web - Profibra - imSoft",
          imageUrl:
            "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595314/imsoft-images/portfolio/website/sitio-web-profibra.png",
        },
        {
          name: "Club De Estirpe",
          type: "Sitio Web 👨‍💻",
          url: "http://clubdeestirpe.com/",
          alt: "Sitio Web - Club de Estirpe - imSoft",
          imageUrl:
            "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595311/imsoft-images/portfolio/website/sitio-web-club-de-estirpe-imsoft.png",
        },
        {
          name: "Construcción Inteligente",
          type: "Sitio Web 👨‍💻",
          url: "https://construccioninteligente.mx/",
          alt: "Sitio Web - Construccion Inteligente - imSoft",
          imageUrl:
            "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595313/imsoft-images/portfolio/website/sitio-web-construccion-inteligente-imsoft.png",
        },
        {
          name: "Ferreacabados Jalisco",
          type: "Sitio Web 👨‍💻",
          url: "https://ferrejalisco.mx/",
          alt: "Sitio Web - Ferreacabdos Jalisco - imSoft",
          imageUrl:
            "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595314/imsoft-images/portfolio/website/sitio-web-ferreacabdos-jalisco-imsoft.png",
        },
        {
          name: "JTP Logistics",
          type: "Sitio Web 👨‍💻",
          url: "https://www.jtp.com.mx/",
          alt: "Sitio Web - JTP Logistics - imSoft",
          imageUrl:
            "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595314/imsoft-images/portfolio/website/sitio-web-jtp-logistics-imsoft.png",
        },
        {
          name: "Constructora RM",
          type: "Sitio Web 👨‍💻",
          url: "https://constructorarm.mx/",
          alt: "Sitio Web - Constructora RM - imSoft",
          imageUrl:
            "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595312/imsoft-images/portfolio/website/sitio-web-constructorarm-imsoft.png",
        },
        {
          name: "Cursumi",
          type: "Sitio Web 👨‍💻",
          url: "https://cursumi.com/",
          alt: "Sitio Web Pro - Cursumi - imSoft",
          imageUrl:
            "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748299884/imsoft-images/portfolio/website-pro/website-cursumi-imsoft.png",
        },
        {
          name: "The Gaming Corps",
          type: "Sitio Web 👨‍💻",
          url: "https://thegamingcorps.com/",
          alt: "Sitio Web Pro - The Gaming Corps - imSoft",
          imageUrl:
            "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748299885/imsoft-images/portfolio/website-pro/website-the-gaming-corps-imsoft.png",
        },
        {
          name: "Santa Maria Del Oro Jalisco",
          type: "Sitio Web 👨‍💻",
          url: "http://santamariadelorojal.com/",
          alt: "Sitio Web Pro - Santa Maria Del Oro Jalisco - imSoft",
          imageUrl:
            "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595492/imsoft-images/portfolio/website-pro/sitio-web-pro-santa-maria-del-oro-jalisco-imsoft.png",
        },
        {
          name: "Tuxcacuesco",
          type: "Sitio Web 👨‍💻",
          url: "https://tuxcacuesco.gob.mx/#/",
          alt: "Sitio Web Pro - Tuxcacuesco - imSoft",
          imageUrl:
            "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595493/imsoft-images/portfolio/website-pro/sitio-web-pro-tuxcacuesco-imsoft.png",
        },
        {
          name: "Pastería La Hidalguense",
          type: "Aplicación Web 🖥️📊",
          url: "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595207/imsoft-images/portfolio/web-application/aplicaciones-web-pasteria-la-hidalguense-imsoft.png",
          alt: "Aplicación Web - Pastería La Hidalguense - imSoft",
          imageUrl:
            "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595207/imsoft-images/portfolio/web-application/aplicaciones-web-pasteria-la-hidalguense-imsoft.png",
        },
        {
          name: "Club De Estirpe",
          type: "Aplicación Móvil 📱📊",
          url: "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595385/imsoft-images/portfolio/mobile-apps/club-de-estirpe-aplicacion-movil-imsoft.png",
          alt: "Aplicación Móvil - Club De Estirpe - imSoft",
          imageUrl:
            "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595385/imsoft-images/portfolio/mobile-apps/club-de-estirpe-aplicacion-movil-imsoft.png",
        },
        {
          name: "Steridental",
          type: "Aplicación Web 🖥️📊",
          url: "https://res.cloudinary.com/https-imsoft-io/image/upload/v1709918898/imsoft-images/portfolio/web-application/aplicaciones-web-steridental-imsoft.png",
          alt: "Aplicación Web - Steridental - imSoft",
          imageUrl:
            "https://res.cloudinary.com/https-imsoft-io/image/upload/v1709918898/imsoft-images/portfolio/web-application/aplicaciones-web-steridental-imsoft.png",
        },
        {
          name: "Ortíz y Cia",
          type: "Sitio Web 👨‍💻",
          url: "https://ortizycia.mx/",
          alt: "Sitio Web - Ortíz y Cia - imSoft",
          imageUrl:
            "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748299885/imsoft-images/portfolio/website-pro/website-ortizycia-imsoft.png",
        },
        {
          name: "Podstore",
          type: "Aplicación Web 🖥️📊",
          url: "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748299789/imsoft-images/portfolio/web-application/aplicaciones-web-podstore-imsoft.png",
          alt: "Aplicación Web - Podstore - imSoft",
          imageUrl:
            "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748299789/imsoft-images/portfolio/web-application/aplicaciones-web-podstore-imsoft.png",
        },
        {
          name: "Starfilters",
          type: "Aplicación Web 🖥️📊",
          url: "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748299788/imsoft-images/portfolio/web-application/aplicaciones-web-starfilters-imsoft.png",
          alt: "Aplicación Web - Starfilters - imSoft",
          imageUrl:
            "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748299788/imsoft-images/portfolio/web-application/aplicaciones-web-starfilters-imsoft.png",
        },
        {
          name: "¡Contáctanos!",
          type: "¡Sigues tu! 💻🏆",
          url: "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595141/imsoft-images/portfolio/others/aqui-va-el-siguiente-paso-para-tu-negocio-imsoft.png",
          alt: "Contáctanos - imSoft",
          imageUrl:
            "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595141/imsoft-images/portfolio/others/aqui-va-el-siguiente-paso-para-tu-negocio-imsoft.png",
        },
      ],
    },
    history: {
      preheading: "Nuestra historia",
      heading: "Innovación con propósito, tecnología con impacto",
      paragraphs: [
        `imSoft nació con una visión clara: ayudar a empresas y
        emprendedores a aprovechar la tecnología para crecer y destacar en
        el mercado. Lo que comenzó como un sueño, pronto se convirtió en
        un equipo apasionado por la innovación y la eficiencia digital.`,
        `Cada proyecto ha sido un desafío, pero también una oportunidad
        para aprender, mejorar y crecer junto a nuestros clientes. Creemos
        en la tecnología como un puente hacia nuevas oportunidades, y
        nuestro compromiso es hacer que cada solución sea intuitiva,
        eficiente y escalable.`,
        `Desde el primer día, nos hemos enfocado en crear soluciones que
        realmente marquen la diferencia. No solo desarrollamos software,
        creamos herramientas que impulsan negocios y transforman ideas en
        resultados reales.`,
        `El futuro de imSoft es claro: seguir innovando, seguir aprendiendo
        y seguir creando soluciones digitales que ayuden a más negocios a
        alcanzar su máximo potencial. Nos emociona lo que está por venir,
        y queremos que seas parte de esta historia.`,
      ] as const,
      ctaLabel: "Sé parte de nuestra historia",
      imageAlt: "Imagen de la historia de imSoft",
    },
    servicesTemplates: {
      "tienda-en-linea": {
        imageUrl:
          "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595027/imsoft-images/services/tienda-en-linea-imsoft.jpg",
        alt: "Servicio de Desarrollo de Tienda en Línea - imSoft",
        title: "Servicio de Tienda en Línea",
        subtitle:
          "Vende las 24 horas con una tienda online optimizada, segura y fácil de administrar.",
        descriptions: [
          "En imSoft diseñamos y desarrollamos tiendas en línea personalizadas que te permiten llegar a más clientes y aumentar tus ventas. Integramos pasarelas de pago, gestión de inventario y logística de forma fluida para ofrecer una experiencia de compra intuitiva.",
          "Contamos con experiencia en plataformas como Shopify, WooCommerce y soluciones a medida. Cada proyecto incluye optimización SEO on-page enfocada a e-commerce, garantizando visibilidad orgánica y crecimiento sostenido de tu negocio.",
        ],
        primaryActionText: "Solicitar Cotización",
        primaryActionHref: `mailto:sales@imsoft.io?subject=${encodeURIComponent(
          "Cotización: Servicio de Tienda en Línea"
        )}&body=${encodeURIComponent(
          "Hola equipo de imSoft,%0A%0AMe interesa recibir una cotización para el servicio de Tienda en Línea.%0APor favor, envíenme detalles sobre precios y plazos.%0A%0AGracias."
        )}`,
        secondaryActionText: "Ver Casos de Éxito",
        secondaryActionHref: "/portafolio",
        features: [
          {
            text: "Integración con pasarelas de pago seguras (PayPal, Stripe, Conekta)",
          },
          { text: "Carrito de compras optimizado para conversión y velocidad" },
          { text: "Gestión de productos, categorías y stock en tiempo real" },
          { text: "Diseño responsive y adaptado a dispositivos móviles" },
          { text: "Optimización SEO específica para tiendas en línea" },
        ],
        methodologySteps: [
          {
            title: "Análisis de Requerimientos",
            description:
              "Recopilamos información de catálogos, métodos de pago y logística para definir la arquitectura de tu tienda en línea.",
          },
          {
            title: "Diseño UI/UX",
            description:
              "Creamos prototipos enfocados en la experiencia de compra: navegación clara, llamadas a la acción visibles y proceso de checkout sencillo.",
          },
          {
            title: "Desarrollo e Integración",
            description:
              "Implementamos la tienda usando plataformas como Shopify o WooCommerce, o desarrollamos soluciones a medida con tecnologías modernas (React, Next.js, Laravel). Configuramos pasarelas de pago, gestión de envíos y métodos de envío.",
          },
          {
            title: "Pruebas y QA",
            description:
              "Realizamos pruebas de usabilidad, flujo de compra, transacciones y compatibilidad en distintos navegadores para asegurar un funcionamiento impecable.",
          },
          {
            title: "Lanzamiento y Optimización",
            description:
              "Publicamos la tienda en producción, configuramos SEO técnico y monitoreamos métricas de venta. Ajustamos landing pages y promociones para mejorar la conversión.",
          },
        ],
        faqs: [
          {
            question: "¿Qué plataforma de e-commerce recomiendan?",
            answer:
              "Depende del tamaño y necesidades de tu negocio. Shopify es ideal para tiendas pequeñas y medianas por su facilidad de uso y escalabilidad. WooCommerce (WordPress) ofrece flexibilidad si ya manejas contenido en WordPress. Para proyectos más complejos, recomendamos soluciones a medida con frameworks como Next.js o Laravel.",
          },
          {
            question:
              "¿Cuánto tiempo toma desarrollar una tienda en línea básica?",
            answer:
              "Para una tienda con catálogo limitado (hasta 50 productos), integración de pagos y diseño personalizado, el tiempo estimado es de 6 a 8 semanas. Tiendas más grandes o con funcionalidades avanzadas (marketplace, CRM integrado) pueden requerir 10 a 14 semanas.",
          },
          {
            question: "¿Cómo garantizan la seguridad en las transacciones?",
            answer:
              "Implementamos HTTPS obligatorio, cifrado de datos en tránsito, validación de formularios y sistemas antifraude en las pasarelas de pago. Además, mantenemos la tienda actualizada con los últimos parches de seguridad.",
          },
          {
            question: "¿Incluyen optimización SEO desde el inicio?",
            answer:
              "Sí. Configuramos meta tags, rich snippets para productos, sitemap.xml y optimización de URLs amigables. Aplicamos prácticas de performance (lazy loading, compresión de imágenes) para mejorar la velocidad y experiencia de usuario.",
          },
          {
            question: "¿Cómo funciona la gestión de inventario y envíos?",
            answer:
              "Integramos tu tienda con sistemas de gestión de inventario en tiempo real para controlar stock. Configuramos métodos de envío (envío propio o con terceros como DHL, FedEx) y calculamos tarifas automáticamente según ubicación y peso.",
          },
          {
            question:
              "¿Ofrecen soporte y mantenimiento posterior al lanzamiento?",
            answer:
              "Sí. Tenemos planes de mantenimiento mensual para actualizaciones de productos, mejoras de seguridad, monitorización del sitio y ajustes SEO continuos. También brindamos asistencia para agregar nuevas funcionalidades conforme crezca tu negocio.",
          },
        ],
      },
      "sitios-web": {
        imageUrl:
          "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595026/imsoft-images/services/sitio-web-imsoft.jpg",
        alt: "Servicio de Desarrollo de Sitios Web - imSoft",
        title: "Servicio de Desarrollo de Sitios Web",
        subtitle:
          "Creamos sitios web veloces, seguros y optimizados para convertir visitantes en clientes.",
        descriptions: [
          "En imSoft diseñamos y desarrollamos sitios web profesionales que destacan tu marca y mejoran la experiencia de usuario en todos los dispositivos.",
          "Nuestro enfoque combina diseño responsive, estándares de SEO on-page y prácticas de seguridad para ofrecer proyectos robustos que impulsen tu presencia online y aumenten tus ventas.",
        ],
        primaryActionText: "Solicitar Cotización",
        primaryActionHref: `mailto:sales@imsoft.io?subject=${encodeURIComponent(
          "Cotización: Servicio de Desarrollo de Sitios Web"
        )}&body=${encodeURIComponent(
          "Hola equipo de imSoft,%0A%0AMe interesa recibir una cotización para el Servicio de Desarrollo de Sitios Web.%0APor favor, envíenme detalles sobre paquetes, funcionalidades y tiempos estimados.%0A%0AGracias."
        )}`,
        secondaryActionText: "Ver Casos de Éxito",
        secondaryActionHref: "/portafolio",
        features: [
          { text: "Diseño responsive adaptado a móviles, tablets y desktop" },
          {
            text: "Optimización SEO on-page: meta tags, velocidad y accesibilidad",
          },
          { text: "Integración con CMS (Headless, WordPress, Strapi, etc.)" },
          {
            text: "Configuración de seguridad: HTTPS, protección contra ataques XSS/CSRF",
          },
          {
            text: "Implementación de analítica y métricas (Google Analytics, Tag Manager)",
          },
        ],
        methodologySteps: [
          {
            title: "Definición de Requerimientos",
            description:
              "Recopilamos objetivos de negocio, público objetivo y funcionalidades clave para tu sitio web.",
          },
          {
            title: "Diseño UI/UX",
            description:
              "Creamos wireframes y mockups que validan la estructura de navegación y la experiencia de usuario.",
          },
          {
            title: "Desarrollo Frontend",
            description:
              "Implementamos el diseño con tecnologías modernas (HTML5, CSS3, Tailwind CSS, JavaScript o frameworks como Next.js) para garantizar velocidad y rendimiento.",
          },
          {
            title: "Desarrollo Backend",
            description:
              "Configuramos el CMS o construimos la API necesaria (Node.js, Laravel o la tecnología que mejor se adapte) para gestionar contenidos de forma sencilla.",
          },
          {
            title: "Pruebas y QA",
            description:
              "Realizamos pruebas de usabilidad, compatibilidad en navegadores y optimización de carga para asegurar estabilidad y rendimiento.",
          },
          {
            title: "Despliegue y Mantenimiento",
            description:
              "Publicamos el sitio en producción (Vercel, Netlify, AWS, etc.) y ofrecemos planes de mantenimiento para actualizaciones de contenido y seguridad.",
          },
        ],
        faqs: [
          {
            question:
              "¿Qué diferencia hay entre un sitio estático y uno dinámico?",
            answer:
              "Un sitio estático entrega HTML pregenerado, ideal para landing pages y portfolios. Un sitio dinámico utiliza un backend o CMS para generar contenido según demanda, facilitando actualizaciones frecuentes y funcionalidades avanzadas.",
          },
          {
            question: "¿Cómo optimizan la velocidad de carga?",
            answer:
              "Implementamos lazy-loading de imágenes, minificación de recursos, uso de CDN y compresión GZIP/Brotli. También optimizamos el renderizado mediante prerendering o SSR (Server-Side Rendering) cuando es necesario.",
          },
          {
            question: "¿Incluyen optimización SEO desde el inicio?",
            answer:
              "Sí. Desde la configuración de meta tags, schemas y sitemap.xml hasta la optimización de estructura semántica y enlaces internos, seguimos mejores prácticas para mejorar tu posicionamiento orgánico.",
          },
          {
            question: "¿Qué CMS recomiendan para administrar contenido?",
            answer:
              "Dependiendo de tus necesidades, recomendamos soluciones headless como Strapi o Sanity para máxima flexibilidad, o WordPress si requieres un panel de administración familiar. Podemos asesorarte según tu flujo de trabajo.",
          },
          {
            question: "¿Cómo garantizan la seguridad del sitio?",
            answer:
              "Aplicamos HTTPS obligatorio, protección contra inyecciones de código, validación de formularios y reglas de firewall en el servidor. Además, integramos actualizaciones automáticas y monitoreo de vulnerabilidades.",
          },
          {
            question:
              "¿Cuál es el tiempo estimado para un proyecto web estándar?",
            answer:
              "Para un sitio institucional con hasta 10 páginas y funcionalidades básicas (blog, formulario de contacto), el tiempo aproximado es de 6 a 8 semanas. Proyectos con e-commerce o integraciones complejas pueden durar entre 10 y 14 semanas.",
          },
          {
            question:
              "¿Ofrecen soporte y actualizaciones posteriores al lanzamiento?",
            answer:
              "Sí. Tenemos planes de mantenimiento mensual para correcciones, actualización de plugins y mejoras continuas. También brindamos asistencia para añadir nuevas secciones o funcionalidades según crezca tu negocio.",
          },
        ],
      },
      "consultoria-en-ia-y-ml": {
        imageUrl:
          "https://res.cloudinary.com/https-imsoft-io/image/upload/v1747117146/imsoft-images/services/consultoria-en-ia-y-ml.jpg",
        alt: "Servicio de Consultoría en IA y ML - imSoft",
        title: "Servicio de Consultoría en IA y ML",
        subtitle:
          "Transforma tu negocio con inteligencia artificial y aprendizaje automático a medida.",
        descriptions: [
          "En imSoft brindamos consultoría especializada en Inteligencia Artificial (IA) y Machine Learning (ML) para empresas que desean aprovechar el poder de los datos y automatizar procesos críticos.",
          "Nuestro enfoque combina análisis de datos, desarrollo de modelos predictivos y despliegue de soluciones IA/ML en producción, garantizando resultados medibles y escalables.",
        ],
        primaryActionText: "Solicitar Cotización",
        primaryActionHref: `mailto:sales@imsoft.io?subject=${encodeURIComponent(
          "Cotización: Servicio de Consultoría en IA y ML"
        )}&body=${encodeURIComponent(
          "Hola equipo de imSoft,%0A%0AMe interesa recibir una cotización para el Servicio de Consultoría en IA y ML.%0APor favor, envíenme detalles sobre servicios, tarifas y disponibilidad.%0A%0AGracias."
        )}`,
        secondaryActionText: "Ver Casos de Éxito",
        secondaryActionHref: "/portafolio",
        features: [
          { text: "Diagnóstico y evaluación de madurez de datos" },
          {
            text: "Diseño de arquitecturas IA/ML escalables (nube on-premise)",
          },
          {
            text: "Entrenamiento y validación de modelos predictivos personalizados",
          },
          { text: "Integración de APIs de inferencia y pipelines de datos" },
          {
            text: "Monitoreo continuo y mantenimiento de modelos en producción",
          },
        ],
        methodologySteps: [
          {
            title: "Evaluación del Entorno",
            description:
              "Analizamos la infraestructura actual, calidad de datos y objetivos de negocio para definir un roadmap IA/ML personalizado.",
          },
          {
            title: "Recolección y Preparación de Datos",
            description:
              "Extraemos, limpiamos y transformamos datos relevantes para entrenar modelos de Machine Learning con alta precisión.",
          },
          {
            title: "Desarrollo de Modelos",
            description:
              "Creamos modelos de aprendizaje supervisado, no supervisado o reforzado según tus necesidades, utilizando herramientas como Python (Scikit-Learn, TensorFlow, PyTorch).",
          },
          {
            title: "Validación y Pruebas",
            description:
              "Realizamos pruebas de rendimiento, validación cruzada y ajuste de hiperparámetros para asegurar la robustez y generalización del modelo.",
          },
          {
            title: "Despliegue y Mantenimiento",
            description:
              "Implementamos los modelos en entornos productivos (AWS, Azure, GCP o servidores on-premise) y configuramos pipelines automáticos para actualización continua.",
          },
        ],
        faqs: [
          {
            question: "¿Qué diferencia hay entre IA y Machine Learning?",
            answer:
              "La Inteligencia Artificial (IA) es un campo amplio que abarca sistemas capaces de realizar tareas que normalmente requieren inteligencia humana. Machine Learning (ML) es una subárea de la IA que se enfoca en algoritmos que aprenden de los datos para hacer predicciones o decisiones sin estar programados explícitamente.",
          },
          {
            question:
              "¿Cómo identifican los casos de uso adecuados para IA/ML?",
            answer:
              "Partimos de objetivos de negocio concretos (reducción de costos, mejora de productividad, optimización de marketing) y luego analizamos la disponibilidad y calidad de datos para definir modelos adecuados que generen un ROI claro.",
          },
          {
            question:
              "¿Qué tecnologías utilizan para el desarrollo de modelos?",
            answer:
              "Nuestro equipo usa Python, con librerías como Scikit-Learn, TensorFlow, Keras y PyTorch. Para procesamiento de grandes volúmenes de datos, empleamos herramientas como Pandas, Spark y servicios en la nube (AWS SageMaker, Azure ML, GCP AI Platform).",
          },
          {
            question:
              "¿Cuánto tiempo toma ver resultados con un proyecto IA/ML?",
            answer:
              "Para un proyecto básico de ML (por ejemplo, predicción de demanda o análisis de churn), se estima un periodo de 8 a 12 semanas, incluyendo recolección de datos, entrenamiento, validación y despliegue inicial. Proyectos más complejos con deep learning o pipelines avanzados pueden requerir de 12 a 20 semanas.",
          },
          {
            question: "¿Cómo aseguran la fiabilidad y ética de los modelos?",
            answer:
              "Implementamos pruebas de sesgo y fairness, validamos la explicabilidad con técnicas como SHAP o LIME, y seguimos prácticas de documentación y auditoría para garantizar transparencia y alineación con normativas de privacidad.",
          },
          {
            question:
              "¿Ofrecen soporte y actualización de modelos a largo plazo?",
            answer:
              "Sí. Contamos con paquetes de mantenimiento y monitoreo continuo para garantizar que los modelos se mantengan precisos con nuevos datos, incluyendo recalibración y retraining automático según se requiera.",
          },
        ],
      },
      "aplicaciones-web": {
        imageUrl:
          "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595026/imsoft-images/services/aplicacion-web-imsoft.jpg",
        alt: "Servicio de Desarrollo de Aplicaciones Web - imSoft",
        title: "Servicio de Aplicaciones Web",
        subtitle:
          "Automatiza y optimiza procesos con soluciones web personalizadas y escalables.",
        descriptions: [
          "En imSoft creamos aplicaciones web a medida que se adaptan a las necesidades específicas de tu negocio. Desde portales B2B hasta sistemas de gestión interna, nuestras soluciones garantizan rendimiento, seguridad y experiencia de usuario fluida.",
          "Nuestro equipo combina diseño centrado en el usuario (UI/UX) con arquitecturas modernas (Next.js, React, Node.js) para entregar proyectos robustos. Cada etapa—desde el análisis de requerimientos hasta el despliegue—está optimizada para maximizar la eficiencia y el retorno de inversión.",
        ],
        primaryActionText: "Solicitar Cotización",
        primaryActionHref: `mailto:sales@imsoft.io?subject=${encodeURIComponent(
          "Cotización: Servicio de Aplicaciones Web"
        )}&body=${encodeURIComponent(
          "Hola equipo de imSoft,%0A%0AMe interesa recibir una cotización para el Servicio de Aplicaciones Web.%0APor favor, envíenme detalles sobre servicios, tarifas y plazos.%0A%0AGracias."
        )}`,
        secondaryActionText: "Ver Casos de Éxito",
        secondaryActionHref: "/portafolio",
        features: [
          { text: "Desarrollo full-stack con Next.js, React y Node.js" },
          {
            text: "Arquitectura escalable basada en microservicios o monolitos optimizados",
          },
          { text: "Integración con APIs externas y plataformas de pago" },
          {
            text: "Optimización SEO on-page y performance web (Lighthouse score alto)",
          },
          {
            text: "Implementación de estándares de seguridad: JWT, HTTPS y OWASP",
          },
        ],
        methodologySteps: [
          {
            title: "Planeación y Requisitos",
            description:
              "Recopilamos objetivos de negocio, casos de uso y definimos la arquitectura adecuada para tu aplicación web.",
          },
          {
            title: "Diseño UI/UX",
            description:
              "Creamos prototipos (wireframes) y mockups interactivos para garantizar una navegación intuitiva y atractiva en todos los dispositivos.",
          },
          {
            title: "Desarrollo",
            description:
              "Codificamos con prácticas de calidad: código limpio, testing automatizado y revisión de pares. Elegimos tecnologías que favorecen escalabilidad y mantenibilidad.",
          },
          {
            title: "Pruebas y QA",
            description:
              "Realizamos pruebas unitarias, de integración y de usabilidad en distintos navegadores y dispositivos para asegurar estabilidad y compatibilidad.",
          },
          {
            title: "Despliegue y Mantenimiento",
            description:
              "Publicamos en entornos productivos (Vercel, AWS, etc.) y configuramos monitoreo continuo. Ofrecemos soporte para actualizaciones y nuevas funcionalidades.",
          },
        ],
        faqs: [
          {
            question: "¿Qué frameworks utilizamos para el desarrollo web?",
            answer:
              "Trabajamos principalmente con Next.js y React en el frontend, y Node.js/Express o NestJS en el backend. Estas tecnologías nos permiten construir aplicaciones rápidas, seguras y fáciles de mantener.",
          },
          {
            question: "¿Cómo garantizan la velocidad y rendimiento?",
            answer:
              "Implementamos SSR (Server-Side Rendering) con Next.js, optimización de imágenes, lazy-loading y técnicas de caching (CDN). Además, medimos con herramientas como Lighthouse para asegurar tiempos de carga mínimos.",
          },
          {
            question: "¿Incluyen optimización SEO en el proyecto?",
            answer:
              "Sí. Configuramos meta etiquetas dinámicas, generamos sitemaps automáticos y aplicamos buenas prácticas de accesibilidad (WCAG). De esta manera, tu sitio web tendrá mejor visibilidad en buscadores.",
          },
          {
            question: "¿Cómo manejan la seguridad de los datos?",
            answer:
              "Aplicamos HTTPS obligatorio, protección contra ataques XSS/CSRF, validación y sanitización de entradas en el backend, y autenticación basada en JWT. También establecemos roles y permisos según tus requisitos.",
          },
          {
            question: "¿Cuál es el tiempo estimado de desarrollo?",
            answer:
              "Para una aplicación estándar (login, panel de control, CRUD de entidades) el tiempo estimado es de 10 a 14 semanas. Proyectos más complejos con integración de terceros pueden requerir de 16 a 20 semanas.",
          },
          {
            question: "¿Qué costo aproximado tiene un proyecto web?",
            answer:
              "El costo varía según funcionalidades, complejidad y diseño. Proyectos básicos suelen oscilar entre $80,000 y $180,000 MXN. Para una cotización precisa, contáctanos y analizaremos tus necesidades detalladamente.",
          },
          {
            question:
              "¿Ofrecen soporte y actualizaciones posteriores al lanzamiento?",
            answer:
              "Sí. Disponemos de planes de mantenimiento mensuales que incluyen correcciones de errores, actualizaciones de dependencias y soporte para implementar mejoras continuas.",
          },
        ],
      },
      "aplicaciones-moviles": {
        imageUrl:
          "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706898396/imsoft-images/services/aplicaciones-moviles-imsoft.jpg",
        alt: "Servicio de Desarrollo de Aplicaciones Móviles - imSoft",
        title: "Servicio de Aplicaciones Móviles",
        subtitle:
          "Conecta con tus clientes en su bolsillo: apps rápidas, seguras y a la medida.",
        descriptions: [
          "En imSoft diseñamos y desarrollamos aplicaciones móviles nativas e híbridas para iOS y Android, enfocadas en ofrecer experiencias de usuario fluidas y alto rendimiento.",
          "Nuestra metodología cubre desde el análisis de requisitos y diseño de interfaz (UI/UX) hasta la implementación, pruebas y despliegue en las tiendas oficiales. Garantizamos soluciones escalables que impulsan la retención y conversión de usuarios.",
        ],
        primaryActionText: "Solicitar Cotización",
        primaryActionHref: `mailto:sales@imsoft.io?subject=${encodeURIComponent(
          "Cotización: Servicio de Aplicaciones Móviles"
        )}&body=${encodeURIComponent(
          "Hola equipo de imSoft,%0A%0AMe interesa recibir una cotización para el Servicio de Aplicaciones Móviles.%0APor favor envíenme detalles sobre características, precios y tiempos de entrega.%0A%0AGracias."
        )}`,
        secondaryActionText: "Ver Casos de Éxito",
        secondaryActionHref: "/portafolio",
        features: [
          {
            text: "Desarrollo nativo (Swift, Kotlin) y multiplataforma (React Native, Flutter)",
          },
          { text: "Diseño UI/UX centrado en la experiencia móvil" },
          { text: "Integración con APIs, bases de datos y servicios externos" },
          { text: "Optimización de rendimiento y consumo de recursos" },
          { text: "Publicación y mantenimiento en App Store y Google Play" },
        ],
        methodologySteps: [
          {
            title: "Planeación y Análisis",
            description:
              "Recopilamos requerimientos, analizamos objetivos de negocio y definimos funcionalidades clave para tu aplicación móvil.",
          },
          {
            title: "Diseño UI/UX",
            description:
              "Creamos prototipos interactivos y wireframes que aseguran una navegación intuitiva y atractiva para el usuario final.",
          },
          {
            title: "Desarrollo",
            description:
              "Construimos la app usando tecnologías nativas (Swift, Kotlin) o híbridas (React Native, Flutter) según tus necesidades y presupuesto.",
          },
          {
            title: "Pruebas y QA",
            description:
              "Realizamos pruebas unitarias, de integración y usabilidad en dispositivos reales para garantizar estabilidad y rendimiento óptimos.",
          },
          {
            title: "Lanzamiento y Monitoreo",
            description:
              "Publicamos la aplicación en Google Play y App Store, y configuramos herramientas de monitoreo para analizar métricas de uso y rendimiento.",
          },
        ],
        faqs: [
          {
            question:
              "¿Necesito una app nativa o puedo usar una solución multiplataforma?",
            answer:
              "Depende de tu presupuesto y objetivos. Las apps nativas (Swift para iOS, Kotlin para Android) ofrecen máximo rendimiento, mientras que las multiplataforma (React Native, Flutter) reducen tiempos y costos de desarrollo manteniendo buen rendimiento.",
          },
          {
            question:
              "¿Cuánto tiempo toma desarrollar una aplicación móvil básica?",
            answer:
              "Para una app con funcionalidades esenciales (login, perfiles, notificaciones básicas), el tiempo aproximado es de 8 a 12 semanas. Proyectos más complejos pueden requerir de 16 a 24 semanas, según las características y pruebas necesarias.",
          },
          {
            question: "¿Cómo garantizan la seguridad de los datos en la app?",
            answer:
              "Implementamos cifrado en tránsito (HTTPS) y en reposo (encriptación local), autenticación segura (OAuth 2.0, JWT) y validaciones en el backend para proteger información sensible.",
          },
          {
            question:
              "¿Cuál es el costo aproximado de desarrollo de una app móvil?",
            answer:
              "El costo varía según complejidad y número de plataformas. Proyectos simples para una sola plataforma suelen oscilar entre $80,000 y $150,000 MXN. Apps multiplataforma con funcionalidades avanzadas pueden estar entre $150,000 y $300,000 MXN. Contáctanos para un presupuesto detallado.",
          },
          {
            question:
              "¿Ofrecen mantenimiento y actualizaciones posteriores al lanzamiento?",
            answer:
              "Sí. Brindamos paquetes de soporte mensual o por hora para corregir errores, actualizar la app a nuevas versiones de iOS/Android y agregar mejoras según el feedback de usuarios.",
          },
          {
            question: "¿Cómo manejo la publicación en App Store y Google Play?",
            answer:
              "Nos encargamos de todo el proceso: configuramos las cuentas de desarrollador, generamos los certificados necesarios (iOS/Android), subimos la aplicación y gestionamos la revisión de cada tienda.",
          },
        ],
      },
      "analisis-de-datos": {
        imageUrl:
          "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706898185/imsoft-images/services/analisis-de-datos-imsoft.jpg",
        alt: "Servicio de Análisis de Datos - imSoft",
        title: "Servicio de Análisis de Datos",
        subtitle:
          "Impulsa tus decisiones empresariales con datos confiables y personalizados.",
        descriptions: [
          "En imSoft ofrecemos un servicio integral de análisis de datos que abarca desde la recolección y limpieza de información hasta la generación de insights accionables.",
          "Nuestro objetivo es transformar datos crudos en informes claros y visualizaciones interactivas para ayudar a tu empresa a optimizar procesos, detectar oportunidades de mercado y tomar decisiones basadas en hechos reales.",
        ],
        primaryActionText: "Solicitar Cotización",
        primaryActionHref: `mailto:sales@imsoft.io?subject=${encodeURIComponent(
          "Cotización: Servicio de Análisis de Datos"
        )}&body=${encodeURIComponent(
          "Hola equipo de imSoft,%0A%0AMe interesa solicitar una cotización para el servicio de Análisis de Datos.%0APor favor, envíenme más información.%0A%0AGracias."
        )}`,
        secondaryActionText: "Casos de Éxito",
        secondaryActionHref: "/portafolio",
        features: [
          { text: "Recolección y limpieza de datos desde múltiples fuentes" },
          {
            text: "Visualizaciones dinámicas e interactivas para tus métricas",
          },
          { text: "Informes personalizados adaptados a objetivos específicos" },
          { text: "Modelos predictivos para anticipar tendencias del mercado" },
          { text: "Soporte continuo y actualizaciones de tus dashboards" },
        ],
        methodologySteps: [
          {
            title: "Exploración",
            description:
              "Evaluamos la calidad y relevancia de tus datos para asegurar resultados fiables.",
          },
          {
            title: "Transformación",
            description:
              "Limpiamos, normalizamos y estructuramos la información para facilitar el análisis.",
          },
          {
            title: "Modelado",
            description:
              "Construimos modelos estadísticos y predictivos con herramientas como Python, R y plataformas BI.",
          },
          {
            title: "Visualización",
            description:
              "Creamos dashboards interactivos y reportes ejecutivos para mostrar insights claros.",
          },
        ],
        faqs: [
          {
            question: "¿Qué incluye el servicio de Análisis de Datos?",
            answer:
              "Nuestro servicio abarca la recolección, limpieza y normalización de datos, así como el desarrollo de modelos estadísticos y predictivos. Además, entregamos dashboards interactivos y reportes ejecutivos personalizados.",
          },
          {
            question: "¿Qué tipo de empresas pueden beneficiarse?",
            answer:
              "Cualquier empresa que necesite tomar decisiones basadas en datos: desde pymes hasta corporativos. Atendemos sectores como retail, logística, salud y servicios financieros, entre otros.",
          },
          {
            question: "¿Cuánto tiempo lleva obtener resultados?",
            answer:
              "El cronograma varía según la complejidad de los datos. En proyectos estándar, la fase inicial de exploración y limpieza puede realizarse en 2 a 3 semanas. Luego, en 4 a 6 semanas, generamos modelos y dashboards básicos.",
          },
          {
            question: "¿Qué tecnologías utilizamos?",
            answer:
              "Trabajamos con Python (Pandas, NumPy, Scikit-Learn), R, Power BI, Tableau y herramientas de almacenamiento como BigQuery o PostgreSQL. Adaptamos la solución a tu ecosistema tecnológico.",
          },
          {
            question: "¿Ofrecen soporte y actualizaciones?",
            answer:
              "Sí. Después de la implementación inicial, brindamos soporte técnico continuo y actualizamos tus dashboards según cambien tus necesidades de negocio. Puedes contratar mantenimiento mensual o por proyecto.",
          },
          {
            question: "¿Cuál es la inversión aproximada?",
            answer:
              "El costo depende del volumen y complejidad de los datos. Proyectos medianos suelen oscilar entre $50,000 y $150,000 MXN. Para obtener un presupuesto detallado, contáctanos.",
          },
        ],
      },
    },
    blog: {
      heading: "Nuestro Blog",
      description:
        "Descubre las últimas entradas, tutoriales y noticias sobre Astro, Solid y más.",
      by: "por",
      dateFormatOptions: {
        year: "numeric",
        month: "long",
        day: "numeric",
      } as const,
    },
    contact: {
      heading: "Contáctanos",
      description:
        "Ya sea que quieras colaborar con nosotros, solicitar prensa, unirte a nuestro equipo o simplemente saludar, aquí encontrarás la forma de hacerlo. Estamos siempre dispuestos a escuchar y responder.",
      cards: [
        {
          title: "Ventas",
          email: "ventas@imsoft.io",
          mailtoLink:
            "mailto:ventas@imsoft.io?subject=Solicitud%20de%20información%20-%20Ventas&body=Hola%20equipo%20de%20imSoft%2C%0A%0AMe%20gustaría%20obtener%20más%20detalles%20sobre%20sus%20opciones%20de%20Ventas.%0A%0AGracias.",
          phoneLabel: "Llámanos",
          phone: "+5233123536558",
          delay: 200,
        },
        {
          title: "Prensa",
          email: "prensa@imsoft.io",
          mailtoLink:
            "mailto:prensa@imsoft.io?subject=Solicitud%20de%20material%20para%20Prensa&body=Hola%20equipo%20de%20imSoft%2C%0A%0ASoy%20de%20Prensa%20y%20me%20interesa%20recibir%20material%20de%20prensa%20o%20noticias.%0A%0AGracias.",
          phoneLabel: "Llámanos",
          phone: "+5233123536558",
          delay: 400,
        },
        {
          title: "Únete a nuestro equipo",
          email: "talento@imsoft.io",
          mailtoLink:
            "mailto:talento@imsoft.io?subject=Interés%20en%20oportunidad%20de%20talento&body=Hola%20equipo%20de%20imSoft%2C%0A%0AMe%20gustaría%20saber%20más%20sobre%20oportunidades%20para%20unirme%20a%20su%20equipo.%0A%0AGracias.",
          phoneLabel: "Llámanos",
          phone: "+5233123536558",
          delay: 600,
        },
        {
          title: "Saluda",
          email: "contacto@imsoft.io",
          mailtoLink:
            "mailto:contacto@imsoft.io?subject=Saludos%20desde%20el%20sitio%20web&body=Hola%20equipo%20de%20imSoft%2C%0A%0ASolo%20quería%20saludarles%20y%20darles%20las%20gracias%20por%20su%20trabajo.%0A%0AGracias.",
          phoneLabel: "Llámanos",
          phone: "+5233123536558",
          delay: 800,
        },
      ] as const,
    },
    privacy: {
      title: "Aviso de Privacidad",
      intro:
        "Brandon Uriel Garcia Ramos, mejor conocido como imSoft, con domicilio en Guadalajara, Jalisco, México y portal de internet imsoft.io/aviso-de-privacidad, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:",
      sections: [
        {
          heading: "¿Para qué fines utilizaremos sus datos personales?",
          content:
            "Los datos personales que recabamos de usted, los utilizaremos para responder mensajes del formulario de contacto y prestar cualquier servicio solicitado.",
        },
        {
          heading: "¿Qué datos personales utilizaremos para estos fines?",
          content:
            "Utilizaremos datos de identificación y contacto, así como datos laborales.",
        },
        {
          heading:
            "¿Cómo puede acceder, rectificar o cancelar sus datos personales, oponerse a su uso o ejercer la revocación de consentimiento?",
          content:
            "Puede ejercer sus derechos ARCO enviando un correo a contacto@imsoft.io con su nombre completo, domicilio, teléfono, correo usado en este sitio, copia de identificación y asunto “Derechos ARCO”.",
        },
        {
          heading: "¿En cuántos días le daremos respuesta a su solicitud?",
          content: "5 días.",
        },
        {
          heading:
            "¿Por qué medio le comunicaremos la respuesta a su solicitud?",
          content: "Por correo electrónico a contacto@imsoft.io.",
        },
        {
          heading: "El uso de tecnologías de rastreo en nuestro portal",
          content:
            "Utilizamos cookies, web beacons y otras tecnologías de rastreo en nuestro sitio.",
        },
        {
          heading:
            "¿Cómo puede conocer los cambios en este aviso de privacidad?",
          content:
            "Este aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones.",
        },
      ] as const,
      lastUpdated: "Última actualización: 27/03/2025",
    },
    nav: [
      { name: "Inicio", href: "/" },
      { name: "Servicios", href: "/servicios" },
      { name: "Portafolio", href: "/portafolio" },
      { name: "Blog", href: "/blog" },
      { name: "Historia", href: "/historia" },
      { name: "Contacto", href: "/contacto" },
    ] as const,
    footer: {
      cta: {
        heading: "Empieza hoy",
        subheading: "Impulsa tu negocio con soluciones digitales efectivas.",
        description:
          "Optimiza, automatiza y crece con tecnología diseñada para ti.",
      },
      sections: [
        {
          title: "imSoft",
          links: [
            { label: "Inicio", href: "/" },
            { label: "Portafolio", href: "/portafolio" },
            { label: "Blog", href: "/blog" },
            { label: "Historia", href: "/historia" },
            { label: "Contacto", href: "/contacto" },
          ],
        },
        {
          title: "Servicios",
          links: [
            {
              label: "Análisis de Datos",
              href: "/servicios/analisis-de-datos",
            },
            {
              label: "Aplicaciones Móviles",
              href: "/servicios/aplicaciones-moviles",
            },
            { label: "Aplicaciones Web", href: "/servicios/aplicaciones-web" },
            {
              label: "Desarrollo de Sitios Web",
              href: "/servicios/sitios-web",
            },
            { label: "Tienda en Línea", href: "/servicios/tienda-en-linea" },
            {
              label: "Consultoría en IA y ML",
              href: "/servicios/consultoria-en-ia-y-ml",
            },
          ],
        },
        {
          title: "Explora",
          links: [
            { label: "Todos los Servicios", href: "/servicios" },
            { label: "Casos de Éxito", href: "/portafolio" },
          ],
        },
        {
          title: "Legal",
          links: [
            { label: "Aviso de Privacidad", href: "/aviso-de-privacidad" },
          ],
        },
      ] as const,
      copyright: "Todos los derechos reservados.",
    },
    cta: {
      services: { href: "/servicios", label: "Servicios" },
      contact: { href: "/contacto", label: "Contáctanos →" },
    },
  },
  en: {
    index: {
      hero: {
        title: "We Transform Ideas into Software",
        description:
          "At imSoft, we turn your vision into reality with innovative technology and high-impact software development.",
        bullets: "📈 More traffic. More customers. More growth.",
      },
      features: {
        heading: "What Sets Us Apart",
        subheading: "Strategies That Make You Stand Out",
        description:
          "Digital solutions designed to position you above the competition. Innovation, efficiency, and results that drive your business forward.",
        differentiators: [
          {
            title: "Tailored Technology",
            description: "We build solutions that adapt 100% to your needs.",
          },
          {
            title: "Grow Without Limits",
            description:
              "Scale your business with systems that evolve alongside you.",
          },
          {
            title: "Proven Results",
            description:
              "Success stories that back our expertise and commitment.",
          },
          {
            title: "Smart Strategy",
            description:
              "Decisions guided by data, analysis, and clear objectives.",
          },
          {
            title: "Continuous Innovation",
            description: "Ongoing updates with cutting-edge technology.",
          },
          {
            title: "Reliable Support",
            description:
              "We’re with you at every stage of your digital growth.",
          },
        ] as const,
      },
      services: {
        heading: "Boost Your Business Today",
        description:
          "Digital strategies designed to grow your brand, attract more clients, and deliver real results.",
        items: [
          {
            title: "Data Analysis",
            href: "/en/services/data-analysis",
            description: "Make data-driven decisions, not risky guesses.",
            imageUrl:
              "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706898185/imsoft-images/services/analisis-de-datos-imsoft.jpg",
            alt: "Data Analysis - imSoft",
          },
          {
            title: "Mobile Apps",
            href: "/en/services/mobile-apps",
            description:
              "Connect with customers via a fast, intuitive, and functional app.",
            imageUrl:
              "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706898396/imsoft-images/services/aplicaciones-moviles-imsoft.jpg",
            alt: "Mobile Apps - imSoft",
          },
          {
            title: "Web Applications",
            href: "/en/services/web-applications",
            description:
              "Automate and streamline processes with custom solutions.",
            imageUrl:
              "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595026/imsoft-images/services/aplicacion-web-imsoft.jpg",
            alt: "Web Applications - imSoft",
          },
          {
            title: "Website Development",
            href: "/en/services/website-development",
            description: "Fast, secure websites designed to drive more sales.",
            imageUrl:
              "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595026/imsoft-images/services/sitio-web-imsoft.jpg",
            alt: "Website Development - imSoft",
          },
          {
            title: "Online Store",
            href: "/en/services/online-store",
            description: "Sell 24/7 with an optimized, efficient online store.",
            imageUrl:
              "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595027/imsoft-images/services/tienda-en-linea-imsoft.jpg",
            alt: "Online Store - imSoft",
          },
          {
            title: "AI & ML Consulting",
            href: "/en/services/ai-ml-consulting",
            description:
              "Transform your business with AI and machine learning.",
            imageUrl:
              "https://res.cloudinary.com/https-imsoft-io/image/upload/v1747117146/imsoft-images/services/consultoria-en-ia-y-ml.jpg",
            alt: "AI & ML Consulting - imSoft",
          },
        ] as const,
      },
      testimonials: {
        heading: "Testimonials",
        subheading: "Real companies, real experiences",
        quote:
          "Since we launched our store with imSoft, the experience for our\n" +
          "readers has improved drastically. The platform is fast,\n" +
          "intuitive, and allows us to sell our eBooks 24/7 without\n" +
          "complications. Now we can focus on creating content while\n" +
          "the technology does the rest.",
        company: "Cursumi",
        service: "📊 Web Application",
        image:
          "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748817038/imsoft-images/portfolio/logos/cursumi.png",
        columns: {
          firstColumn: [
            {
              quote:
                "Thanks to the new site, our clients find everything so much easier. The speed and design represent us 100%.",
              company: "BemästraDental",
              service: "🖥️ Website",
              image:
                "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748817334/imsoft-images/portfolio/logos/bemastradental.png",
            },
            {
              quote:
                "Now we can truly say we have a real digital presence. Incredible work by imSoft!",
              company: "Profibra",
              service: "🖥️ Website",
              image:
                "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748817040/imsoft-images/portfolio/logos/profibra.png",
            },
            {
              quote:
                "Managing inventory is no longer a headache. The app helps us every day.",
              company: "Podstore",
              service: "📊 Web Application",
              image:
                "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748817334/imsoft-images/portfolio/logos/podstore.png",
            },
            {
              quote:
                "We had zero complications. The team understood our needs from day one.",
              company: "Ortíz y Cia",
              service: "🖥️ Website",
              image:
                "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748817040/imsoft-images/portfolio/logos/ortiz-y-cia.png",
            },
            {
              quote:
                "We needed agility and clarity on the web. imSoft delivered it perfectly.",
              company: "JTP Logistics",
              service: "🖥️ Website",
              image:
                "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748817039/imsoft-images/portfolio/logos/jtp-logistics.png",
            },
          ] as const,
          secondColumn: [
            {
              quote:
                "The imSoft team understood exactly what we needed. The site looks professional and works flawlessly.",
              company: "Infinito Empresarial y Aduanero",
              service: "🖥️ Website",
              image:
                "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748817334/imsoft-images/portfolio/logos/infinito-empresarial-y-aduanero.png",
            },
            {
              quote:
                "The new website boosts local tourism. People can now find everything much more easily.",
              company: "Santa Maria Del Oro Jalisco",
              service: "🖥️ Website",
              image:
                "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748817040/imsoft-images/portfolio/logos/santa-maria-del-oro-jalisco.png",
            },
            {
              quote:
                "imSoft created exactly what we needed: something easy, fast, and tailored to our company.",
              company: "Starfilters",
              service: "📊 Web Application",
              image:
                "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748817040/imsoft-images/portfolio/logos/starfilters.png",
            },
          ] as const,
          thirdColumn: [
            {
              quote:
                "Since we started using our app, everything is faster and more organized. Daily operations have completely changed.",
              company: "La Casa Del Paste",
              service: "📊 Web Application",
              image:
                "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748817334/imsoft-images/portfolio/logos/la-casa-del-paste.png",
            },
            {
              quote:
                "They transformed our spreadsheets into a modern, functional platform. What a difference!",
              company: "Steridental",
              service: "📊 Web Application",
              image:
                "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748817040/imsoft-images/portfolio/logos/steridental.png",
            },
            {
              quote:
                "Our site looks and feels like an official portal. The work was impeccable.",
              company: "Tuxcacuesco",
              service: "🖥️ Website",
              image:
                "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748817041/imsoft-images/portfolio/logos/tuxcacuesco.png",
            },
          ] as const,
          fourthColumn: [
            {
              quote:
                "Our site conveys trust and professionalism. We have received very positive feedback from new clients.",
              company: "Construcción Inteligente",
              service: "🖥️ Website",
              image:
                "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748817038/imsoft-images/portfolio/logos/construccion-inteligente.png",
            },
            {
              quote:
                "Everything was fast, hassle-free, and with excellent support. We recommend imSoft without hesitation.",
              company: "Ferreacabados Jalisco",
              service: "🖥️ Website",
              image:
                "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748817038/imsoft-images/portfolio/logos/ferreacabados-jalisco.png",
            },
            {
              quote:
                "Our mobile app and website provide an intuitive, fast, and comprehensive experience that has transformed how we interact with our clients.",
              company: "Club De Estirpe",
              service: "📱 Mobile App & 🖥️ Website",
              image:
                "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748817334/imsoft-images/portfolio/logos/club-de-estirpe.png",
            },
            {
              quote:
                "The site they built for us positions us as an international brand. Great design and performance.",
              company: "The Gaming Corps",
              service: "🖥️ Website",
              image:
                "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748817039/imsoft-images/portfolio/logos/the-gaming-corps.png",
            },
            {
              quote:
                "We were looking for a website that conveyed our expertise. We loved the result.",
              company: "Constructora RM",
              service: "🖥️ Website",
              image:
                "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748817040/imsoft-images/portfolio/logos/constructora-rm.png",
            },
          ] as const,
        },
      },
      randomServices: {
        preText: "Discover more about ",
        items: [
          {
            label: "Data Analysis",
            href: "/en/services/data-analysis",
            linkText: "see in action →",
          },
          {
            label: "Mobile Apps",
            href: "/en/services/mobile-apps",
            linkText: "learn how →",
          },
          {
            label: "Web Applications",
            href: "/en/services/web-applications",
            linkText: "discover →",
          },
          {
            label: "Website Development",
            href: "/en/services/website-development",
            linkText: "explore more →",
          },
          {
            label: "Online Store",
            href: "/en/services/online-store",
            linkText: "start selling →",
          },
          {
            label: "AI & ML Consulting",
            href: "/en/services/ai-ml-consulting",
            linkText: "transform your biz →",
          },
        ] as const,
      },
    },
    portfolio: {
      heading: "Projects That Transform Businesses",
      description:
        "Discover how we’ve helped companies grow with innovative digital solutions. Each project is a success story built with technology, strategy, and passion.",
      items: [
        {
          name: "BemästraDental",
          type: "Website 👨‍💻",
          url: "https://xn--bemstradental-dfb.com/",
          alt: "Website – BemästraDental – imSoft",
          imageUrl:
            "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748299999/imsoft-images/portfolio/website-pro/website-Bemastra-Dental-imsoft.png",
        },
        {
          name: "Infinito Empresarial y Aduanero",
          type: "Website 👨‍💻",
          url: "http://infinitoad.com/",
          alt: "Website – Infinito Empresarial y Aduanero – imSoft",
          imageUrl:
            "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595314/imsoft-images/portfolio/website/sitio-web-infinito-empresarial-y-aduanero.png",
        },
        {
          name: "Profibra",
          type: "Website 👨‍💻",
          url: "http://profibra.com.mx/",
          alt: "Website – Profibra – imSoft",
          imageUrl:
            "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595314/imsoft-images/portfolio/website/sitio-web-profibra.png",
        },
        {
          name: "Club De Estirpe",
          type: "Website 👨‍💻",
          url: "http://clubdeestirpe.com/",
          alt: "Website – Club De Estirpe – imSoft",
          imageUrl:
            "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595311/imsoft-images/portfolio/website/sitio-web-club-de-estirpe-imsoft.png",
        },
        {
          name: "Construcción Inteligente",
          type: "Website 👨‍💻",
          url: "https://construccioninteligente.mx/",
          alt: "Website – Construcción Inteligente – imSoft",
          imageUrl:
            "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595313/imsoft-images/portfolio/website/sitio-web-construccion-inteligente-imsoft.png",
        },
        {
          name: "Ferreacabados Jalisco",
          type: "Website 👨‍💻",
          url: "https://ferrejalisco.mx/",
          alt: "Website – Ferreacabados Jalisco – imSoft",
          imageUrl:
            "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595314/imsoft-images/portfolio/website/sitio-web-ferreacabdos-jalisco-imsoft.png",
        },
        {
          name: "JTP Logistics",
          type: "Website 👨‍💻",
          url: "https://www.jtp.com.mx/",
          alt: "Website – JTP Logistics – imSoft",
          imageUrl:
            "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595314/imsoft-images/portfolio/website/sitio-web-jtp-logistics-imsoft.png",
        },
        {
          name: "Constructora RM",
          type: "Website 👨‍💻",
          url: "https://constructorarm.mx/",
          alt: "Website – Constructora RM – imSoft",
          imageUrl:
            "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595312/imsoft-images/portfolio/website/sitio-web-constructorarm-imsoft.png",
        },
        {
          name: "Cursumi",
          type: "Website 👨‍💻",
          url: "https://cursumi.com/",
          alt: "Pro Website – Cursumi – imSoft",
          imageUrl:
            "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748299884/imsoft-images/portfolio/website-pro/website-cursumi-imsoft.png",
        },
        {
          name: "The Gaming Corps",
          type: "Website 👨‍💻",
          url: "https://thegamingcorps.com/",
          alt: "Pro Website – The Gaming Corps – imSoft",
          imageUrl:
            "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748299885/imsoft-images/portfolio/website-pro/website-the-gaming-corps-imsoft.png",
        },
        {
          name: "Santa Maria Del Oro Jalisco",
          type: "Website 👨‍💻",
          url: "http://santamariadelorojal.com/",
          alt: "Pro Website – Santa Maria Del Oro Jalisco – imSoft",
          imageUrl:
            "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595492/imsoft-images/portfolio/website-pro/sitio-web-pro-santa-maria-del-oro-jalisco-imsoft.png",
        },
        {
          name: "Tuxcacuesco",
          type: "Website 👨‍💻",
          url: "https://tuxcacuesco.gob.mx/#/",
          alt: "Pro Website – Tuxcacuesco – imSoft",
          imageUrl:
            "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595493/imsoft-images/portfolio/website-pro/sitio-web-pro-tuxcacuesco-imsoft.png",
        },
        {
          name: "Pastería La Hidalguense",
          type: "Web Application 🖥️📊",
          url: "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595207/imsoft-images/portfolio/web-application/aplicaciones-web-pasteria-la-hidalguense-imsoft.png",
          alt: "Web Application – Pastería La Hidalguense – imSoft",
          imageUrl:
            "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595207/imsoft-images/portfolio/web-application/aplicaciones-web-pasteria-la-hidalguense-imsoft.png",
        },
        {
          name: "Club De Estirpe",
          type: "Mobile App 📱📊",
          url: "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595385/imsoft-images/portfolio/mobile-apps/club-de-estirpe-aplicacion-movil-imsoft.png",
          alt: "Mobile App – Club De Estirpe – imSoft",
          imageUrl:
            "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595385/imsoft-images/portfolio/mobile-apps/club-de-estirpe-aplicacion-movil-imsoft.png",
        },
        {
          name: "Steridental",
          type: "Web Application 🖥️📊",
          url: "https://res.cloudinary.com/https-imsoft-io/image/upload/v1709918898/imsoft-images/portfolio/web-application/aplicaciones-web-steridental-imsoft.png",
          alt: "Web Application – Steridental – imSoft",
          imageUrl:
            "https://res.cloudinary.com/https-imsoft-io/image/upload/v1709918898/imsoft-images/portfolio/web-application/aplicaciones-web-steridental-imsoft.png",
        },
        {
          name: "Ortíz y Cia",
          type: "Website 👨‍💻",
          url: "https://ortizycia.mx/",
          alt: "Website – Ortíz y Cia – imSoft",
          imageUrl:
            "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748299885/imsoft-images/portfolio/website-pro/website-ortizycia-imsoft.png",
        },
        {
          name: "Podstore",
          type: "Web Application 🖥️📊",
          url: "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748299789/imsoft-images/portfolio/web-application/aplicaciones-web-podstore-imsoft.png",
          alt: "Web Application – Podstore – imSoft",
          imageUrl:
            "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748299789/imsoft-images/portfolio/web-application/aplicaciones-web-podstore-imsoft.png",
        },
        {
          name: "Starfilters",
          type: "Web Application 🖥️📊",
          url: "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748299788/imsoft-images/portfolio/web-application/aplicaciones-web-starfilters-imsoft.png",
          alt: "Web Application – Starfilters – imSoft",
          imageUrl:
            "https://res.cloudinary.com/https-imsoft-io/image/upload/v1748299788/imsoft-images/portfolio/web-application/aplicaciones-web-starfilters-imsoft.png",
        },
        {
          name: "Contact Us!",
          type: "Next Step 💻🏆",
          url: "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595141/imsoft-images/portfolio/others/aqui-va-el-siguiente-paso-para-tu-negocio-imsoft.png",
          alt: "Contact Us – imSoft",
          imageUrl:
            "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595141/imsoft-images/portfolio/others/aqui-va-el-siguiente-paso-para-tu-negocio-imsoft.png",
        },
      ] as const,
    },
    history: {
      preheading: "Our Story",
      heading: "Purposeful Innovation, Impactful Technology",
      paragraphs: [
        `imSoft was born with a clear vision: to help companies and
        entrepreneurs leverage technology to grow and stand out in the
        market. What began as a dream soon became a team passionate about
        innovation and digital efficiency.`,
        `Each project has been a challenge but also an opportunity
        to learn, improve, and grow alongside our clients. We believe in
        technology as a bridge to new opportunities, and our commitment
        is to make every solution intuitive, efficient, and scalable.`,
        `From day one, we’ve focused on creating solutions that
        truly make a difference. We don’t just develop software, we build
        tools that drive businesses and turn ideas into real results.`,
        `The future of imSoft is clear: keep innovating, keep learning,
        and keep creating digital solutions that help more businesses
        reach their full potential. We’re excited for what’s ahead,
        and we want you to be part of this story.`,
      ] as const,
      ctaLabel: "Be part of our story",
      imageAlt: "imSoft’s story image",
    },
    servicesTemplates: {
      "online-store": {
        imageUrl:
          "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595027/imsoft-images/services/tienda-en-linea-imsoft.jpg",
        alt: "Online Store Development Service – imSoft",
        title: "Online Store Service",
        subtitle:
          "Sell 24/7 with an optimized, secure and easy-to-manage online store.",
        descriptions: [
          "At imSoft we design and develop custom online stores that help you reach more customers and boost sales. We integrate payment gateways, inventory management and logistics for a seamless shopping experience.",
          "We have experience with Shopify, WooCommerce and tailor-made solutions. Every project includes on-page SEO for e-commerce, ensuring organic visibility and sustainable growth.",
        ],
        primaryActionText: "Request a Quote",
        primaryActionHref: `mailto:sales@imsoft.io?subject=${encodeURIComponent(
          "Quote Request: Online Store Service"
        )}&body=${encodeURIComponent(
          "Hello imSoft team,%0A%0AI’d like a quote for your Online Store Service.%0APlease send details on pricing and timelines.%0A%0AThanks."
        )}`,
        secondaryActionText: "See Case Studies",
        secondaryActionHref: "/en/portfolio",
        features: [
          {
            text: "Secure payment gateway integration (PayPal, Stripe, Conekta)",
          },
          { text: "Shopping cart optimized for conversion and speed" },
          { text: "Real-time product, category & stock management" },
          { text: "Responsive design for all devices" },
          { text: "E-commerce-specific SEO optimization" },
        ],
        methodologySteps: [
          {
            title: "Requirements Analysis",
            description:
              "We gather catalog, payment gateway and logistics info to define your store’s architecture.",
          },
          {
            title: "UI/UX Design",
            description:
              "We build prototypes focusing on clear navigation, visible CTAs and a smooth checkout process.",
          },
          {
            title: "Development & Integration",
            description:
              "We implement the store on Shopify or WooCommerce, or build custom solutions (React, Next.js, Laravel). We set up payment gateways, shipping and fulfillment.",
          },
          {
            title: "Testing & QA",
            description:
              "We run usability, transaction flow and cross-browser tests to guarantee flawless operation.",
          },
          {
            title: "Launch & Optimization",
            description:
              "We deploy the store, configure technical SEO, monitor sales metrics and tweak landing pages and promotions for better conversion.",
          },
        ],
        faqs: [
          {
            question: "Which e-commerce platform do you recommend?",
            answer:
              "It depends on your business size and needs. Shopify is ideal for small to medium stores for its ease of use and scalability. WooCommerce offers flexibility if you’re on WordPress. For complex projects, we recommend custom solutions with frameworks like Next.js or Laravel.",
          },
          {
            question: "How long does it take to build a basic online store?",
            answer:
              "For a store with up to 50 products, payment integration and custom design, expect 6–8 weeks. Larger stores or advanced features (marketplace, CRM) may take 10–14 weeks.",
          },
          {
            question: "How do you ensure transaction security?",
            answer:
              "We enforce HTTPS, encrypt data in transit, validate forms and use anti-fraud systems on payment gateways. Plus, we keep the store updated with the latest security patches.",
          },
          {
            question: "Is SEO optimization included from day one?",
            answer:
              "Yes. We set up meta tags, product rich snippets, sitemap.xml and friendly URLs. We also apply performance best practices (lazy loading, image compression) for speed and UX.",
          },
          {
            question: "How does inventory & shipping management work?",
            answer:
              "We integrate real-time inventory systems for stock control. We configure shipping methods (in-house or third-party like DHL, FedEx) and auto-calculate rates based on location and weight.",
          },
          {
            question: "Do you offer post-launch support & maintenance?",
            answer:
              "Yes. Monthly maintenance plans cover product updates, security improvements, site monitoring and ongoing SEO tweaks. We also assist in adding new features as your business grows.",
          },
        ],
      },
      "website-development": {
        imageUrl:
          "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595026/imsoft-images/services/sitio-web-imsoft.jpg",
        alt: "Website Development Service – imSoft",
        title: "Website Development Service",
        subtitle:
          "We build fast, secure websites optimized to turn visitors into customers.",
        descriptions: [
          "At imSoft we design and develop professional websites that highlight your brand and enhance user experience across all devices.",
          "Our approach combines responsive design, on-page SEO standards, and security best practices to deliver robust projects that boost your online presence and sales.",
        ],
        primaryActionText: "Request a Quote",
        primaryActionHref: `mailto:sales@imsoft.io?subject=${encodeURIComponent(
          "Quote Request: Website Development Service"
        )}&body=${encodeURIComponent(
          "Hello imSoft team,%0A%0AI'd like to request a quote for your Website Development Service.%0APlease send me details on packages, features, and estimated timelines.%0A%0AThanks."
        )}`,
        secondaryActionText: "See Case Studies",
        secondaryActionHref: "/en/portfolio",
        features: [
          { text: "Responsive design for mobile, tablet & desktop" },
          {
            text: "On-page SEO optimization: meta tags, speed & accessibility",
          },
          { text: "CMS integration (Headless, WordPress, Strapi, etc.)" },
          { text: "Security setup: HTTPS, XSS/CSRF protection" },
          { text: "Analytics & metrics (Google Analytics, Tag Manager)" },
        ],
        methodologySteps: [
          {
            title: "Requirements Definition",
            description:
              "We gather business goals, target audience, and key features to define your website’s architecture.",
          },
          {
            title: "UI/UX Design",
            description:
              "We create wireframes and mockups to validate navigation structure and user experience.",
          },
          {
            title: "Frontend Development",
            description:
              "We implement the design using modern technologies (HTML5, CSS3, Tailwind CSS, JavaScript or frameworks like Next.js) to ensure speed and performance.",
          },
          {
            title: "Backend Development",
            description:
              "We configure the CMS or build the necessary API (Node.js, Laravel, or the best-fit tech) for easy content management.",
          },
          {
            title: "Testing & QA",
            description:
              "We conduct usability, cross-browser compatibility, and load-time tests to ensure stability and performance.",
          },
          {
            title: "Deployment & Maintenance",
            description:
              "We deploy the site to production (Vercel, Netlify, AWS, etc.) and offer maintenance plans for content updates and security patches.",
          },
        ],
        faqs: [
          {
            question:
              "What’s the difference between a static and a dynamic site?",
            answer:
              "A static site delivers pre-generated HTML, ideal for landing pages and portfolios. A dynamic site uses a backend or CMS to generate content on demand, enabling frequent updates and advanced features.",
          },
          {
            question: "How do you optimize loading speed?",
            answer:
              "We implement lazy-loading for images, resource minification, CDNs and GZIP/Brotli compression. We also improve rendering with prerendering or SSR (Server-Side Rendering) when needed.",
          },
          {
            question: "Do you include SEO optimization from the start?",
            answer:
              "Yes. From meta tags, schemas and sitemap.xml to semantic structure and internal link optimization, we follow best practices to boost your organic rankings.",
          },
          {
            question: "Which CMS do you recommend for content management?",
            answer:
              "Depending on your needs, we recommend headless solutions like Strapi or Sanity for maximum flexibility, or WordPress if you want a familiar admin panel. We can advise based on your workflow.",
          },
          {
            question: "How do you ensure site security?",
            answer:
              "We enforce HTTPS, protect against code injection, validate forms and set up server firewalls. We also integrate automatic updates and vulnerability monitoring.",
          },
          {
            question: "What is the estimated time for a standard web project?",
            answer:
              "For an institutional site with up to 10 pages and basic features (blog, contact form), it typically takes 6–8 weeks. Projects with e-commerce or complex integrations may require 10–14 weeks.",
          },
          {
            question: "Do you offer support and updates after launch?",
            answer:
              "Yes. We have monthly maintenance plans for fixes, plugin updates and continuous improvements. We also help add new sections or features as your business grows.",
          },
        ],
      },
      "ai-ml-consulting": {
        imageUrl:
          "https://res.cloudinary.com/https-imsoft-io/image/upload/v1747117146/imsoft-images/services/consultoria-en-ia-y-ml.jpg",
        alt: "AI & ML Consulting Service – imSoft",
        title: "AI & ML Consulting Service",
        subtitle:
          "Transform your business with tailored artificial intelligence and machine learning solutions.",
        descriptions: [
          "At imSoft we provide specialized consulting in Artificial Intelligence (AI) and Machine Learning (ML) for companies looking to leverage data power and automate critical processes.",
          "Our approach combines data analysis, predictive model development, and deployment of AI/ML solutions in production, ensuring measurable and scalable results.",
        ],
        primaryActionText: "Request a Quote",
        primaryActionHref: `mailto:sales@imsoft.io?subject=${encodeURIComponent(
          "Quote Request: AI & ML Consulting Service"
        )}&body=${encodeURIComponent(
          "Hello imSoft team,%0A%0AI’m interested in receiving a quote for the AI & ML Consulting Service.%0APlease send me details on services, rates, and availability.%0A%0AThanks."
        )}`,
        secondaryActionText: "See Case Studies",
        secondaryActionHref: "/en/portfolio",
        features: [
          { text: "Data maturity assessment and diagnostics" },
          {
            text: "Design of scalable AI/ML architectures (cloud or on-premise)",
          },
          { text: "Training and validation of custom predictive models" },
          { text: "Integration of inference APIs and data pipelines" },
          {
            text: "Continuous monitoring and maintenance of production models",
          },
        ],
        methodologySteps: [
          {
            title: "Environment Assessment",
            description:
              "We analyze current infrastructure, data quality, and business objectives to define a personalized AI/ML roadmap.",
          },
          {
            title: "Data Collection & Preparation",
            description:
              "We extract, clean, and transform relevant data to train high-precision Machine Learning models.",
          },
          {
            title: "Model Development",
            description:
              "We build supervised, unsupervised, or reinforcement learning models according to your needs, using tools like Python (Scikit-Learn, TensorFlow, PyTorch).",
          },
          {
            title: "Validation & Testing",
            description:
              "We perform performance tests, cross-validation, and hyperparameter tuning to ensure model robustness and generalization.",
          },
          {
            title: "Deployment & Maintenance",
            description:
              "We deploy the models to production environments (AWS, Azure, GCP, or on-premise servers) and configure automated pipelines for continuous updates.",
          },
        ],
        faqs: [
          {
            question: "What’s the difference between AI and Machine Learning?",
            answer:
              "Artificial Intelligence (AI) is a broad field covering systems that perform tasks normally requiring human intelligence. Machine Learning (ML) is a subfield of AI focusing on algorithms that learn from data to make predictions or decisions without being explicitly programmed.",
          },
          {
            question: "How do you identify the right use cases for AI/ML?",
            answer:
              "We start with clear business goals (cost reduction, productivity improvement, marketing optimization) and then analyze data availability and quality to define models with a clear ROI.",
          },
          {
            question: "What technologies do you use for model development?",
            answer:
              "Our team uses Python with libraries like Scikit-Learn, TensorFlow, Keras, and PyTorch. For large-scale data processing, we leverage tools like Pandas, Spark, and cloud services (AWS SageMaker, Azure ML, GCP AI Platform).",
          },
          {
            question:
              "How long does it take to see results with an AI/ML project?",
            answer:
              "For a basic ML project (e.g., demand forecasting or churn analysis), expect 8–12 weeks including data collection, training, validation, and initial deployment. More complex projects with deep learning or advanced pipelines can take 12–20 weeks.",
          },
          {
            question: "How do you ensure model reliability and ethics?",
            answer:
              "We run bias and fairness tests, validate explainability using SHAP or LIME, and follow documentation and auditing best practices to guarantee transparency and compliance with privacy regulations.",
          },
          {
            question: "Do you offer long-term support and model updates?",
            answer:
              "Yes. We provide maintenance and continuous monitoring packages to keep your models accurate with new data, including auto-recalibration and retraining as needed.",
          },
        ],
      },
      "web-applications": {
        imageUrl:
          "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595026/imsoft-images/services/aplicacion-web-imsoft.jpg",
        alt: "Web Applications Development Service - imSoft",
        title: "Web Applications Service",
        subtitle:
          "Automate and optimize processes with custom, scalable web solutions.",
        descriptions: [
          "At imSoft we create bespoke web applications that adapt to your business’s specific needs. From B2B portals to internal management systems, our solutions ensure performance, security, and a seamless user experience.",
          "Our team combines user-centered design (UI/UX) with modern architectures (Next.js, React, Node.js) to deliver robust projects. Each stage—from requirements analysis to deployment—is optimized to maximize efficiency and return on investment.",
        ],
        primaryActionText: "Request Quote",
        primaryActionHref: `mailto:sales@imsoft.io?subject=${encodeURIComponent(
          "Request Quote: Web Applications Service"
        )}&body=${encodeURIComponent(
          "Hello imSoft team,%0A%0AI'm interested in receiving a quote for the Web Applications Service.%0APlease send me details about services, pricing, and timelines.%0A%0AThanks."
        )}`,
        secondaryActionText: "View Case Studies",
        secondaryActionHref: "/en/portfolio",
        features: [
          { text: "Full-stack development with Next.js, React, and Node.js" },
          {
            text: "Scalable architecture based on microservices or optimized monoliths",
          },
          { text: "Integration with external APIs and payment platforms" },
          {
            text: "On-page SEO optimization and web performance (high Lighthouse scores)",
          },
          {
            text: "Implementation of security standards: JWT, HTTPS, and OWASP",
          },
        ],
        methodologySteps: [
          {
            title: "Planning and Requirements",
            description:
              "We gather business objectives, use cases, and define the right architecture for your web application.",
          },
          {
            title: "UI/UX Design",
            description:
              "We create prototypes (wireframes) and interactive mockups to ensure intuitive and engaging navigation across all devices.",
          },
          {
            title: "Development",
            description:
              "We code following quality practices: clean code, automated testing, and peer reviews. We choose technologies that promote scalability and maintainability.",
          },
          {
            title: "Testing and QA",
            description:
              "We conduct unit, integration, and usability testing across different browsers and devices to ensure stability and compatibility.",
          },
          {
            title: "Deployment and Maintenance",
            description:
              "We publish to production environments (Vercel, AWS, etc.) and set up continuous monitoring. We provide support for updates and new features.",
          },
        ],
        faqs: [
          {
            question: "Which frameworks do you use for web development?",
            answer:
              "We primarily work with Next.js and React on the frontend, and Node.js/Express or NestJS on the backend. These technologies allow us to build fast, secure, and maintainable applications.",
          },
          {
            question: "How do you ensure speed and performance?",
            answer:
              "We implement SSR (Server-Side Rendering) with Next.js, image optimization, lazy-loading, and caching techniques (CDN). We also use tools like Lighthouse to ensure minimal load times.",
          },
          {
            question: "Do you include SEO optimization in the project?",
            answer:
              "Yes. We configure dynamic meta tags, generate automatic sitemaps, and apply good accessibility practices (WCAG). This ensures your web app has better search engine visibility.",
          },
          {
            question: "How do you handle data security?",
            answer:
              "We enforce HTTPS, protect against XSS/CSRF attacks, validate and sanitize backend inputs, and use JWT-based authentication. We also set up roles and permissions according to your requirements.",
          },
          {
            question: "What is the estimated development timeline?",
            answer:
              "For a standard application (login, dashboard, CRUD operations), the estimated timeline is 10 to 14 weeks. More complex projects with third-party integrations may take 16 to 20 weeks.",
          },
          {
            question: "What is the approximate cost of a web project?",
            answer:
              "Costs vary based on features, complexity, and design. Basic projects typically range between $80,000 and $180,000 MXN. For an accurate quote, contact us and we’ll discuss your specific needs.",
          },
          {
            question: "Do you offer post-launch support and updates?",
            answer:
              "Yes. We offer monthly maintenance plans that include bug fixes, dependency updates, and support to implement continuous improvements.",
          },
        ],
      },
      "mobile-apps": {
        imageUrl:
          "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706898396/imsoft-images/services/aplicaciones-moviles-imsoft.jpg",
        alt: "Mobile Apps Development Service - imSoft",
        title: "Mobile Apps Service",
        subtitle:
          "Connect with your customers in their pocket: fast, secure, custom apps.",
        descriptions: [
          "At imSoft we design and develop native and hybrid mobile applications for iOS and Android, focused on delivering smooth user experiences and high performance.",
          "Our methodology covers from requirements analysis and interface design (UI/UX) to implementation, testing and deployment on the official stores. We guarantee scalable solutions that drive user retention and conversion.",
        ],
        primaryActionText: "Request Quote",
        primaryActionHref: `mailto:sales@imsoft.io?subject=${encodeURIComponent(
          "Quote Request: Mobile Apps Service"
        )}&body=${encodeURIComponent(
          "Hello imSoft team,%0A%0AI'm interested in receiving a quote for the Mobile Apps Service.%0APlease send me details about features, pricing, and delivery times.%0A%0AThanks."
        )}`,
        secondaryActionText: "View Case Studies",
        secondaryActionHref: "/en/portfolio",
        features: [
          {
            text: "Native development (Swift, Kotlin) and cross-platform (React Native, Flutter)",
          },
          { text: "Mobile-centered UI/UX design" },
          { text: "Integration with APIs, databases and external services" },
          { text: "Performance and resource consumption optimization" },
          { text: "Publishing and maintenance on App Store and Google Play" },
        ],
        methodologySteps: [
          {
            title: "Planning and Analysis",
            description:
              "We gather requirements, analyze business objectives, and define key functionalities for your mobile app.",
          },
          {
            title: "UI/UX Design",
            description:
              "We create interactive prototypes and wireframes to ensure intuitive and engaging navigation for the end user.",
          },
          {
            title: "Development",
            description:
              "We build the app using native technologies (Swift, Kotlin) or hybrid frameworks (React Native, Flutter) according to your needs and budget.",
          },
          {
            title: "Testing and QA",
            description:
              "We perform unit, integration, and usability tests on real devices to ensure optimal stability and performance.",
          },
          {
            title: "Launch and Monitoring",
            description:
              "We publish the app on Google Play and the App Store, and set up monitoring tools to track usage and performance metrics.",
          },
        ],
        faqs: [
          {
            question:
              "Do I need a native app or can I use a cross-platform solution?",
            answer:
              "It depends on your budget and goals. Native apps (Swift for iOS, Kotlin for Android) offer maximum performance, while cross-platform solutions (React Native, Flutter) reduce development time and costs while maintaining good performance.",
          },
          {
            question: "How long does it take to develop a basic mobile app?",
            answer:
              "For an app with essential functionality (login, profiles, basic notifications), the approximate time is 8 to 12 weeks. More complex projects may require 16 to 24 weeks, depending on features and required testing.",
          },
          {
            question: "How do you ensure data security in the app?",
            answer:
              "We implement encryption in transit (HTTPS) and at rest (local encryption), secure authentication (OAuth 2.0, JWT) and backend validations to protect sensitive information.",
          },
          {
            question:
              "What is the approximate cost of developing a mobile app?",
            answer:
              "Costs vary depending on complexity and number of platforms. Simple single-platform projects usually range between $80,000 and $150,000 MXN. Cross-platform apps with advanced features can range between $150,000 and $300,000 MXN. Contact us for a detailed quote.",
          },
          {
            question: "Do you offer maintenance and updates after launch?",
            answer:
              "Yes. We provide monthly or hourly support packages to fix bugs, update the app to new iOS/Android versions, and add improvements based on user feedback.",
          },
          {
            question:
              "How do I handle publishing on the App Store and Google Play?",
            answer:
              "We handle the entire process: we configure developer accounts, generate the necessary certificates (iOS/Android), upload the app and manage the review process for each store.",
          },
        ],
      },
      "data-analysis": {
        imageUrl:
          "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706898185/imsoft-images/services/analisis-de-datos-imsoft.jpg",
        alt: "Data Analysis Service - imSoft",
        title: "Data Analysis Service",
        subtitle: "Drive your business decisions with reliable, tailored data.",
        descriptions: [
          "At imSoft we offer a comprehensive data analysis service that covers everything from data collection and cleansing to the generation of actionable insights.",
          "Our goal is to transform raw data into clear reports and interactive visualizations to help your company optimize processes, spot market opportunities, and make evidence-based decisions.",
        ],
        primaryActionText: "Request Quote",
        primaryActionHref: `mailto:sales@imsoft.io?subject=${encodeURIComponent(
          "Quote Request: Data Analysis Service"
        )}&body=${encodeURIComponent(
          "Hello imSoft team,%0A%0AI’m interested in requesting a quote for the Data Analysis service.%0APlease send me more information.%0A%0AThanks."
        )}`,
        secondaryActionText: "Case Studies",
        secondaryActionHref: "/en/portfolio",
        features: [
          { text: "Data collection and cleansing from multiple sources" },
          { text: "Dynamic, interactive visualizations for your metrics" },
          { text: "Custom reports tailored to specific objectives" },
          { text: "Predictive models to anticipate market trends" },
          { text: "Ongoing support and dashboard updates" },
        ],
        methodologySteps: [
          {
            title: "Exploration",
            description:
              "We assess the quality and relevance of your data to ensure reliable results.",
          },
          {
            title: "Transformation",
            description:
              "We clean, normalize, and structure the information to facilitate analysis.",
          },
          {
            title: "Modeling",
            description:
              "We build statistical and predictive models using tools like Python, R, and BI platforms.",
          },
          {
            title: "Visualization",
            description:
              "We create interactive dashboards and executive reports to surface clear insights.",
          },
        ],
        faqs: [
          {
            question: "What does the Data Analysis service include?",
            answer:
              "Our service covers data collection, cleansing, and normalization, as well as the development of statistical and predictive models. We also deliver interactive dashboards and custom executive reports.",
          },
          {
            question: "What types of companies benefit?",
            answer:
              "Any company that needs to make data-driven decisions: from SMEs to enterprises. We serve sectors like retail, logistics, healthcare, and financial services, among others.",
          },
          {
            question: "How long does it take to see results?",
            answer:
              "The timeline varies by data complexity. In standard projects, the initial exploration and cleansing phase can take 2 to 3 weeks. Then, in 4 to 6 weeks, we generate basic models and dashboards.",
          },
          {
            question: "What technologies do you use?",
            answer:
              "We work with Python (Pandas, NumPy, Scikit-Learn), R, Power BI, Tableau, and storage tools like BigQuery or PostgreSQL. We adapt the solution to your tech stack.",
          },
          {
            question: "Do you offer support and updates?",
            answer:
              "Yes. After the initial implementation, we provide ongoing technical support and update your dashboards as your business needs evolve. You can opt for monthly or per-project maintenance.",
          },
          {
            question: "What is the approximate investment?",
            answer:
              "Cost depends on data volume and complexity. Medium-sized projects typically range from $50,000 to $150,000 MXN. Contact us for a detailed quote.",
          },
        ],
      },
    },
    blog: {
      heading: "Our Blog",
      description:
        "Discover the latest posts, tutorials and news about Astro, Solid and more.",
      by: "by",
      dateFormatOptions: {
        year: "numeric",
        month: "long",
        day: "numeric",
      } as const,
    },
    contact: {
      heading: "Contact Us",
      description:
        "Whether you’d like to collaborate, request press materials, join our team, or just say hello, you’ll find the way here. We’re always ready to listen and respond.",
      cards: [
        {
          title: "Sales",
          email: "ventas@imsoft.io",
          mailtoLink:
            "mailto:ventas@imsoft.io?subject=Information%20Request%20-%20Sales&body=Hello%20imSoft%20team%2C%0A%0AI%27d%20like%20to%20get%20more%20details%20about%20your%20Sales%20options.%0A%0AThanks.",
          phoneLabel: "Call us",
          phone: "+5233123536558",
          delay: 200,
        },
        {
          title: "Press",
          email: "prensa@imsoft.io",
          mailtoLink:
            "mailto:prensa@imsoft.io?subject=Press%20Materials%20Request&body=Hello%20imSoft%20team%2C%0A%0AI%27m%20with%20the%20press%20and%20I%27d%20like%20to%20receive%20press%20materials%20or%20news.%0A%0AThanks.",
          phoneLabel: "Call us",
          phone: "+5233123536558",
          delay: 400,
        },
        {
          title: "Careers",
          email: "talento@imsoft.io",
          mailtoLink:
            "mailto:talento@imsoft.io?subject=Interest%20in%20Career%20Opportunities&body=Hello%20imSoft%20team%2C%0A%0AI%27d%20like%20to%20learn%20more%20about%20opportunities%20to%20join%20your%20team.%0A%0AThanks.",
          phoneLabel: "Call us",
          phone: "+5233123536558",
          delay: 600,
        },
        {
          title: "Say Hello",
          email: "contacto@imsoft.io",
          mailtoLink:
            "mailto:contacto@imsoft.io?subject=Greetings%20from%20the%20website&body=Hello%20imSoft%20team%2C%0A%0AI%27d%20just%20like%20to%20say%20hello%20and%20thank%20you%20for%20your%20work.%0A%0AThanks.",
          phoneLabel: "Call us",
          phone: "+5233123536558",
          delay: 800,
        },
      ] as const,
    },
    privacy: {
      title: "Privacy Notice",
      intro:
        "Brandon Uriel Garcia Ramos, better known as imSoft, located in Guadalajara, Jalisco, Mexico (imsoft.io/privacy-notice), is responsible for the use and protection of your personal data, and we inform you of the following:",
      sections: [
        {
          heading: "What purposes will we use your personal data for?",
          content:
            "We will use your personal data to respond to contact form messages and to provide any requested services.",
        },
        {
          heading: "What personal data will we use for these purposes?",
          content:
            "We will use identification and contact information, as well as employment data.",
        },
        {
          heading:
            "How can you access, rectify, or cancel your personal data, object to its use, or withdraw your consent?",
          content:
            "You may exercise your ARCO rights by emailing contacto@imsoft.io with your full name, address, phone number, website email, a copy of your ID, and the subject “ARCO Rights.”",
        },
        {
          heading: "How many days will we take to respond to your request?",
          content: "5 days.",
        },
        {
          heading:
            "By what means will we communicate our response to your request?",
          content: "We will respond via email to contacto@imsoft.io.",
        },
        {
          heading: "The use of tracking technologies on our website",
          content:
            "We use cookies, web beacons, and other tracking technologies on our site.",
        },
        {
          heading: "How can you find out about changes to this privacy notice?",
          content:
            "This privacy notice may undergo modifications, changes, or updates.",
        },
      ] as const,
      lastUpdated: "Last updated: 03/27/2025",
    },
    nav: [
      { name: "Home", href: "/en/" },
      { name: "Services", href: "/en/services" },
      { name: "Portfolio", href: "/en/portfolio" },
      { name: "Blog", href: "/en/blog" },
      { name: "History", href: "/en/history" },
      { name: "Contact", href: "/en/contact" },
    ] as const,
    footer: {
      cta: {
        heading: "Get started today",
        subheading: "Boost your business with effective digital solutions.",
        description:
          "Optimize, automate, and grow with technology designed for you.",
      },
      sections: [
        {
          title: "imSoft",
          links: [
            { label: "Home", href: "/en/" },
            { label: "Portfolio", href: "/en/portfolio" },
            { label: "Blog", href: "/en/blog" },
            { label: "History", href: "/en/history" },
            { label: "Contact", href: "/en/contact" },
          ],
        },
        {
          title: "Services",
          links: [
            { label: "Data Analysis", href: "/en/services/data-analysis" },
            { label: "Mobile Apps", href: "/en/services/mobile-apps" },
            {
              label: "Web Applications",
              href: "/en/services/web-applications",
            },
            {
              label: "Website Development",
              href: "/en/services/website-development",
            },
            { label: "Online Store", href: "/en/services/online-store" },
            {
              label: "AI & ML Consulting",
              href: "/en/services/ai-ml-consulting",
            },
          ],
        },
        {
          title: "Explore",
          links: [
            { label: "All Services", href: "/en/services" },
            { label: "Case Studies", href: "/en/portfolio" },
          ],
        },
        {
          title: "Legal",
          links: [{ label: "Privacy Notice", href: "/en/privacy-notice" }],
        },
      ] as const,
      copyright: "All rights reserved.",
    },
    cta: {
      services: { href: "/en/services", label: "Services" },
      contact: { href: "/en/contact", label: "Contact us →" },
    },
  },
} as const;
