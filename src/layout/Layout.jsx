import Footer from "../components/Footer";
import Header from "../components/Header";
import FloatingActions from "../components/FloatingActions";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="bg-beige-100 dark:bg-gray-950 min-h-screen transition-colors duration-300 overflow-x-hidden">
      <Header />
      <main className={isHome ? "" : "min-h-[90vh] section-container pt-[4.25rem] sm:pt-[4.5rem] xl:pt-20 pb-16 md:pb-20"}>
        {children}
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Layout;
