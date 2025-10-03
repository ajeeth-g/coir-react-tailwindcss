import hero2 from "../../../assets/Home_2.jpg";
import hero3 from "../../../assets/Home_3.jpg";

const WhyUsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 px-4 sm:px-12 mx-auto w-full">
      {/* Left text block - Our Vision */}
      <div className="md:col-span-4 bg-slate-700 text-white p-8 text-4xl md:text-5xl font-bold rounded-2xl flex items-center justify-center text-center">
        <span className="opacity-60">Our Vision</span>
      </div>

      {/* First image block */}
      <div className="md:col-span-8 relative rounded-2xl overflow-hidden group">
        <img
          src={hero2}
          alt="Why Use Coir"
          className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex items-end">
          <p className="text-white text-sm sm:text-base font-medium">
            To emerge as the world’s most reliable, future-ready, and
            environmentally conscious coir manufacturer — delivering innovative,
            high-performance solutions that support sustainable agriculture,
            advanced horticulture, and eco-focused industries worldwide. At
            Lumicos, we envision a future where automation, integrity, and
            global excellence drive every fiber we produce and every partnership
            we build.
          </p>
        </div>
      </div>

      {/* Second image block */}
      <div className="md:col-span-8 relative rounded-2xl overflow-hidden group">
        <img
          src={hero3}
          alt="Empowering Women"
          className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex items-end">
          <p className="text-white text-sm sm:text-base font-medium">
            To deliver consistent, export-quality coir products that not only
            meet but surpass global expectations — through precision
            manufacturing, ethical practices, and a relentless focus on
            innovation. We aim to empower our customers, support our people, and
            protect the planet by building a business rooted in trust,
            transparency, long-term value, and a deep respect for natural
            resources.
          </p>
        </div>
      </div>

      {/* Right text block - Our Mission */}
      <div className="md:col-span-4 bg-slate-700 text-white p-8 text-3xl md:text-4xl font-bold rounded-2xl flex items-center justify-center text-center">
        <span className="opacity-60">Our Mission</span>
      </div>
    </div>
  );
};

export default WhyUsSection;
