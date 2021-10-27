import React, { Component, Fragment } from 'react';

const tag = ["For You", "Produk Populer", "Special Jakcloth", "Special Discount", "Hobi", "Taman", "Perawatan Kulit"];

export default class ProductCardGrid extends Component {
    render() {
        return (
            <Fragment>
                <div className="w-screen mb-3 mt-3 border-4 border-gray-200"></div>

                <div className="w-11/12 md:w-3/4 flex gap-3 overflow-x-scroll pt-3 pb-3 md:mb-10 bg-white">

                    {tag.map(data => {
                        return (
                            <div className="wrapper flex gap-5">
                                <div className="wrap-card h-16 md:h-16">
                                    <div className="w-36 h-full md:w-52 rounded-md flex justify-center items-center bg-red-500">
                                        <div className="w-11/12 h-5/6 flex items-center">
                                            <button className="w-full h-full text-left text-sm text-white font-bold">{data}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="w-11/12 md:w-3/4 grid grid-cols-2 gap-3 md:grid-cols-6">
                    {this.props.data.map(data => {
                        return (
                            <div className="card cursor-pointer w-auto rounded-md overflow-hidden border shadow-sm">

                                <div className="image-wrapper w-full h-3/5">
                                    <img className="w-full h-full object-cover object-center" src={data.imageSrc}></img>
                                </div>

                                <div className="description-wrapper w-full h-2/5 p-1 md:p-3">
                                    <p className="product-name text-xs line-clamp-3 md:line-clamp-4">{data.name}</p>
                                    <p className="product-name text-xs text-base font-semibold">{data.title}</p>
                                    <p className="product-name text-xs">{this.props.color}</p>

                                    <div className="detail text-xs text-gray-500">
                                        {/* detail location */}
                                        <div className="wrapper-detail-location flex items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <p>Kota Bandung</p>
                                        </div>
                                        {/* detail rating */}
                                        <div className="wrapper-detail-rating flex items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <p>4.8 || Terjual 360</p>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        );
                    })}





                </div>
            </Fragment>
        )
    }
}