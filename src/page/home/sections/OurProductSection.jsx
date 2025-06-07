import React, { useRef } from "react";
import hero1 from "../../../assets/hero_1.jpg";
import hero2 from "../../../assets/hero_2.jpg";
import hero3 from "../../../assets/hero_3.jpg";
import ProductCard from "../../../components/ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    title: "Coco Grow Bags",
    description:
      "Biodegradable and eco-friendly, ideal for hydroponic cultivation.",
    image: hero1,
  },
  {
    title: "Coconut Fibre",
    description: "Strong natural fiber used in brushes, mattresses, and ropes.",
    image: hero2,
  },
  {
    title: "Twisted Fibre",
    description: "Processed fiber suitable for geotextiles and industrial applications.",
    image: hero3,
  },
  {
    title: "Coir Peat",
    description:
      "Excellent water retention, ideal for potting mixes and soil conditioning.",
    image: hero1,
  },
  {
    title: "Coir Mats",
    description: "Durable natural mats perfect for doorsteps and landscaping.",
    image: hero2,
  },
  {
    title: "Coir Brushes",
    description: "Eco-friendly brushes for various cleaning purposes.",
    image: hero3,
  },
  {
    title: "Coir Yarn",
    description: "Strong yarn for ropes and mats manufacturing.",
    image: hero1,
  },
  {
    title: "Coir Fiber",
    description: "Natural fiber with multiple industrial uses.",
    image: hero2,
  },
];

const OurProductSection = () => {
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
    <section className="py-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left mb-10">
        <h2 className="text-orange-600 font-bold text-4xl">
          Our Product Categories
        </h2>
        <button className="inline-flex items-center gap-2 px-5 py-3 border-2 border-orange-600 text-white rounded-full font-semibold transition duration-300 bg-orange-600 hover:bg-orange-50 hover:text-orange-600">
          View All Product Categories
        </button>
      </div>

      {/* Scroll Controls */}
      <div className="relative">
        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory scrollbar-custom"
        >
          {products.map(({ title, description, image }, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[calc(25%-1.5rem)] snap-start"
              style={{ minWidth: "280px" }}
            >
              <ProductCard title={title} description={description} image={image} />
            </div>
          ))}
        </div>

        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex absolute top-1/2 left-0 -translate-y-1/2 bg-white rounded-full shadow-md p-3 text-orange-600 hover:bg-orange-50 transition"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="hidden md:flex absolute top-1/2 right-0 -translate-y-1/2 bg-white rounded-full shadow-md p-3 text-orange-600 hover:bg-orange-50 transition"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default OurProductSection;
