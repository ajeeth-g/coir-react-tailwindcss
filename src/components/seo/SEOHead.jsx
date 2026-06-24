import { Helmet } from "react-helmet-async";
import { SITE } from "../../seo/siteConfig";

const SEOHead = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = "website",
  noindex = false,
  hreflang = SITE.hreflang,
  jsonLd = [],
}) => {
  const fullTitle =
    title?.includes("Lumicos") || title?.includes("LLP") ? title : `${title} | ${SITE.name}`;
  const image = ogImage || SITE.defaultOgImage;
  const pathname = canonical ? new URL(canonical).pathname : "/";
  const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd].filter(Boolean);

  return (
    <Helmet>
      <html lang={SITE.language} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={SITE.locale.replace("-", "_")} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* hreflang */}
      {hreflang?.map(({ lang, href }) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={`${href}${pathname === "/" ? "" : pathname}`} />
      ))}

      {/* JSON-LD */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
