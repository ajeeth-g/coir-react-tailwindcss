import { ArrowUpRight, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import ImageWithSkeleton from "./ui/ImageWithSkeleton";

const ProductCard = ({
  title,
  description,
  image,
  specs,
  onClick,
  onInquiry,
  index = 0,
}) => (
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08, duration: 0.5 }}
    className="group relative flex flex-col bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-premium hover:shadow-premium-lg border border-primary/5 dark:border-gray-700/50 transition-all duration-500 hover:-translate-y-1"
  >
    <div
      className="relative h-48 sm:h-52 overflow-hidden bg-beige-100 dark:bg-gray-800 cursor-pointer"
      onClick={onClick}
    >
      <ImageWithSkeleton
        src={image}
        alt={title}
        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
        containerClassName="w-full h-full"
      />
      {specs && (
        <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold bg-primary/90 text-white rounded-full">
          {specs}
        </span>
      )}
    </div>

    <div className="flex flex-col flex-grow p-5">
      <h3
        className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors cursor-pointer"
        onClick={onClick}
      >
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 flex-grow line-clamp-2 mb-4">
        {description}
      </p>

      <div className="flex gap-2 mt-auto">
        <button
          onClick={onClick}
          className="flex-1 inline-flex items-center justify-center gap-1 px-4 py-2.5 text-sm font-semibold text-primary border border-primary/30 rounded-full hover:bg-primary hover:text-white transition-all"
        >
          Details
          <ArrowUpRight size={14} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onInquiry?.();
          }}
          className="inline-flex items-center justify-center gap-1 px-4 py-2.5 text-sm font-semibold bg-accent text-white rounded-full hover:bg-accent-500 transition-all"
          aria-label={`Inquire about ${title}`}
        >
          <MessageSquare size={14} />
        </button>
      </div>
    </div>
  </motion.article>
);

export default ProductCard;
