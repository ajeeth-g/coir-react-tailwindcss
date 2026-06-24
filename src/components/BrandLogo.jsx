import Logo from "../assets/Logo.png";

/**
 * light — dark backgrounds: blend mode hides the PNG's black backdrop
 * dark  — light backgrounds: plain logo, no container
 */
const BrandLogo = ({ variant = "dark", className = "", size = "md" }) => {
  const onDarkBg = variant === "light";

  const heights = {
    sm: "h-9 sm:h-10",
    md: "h-11 sm:h-12 md:h-14",
    lg: "h-11 sm:h-12 md:h-14 xl:h-16",
    nav: "h-12 sm:h-14 md:h-14 xl:h-16",
    xl: "h-12 sm:h-14 md:h-16 xl:h-[4.25rem]",
  };

  const maxWidths = {
    sm: "max-w-[200px]",
    md: "max-w-[240px] sm:max-w-[260px]",
    lg: "max-w-[min(280px,54vw)] sm:max-w-[300px] xl:max-w-[340px]",
    nav: "max-w-[min(320px,68vw)] sm:max-w-[300px] xl:max-w-[360px]",
    xl: "max-w-[min(300px,56vw)] sm:max-w-[320px] xl:max-w-[360px]",
  };

  const heightClass = heights[size] || heights.md;
  const maxWidthClass = maxWidths[size] || maxWidths.md;

  const blendClass = onDarkBg
    ? "mix-blend-lighten brightness-[1.15] contrast-[1.08] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
    : "";

  return (
    <img
      src={Logo}
      alt="Lumicos LLP — Coir & Coco Products Export"
      className={`${heightClass} w-auto ${maxWidthClass} object-contain object-left ${blendClass} ${className}`}
    />
  );
};

export default BrandLogo;
