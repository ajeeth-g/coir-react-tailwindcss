import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

// Static imports for React compatibility
import hero1 from "../../../assets/Home_1.jpg";
import hero2 from "../../../assets/Home_2.jpg";
import hero3 from "../../../assets/Home_3.jpg";

const images = [hero1, hero2, hero3];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-16 sm:mt-20 flex flex-col-reverse items-center md:flex-row gap-4 w-full px-4 py-6">
      {/* Left: Text Content */}
      <div className="w-full md:w-1/3">
        <h1 className="text-3xl md:text-5xl font-extrabold text-orange-800 leading-snug mb-6">
          Your Trusted Partner for Premium Coir Exports
        </h1>
        <Link
          to="/products"
          className="group inline-flex items-center gap-2 px-5 py-3 border-2 border-orange-600 text-orange-600 rounded-full font-semibold transition-colors duration-200 hover:bg-orange-600 hover:text-white"
        >
          Explore Products
          <span className="flex items-center justify-center bg-orange-600 text-white p-2 rounded-full transition-transform duration-200 group-hover:-translate-y-1">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </Link>
      </div>

      {/* Right: Auto-scroll Carousel */}
      <div className="w-full md:w-2/3 relative h-56 sm:h-64 md:h-80 lg:h-[70vh] rounded-3xl overflow-hidden shadow-lg">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`object-cover w-full h-56 sm:h-64 md:h-80 lg:h-[70vh] transition-opacity duration-1000 absolute top-0 left-0 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
        {/* Pagination dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                idx === currentIndex ? "bg-orange-600 w-4 h-4" : "bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
