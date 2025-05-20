import { useState } from "react";
import { Link } from "react-router-dom";
import { Leaf, Menu, X } from "lucide-react";
import AnimatedLink from "./AnimatedLink";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="px-6 py-4 flex justify-between items-center h-24">
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
          <li className="relative group">
            <AnimatedLink to="/products">Products</AnimatedLink>

            {/* Mega Menu Dropdown */}
            <div className="absolute top-full -right-40 mt-2 w-[600px] bg-white shadow-xl border border-gray-200 rounded-xl p-6 grid grid-cols-2 gap-6 z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
              {[...Array(5)].map((_, i) => (
                <Link
                  to={`/products/coir-pith-${i + 1}`}
                  key={i}
                  className="flex items-start gap-3 hover:text-orange-600"
                >
                  <Leaf className="mt-1 text-orange-500" />
                  <div>
                    <h4 className="text-sm font-semibold">Coir Pith {i + 1}</h4>
                    <p className="text-xs text-gray-500">
                      Premium quality coco peat
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </li>
          <li>
            <AnimatedLink to="/our-infra">Our Infra</AnimatedLink>
          </li>
          <li>
            <AnimatedLink to="/our-portfolio">Portfolio</AnimatedLink>
          </li>
          <li>
            <p className="px-5 py-1.5 rounded-full border-2 border-orange-600 hover:bg-orange-100 transition">
              <AnimatedLink to="/contact-us">Contact Us</AnimatedLink>
            </p>
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
          <details className="group">
            <summary>Products</summary>
            <div className="mt-2 space-y-3 pl-4">
              {[...Array(5)].map((_, i) => (
                <Link
                  key={i}
                  to={`/products/coir-pith-${i + 1}`}
                  onClick={() => setMenuOpen(false)}
                  className="block text-sm text-gray-700 hover:text-orange-600"
                >
                  Coir Pith {i + 1}
                </Link>
              ))}
            </div>
          </details>
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
