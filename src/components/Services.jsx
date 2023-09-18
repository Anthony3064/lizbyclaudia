const Services = () => {
    return (
        <section id="services" className="services">
            <div className="services__container">
                <h2 className="services__title" >
                    Mis principales servicios
                </h2>
                <div className="services__text">
                    <span className="services__description">
                        Maquillaje
                    </span>
                </div>
                <picture>
                    <img className="img"
                        src="https://i.pinimg.com/originals/bd/38/53/bd3853c9a9fdff5dc207a33d70fbcd93.jpg"
                        alt="ejemplo"
                        loading="lazy" />
                </picture>
                <picture>
                    <img className="img"
                        src="https://upload.wikimedia.org/wikipedia/commons/1/12/Canon_Photography_Hairstyling_tool_barbershop_from_Iran_Mashhad_city_Mostafa_Meraji_10.jpg"
                        alt="ejemplo"
                        loading="lazy" />
                </picture>
                <div className="services__text last--element">
                    <span className="services__description">
                        Barbería
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Services
