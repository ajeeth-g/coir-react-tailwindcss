import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "./BrandLogo";

const MIN_MS = 1600;
const EXIT_MS = 650;

const SplashScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState("visible");

  useEffect(() => {
    if (phase === "visible") {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
    return undefined;
  }, [phase]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const minMs = reduced ? 400 : MIN_MS;

    const start = Date.now();
    const showTimer = setTimeout(() => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, minMs - elapsed);
      setTimeout(() => setPhase("exit"), remaining);
    }, 0);

    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (phase !== "exit") return undefined;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const exitMs = reduced ? 200 : EXIT_MS;
    const timer = setTimeout(onComplete, exitMs);
    return () => clearTimeout(timer);
  }, [phase, onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[#0a2014]"
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === "exit" ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: EXIT_MS / 1000, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden={phase === "exit"}
          aria-label="Loading Lumicos"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-[#0a2014] to-primary-800" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,160,23,0.08),transparent_65%)]" />

          <motion.div
            className="relative z-10 flex flex-col items-center px-6"
            initial={{ opacity: 0, scale: 0.92, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <BrandLogo variant="light" size="xl" className="mx-auto !object-center" />

            <motion.p
              className="mt-6 text-sm sm:text-base font-medium tracking-[0.2em] uppercase text-accent/90 text-center"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              Coir Products Export
            </motion.p>

            <motion.p
              className="mt-2 text-xs text-white/45 tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Pollachi, India · Since 2008
            </motion.p>
          </motion.div>

          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 w-32 h-0.5 rounded-full bg-white/10 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              className="h-full bg-accent rounded-full origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: MIN_MS / 1000, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
