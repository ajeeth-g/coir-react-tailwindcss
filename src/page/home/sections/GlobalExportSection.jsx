import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../../../components/ui/SectionHeading";
import { MotionSection } from "../../../components/ui/Motion";
import { exportCountries } from "../../../data/homeData";

const WorldMapSVG = ({ activeCountry, onHover }) => (
  <svg
    viewBox="0 0 100 50"
    className="w-full h-auto"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1F5E3B" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#8B5A2B" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    <rect width="100" height="50" fill="url(#mapGrad)" rx="2" />
    {/* Simplified continent shapes */}
    <ellipse cx="22" cy="22" rx="14" ry="10" fill="#1F5E3B" opacity="0.12" />
    <ellipse cx="50" cy="20" rx="12" ry="8" fill="#1F5E3B" opacity="0.12" />
    <ellipse cx="75" cy="25" rx="16" ry="12" fill="#1F5E3B" opacity="0.12" />
    <ellipse cx="82" cy="38" rx="10" ry="6" fill="#1F5E3B" opacity="0.12" />
    <ellipse cx="35" cy="38" rx="8" ry="10" fill="#1F5E3B" opacity="0.12" />

    {exportCountries.map((country) => (
      <g key={country.name}>
        <motion.circle
          cx={country.x}
          cy={country.y}
          r={activeCountry === country.name ? 2.2 : 1.5}
          fill={activeCountry === country.name ? "#D4A017" : "#1F5E3B"}
          className="cursor-pointer"
          onMouseEnter={() => onHover(country.name)}
          onMouseLeave={() => onHover(null)}
          animate={
            activeCountry === country.name
              ? { scale: [1, 1.3, 1] }
              : { scale: 1 }
          }
          transition={{ repeat: Infinity, duration: 2 }}
        />
        {activeCountry === country.name && (
          <motion.circle
            cx={country.x}
            cy={country.y}
            r="3"
            fill="none"
            stroke="#D4A017"
            strokeWidth="0.3"
            initial={{ opacity: 0.8, scale: 0.5 }}
            animate={{ opacity: 0, scale: 2 }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        )}
      </g>
    ))}
  </svg>
);

const GlobalExportSection = () => {
  const [activeCountry, setActiveCountry] = useState(null);
  const active = exportCountries.find((c) => c.name === activeCountry);
  const totalShipments = exportCountries.reduce((s, c) => s + c.shipments, 0);

  return (
    <MotionSection
      id="global"
      className="section-padding bg-white dark:bg-gray-950"
    >
      <div className="section-container">
        <SectionHeading
          eyebrow="Global Export Presence"
          title="Delivering Coir Products Worldwide"
          subtitle="From our manufacturing hub in Pollachi, India, we export to buyers across 40+ countries with reliable logistics and full export documentation."
        />

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden bg-beige-100 dark:bg-gray-900 p-6 border border-primary/5">
            <WorldMapSVG
              activeCountry={activeCountry}
              onHover={setActiveCountry}
            />

            {active && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-6 left-6 glass-card rounded-xl px-5 py-3"
              >
                <p className="font-bold text-gray-900 dark:text-white">
                  {active.name}
                </p>
                <p className="text-sm text-gray-500">
                  {active.shipments}+ shipments delivered
                </p>
              </motion.div>
            )}
          </div>

          <div className="space-y-4">
            {[
              { value: "40+", label: "Export Countries" },
              { value: `${totalShipments}+`, label: "Total Shipments" },
              { value: "500+", label: "Annual Containers" },
              { value: "15+", label: "Years Exporting" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-xl bg-beige-100 dark:bg-gray-900 border border-primary/5"
              >
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}

            <div className="p-5 rounded-xl bg-primary text-white">
              <p className="font-semibold mb-3">Key Export Markets</p>
              <div className="flex flex-wrap gap-2">
                {exportCountries.slice(0, 8).map((c) => (
                  <button
                    key={c.name}
                    onMouseEnter={() => setActiveCountry(c.name)}
                    onMouseLeave={() => setActiveCountry(null)}
                    className={`px-3 py-1 text-xs rounded-full transition-colors ${
                      activeCountry === c.name
                        ? "bg-accent text-white"
                        : "bg-white/10 hover:bg-white/20"
                    }`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default GlobalExportSection;
