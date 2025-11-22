import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./layout/Layout";
import AboutPage from "./page/AboutPage";
import Contact from "./page/Contact";
import Home from "./page/home/Home";
import Products from "./page/Products";
import OurInfraPage from "./page/OurInfraPage";
import PortfolioPage from "./page/PortfolioPage";
import ProductDetail from "./page/ProductDetail";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={ <Layout> <Home /> </Layout> } />
      <Route path="/about-us" element={ <Layout> <AboutPage /> </Layout> }/>
      <Route path="/products" element={ <Layout> <Products /> </Layout> }/>
       <Route path="/products/:id" element={ <Layout> <ProductDetail /> </Layout> } />
      <Route path="/our-infra" element={ <Layout> <OurInfraPage /> </Layout>} />
      <Route path="/our-portfolio" element={ <Layout> <PortfolioPage /> </Layout> } />
      <Route path="/contact-us" element={ <Layout> <Contact /> </Layout> } />
    </Routes>
  );
};

export default App;
