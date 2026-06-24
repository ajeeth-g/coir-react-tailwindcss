import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../../../components/ui/SectionHeading";
import ProductCard from "../../../components/ProductCard";
import { MotionSection } from "../../../components/ui/Motion";
import { showcaseProducts } from "../../../data/homeData";
import { getProductPath } from "../../../seo/productSlugs";
import { images } from "../../../assets";

const OurProductSection = () => {
  const navigate = useNavigate();

  const handleInquiry = (title) => {
    const msg = encodeURIComponent(
      `Hello Lumicos, I would like to inquire about ${title}.`
    );
    window.open(`https://wa.me/919965405999?text=${msg}`, "_blank");
  };

  return (
    <MotionSection
      id="products"
      className="section-padding bg-beige-100 dark:bg-gray-900"
    >
      <div className="section-container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Product Showcase"
            title="Export-Grade Coir Product Range"
            subtitle="Premium coco peat, fiber, grow bags, and customized solutions manufactured to international specifications for wholesale buyers."
            align="left"
          />
          <Link to="/products" className="btn-primary shrink-0 self-start lg:self-auto">
            View All Products
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {showcaseProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              index={index}
              title={product.title}
              description={product.description}
              specs={product.specs}
              image={images[product.image]}
              onClick={() =>
                product.isCustom
                  ? navigate("/contact-us")
                  : navigate(getProductPath(product.id))
              }
              onInquiry={() => handleInquiry(product.title)}
            />
          ))}
        </div>
      </div>
    </MotionSection>
  );
};

export default OurProductSection;
