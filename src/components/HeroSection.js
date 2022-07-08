import React from 'react'
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { useState, useEffect } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const HeroSection = () => {

    const [slides, setSlides] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/db/slides")
            .then((res) => {

                return res.json()
            })
            .then(json => {
                setSlides(json);
            })
            .catch((err) => {
                console.log(`Error ${err}`);
            })
    }, [])

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }


    return (
        <div>
            <section className='slider'>
                <GrFormPrevious className='left-arrow' onClick={prevSlide} />
                <GrFormNext className='right-arrow' onClick={nextSlide} />
                {slides.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (
                                <img src={slide.image} alt='travel image' className='image' />
                            )}
                        </div>
                    );
                })}
            </section>

        </div>
    )
}

export default HeroSection
