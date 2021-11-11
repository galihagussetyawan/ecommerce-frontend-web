import React, { Component } from 'react';

//import components
import ProductCard from '../product-card/Product-Card';

// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation, Autoplay, Pagination]);



export default class ProductCardScrollHorizontal extends Component {
    render() {
        return (
            <div className="w-11/12 flex flex-col md:gap-4 md:w-3/4 mt-4" >
                <div className="wrapper-subheading md:text-2xl md:font-bold">
                    <h1>{this.props.heading}</h1>
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
                    {this.props.data.map(data => {
                        return (
                            <SwiperSlide>
                                <ProductCard
                                    imgSrc={data.imageSrc}
                                    name={data.name}
                                    color={data.color}
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

            </div>
            // </div>
        )
    }
}