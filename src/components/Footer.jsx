import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-500">SSS Global</h2>
          <p className="text-gray-300">
            Accelerating your success with smart solutions tailored to grow.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-orange-400">Home</a></li>
            <li><a href="#" className="hover:text-orange-400">About Us</a></li>
            <li><a href="#" className="hover:text-orange-400">Services</a></li>
            <li><a href="#" className="hover:text-orange-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="text-gray-300 space-y-2">
            <li>Email: info@sssglobal.com</li>
            <li>Phone: +91 90921 55212</li>
            <li>Location: Pollachi, Tamil Nadu</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-orange-500">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-white hover:text-orange-500">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-white hover:text-orange-500">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-white hover:text-orange-500">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-400 text-sm border-t border-slate-600 pt-6 px-6">
        © {new Date().getFullYear()} SSS Global. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
