import { MessageCircle, FileText, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const FloatingActions = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [showTop, setShowTop] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const check = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      setShowTop(scrollY > 500);
      setPastHero(scrollY > vh * 0.85);
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [pathname]);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Hide while hero is visible — CTAs are in hero; avoids overlapping stats
  if (isHome && !pastHero) return null;

  return (
    <div className="fixed bottom-5 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col gap-2.5 sm:gap-3">
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollTop}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-gray-800 text-primary shadow-premium-lg border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      <Link
        to="/contact-us"
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-accent text-white shadow-gold flex items-center justify-center hover:bg-accent-500 transition-colors"
        aria-label="Request quote"
        title="Request Quote"
      >
        <FileText size={20} />
      </Link>

      <a
        href="https://wa.me/919965405999?text=Hello%20Lumicos%2C%20I%20would%20like%20to%20inquire%20about%20coir%20products."
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] text-white shadow-premium-lg flex items-center justify-center hover:scale-105 transition-transform"
        aria-label="Chat on WhatsApp"
        title="WhatsApp"
      >
        <MessageCircle size={22} />
      </a>
    </div>
  );
};

export default FloatingActions;
