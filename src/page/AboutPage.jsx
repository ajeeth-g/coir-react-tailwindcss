import { Rocket, ShieldCheck, Users } from "lucide-react";
import aboutUs from "../assets/About_1.jpg";
import Breadcrumb from "../components/Breadcrumb";

const AboutPage = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: null },
  ];

  return (
    <div className="mt-20">
      {/* Hero Section */}
      <Breadcrumb items={breadcrumbItems} title="About Us" />

      {/* Intro Section */}
      <section className="py-20 px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-orange-600 mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 2008 as Lumicos LLP, we began as a trading firm with a
              modest turnover of USD 0.2 million. Over the years, with a strong
              commitment to quality and customer satisfaction, we have grown
              into one of India’s top 5 coir exporters, now achieving a turnover
              of over USD 7 million and a solid footprint in global horticulture
              and garden markets.
              <br />
              <div className="mt-2">
                As part of our evolution, we became one of the few companies in
                India to manufacture both coir liners and metal baskets under
                one roof, offering fully integrated B2B export solutions to
                international buyers.
              </div>
              <div className="font-semibold mt-2 text-orange-600">
                Lumicos LLP is now rebranded as Lumicos LLP — a name that
                reflects our forward-thinking approach and our commitment to
                automation, sustainability, and manufacturing excellence. With
                precision-driven processes and scalable capacity, we serve
                high-demand markets with reliability and consistency.
              </div>
            </p>
          </div>
          <div className="md:w-1/2 overflow-hidden rounded-3xl">
            <img
              src={aboutUs}
              alt="Lumicos LLP team working"
              className="w-full h-96 object-cover rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-white py-16 px-6 md:px-20 rounded-3xl shadow-inner max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <div>
            <h3 className="text-2xl font-semibold text-orange-600 mb-4">
              Our Blossom
            </h3>
            <p className="text-gray-600 leading-relaxed">
              From our humble start in 2008 as Lumicos LLP to becoming Lumicos
              LLP, we’ve grown into one of India’s top coir exporters, driven by
              precision, trust, and sustainable innovation.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-orange-600 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To be the world’s most reliable and forward-thinking supplier of
              eco-friendly coir products — driving agricultural and industrial
              sustainability through innovation, automation, and integrity.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-orange-600 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To deliver consistent, high-quality coir solutions that meet
              global standards, exceed customer expectations, and empower our
              partners through trust, transparency, and long-term value.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-orange-600 mb-4">
              Our Goal
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To expand Lumicos into a globally recognized coir brand by scaling
              automated production, entering new markets, and setting new
              benchmarks for quality, service, and environmental responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* Company Highlights */}
      <section className="py-20 px-6 max-w-screen-xl mx-auto">
        <h3 className="text-3xl font-bold text-center text-orange-600 mb-12">
          Why Choose Us
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <Users className="mx-auto text-orange-600 mb-4" size={40} />
            <h4 className="text-xl font-semibold mb-2">Expert Team</h4>
            <p className="text-gray-600 text-sm">
              Led by experienced professionals and skilled technicians, our team
              drives excellence through deep industry knowledge and hands-on
              execution.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <Rocket className="mx-auto text-orange-600 mb-4" size={40} />
            <h4 className="text-xl font-semibold mb-2">Innovation Driven</h4>
            <p className="text-gray-600 text-sm">
              Rooted in consistency and global benchmarks, our quality approach
              ensures every product meets the highest international standards.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <ShieldCheck className="mx-auto text-orange-600 mb-4" size={40} />
            <h4 className="text-xl font-semibold mb-2">Trust & Transparency</h4>
            <p className="text-gray-600 text-sm">
              We believe in honest practices, open communication, and long-term
              relationships built on reliability, clarity, and mutual respect.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-100 py-20 text-center rounded-t-3xl max-w-screen-xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-orange-600 mb-4">
          Ready to grow with us?
        </h3>
        <p className="text-gray-700 mb-6">
          Contact us today and explore how Lumicos LLP can help your business
          thrive.
        </p>
        <a
          href="/contact-us"
          className="inline-block bg-orange-700 text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-600 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default AboutPage;
