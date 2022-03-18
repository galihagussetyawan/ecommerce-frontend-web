import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

//import components
import ProductCard from '../product-card/Product-Card';

// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';

//import helpers
import { handleLink } from '../../helpers/handleLink';

SwiperCore.use([Navigation, Autoplay, Pagination]);

export default function ProductCardScrollHorizontal(props) {
    return (
        <div className="w-11/12 flex flex-col md:gap-4 md:w-3/4" >
            <div className="wrapper-subheading md:text-2xl md:font-bold">
                <h1>{props.heading}</h1>
            </div>

            {/* pruduct card componnet */}
            {/* <div className="wrapper-navigasi-kategori flex gap-5 overflow-x-scroll"> */}

            <Swiper
                className="w-full"
                slidesPerView={6}
                spaceBetween={20}
                navigation

                breakpoints={{
                    "@0.00": {
                        "slidesPerView": 2
                    },
                    "@1.50": {
                        "slidesPerView": 6
                    }
                }}
            >
                {props.data.map((data, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <NavLink to={"/product/" + handleLink(data.id, data.name)}>
                                <ProductCard
                                    imgSrc={data.images[0].url}
                                    name={data.name}
                                    color={data.color}
                                />
                            </NavLink>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

        </div>
        // </div>
    )
}