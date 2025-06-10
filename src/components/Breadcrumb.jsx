import aboutHero from "../assets/Home_1.jpg";

const Breadcrumb = ({ items, title, bgImage = aboutHero}) => {
  return (
    <section className="relative rounded-3xl overflow-hidden mx-auto w-full">
      <img
        src={bgImage}
        alt="Banner background"
        className="w-full h-80 object-cover rounded-3xl shadow-md"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
        <nav className="flex items-center text-sm font-medium text-white mb-4">
          {items.map((item, index) => (
            <div key={index} className="flex items-center">
              {index > 0 && (
                <svg
                  className="h-5 w-5 text-white/70 mx-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {item.href ? (
                <a
                  href={item.href}
                  className="hover:text-white/90 transition-colors duration-200"
                >
                  {item.label}
                </a>
              ) : (
                <span className="text-white font-semibold">{item.label}</span>
              )}
            </div>
          ))}
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
      </div>
    </section>
  );
};

export default Breadcrumb;