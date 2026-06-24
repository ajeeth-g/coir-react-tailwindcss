import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import portfolio_1 from "../assets/portfolio_1.jpg";
import portfolio_2 from "../assets/portfolio_2.jpg";
import portfolio_3 from "../assets/portfolio_3.jpg";
import portfolio_4 from "../assets/portfolio_4.jpg";
import portfolio_5 from "../assets/portfolio_5.jpg";
import portfolio_6 from "../assets/portfolio_6.jpg";
import portfolio_7 from "../assets/portfolio_7.jpg";
import portfolio_8 from "../assets/portfolio_8.jpg";
import portfolio_9 from "../assets/portfolio_9.jpg";
import portfolio_10 from "../assets/portfolio_10.jpg";
import portfolio_11 from "../assets/portfolio_11.jpg";
import portfolio_12 from "../assets/portfolio_12.jpg";
import portfolio_13 from "../assets/portfolio_13.jpg";
import portfolio_14 from "../assets/portfolio_14.jpg";
import portfolio_15 from "../assets/portfolio_15.jpg";
import portfolio_16 from "../assets/portfolio_16.jpg";
import portfolio_17 from "../assets/portfolio_17.jpg";
import portfolio_18 from "../assets/portfolio_18.jpg";
import portfolio_19 from "../assets/portfolio_19.jpg";
import portfolio_21 from "../assets/portfolio_21.jpg";
import portfolio_22 from "../assets/portfolio_22.jpg";
import portfolioHero from "../assets/portfolio_1.jpg";
import Breadcrumb from "../components/Breadcrumb";
import SectionHeading from "../components/ui/SectionHeading";
import PageCTA from "../components/ui/PageCTA";
import ImageWithSkeleton from "../components/ui/ImageWithSkeleton";
import { MotionSection, staggerContainer, staggerItem } from "../components/ui/Motion";
import SEOHead from "../components/seo/SEOHead";
import { getPageMeta } from "../seo/pageMeta";
import { organizationSchema, breadcrumbSchema } from "../seo/schemas";

const pageMeta = getPageMeta("portfolio");

const images = [
  { id: 1, src: portfolio_1, alt: "Coconut Husk", category: "fiber" },
  { id: 2, src: portfolio_2, alt: "Fiber", category: "fiber" },
  { id: 3, src: portfolio_3, alt: "Twisted Fiber", category: "fiber" },
  { id: 4, src: portfolio_5, alt: "Twisted Fiber", category: "fiber" },
  { id: 5, src: portfolio_4, alt: "Mattress Fiber", category: "fiber" },
  { id: 6, src: portfolio_6, alt: "Bristle Fiber", category: "fiber" },
  { id: 7, src: portfolio_7, alt: "Pith", category: "coir-peat" },
  { id: 8, src: portfolio_19, alt: "Pith", category: "coir-peat" },
  { id: 9, src: portfolio_8, alt: "Coir Pith 5Kg", category: "coir-peat" },
  { id: 10, src: portfolio_9, alt: "Coir Pith 650Grm", category: "coir-peat" },
  { id: 11, src: portfolio_10, alt: "Bulk Bag", category: "coir-peat" },
  { id: 12, src: portfolio_17, alt: "Grow Bag", category: "grow-bag" },
  { id: 13, src: portfolio_18, alt: "Grow Bag", category: "grow-bag" },
  { id: 14, src: portfolio_14, alt: "Coins", category: "nursery" },
  { id: 15, src: portfolio_15, alt: "Pellets", category: "nursery" },
  { id: 16, src: portfolio_16, alt: "Cubes", category: "nursery" },
  { id: 17, src: portfolio_11, alt: "Garden Articles", category: "garden-articles" },
  { id: 18, src: portfolio_12, alt: "Garden Articles", category: "garden-articles" },
  { id: 19, src: portfolio_13, alt: "Garden Articles", category: "garden-articles" },
  { id: 20, src: portfolio_22, alt: "Garden Articles", category: "garden-articles" },
  { id: 21, src: portfolio_21, alt: "Garden Articles", category: "garden-articles" },
];

const categories = [
  { id: "all", label: "All Products" },
  { id: "fiber", label: "Fiber" },
  { id: "coir-peat", label: "Coir Peat" },
  { id: "grow-bag", label: "Grow Bags" },
  { id: "nursery", label: "Nursery" },
  { id: "garden-articles", label: "Garden Articles" },
];

const PortfolioPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  const closeModal = () => setSelectedIndex(null);

  const prevImage = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    if (selectedIndex === null) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selectedIndex, filteredImages.length]);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: null },
  ];

  return (
    <>
      <SEOHead
        title={pageMeta.title}
        description={pageMeta.description}
        keywords={pageMeta.keywords}
        canonical={pageMeta.canonical}
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Portfolio", url: "/our-portfolio" },
          ]),
        ]}
      />
    <div className="space-y-10 md:space-y-14">
      <Breadcrumb
        items={breadcrumbItems}
        title="Our Portfolio"
        bgImage={portfolioHero}
        subtitle="Export-grade coir products — fiber, coco peat, grow bags, and garden articles shipped worldwide."
      />

      <MotionSection>
        <SectionHeading
          eyebrow="Product Gallery"
          title="Explore Our Export Range"
          subtitle="Browse real product photos from our manufacturing lines and export shipments."
        />

        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-1 px-1 mb-8 md:mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setSelectedCategory(cat.id);
                setSelectedIndex(null);
              }}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-primary text-white shadow-premium"
                  : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border border-primary/10 hover:border-primary/30 hover:text-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div
          key={selectedCategory}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {filteredImages.map(({ id, src, alt, category }, index) => (
            <motion.button
              key={id}
              type="button"
              variants={staggerItem}
              onClick={() => setSelectedIndex(index)}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-premium hover:shadow-premium-lg border border-primary/5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <ImageWithSkeleton
                src={src}
                alt={alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                containerClassName="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white font-semibold text-sm">{alt}</p>
                <span className="inline-flex items-center gap-1 text-accent text-xs mt-1">
                  <ZoomIn size={12} /> View
                </span>
              </div>
              <span className="absolute top-3 left-3 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-white/90 dark:bg-gray-900/90 text-primary rounded-full">
                {category.replace(/-/g, " ")}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {filteredImages.length === 0 && (
          <p className="text-center text-gray-500 py-12">No images in this category.</p>
        )}
      </MotionSection>

      <PageCTA secondaryLabel="Request Samples" secondaryTo="/contact-us" />

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[60] p-4"
            onClick={closeModal}
          >
            <button
              type="button"
              onClick={prevImage}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-primary/90 hover:bg-primary text-white rounded-full transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-h-[85vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[selectedIndex].src}
                alt={filteredImages[selectedIndex].alt}
                className="max-h-[85vh] max-w-full rounded-xl shadow-2xl object-contain"
              />
              <p className="text-center text-white/80 text-sm mt-3">
                {filteredImages[selectedIndex].alt} · {selectedIndex + 1} / {filteredImages.length}
              </p>
            </motion.div>

            <button
              type="button"
              onClick={nextImage}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-primary/90 hover:bg-primary text-white rounded-full transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            <button
              type="button"
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
              aria-label="Close gallery"
            >
              <X size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </>
  );
};

export default PortfolioPage;
