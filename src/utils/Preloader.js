import { useState, useEffect } from 'react';

const Preloader = ({ imageUrl, onImageLoad }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    useEffect(() => {
        const image = new Image();
        image.src = imageUrl;

        image.onload = () => {
            setImageLoaded(true);
            onImageLoad();
        };

        return () => {
            image.onload = null;
        };
    }, [imageUrl, onImageLoad]);
    console.log(imageLoaded);
    return null;
};

export default Preloader;