import React, { Component } from 'react';

// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation, Autoplay, Pagination]);


const image = ["https://images.tokopedia.net/img/cache/1208/NsjrJu/2021/10/14/02a4f8f3-6386-49bc-a811-4dcc63fc5c34.jpg.webp?ect=3g",
    "https://images.tokopedia.net/img/cache/1208/NsjrJu/2021/7/30/74d32a7f-6a2d-49a3-b325-114de4b055c5.jpg.webp?ect=3g"
];

const nextButton = <button className="md:bg-black"></button>

export default function Carousell() {
    return (
        <div className="w-11/12 md:w-3/4 md:my-6 my-3 rounded-md overflow-hidden">
            <Swiper
                navigation
                slidesPerView={1}
                loop
                autoplay={{ "delay": 2500 }}
                pagination={{ "clickable": true }}
            >
                {image.map(data => {
                    return (
                        <SwiperSlide>
                            <img className="w-full object-contain object-center" src={data}></img>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    )
}