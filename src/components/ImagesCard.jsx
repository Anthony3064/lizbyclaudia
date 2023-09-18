import { useCallback, useEffect, useState } from "react"

const ImagesCard = ({ images }) => {
    const [indexImage, setIndexImage] = useState(0);

    const nextImage = () => {
        let next = indexImage + 1;
        if (next === images.length) {
            next = 0;
        }
        setIndexImage(next);
    };

    const changeImageAutomatically = useCallback(() => {
        const timer = setInterval(() => {
            nextImage();
        }, 10000);

        return () => {
            clearInterval(timer);
        };
    }, [nextImage]);

    useEffect(() => {
        const cleanup = changeImageAutomatically();
        return () => {
            cleanup();
        };
    }, [indexImage, changeImageAutomatically]);

    return (
        <div className="image__container">

            {
                images.map((image, index) => {
                    return (
                        <figure key={index} className={`image__figure ${indexImage === index ? 'current__image' : ''}`} >
                            <img key={index} src={image.src} alt={image.alt} onClick={nextImage} className='image__item' />
                        </figure>
                    )
                })
            }
        </div>
    )
}

export default ImagesCard
