import style from './carousel.module.css';
import React, {useState} from "react";
function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <div className={style.carousel}>
            <button onClick={prevImage} className={`${style.carouselButton} ${style.prev}`}>&lt;</button>
            <img src={images[currentIndex].url} alt={`Image ${currentIndex}`} className={style.carouselImage} />
            <button onClick={nextImage} className={`${style.carouselButton} ${style.next}`}>&gt;</button>
        </div>
    );
}

export default Carousel;