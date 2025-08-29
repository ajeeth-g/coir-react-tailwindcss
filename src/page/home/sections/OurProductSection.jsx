import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductCard from "../../../components/ProductCard";
import products from "../../../data/products.json";
import { images } from "../../../assets";

const OurProductSection = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollRef.current.clientWidth / 2,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollRef.current.clientWidth / 2,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left mb-8 sm:mb-10">
        <h2 className="text-orange-600 font-bold text-2xl sm:text-3xl lg:text-4xl">
          Our Product Categories
        </h2>
        <Link
          className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-3 border-2 border-orange-600 text-white rounded-full font-semibold transition duration-300 bg-orange-600 hover:bg-orange-50 hover:text-orange-600 text-sm sm:text-base"
          to="/products"
        >
          View All Product Categories
        </Link>
      </div>

      {/* Scroll Controls */}
      <div className="relative">
        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-3 sm:gap-4 lg:gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory scrollbar-custom pb-4"
        >
          {products.map((p) => (
            <div
              key={p.id}
              className="flex-shrink-0 snap-start"
              style={{
                width: "calc(100vw - 2rem)",
                minWidth: "280px",
                maxWidth: "320px"
              }}
            >
              <div className="w-full sm:w-auto sm:min-w-[280px] sm:max-w-[320px] lg:min-w-[300px] lg:max-w-[350px]">
                <ProductCard
                  title={p.title}
                  description={p.description}
                  image={images[p.image]}
                  onClick={() => navigate(`/products/${p.id}`)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="hidden lg:flex absolute top-1/2 left-0 -translate-y-1/2 bg-white rounded-full shadow-md p-3 text-orange-600 hover:bg-orange-50 transition z-10"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="hidden lg:flex absolute top-1/2 right-0 -translate-y-1/2 bg-white rounded-full shadow-md p-3 text-orange-600 hover:bg-orange-50 transition z-10"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default OurProductSection;
