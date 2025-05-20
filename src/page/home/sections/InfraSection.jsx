import { ArrowUpRight } from "lucide-react";
import hero1 from "../../../assets/hero_1.jpg";
import { Link } from "react-router-dom";

const InfraSection = () => {
  return (
    <section className="p-8 bg-blue-100 rounded-3xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div>
          <img
            src={hero1}
            alt="Infrastructure"
            className="rounded-3xl shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 leading-tight">
            We Provide World-Class Infrastructure
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            molestias nemo velit odit voluptatibus modi doloribus ullam
            assumenda? Dolor nemo porro ea veniam esse unde veritatis pariatur
            dolore obcaecati aliquam.
          </p>

          <Link
            to="/contact-us"
            className="group inline-flex items-center gap-2 px-5 py-3 border-2 border-orange-600 text-orange-600 rounded-full font-semibold transition-colors duration-200 hover:bg-orange-600 hover:text-white"
          >
            Explore more
            <span className="flex items-center justify-center bg-orange-600 text-white p-2 rounded-full transition-transform duration-200 group-hover:-translate-y-1">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InfraSection;
