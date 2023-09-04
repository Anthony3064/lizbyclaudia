import Navbar from "./Navbar";
const Hero = () => {
    return (
        <>
            <header className='header' id="header">
                <Navbar />
            </header>
            <section className="bg__hero" >
                <div className="hero__text">
                    <h1 className="hero__title">
                        Bienvenidos
                    </h1>
                    <p className="hero__description">
                        A una experiencia completa de belleza & bienestar

                    </p>
                </div>
            </section>
        </>
    )
}
export default Hero
