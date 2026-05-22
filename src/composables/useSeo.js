import { useHead } from "@unhead/vue";

const BASE_URL = "https://webscrafting.com";
const SITE_NAME = "WebsCrafting";
const DEFAULT_IMAGE = `${BASE_URL}/logo_webscrafting.png`;

export function useSeo({
  title,
  description,
  path = "/",
  type = "website",
  schema = null,
} = {}) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | Diseño y Desarrollo Web a Medida`;
  const canonical = `${BASE_URL}${path}`;

  const meta = [
    { name: "description", content: description },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:url", content: canonical },
    { property: "og:type", content: type },
    { property: "og:image", content: DEFAULT_IMAGE },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: "es_ES" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: DEFAULT_IMAGE },
    { name: "robots", content: "index, follow" },
  ];

  const link = [{ rel: "canonical", href: canonical }];

  const script = schema
    ? [{ type: "application/ld+json", innerHTML: JSON.stringify(schema) }]
    : [];

  useHead({ title: fullTitle, meta, link, script });
}
