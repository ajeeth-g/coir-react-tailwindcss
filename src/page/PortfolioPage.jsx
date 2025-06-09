import { X } from "lucide-react";
import { useState } from "react";
import aboutHero from "../assets/Home_1.jpg";
import portfolio_1 from "../assets/portfolio_1.jpg"
import portfolio_2 from "../assets/portfolio_2.jpg"
import portfolio_3 from "../assets/portfolio_3.jpg"
import portfolio_4 from "../assets/portfolio_4.jpg"
import portfolio_5 from "../assets/portfolio_5.jpg"
import portfolio_6 from "../assets/portfolio_6.jpg"
import portfolio_7 from "../assets/portfolio_7.jpg"
import portfolio_8 from "../assets/portfolio_8.jpg"
import portfolio_9 from "../assets/portfolio_9.jpg"
import portfolio_10 from "../assets/portfolio_10.jpg"
import portfolio_11 from "../assets/portfolio_11.jpg"
import portfolio_12 from "../assets/portfolio_12.jpg"
import portfolio_13 from "../assets/portfolio_13.jpg"
import portfolio_14 from "../assets/portfolio_14.jpg"
import portfolio_15 from "../assets/portfolio_15.jpg"
import portfolio_16 from "../assets/portfolio_16.jpg"
import portfolio_17 from "../assets/portfolio_17.jpg"
import portfolio_18 from "../assets/portfolio_18.jpg"
import portfolio_19 from "../assets/portfolio_19.jpg"
import portfolio_21 from "../assets/portfolio_21.jpg"
import portfolio_22 from "../assets/portfolio_22.jpg"

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

const categories = ["all", "fiber", "coir-peat", "grow-bag", "nursery", "garden-articles"];


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
      : images.filter((img) => img.category.toLowerCase() === selectedCategory.toLowerCase());

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
      setSelectedIndex(null);
    }}
    className={`px-4 py-2 rounded ${selectedCategory === cat
      ? "bg-orange-600 text-white"
      : "bg-gray-200 text-gray-700 hover:bg-orange-100"
    }`}
  >
    {cat.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
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
