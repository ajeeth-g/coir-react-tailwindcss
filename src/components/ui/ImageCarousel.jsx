import { useEffect, useState } from "react";
import ImageWithSkeleton from "./ImageWithSkeleton";

const ImageCarousel = ({ images, altPrefix = "Slide", interval = 4000, className = "" }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return undefined;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div
      className={`relative h-64 sm:h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-premium-lg border border-primary/5 ${className}`}
    >
      {images.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <ImageWithSkeleton
            src={src}
            alt={`${altPrefix} ${i + 1}`}
            className="w-full h-full object-cover"
            containerClassName="w-full h-full"
          />
        </div>
      ))}

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-200 ${
                i === index ? "w-6 bg-accent" : "w-2 bg-white/70 hover:bg-white"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
