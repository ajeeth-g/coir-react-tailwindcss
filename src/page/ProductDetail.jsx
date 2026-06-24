import { Link, useParams, Navigate, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, MessageSquare, Package, Truck, Shield } from "lucide-react";
import products from "../data/products.json";
import { images } from "../assets";
import Breadcrumb from "../components/Breadcrumb";
import SectionHeading from "../components/ui/SectionHeading";
import ImageWithSkeleton from "../components/ui/ImageWithSkeleton";
import PageCTA from "../components/ui/PageCTA";
import SEOHead from "../components/seo/SEOHead";
import ProductCard from "../components/ProductCard";
import { MotionSection } from "../components/ui/Motion";
import { resolveProductId, getProductSlug } from "../seo/productSlugs";
import { getProductPageMeta } from "../seo/pageMeta";
import { getProductSeoExtras } from "../seo/productSeoData";
import {
  organizationSchema,
  breadcrumbSchema,
  productSchema,
  faqSchema,
} from "../seo/schemas";
import { SITE } from "../seo/siteConfig";

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const productId = resolveProductId(slug);
  const product = products.find((p) => p.id === productId);
  const canonicalSlug = product ? getProductSlug(product.id) : null;

  if (!product) {
    return (
      <>
        <SEOHead
          title="Product Not Found"
          description="The requested coir product could not be found. Browse our full export catalog."
          canonical={`${SITE.url}/products`}
          noindex
        />
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Product not found
          </h1>
          <Link to="/products" className="btn-outline">
            Back to Products
          </Link>
        </div>
      </>
    );
  }

  if (canonicalSlug && slug !== canonicalSlug && slug !== "coir-mats") {
    return <Navigate to={`/products/${canonicalSlug}`} replace />;
  }

  const activeSlug = canonicalSlug || slug;
  const seoMeta = getProductPageMeta(activeSlug, product.title);
  const extras = getProductSeoExtras(activeSlug);
  const heroImage = images[product.image];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: product.title, href: null },
  ];

  const crumbs = [
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
    { name: product.title, url: `/products/${activeSlug}` },
  ];

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const handleInquiry = () => {
    const text = `*Lumicos LLP · Product Enquiry*\n\nProduct: ${product.title}\n\nHi, I would like to request a quote for ${product.title}. Please share pricing, MOQ, and shipping details.`;
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const allFaqs = extras.faqs;

  return (
    <>
      <SEOHead
        title={seoMeta.title}
        description={seoMeta.description}
        keywords={seoMeta.keywords}
        canonical={seoMeta.canonical}
        ogImage={heroImage}
        ogType="product"
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema(crumbs),
          productSchema({
            name: product.title,
            description: product.description,
            image: heroImage,
            slug: activeSlug,
          }),
          ...(allFaqs.length ? [faqSchema(allFaqs)] : []),
        ]}
      />

      <div className="space-y-12 md:space-y-16">
        <Breadcrumb
          items={breadcrumbItems}
          title={product.title}
          bgImage={heroImage}
          subtitle={product.description}
        />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-600 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Products
          </Link>
          <button type="button" onClick={handleInquiry} className="btn-gold sm:w-auto w-full">
            <MessageSquare size={18} />
            Request Quote
          </button>
        </div>

        {product.detailSections.map((sec, idx) => {
          if (sec.type === "textImage") {
            const imageLeft = sec.layout === "leftImage";
            return (
              <MotionSection key={idx}>
                <article>
                  <div
                    className={`grid lg:grid-cols-2 gap-8 lg:gap-14 items-center ${
                      !imageLeft ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div className="relative">
                      <ImageWithSkeleton
                        src={images[sec.image]}
                        alt={`${sec.title} — ${product.title} by Lumicos LLP`}
                        className="relative w-full max-h-[480px] object-contain rounded-2xl bg-white dark:bg-gray-900 p-4 shadow-premium-lg"
                        containerClassName="relative rounded-2xl"
                      />
                    </div>
                    <div>
                      {idx === 0 ? (
                        <SectionHeading
                          eyebrow="Product Overview"
                          title={sec.title}
                          align="left"
                        />
                      ) : (
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                          {sec.title}
                        </h2>
                      )}
                      <p
                        className={`text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg ${idx === 0 ? "-mt-6" : ""}`}
                      >
                        {sec.description}
                      </p>
                    </div>
                  </div>
                </article>
              </MotionSection>
            );
          }

          if (sec.type === "specsUses") {
            return (
              <MotionSection key={idx}>
                <SectionHeading
                  eyebrow="Technical Details"
                  title="Specifications & Applications"
                  subtitle={`Export-grade ${product.title.toLowerCase()} parameters and industry applications.`}
                />

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
                  <div className="rounded-2xl overflow-hidden border border-primary/10 shadow-premium bg-white dark:bg-gray-900">
                    <div className="bg-primary px-5 py-3">
                      <h3 className="text-lg font-bold text-white">Specifications</h3>
                    </div>
                    <div className="divide-y divide-primary/10">
                      {sec.specs.map((s, j) => (
                        <div
                          key={j}
                          className="flex justify-between gap-4 px-5 py-3.5 even:bg-beige-50 dark:even:bg-gray-800/50"
                        >
                          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                            {s.label}
                          </span>
                          <span className="text-sm text-gray-600 dark:text-gray-400 text-right">
                            {s.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-primary-50 to-beige-100 dark:from-gray-900 dark:to-gray-950 border border-primary/10">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-5">
                      Applications & Uses
                    </h3>
                    <ul className="space-y-3">
                      {sec.uses.map((u, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                          <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                            {u}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </MotionSection>
            );
          }

          return null;
        })}

        {/* Export & packaging */}
        <MotionSection>
          <SectionHeading
            eyebrow="Export Information"
            title="Packaging, MOQ & Export Details"
            align="left"
          />
          <div className="grid sm:grid-cols-3 gap-6 -mt-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-primary/5 shadow-premium">
              <Package size={22} className="text-primary mb-3" />
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Packaging</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{extras.packaging}</p>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-primary/5 shadow-premium">
              <Truck size={22} className="text-primary mb-3" />
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">MOQ</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{extras.moq}</p>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-primary/5 shadow-premium">
              <Shield size={22} className="text-primary mb-3" />
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Export</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{extras.exportInfo}</p>
            </div>
          </div>
        </MotionSection>

        {/* Benefits */}
        <MotionSection>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Key Benefits for {extras.primaryKeyword} Buyers
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {extras.benefits.map((b) => (
              <li
                key={b}
                className="flex gap-3 p-4 rounded-xl bg-beige-100 dark:bg-gray-900 text-sm text-gray-600 dark:text-gray-300"
              >
                <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                {b}
              </li>
            ))}
          </ul>
        </MotionSection>

        {/* Product FAQs */}
        {allFaqs.length > 0 && (
          <MotionSection id="product-faq">
            <SectionHeading eyebrow="FAQ" title={`${product.title} — Frequently Asked Questions`} align="left" />
            <div className="space-y-4 -mt-6">
              {allFaqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl border border-primary/10 bg-white dark:bg-gray-900 p-5"
                >
                  <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer list-none flex justify-between gap-4">
                    {faq.question}
                    <span className="text-primary group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </MotionSection>
        )}

        {/* Related products */}
        <MotionSection>
          <SectionHeading eyebrow="Related Products" title="Explore More Coir Products" align="left" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-6">
            {relatedProducts.map((p, i) => (
              <ProductCard
                key={p.id}
                title={p.title}
                description={p.description}
                image={images[p.image]}
                onClick={() => navigate(`/products/${getProductSlug(p.id) || encodeURIComponent(p.id)}`)}
                index={i}
              />
            ))}
          </div>
        </MotionSection>

        <PageCTA
          title={`Interested in ${product.title}?`}
          subtitle="Get competitive export pricing, samples, and shipping schedules tailored to your market."
          primaryLabel="Get a Quote"
          secondaryLabel="Browse All Products"
          secondaryTo="/products"
        />
      </div>
    </>
  );
};

export default ProductDetail;
