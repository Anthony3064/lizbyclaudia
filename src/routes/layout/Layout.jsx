import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
const Layout = ({ children }) => {
    return (
        <>
            <Hero />
            {children}
            <Footer />
        </>
    )
}

export default Layout
