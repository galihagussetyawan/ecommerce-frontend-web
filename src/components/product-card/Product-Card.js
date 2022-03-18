import React from 'react';

export default function ProductCard(props) {
    return (
        <div className="md:cursor-pointer border shadow-sm rounded-md overflow-hidden">
            <div className="h-full md:h-80 overflow-hidden">

                <div className="image-section w-full h-1/2 md:h-auto overflow-hidden">
                    <img className="w-full h-full object-fill bg-gray-200" alt={props.name} src={props.imgSrc}></img>
                </div>

                <div className="description-section w-full h-1/2 md:h-2/5 p-1 flex flex-col gap-1 justify-start overflow-hidden">
                    <p className="product-name text-xs line-clamp-3 md:line-clamp-3">{props.name}</p>
                    <p className="product-name text-xs font-semibold">{props.title}</p>
                    <p className="product-name text-xs">{props.color}</p>

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
                    {props.children}
                </div>
            </div>
        </div>
    )
};