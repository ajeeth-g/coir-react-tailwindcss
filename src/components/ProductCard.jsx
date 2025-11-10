const ProductCard = ({ title, description, image, onClick }) => (
  <div
    onClick={onClick}
    className="cursor-pointer flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 max-w-sm mx-auto hover:shadow-xl h-[350px] sm:h-[380px] lg:h-[400px]"
  >
    <div className="w-full overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-40 sm:h-44 lg:h-48 object-contain transition-transform duration-300 hover:scale-110"
      />
    </div>
    <div className="flex flex-col flex-grow p-3 sm:p-4 text-center">
      <h3 className="text-lg sm:text-xl font-semibold text-orange-600 mb-2">{title}</h3>
      <p className="text-xs sm:text-sm text-gray-700 flex-grow overflow-hidden line-clamp-3">
        {description}
      </p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        className="mt-3 sm:mt-4 inline-flex items-center justify-center px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-orange-600 border-2 border-orange-600 rounded-full hover:bg-orange-600 hover:text-white transition duration-300"
      >
        View More
      </button>
    </div>
  </div>
);

export default ProductCard;
