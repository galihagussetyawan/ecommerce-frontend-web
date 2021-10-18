import React, { Fragment } from 'react';

export default function SpecialProductBanner() {
    const urlImage = "https://images.tokopedia.net/img/cache/400/wCVIqt/2021/10/3/295e376d-d8a0-47d9-8486-3c5fddc664f3.jpg.webp?ect=4g";

    return (
        <div className="container w-11/12 mt-3 md:w-3/4 md:mb-6 flex flex-col gap-1 md:gap-4 ">
            <h1 className="md:text-2xl md:font-bold">Spesial di Trendyol hari ini</h1>

            <div className="wrapper-special-product grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
                <img className="rounded-md" src={urlImage}></img>
                <img className="rounded-md" src={urlImage}></img>
                <img className="rounded-md" src={urlImage}></img>
                <img className="rounded-md" src={urlImage}></img>
            </div>
        </div>
    )
};