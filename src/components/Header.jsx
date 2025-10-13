import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import AnimatedLink from "./AnimatedLink";
import Logo from "../assets/Logo.png";

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

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div
        className={`px-3 sm:px-6 lg:px-12 py-2 flex justify-between items-center h-16 sm:h-20 transition-all duration-300 ${
          scrolled ? "bg-cornsilk backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center h-full">
          <img
            src={Logo}
            alt="Lumicos Logo"
            className="h-24 sm:h-16 md:h-20 w-auto object-contain"
          />
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 lg:space-x-10">
          <li><AnimatedLink to="/">Home</AnimatedLink></li>
          <li><AnimatedLink to="/about-us">About Us</AnimatedLink></li>
          <li><AnimatedLink to="/products">Products</AnimatedLink></li>
          <li><AnimatedLink to="/our-infra">Our Infra</AnimatedLink></li>
          <li><AnimatedLink to="/our-portfolio">Portfolio</AnimatedLink></li>
          <li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                `px-4 py-2 text-orange-600 rounded-full border-2 border-orange-600 hover:bg-orange-600 hover:text-white transition font-medium ${
                  isActive ? "bg-orange-600 text-white" : ""
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
        <div className="md:hidden absolute top-20 flex flex-col left-0 w-full bg-white py-6 px-6 space-y-4 shadow-md transition-all duration-300 z-40">
          <AnimatedLink to="/" onClick={closeMenu}>Home</AnimatedLink>
          <AnimatedLink to="/about-us" onClick={closeMenu}>About Us</AnimatedLink>
          <AnimatedLink to="/products" onClick={closeMenu}>Products</AnimatedLink>
          <AnimatedLink to="/our-infra" onClick={closeMenu}>Our Infra</AnimatedLink>
          <AnimatedLink to="/our-portfolio" onClick={closeMenu}>Portfolio</AnimatedLink>
          <AnimatedLink to="/contact-us" onClick={closeMenu}>Contact Us</AnimatedLink>
        </div>
      )}
    </nav>
  );
};

export default Header;
