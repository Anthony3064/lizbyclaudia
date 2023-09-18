import { FIRE_OUTLINE_MAKEUP, BLUE_MAKEUP, GREEN_MAKEUP, RED_MAKEUP } from "../utils/images";
import ImagesCard from './ImagesCard.jsx'
const Works = () => {
    return (
        <section id="works" className="works">
            <div className="works__container">
                <h2 className="works__title" >
                    Algunos de mis trabajos
                </h2>
                <ImagesCard images={FIRE_OUTLINE_MAKEUP} />
                <ImagesCard images={BLUE_MAKEUP} />
                <ImagesCard images={GREEN_MAKEUP} />
                <ImagesCard images={RED_MAKEUP} />
            </div>
        </section >
    )
}

export default Works
