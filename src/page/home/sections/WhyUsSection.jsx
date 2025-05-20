import hero2 from "../../../assets/hero_2.jpg";
import hero3 from "../../../assets/hero_3.jpg";

const WhyUsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-12 max-w-7xl">
      {/* Left text block */}
      <div className="bg-slate-700 text-white p-8 text-4xl md:text-5xl font-bold rounded-2xl flex items-center justify-center text-center">
        <span className="opacity-60">Our Vision</span>
      </div>

      {/* First image block */}
      <div className="relative md:col-span-2 rounded-2xl overflow-hidden group">
        <img src={hero2} alt="Why Use Coir" className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex items-end">
          <p className="text-white text-sm sm:text-base font-medium">
            Coir is a natural and sustainable by-product of coconut, widely used in agriculture,
            horticulture, and erosion control. It supports eco-friendly solutions and provides
            rural employment.
          </p>
        </div>
      </div>

      {/* Second image block */}
      <div className="relative md:col-span-2 rounded-2xl overflow-hidden group">
        <img src={hero3} alt="Empowering Women" className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex items-end">
          <p className="text-white text-sm sm:text-base font-medium">
            Through coir production, many rural women are empowered with livelihood opportunities,
            fostering independence and sustainable development in underrepresented regions.
          </p>
        </div>
      </div>

      {/* Right text block */}
      <div className="bg-slate-700 text-white p-8 text-3xl md:text-4xl font-bold rounded-2xl flex items-center justify-center text-center">
        <span className="opacity-60">
         Our Mission
        </span>
      </div>
    </div>
  );
};

export default WhyUsSection;
