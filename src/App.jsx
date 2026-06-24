import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

const Home = lazy(() => import("./page/home/Home"));
const AboutPage = lazy(() => import("./page/AboutPage"));
const Products = lazy(() => import("./page/Products"));
const ProductDetail = lazy(() => import("./page/ProductDetail"));
const OurInfraPage = lazy(() => import("./page/OurInfraPage"));
const PortfolioPage = lazy(() => import("./page/PortfolioPage"));
const Contact = lazy(() => import("./page/Contact"));
const CertificationsPage = lazy(() => import("./page/CertificationsPage"));
const ExportCountriesPage = lazy(() => import("./page/ExportCountriesPage"));
const BlogPage = lazy(() => import("./page/BlogPage"));
import Layout from "./layout/Layout";

const PageLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about-us" element={<Layout><AboutPage /></Layout>} />
        <Route path="/products" element={<Layout><Products /></Layout>} />
        <Route path="/products/:slug" element={<Layout><ProductDetail /></Layout>} />
        <Route path="/our-infra" element={<Layout><OurInfraPage /></Layout>} />
        <Route path="/our-portfolio" element={<Layout><PortfolioPage /></Layout>} />
        <Route path="/contact-us" element={<Layout><Contact /></Layout>} />
        <Route path="/certifications" element={<Layout><CertificationsPage /></Layout>} />
        <Route path="/export-countries" element={<Layout><ExportCountriesPage /></Layout>} />
        <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
        {/* Legacy product URL redirects handled in ProductDetail via slug resolution */}
      </Routes>
    </Suspense>
  );
};

export default App;
