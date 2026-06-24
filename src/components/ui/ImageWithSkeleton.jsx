import { useState } from "react";

const ImageWithSkeleton = ({
  src,
  alt,
  className = "",
  containerClassName = "",
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {!loaded && (
        <div className="absolute inset-0 skeleton rounded-inherit" aria-hidden="true" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`${className} transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default ImageWithSkeleton;
