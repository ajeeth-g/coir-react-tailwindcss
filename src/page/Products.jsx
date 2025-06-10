// src/page/Products.jsx
import products from "../data/products.json";
import { images } from "../assets";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Breadcrumb from "../components/Breadcrumb";

const Products = () => {
  const navigate = useNavigate();

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Our Products", href: null },
  ];
  return (
    <div className="mt-20 space-y-8">
      {/* Hero Section */}
      <Breadcrumb items={breadcrumbItems} title="Our Products" />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            title={p.title}
            description={p.description}
            image={images[p.image]}
            onClick={() => navigate(`/products/${p.id}`)}
          />
        ))}
      </div>
    </div>
  );
};
export default Products;
