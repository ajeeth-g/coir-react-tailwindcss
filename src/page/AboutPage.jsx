import { Rocket, ShieldCheck, Users } from "lucide-react";
import aboutHero from "../assets/hero_1.jpg"; // replace with your image

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <img
          src={aboutHero}
          alt="About us"
          className="w-full h-72 object-cover rounded-b-3xl shadow-md"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Us</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-5xl py-16 px-6">
        <h2 className="text-3xl font-bold text-orange-600 mb-6">
          Who We Are
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          At <strong>SSS Global</strong>, we’re passionate about delivering cutting-edge solutions to
          empower agriculture and rural innovation. With a team of experienced
          professionals, we strive to bring affordable and accessible technology
          to farmers, businesses, and communities across India.
        </p>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-white py-16 px-6 md:px-20 rounded-3xl shadow-inner">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-orange-600 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To simplify agri-business and empower growth through scalable,
              sustainable technology solutions built with integrity and purpose.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-orange-600 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To be a leader in agricultural innovation, fostering prosperity in
              rural India and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Company Highlights */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center text-orange-600 mb-12">
          Why Choose Us
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <Users className="mx-auto text-orange-600 mb-4" size={40} />
            <h4 className="text-xl font-semibold mb-2">Expert Team</h4>
            <p className="text-gray-600 text-sm">
              A diverse team of professionals with deep domain expertise.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <Rocket className="mx-auto text-orange-600 mb-4" size={40} />
            <h4 className="text-xl font-semibold mb-2">Innovation Driven</h4>
            <p className="text-gray-600 text-sm">
              We innovate with the future in mind, blending tech and tradition.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <ShieldCheck className="mx-auto text-orange-600 mb-4" size={40} />
            <h4 className="text-xl font-semibold mb-2">Trust & Transparency</h4>
            <p className="text-gray-600 text-sm">
              We uphold ethical values and deliver transparent solutions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-100 py-16 text-center rounded-t-3xl">
        <h3 className="text-3xl font-bold text-orange-600 mb-4">
          Ready to grow with us?
        </h3>
        <p className="text-gray-700 mb-6">
          Contact us today and explore how SSS Global can help your business thrive.
        </p>
        <a
          href="/contact"
          className="inline-block bg-orange-700 text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-600 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default AboutPage;
