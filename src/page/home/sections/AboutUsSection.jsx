import hero3 from "../../../assets/About_Us_2.jpg";
import { Link } from "react-router-dom";

const AboutUsSection = () => {
  return (
    <div className="flex flex-col items-center gap-6 text-center px-4">
      <div className="w-full max-w-7xl h-56 sm:h-72 md:h-[70vh] rounded-3xl overflow-hidden">
        <img
          src={hero3}
          alt="About Us"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-2xl font-medium text-orange-600 max-w-6xl tracking-wide leading-snug">
      Founded in 2008 as SSS Global, we began as a trading firm with a modest
        turnover of USD 0.2 million. Over the years, with a strong commitment to
        quality and customer satisfaction, we have grown into one of India's top
        5 coir exporters, now achieving a turnover of over USD 7 million and a
        solid footprint in global horticulture and garden markets. Lumicos LLP is
        now rebranded as Lumicos LLP
      </p>

      <Link to="/about-us" className="inline-flex items-center gap-2 px-5 py-3 border-2 border-orange-600 text-white rounded-full font-semibold transition-colors duration-200 bg-orange-600 hover:bg-cornsilk hover:text-orange-600">
        Read More
      </Link>
    </div>
  );
};

export default AboutUsSection;
