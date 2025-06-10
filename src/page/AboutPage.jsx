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
              At <strong>SSS Global</strong>, we’re passionate about delivering
              cutting-edge solutions to empower agriculture and rural
              innovation. With a team of experienced professionals, we strive to
              bring affordable and accessible technology to farmers, businesses,
              and communities across India.
            </p>
          </div>
          <div className="md:w-1/2 overflow-hidden rounded-3xl">
            <img
              src={aboutUs}
              alt="SSS Global team working"
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
          <div>
            <h3 className="text-2xl font-semibold text-orange-600 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We aim to empower communities through innovation, sustainability,
              and inclusive agricultural practices.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-orange-600 mb-4">
              Our Goal
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To create long-term value for stakeholders through continuous
              learning, transparent processes, and meaningful impact.
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
      <section className="bg-orange-100 py-20 text-center rounded-t-3xl max-w-screen-xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-orange-600 mb-4">
          Ready to grow with us?
        </h3>
        <p className="text-gray-700 mb-6">
          Contact us today and explore how SSS Global can help your business
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
