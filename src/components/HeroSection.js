import React from 'react'
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { useState, useEffect } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { API_URL } from '../api';

const HeroSection = () => {

    const [slides, setSlides] = useState([]);

    useEffect(() => {
        // fetch(API_URL + "/slides")
        //     .then((res) => {

        //         return res.json()
        //     })
        //     .then(json => {
        //         setSlides(json);
        //     })
        //     .catch((err) => {
        //         console.log(`Error ${err}`);
        //     })


        const slideImages = [
            {
                image: "https://www.nettv4u.com/uploads/25-08-2019/top-10-tv-shows-with-the-highest-fan-following.jpg"
            },
            {
                image: "https://www.travenix.com/wp-content/uploads/2017/08/Banner3.jpg"
            },
            {
                image: "https://i.ytimg.com/vi/JGyWK7dfeNs/hqdefault.jpg"
            },
            {
                image: "https://www.nettv4u.com/uploads/25-08-2019/top-10-tv-shows-with-the-highest-fan-following.jpg"
            },
            {
                image: "https://www.tvguide.com/a/img/resize/d45953b59bc2085d02fa2506d4d3f8ef5cda5c2f/hub/2019/10/18/e86fa142-c52e-4841-9173-65c6f38d2aec/botdbckgrdv10final.jpg?auto=webp&fit=crop&height=1293&width=2300"
            }];

        setSlides(slideImages);

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
