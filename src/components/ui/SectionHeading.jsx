const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}) => {
  const alignClass =
    align === "center"
      ? "text-center mx-auto"
      : align === "left"
        ? "text-left"
        : "text-right ml-auto";

  return (
    <div className={`max-w-3xl mb-8 sm:mb-12 md:mb-16 ${alignClass}`}>
      {eyebrow && (
        <span
          className={`inline-block text-sm font-semibold tracking-widest uppercase mb-3 ${
            light ? "text-accent" : "text-accent-500"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-4 ${
          light ? "text-white" : "text-gray-900 dark:text-white"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            light
              ? "text-white/80"
              : "text-gray-600 dark:text-gray-300"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
