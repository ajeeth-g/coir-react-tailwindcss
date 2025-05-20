import Footer from '../components/Footer'
import Header from '../components/Header'

const Layout = ({ children }) => {
  return (
     <div className="bg-cornsilk">
      <Header />
      <main style={{ minHeight: '90vh', padding: '2rem' }}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout