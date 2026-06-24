import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Moon, Sun, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedLink from "./AnimatedLink";
import BrandLogo from "./BrandLogo";
import { useTheme } from "../context/ThemeContext";
import { getProductPath } from "../seo/productSlugs";
import { allCatalogProducts } from "../data/productCatalog";
import { images } from "../assets";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About" },
  { to: "/our-infra", label: "Infra", labelFull: "Infrastructure" },
  { to: "/our-portfolio", label: "Portfolio" },
];

const Header = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  const onHero = isHome && !scrolled;
  const lightNav = onHero && !darkMode;
  const logoVariant = onHero || darkMode ? "light" : "dark";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setProductsOpen(false);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    setProductsOpen(false);
    setMenuOpen(false);
    setMobileProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileProductsOpen(false);
  };

  const navBg = scrolled
    ? "bg-white/97 dark:bg-gray-950/97 backdrop-blur-xl shadow-[0_1px_0_rgba(31,94,59,0.08)]"
    : onHero
      ? "bg-[#0a2014]/40 backdrop-blur-lg border-b border-white/[0.06]"
      : "bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-sm";

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav
        className={`transition-all duration-500 ${navBg}`}
        aria-label="Main navigation"
      >
        <div className="section-container flex justify-between items-center h-[4.25rem] sm:h-[4.5rem] xl:h-20 gap-2 sm:gap-4">
          <Link to="/" className="shrink-0 flex items-center max-h-full" onClick={closeMenu}>
            <BrandLogo variant={logoVariant} size="nav" />
          </Link>

          {/* Desktop nav — xl and up only */}
          <ul className="hidden xl:flex items-center gap-5 2xl:gap-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                <AnimatedLink to={link.to} light={lightNav}>
                  {link.labelFull ? (
                    <>
                      <span className="2xl:hidden">{link.label}</span>
                      <span className="hidden 2xl:inline">{link.labelFull}</span>
                    </>
                  ) : (
                    link.label
                  )}
                </AnimatedLink>
              </li>
            ))}

            <li
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className={`flex items-center gap-1 font-medium transition-colors py-1 whitespace-nowrap ${
                  lightNav
                    ? "text-white/90 hover:text-white"
                    : "text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent"
                }`}
                aria-expanded={productsOpen}
                aria-haspopup="true"
              >
                Products
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${productsOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 pt-3 z-50 w-[min(36rem,calc(100vw-2rem))]"
                  >
                    <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 shadow-premium-lg border border-gray-100 dark:border-gray-800 max-h-[min(70vh,520px)] overflow-y-auto">
                      {allCatalogProducts.map((p) => (
                        <Link
                          key={p.id}
                          to={getProductPath(p.id)}
                          onClick={() => setProductsOpen(false)}
                          className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors group min-w-0"
                        >
                          <img
                            src={images[p.image]}
                            alt=""
                            className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 object-contain rounded-lg bg-beige-100 dark:bg-gray-800 p-1"
                          />
                          <div className="min-w-0">
                            <p className="font-semibold text-sm text-gray-900 dark:text-white group-hover:text-primary truncate">
                              {p.title}
                            </p>
                            <p className="text-xs text-gray-500 line-clamp-2 sm:line-clamp-1">
                              {p.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                      <Link
                        to="/products"
                        onClick={() => setProductsOpen(false)}
                        className="sm:col-span-2 flex items-center justify-center gap-2 mt-1 sm:mt-2 py-3 text-primary font-semibold text-sm hover:text-accent transition-colors border-t border-gray-100 dark:border-gray-700"
                      >
                        View All Products
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>

          <div className="hidden xl:flex items-center gap-2 2xl:gap-3 shrink-0">
            <button
              onClick={toggleDarkMode}
              className={`p-2.5 rounded-full transition-colors ${
                lightNav
                  ? "text-white hover:bg-white/15"
                  : "text-gray-600 dark:text-gray-300 hover:bg-primary/10"
              }`}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <NavLink
              to="/contact-us"
              className={
                lightNav
                  ? "inline-flex items-center justify-center gap-2 px-4 py-2 bg-accent text-primary-900 font-bold rounded-full hover:bg-accent-300 transition-all text-sm shadow-gold whitespace-nowrap"
                  : "btn-primary text-sm !py-2 !px-4"
              }
            >
              Request Quote
            </NavLink>
          </div>

          {/* Mobile / tablet menu */}
          <div className="flex xl:hidden items-center gap-0.5 sm:gap-1 shrink-0">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                lightNav ? "text-white" : "text-gray-600 dark:text-gray-300"
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className={`p-2 ${lightNav ? "text-white" : "text-gray-800 dark:text-white"}`}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 top-[4.25rem] sm:top-[4.5rem] xl:top-20 z-40 bg-white dark:bg-gray-950 xl:hidden overflow-y-auto overscroll-contain"
          >
            <div className="section-container py-6 sm:py-8 flex flex-col gap-1 pb-10">
              {navLinks.map((link) => (
                <AnimatedLink
                  key={link.to}
                  to={link.to}
                  onClick={closeMenu}
                  className="text-base sm:text-lg py-3 border-b border-gray-100 dark:border-gray-800"
                >
                  {link.labelFull || link.label}
                </AnimatedLink>
              ))}

              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="flex items-center justify-between text-base sm:text-lg py-3 border-b border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-200 font-medium"
              >
                Products
                <ChevronDown
                  size={20}
                  className={`transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {mobileProductsOpen && (
                <div className="pl-2 sm:pl-4 py-2 space-y-1 max-h-48 overflow-y-auto">
                  {allCatalogProducts.map((p) => (
                    <Link
                      key={p.id}
                      to={getProductPath(p.id)}
                      onClick={closeMenu}
                      className="block py-2.5 text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-primary"
                    >
                      {p.title}
                    </Link>
                  ))}
                  <Link
                    to="/products"
                    onClick={closeMenu}
                    className="block py-2 text-primary font-semibold"
                  >
                    View All Products →
                  </Link>
                </div>
              )}

              <NavLink
                to="/contact-us"
                onClick={closeMenu}
                className="btn-primary mt-6 text-center w-full"
              >
                Request Quote
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
