// src/page/Products.jsx
import products from "../data/products.json";
import { images } from "../assets";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import aboutHero from "../assets/Home_1.jpg";

const Products = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-20 space-y-8">
      {/* Hero Section */}
      <section className="relative rounded-3xl overflow-hidden mx-auto w-full">
        <img
          src={aboutHero}
          alt="About us banner"
          className="w-full h-80 object-cover rounded-3xl shadow-md"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Products
          </h1>
        </div>
      </section>

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
