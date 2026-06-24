import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Package } from "lucide-react";
import { companyStats } from "../../../data/homeData";
import hero1 from "../../../assets/Home_1.jpg";
import hero2 from "../../../assets/Home_2.jpg";
import hero3 from "../../../assets/Home_3.jpg";

const images = [hero1, hero2, hero3];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden flex flex-col min-h-[100dvh] h-[100svh] max-h-[100dvh]">
      {/* Background */}
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            initial={false}
            animate={{
              opacity: index === currentIndex ? 1 : 0,
              scale: index === currentIndex ? 1.03 : 1.08,
            }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />
        ))}
        <div className="absolute inset-0 bg-[#0a2014]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2014]/92 via-[#1F5E3B]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a2014] via-transparent to-[#0a2014]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center section-container pt-[4.25rem] sm:pt-[4.5rem] xl:pt-20 pb-2 min-h-0 overflow-hidden text-center">
        <div className="w-full max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-accent/40 bg-accent/10 text-accent text-[11px] sm:text-sm font-semibold mb-4 sm:mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
            <span className="sm:hidden">Top 5 Coir Exporter</span>
            <span className="hidden sm:inline">India&apos;s Top 5 Coir Exporter</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="text-2xl leading-[1.1] sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-bold text-white mb-3 sm:mb-5"
          >
            Premium Coir Products for{" "}
            <span className="text-accent">Global Markets</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16 }}
            className="text-sm sm:text-base lg:text-lg text-white/75 leading-relaxed mb-5 sm:mb-8 max-w-xl mx-auto"
          >
            Export-grade coco peat, coir fiber, and grow bags — manufactured in
            Pollachi and delivered to wholesale buyers across 40+ countries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24 }}
            className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3 items-center justify-center"
          >
            <Link
              to="/contact-us"
              className="btn-gold text-sm sm:text-base w-fit !px-6 !py-3 sm:!py-3.5"
            >
              Request Quote
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/products"
              className="btn-secondary text-sm sm:text-base w-fit !px-6 !py-3 sm:!py-3.5 border-white/30"
            >
              <Package size={18} />
              <span className="sm:hidden">Products</span>
              <span className="hidden sm:inline">Explore Products</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Stats bar — all breakpoints */}
      <div className="relative z-10 shrink-0 border-t border-white/10 bg-[#0a2014]/85 backdrop-blur-md safe-bottom">
        <div className="section-container py-3 sm:py-4 lg:py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 justify-items-start">
            {companyStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 + i * 0.06 }}
                className={`text-left px-1 ${
                  i % 2 === 0 ? "border-r border-white/10 md:border-r-0" : ""
                } ${i < 3 ? "md:border-r md:border-white/10" : ""}`}
              >
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-accent leading-none">
                  {stat.value}
                </p>
                <p className="text-[9px] sm:text-[10px] md:text-xs text-white/55 mt-1 uppercase tracking-wide leading-tight">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
