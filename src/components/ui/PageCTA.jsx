import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { MotionSection } from "./Motion";

const PageCTA = ({
  title = "Ready to partner with Lumicos?",
  subtitle = "Get export-grade coir products, competitive pricing, and dedicated B2B support from Pollachi to your port.",
  primaryLabel = "Request Quote",
  primaryTo = "/contact-us",
  secondaryLabel = "View Products",
  secondaryTo = "/products",
}) => (
  <MotionSection className="mt-16 md:mt-20">
    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary via-primary-700 to-primary-900 p-8 sm:p-12 md:p-16 text-center">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,#D4A017_0%,transparent_50%)]" />
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to={primaryTo} className="btn-gold">
            {primaryLabel}
            <ArrowRight size={18} />
          </Link>
          {secondaryTo && (
            <Link to={secondaryTo} className="btn-secondary">
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </div>
  </MotionSection>
);

export default PageCTA;
