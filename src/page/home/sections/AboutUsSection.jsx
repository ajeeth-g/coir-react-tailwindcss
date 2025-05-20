import hero3 from "../../../assets/hero_3.jpg";

const AboutUsSection = () => {
  return (
    <div className="flex flex-col items-center gap-6 text-center px-4">
      <div className="w-full max-w-6xl h-96 rounded-3xl overflow-hidden">
        <img
          src={hero3}
          alt="About Us"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-4xl font-bold text-orange-600 max-w-4xl tracking-wide leading-snug">
        SSS GLOBAL is an organization commenced for promotion of eco-friendly
        products which are the need of the day and future in India and also the
        whole world, started in the year 2008.
      </p>

      <button className="inline-flex items-center gap-2 px-5 py-3 border-2 border-orange-600 text-white rounded-full font-semibold transition-colors duration-200 bg-orange-600 hover:bg-cornsilk hover:text-orange-600">
        Read More
      </button>
    </div>
  );
};

export default AboutUsSection;
