import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';

export default function Carousell() {
    const image = ["https://images.tokopedia.net/img/cache/1208/NsjrJu/2021/10/14/02a4f8f3-6386-49bc-a811-4dcc63fc5c34.jpg.webp?ect=3g",
        "https://images.tokopedia.net/img/cache/1208/NsjrJu/2021/7/30/74d32a7f-6a2d-49a3-b325-114de4b055c5.jpg.webp?ect=3g"
    ];

    return (
        <div className="w-11/12 h-auto mt-4 md:mb-6 md:w-3/4">
            <InfiniteCarousel
                breakpoints={[
                    {
                        breakpoint: 640,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                ]}
                autoCycle={true}
                dots={true}
                pauseOnHover={true}
                slidesToScroll={1}
                slidesToShow={1}
                scrollOnDevice={true}
                cycleInterval={5000}
            >

                {image.map(data => {
                    return (
                        <img className="object-cover rounded" src={data}></img>
                    );
                })}
            </InfiniteCarousel>
        </div>
    )
}