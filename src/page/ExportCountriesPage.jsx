import { Link } from "react-router-dom";
import { Ship, MapPin } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import SectionHeading from "../components/ui/SectionHeading";
import PageCTA from "../components/ui/PageCTA";
import SEOHead from "../components/seo/SEOHead";
import { MotionSection } from "../components/ui/Motion";
import { getPageMeta } from "../seo/pageMeta";
import { organizationSchema, breadcrumbSchema, exportCountries } from "../seo/schemas";
import { NAP, SITE } from "../seo/siteConfig";

const pageMeta = getPageMeta("exportCountries");

const ExportCountriesPage = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Export Countries", href: null },
  ];

  const crumbs = [
    { name: "Home", url: "/" },
    { name: "Export Countries", url: "/export-countries" },
  ];

  return (
    <>
      <SEOHead
        title={pageMeta.title}
        description={pageMeta.description}
        keywords={pageMeta.keywords}
        canonical={pageMeta.canonical}
        jsonLd={[organizationSchema(), breadcrumbSchema(crumbs)]}
      />

      <div className="space-y-16 md:space-y-20">
        <Breadcrumb
          items={breadcrumbItems}
          title="Global Export Network"
          subtitle="Coir products shipped to 40+ countries from Pollachi, India via Chennai & Tuticorin ports."
        />

        <MotionSection>
          <SectionHeading
            eyebrow="International Coir Export"
            title="Countries We Export To"
            subtitle="Lumicos LLP serves wholesale buyers, distributors, and greenhouse operators across six continents with reliable container programs."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {exportCountries.map(({ region, countries }) => (
              <div
                key={region}
                className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-primary/5 shadow-premium"
              >
                <div className="flex items-center gap-2 mb-4">
                  <GlobeIcon />
                  <h3 className="font-bold text-gray-900 dark:text-white">{region}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {countries.map((c) => (
                    <li
                      key={c}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-beige-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </MotionSection>

        <MotionSection>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary to-primary-800 text-white">
              <Ship size={28} className="text-accent mb-4" />
              <h2 className="text-xl font-bold mb-3">Shipping & Logistics</h2>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                FOB shipments from Chennai and Tuticorin ports. Full container (20ft/40ft HQ)
                and LCL options. We coordinate phytosanitary certification, fumigation,
                and third-party inspection for destination compliance.
              </p>
              <Link to="/contact-us" className="btn-gold text-sm">
                Get Shipping Quote
              </Link>
            </div>

            <div className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-primary/5 shadow-premium">
              <MapPin size={28} className="text-primary mb-4" />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Export Office — Pollachi, India
              </h2>
              <address className="not-italic text-sm text-gray-600 dark:text-gray-400 space-y-1 leading-relaxed">
                <p className="font-semibold text-gray-900 dark:text-white">{NAP.name}</p>
                <p>{NAP.address}</p>
                <p>
                  <a href={`tel:${SITE.phone}`} className="text-primary hover:underline">
                    {NAP.phone}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${NAP.email}`} className="text-primary hover:underline">
                    {NAP.email}
                  </a>
                </p>
              </address>
            </div>
          </div>
        </MotionSection>

        <PageCTA
          title="Expanding to a new market?"
          subtitle="Tell us your destination port and product requirements — we'll provide FOB pricing and lead times."
        />
      </div>
    </>
  );
};

const GlobeIcon = () => (
  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
    🌍
  </span>
);

export default ExportCountriesPage;
