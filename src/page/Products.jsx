import products from "../data/products.json";
import { images } from "../assets";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import ProductCard from "../components/ProductCard";
import SEOHead from "../components/seo/SEOHead";
import { getProductPath } from "../seo/productSlugs";
import { getPageMeta } from "../seo/pageMeta";
import { organizationSchema, breadcrumbSchema } from "../seo/schemas";

const pageMeta = getPageMeta("products");

const Products = () => {
  const navigate = useNavigate();

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Our Products", href: null },
  ];

  const crumbs = [
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
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
      <div className="space-y-8">
        <Breadcrumb
          items={breadcrumbItems}
          title="Our Products"
          subtitle="Export-grade coir pith blocks, coco peat grow bags, coir fiber, and coconut coir products from India."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((p, i) => (
            <ProductCard
              key={p.id}
              title={p.title}
              description={p.description}
              image={images[p.image]}
              specs={p.cardSpecs}
              onClick={() => navigate(getProductPath(p.id))}
              index={i}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
