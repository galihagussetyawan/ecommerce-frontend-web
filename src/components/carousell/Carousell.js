import React, { useState, useEffect } from 'react';

// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation, Autoplay, Pagination]);

const nextButton = <button className="md:bg-black"></button>

export default function Carousell() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImage = async () => {
            const banner1 = await import('../../assets/banner1.webp');
            const banner2 = await import('../../assets/banner2.webp');
            const banner3 = await import('../../assets/banner3.webp');

            setImages([banner1.default, banner2.default, banner3.default]);
        };

        fetchImage();
    }, [])

    return (
        <div className="w-11/12 md:w-3/4 rounded-md overflow-hidden">
            <Swiper
                navigation
                slidesPerView={1}
                loop
                autoplay={{ "delay": 2500 }}
                pagination={{ "clickable": true }}
            >
                {images.map((data, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <picture>
                                <source type='image/webp' />
                                <img className="w-full md:w-full md:h-full object-contain object-center" alt={"banner" + index + 1} src={data}></img>
                            </picture>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    )
}