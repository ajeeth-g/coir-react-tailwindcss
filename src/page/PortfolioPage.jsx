import { X } from "lucide-react";
import { useState } from "react";
import hero1 from "../assets/hero_1.jpg";
import hero2 from "../assets/hero_2.jpg";
import hero3 from "../assets/hero_3.jpg";
import aboutHero from "../assets/Home_1.jpg";

const images = [
  { id: 1, src: hero1, alt: "Coconut Husk", category: "nature" },
  { id: 2, src: hero2, alt: "Fiber", category: "fiber" },
  { id: 3, src: hero3, alt: "Pith", category: "coir-peat" },
  { id: 4, src: hero2, alt: "Grow Bag", category: "grow-bag" },
  { id: 5, src: hero3, alt: "Coins", category: "nursery" },
  { id: 6, src: hero1, alt: "Garden Articles", category: "garden-articles" },
];

const categories = ["all", "Fiber", "Coir Peat", "Grow Bag", "Nursery", "Garden Articles"];

const PortfolioPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const closeModal = () => setSelectedIndex(null);

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  // Filter images by category
  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <section className="mt-20 space-y-10">
      <section className="relative rounded-3xl overflow-hidden mx-auto w-full">
        <img
          src={aboutHero}
          alt="About us banner"
          className="w-full h-80 object-cover rounded-3xl shadow-md"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Portfolio</h1>
        </div>
      </section>

      {/* Toggle Buttons */}
      <div className="flex justify-center mb-6 space-x-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setSelectedIndex(null); // close modal when category changes
            }}
            className={`px-4 py-2 rounded ${selectedCategory === cat
              ? "bg-orange-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-orange-100"
              }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredImages.map(({ id, src, alt }, index) => (
          <div
            key={id}
            className="relative overflow-hidden rounded-lg cursor-pointer group shadow-lg"
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={src}
              alt={alt}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-lg font-semibold">
              {alt}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-orange-600 bg-opacity-80 hover:bg-opacity-100 text-white rounded-full p-3"
            aria-label="Previous Image"
            onKeyDown={(e) => e.stopPropagation()}
          >
            &#8592;
          </button>

          <img
            src={filteredImages[selectedIndex].src}
            alt={filteredImages[selectedIndex].alt}
            className="max-h-full max-w-full rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-orange-600 bg-opacity-80 hover:bg-opacity-100 text-white rounded-full p-3"
            aria-label="Next Image"
            onKeyDown={(e) => e.stopPropagation()}
          >
            &#8594;
          </button>

          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white bg-orange-600 rounded-full p-2 hover:bg-orange-700 transition"
            aria-label="Close Modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};

export default PortfolioPage;
