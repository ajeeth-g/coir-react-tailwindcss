import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Leaf, Menu, X } from "lucide-react";
import AnimatedLink from "./AnimatedLink";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <div
        className={`px-6 py-4 flex justify-between items-center h-20 w-full fixed top-0 left-0 z-50 shadow transition-colors duration-300 ${
          scrolled ? "bg-cornsilk backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <h1 className="text-2xl md:text-3xl font-bold text-orange-600 tracking-wide">
          SSS Global Coir
        </h1>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-10">
          <li>
            <AnimatedLink to="/">Home</AnimatedLink>
          </li>
          <li>
            <AnimatedLink to="/about-us">About Us</AnimatedLink>
          </li>
          <li>
            <AnimatedLink to="/products">Products</AnimatedLink>
          </li>
          <li>
            <AnimatedLink to="/our-infra">Our Infra</AnimatedLink>
          </li>
          <li>
            <AnimatedLink to="/our-portfolio">Portfolio</AnimatedLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                `px-5 py-1.5 rounded-full border-2 border-orange-600 hover:bg-orange-700 hover:text-white transition
       ${
         isActive
           ? "bg-orange-600 text-white"
           : ""
       }`
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4">
          <AnimatedLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </AnimatedLink>
          <AnimatedLink to="/about-us" onClick={() => setMenuOpen(false)}>
            About Us
          </AnimatedLink>
          <AnimatedLink to="/products" onClick={() => setMenuOpen(false)}>
            Products
          </AnimatedLink>
          <AnimatedLink to="/our-infra" onClick={() => setMenuOpen(false)}>
            Our Infra
          </AnimatedLink>
          <AnimatedLink to="/contact-us" onClick={() => setMenuOpen(false)}>
            Contact Us
          </AnimatedLink>
        </div>
      )}
    </nav>
  );
};

export default Header;
