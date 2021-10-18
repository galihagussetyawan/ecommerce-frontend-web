import React from 'react';

import ProductCard from '../product-card/Product-Card';

export default function ProductCardScrollHorizontal(props) {
    return (
        <div className="container w-11/12 flex flex-col md:gap-4 md:w-3/4 mt-4" >
            <div className="wrapper-subheading md:text-2xl md:font-bold">
                <h1>{props.heading}</h1>
            </div>

            {/* pruduct card componnet */}
            <div className="wrapper-navigasi-kategori flex gap-5 overflow-x-scroll">
                {props.data.map(data => {
                    return (
                        <ProductCard
                            imgSrc={data.imageSrc}
                            name={data.name}
                            color={data.color}
                        />
                    );
                })}

            </div>
        </div>
    )
}
