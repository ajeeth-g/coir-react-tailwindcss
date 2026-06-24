import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";
import BrandLogo from "./BrandLogo";
import { allCatalogProducts } from "../data/productCatalog";
import { getProductPath } from "../seo/productSlugs";

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-5">
              <BrandLogo variant="light" size="lg" />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              India's trusted coir export manufacturer. Premium coco peat, fiber,
              grow bags, and customized solutions for global B2B buyers since 2008.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Linkedin, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label="Social link"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-5 text-accent">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              {[
                { to: "/", label: "Home" },
                { to: "/about-us", label: "About Us" },
                { to: "/products", label: "Products" },
                { to: "/export-countries", label: "Export Countries" },
                { to: "/certifications", label: "Certifications" },
                { to: "/our-infra", label: "Infrastructure" },
                { to: "/our-portfolio", label: "Portfolio" },
                { to: "/blog", label: "Blog" },
                { to: "/contact-us", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="hover:text-accent transition-colors inline-flex items-center gap-1 group"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-5 text-accent">
              Products
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              {allCatalogProducts.map(({ id, title }) => {
                const slugPath = getProductPath(id);
                return (
                  <li key={id}>
                    <Link to={slugPath} className="hover:text-accent transition-colors">
                      {title}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link to="/contact-us" className="hover:text-accent transition-colors">
                  Custom Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-5 text-accent">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-accent shrink-0 mt-0.5" />
                <a href="tel:+919965405999" className="hover:text-white">
                  +91 99654 05999
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-accent shrink-0 mt-0.5" />
                <a href="mailto:gaurav@lumicos.com" className="hover:text-white">
                  gaurav@lumicos.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
                <span>
                  30 Sri MKK Enclave, Marapettai Street, Pollachi 642001,
                  Tamil Nadu, India
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-container py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} Lumicos LLP. All rights reserved.</p>
          <p>Export-Quality Coir Products · Pollachi, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
