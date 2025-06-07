import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = ({ children }) => {
  return (
    <div className="bg-cornsilk">
      <Header />
      <main className="min-h-[90vh] px-2 py-6 md:px-8 md:py-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
