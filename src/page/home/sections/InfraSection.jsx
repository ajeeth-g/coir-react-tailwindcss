import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Static imports for React compatibility
import hero1 from "../../../assets/Infra_6.jpg";
import hero2 from "../../../assets/Infra_7.jpg";
import hero3 from "../../../assets/Infra_12.jpg";
import hero4 from "../../../assets/Infra_13.jpg";
import hero5 from "../../../assets/Infra_15.jpg";
import hero6 from "../../../assets/Infra_9.jpg";
import hero7 from "../../../assets/Infra_22.jpg";



const images = [hero1, hero2, hero3, hero4, hero5, hero6, hero7];

const InfraSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="p-8 bg-orange-100 rounded-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative h-[80vh]">
      {/* Image Section */}
      <div className="relative h-64 md:h-full overflow-hidden rounded-xl">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`object-cover w-full h-full absolute top-0 left-0 transition-opacity duration-1000 ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          />
        ))}
        {/* Pagination dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${idx === currentIndex ? "bg-orange-600 w-4 h-4" : "bg-white"
                }`}
            />
          ))}
        </div>
      </div>

      {/* Text Content */}
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 leading-tight">
          We Provide World-Class Infrastructure
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
          molestias nemo velit odit voluptatibus modi doloribus ullam
          assumenda? Dolor nemo porro ea veniam esse unde veritatis pariatur
          dolore obcaecati aliquam.
        </p>

        <Link
          to="/contact-us"
          className="group inline-flex items-center gap-2 px-5 py-3 border-2 border-orange-600 text-orange-600 rounded-full font-semibold transition-colors duration-200 hover:bg-orange-600 hover:text-white"
        >
          Explore more
          <span className="flex items-center justify-center bg-orange-600 text-white p-2 rounded-full transition-transform duration-200 group-hover:-translate-y-1">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default InfraSection;
