import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import aboutHero from "../assets/Home_1.jpg";

const Breadcrumb = ({ items, title, bgImage = aboutHero, subtitle }) => {
  return (
    <section className="relative rounded-2xl sm:rounded-3xl overflow-hidden w-full min-h-[220px] sm:min-h-[280px] md:min-h-[320px]">
      <img
        src={bgImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/92 via-primary-900/78 to-primary-800/55" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,160,23,0.12),transparent_55%)]" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-12 sm:py-16 md:py-20 min-h-[inherit]">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center justify-center gap-1 text-sm text-white/70 mb-4"
        >
          {items.map((item, index) => (
            <span key={index} className="inline-flex items-center gap-1">
              {index > 0 && (
                <ChevronRight size={14} className="text-white/40 shrink-0" />
              )}
              {item.href ? (
                <Link
                  to={item.href}
                  className="hover:text-accent transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-accent font-medium">{item.label}</span>
              )}
            </span>
          ))}
        </nav>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-display"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 max-w-2xl text-sm sm:text-base text-white/75 leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default Breadcrumb;
