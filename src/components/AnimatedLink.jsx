import { NavLink } from "react-router-dom";

const AnimatedLink = ({ to, children, className = "" }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `relative inline-block font-medium tracking-wide cursor-pointer transition-transform duration-300 ease-in-out
       ${isActive ? "text-orange-900 scale-110 font-bold" : "text-orange-600 hover:text-orange-800"} ${className}`
    }
  >
    {children}
    <span
      className={`absolute left-0 bottom-0 h-[2px] bg-orange-800 rounded-full transition-all duration-300 ease-in-out
        ${window.location.pathname === to ? "w-full" : "w-0"} 
      `}
    />
  </NavLink>
);

export default AnimatedLink;
