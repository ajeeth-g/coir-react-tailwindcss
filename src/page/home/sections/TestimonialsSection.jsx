import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import SectionHeading from "../../../components/ui/SectionHeading";
import { MotionSection } from "../../../components/ui/Motion";
import { testimonials } from "../../../data/homeData";

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <MotionSection
      id="testimonials"
      className="section-padding bg-primary-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <Quote className="absolute top-10 left-10 w-32 h-32 text-white" />
        <Quote className="absolute bottom-10 right-10 w-32 h-32 text-white rotate-180" />
      </div>

      <div className="section-container relative">
        <SectionHeading
          eyebrow="Client Testimonials"
          title="Trusted by Global Buyers"
          subtitle="Hear from international procurement teams who rely on Lumicos for consistent coir product quality and reliable export delivery."
          light
        />

        <div className="max-w-4xl mx-auto relative">
          <div className="min-h-[280px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="w-full glass-card rounded-2xl p-8 md:p-10"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-accent fill-accent"
                    />
                  ))}
                </div>

                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed mb-6 italic">
                  "{t.review}"
                </p>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">
                      {t.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {t.role}, {t.company}
                    </p>
                  </div>
                  <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                    {t.country}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-accent w-6" : "bg-white/30"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default TestimonialsSection;
