import Navbar from "./Navbar"

const Header = () => {
    return (
        <header className="hero">
            <Navbar />
            <div className="bg__hero" >
                <div className="hero__text">
                    <h1 className="hero__title">
                        Bienvenidos
                    </h1>
                    <p className="hero__description">
                        A una experiencia completa de belleza & bienestar
                    </p>
                </div>
            </div>
        </header>
    )
}

export default Header
