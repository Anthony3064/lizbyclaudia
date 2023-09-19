const Services = () => {
    return (
        <section id="services" className="services">
            <div className="services__container">
                <h2 className="services__title" >
                    Servicios
                </h2>
                <div className="services__text">
                    <span className="services__description">
                        Maquillaje
                    </span>
                </div>
                <picture>
                    <img className="img"
                        src="https://i.pinimg.com/originals/bd/38/53/bd3853c9a9fdff5dc207a33d70fbcd93.jpg"
                        alt="Maquillaje.jpg"
                        loading="lazy" />
                </picture>
                <picture>
                    <img className="img"
                        src="https://cdn0.bodas.net/article-real-wedding/289/original/960/jpg/3127573.webp"
                        alt="Peinado.webp"
                        loading="lazy" />
                </picture>
                <div className="services__text last--element">
                    <span className="services__description">
                        Peinados
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Services
