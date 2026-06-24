import { NavLink } from "react-router-dom";

const AnimatedLink = ({ to, children, className = "", onClick, light = false }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `relative inline-block text-[15px] font-medium tracking-wide cursor-pointer transition-all duration-300 ease-out py-1
       ${
         isActive
           ? light
             ? "text-accent font-semibold"
             : "text-primary dark:text-accent font-semibold"
           : light
             ? "text-white/95 hover:text-white"
             : "text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent"
       } ${className}`
    }
  >
    {({ isActive }) => (
      <>
        {children}
        <span
          className={`absolute left-0 -bottom-0.5 h-0.5 rounded-full transition-all duration-300 ease-out
            ${
              isActive
                ? "w-full bg-accent"
                : light
                  ? "w-0 bg-white/70"
                  : "w-0 bg-primary dark:bg-accent"
            }
          `}
        />
      </>
    )}
  </NavLink>
);

export default AnimatedLink;
