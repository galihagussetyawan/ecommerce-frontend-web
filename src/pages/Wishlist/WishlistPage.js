import React, { Fragment } from 'react';

//import components
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ProductCard from '../../components/product-card/Product-Card';

//import services
import ImageService from '../../services/ImageService';

const dataElektronik = [
    {
        id: 1,
        name: 'Apple Macbook Air 2020 M1 Chip 13 inch 512GB Touch ID Grey Silver Gold - Inter JAPAN, 256GB Silver',
        href: '#',
        imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/9/2/cacf4abd-94a7-4aa1-b633-ef8a98af6524.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '14.799.000',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Apple Macbook Air 2020 M1 Chip 13 inch 512GB Touch ID Grey Silver Gold - Inter JAPAN, 256GB Silver',
        href: '#',
        imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/9/2/cacf4abd-94a7-4aa1-b633-ef8a98af6524.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '14.799.000',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Apple Macbook Air 2020 M1 Chip 13 inch 512GB Touch ID Grey Silver Gold - Inter JAPAN, 256GB Silver',
        href: '#',
        imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/9/2/cacf4abd-94a7-4aa1-b633-ef8a98af6524.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '14.799.000',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Apple Macbook Air 2020 M1 Chip 13 inch 512GB Touch ID Grey Silver Gold - Inter JAPAN, 256GB Silver',
        href: '#',
        imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/9/2/cacf4abd-94a7-4aa1-b633-ef8a98af6524.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '14.799.000',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Apple Macbook Air 2020 M1 Chip 13 inch 512GB Touch ID Grey Silver Gold - Inter JAPAN, 256GB Silver',
        href: '#',
        imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/9/2/cacf4abd-94a7-4aa1-b633-ef8a98af6524.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '14.799.000',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Apple Macbook Air 2020 M1 Chip 13 inch 512GB Touch ID Grey Silver Gold - Inter JAPAN, 256GB Silver',
        href: '#',
        imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/9/2/cacf4abd-94a7-4aa1-b633-ef8a98af6524.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '14.799.000',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Apple Macbook Air 2020 M1 Chip 13 inch 512GB Touch ID Grey Silver Gold - Inter JAPAN, 256GB Silver',
        href: '#',
        imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/9/2/cacf4abd-94a7-4aa1-b633-ef8a98af6524.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '14.799.000',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Apple Macbook Air 2020 M1 Chip 13 inch 512GB Touch ID Grey Silver Gold - Inter JAPAN, 256GB Silver',
        href: '#',
        imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/9/2/cacf4abd-94a7-4aa1-b633-ef8a98af6524.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '14.799.000',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Apple Macbook Air 2020 M1 Chip 13 inch 512GB Touch ID Grey Silver Gold - Inter JAPAN, 256GB Silver',
        href: '#',
        imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/9/2/cacf4abd-94a7-4aa1-b633-ef8a98af6524.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '14.799.000',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Apple Macbook Air 2020 M1 Chip 13 inch 512GB Touch ID Grey Silver Gold - Inter JAPAN, 256GB Silver',
        href: '#',
        imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/9/2/cacf4abd-94a7-4aa1-b633-ef8a98af6524.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '14.799.000',
        color: 'Black',
    }

    // More products...
]

export default function WhislistPage() {

    const imageShow = (name) => {
        return `http://localhost:8080/api/image?image=${name}`
    }

    return (
        <Fragment>
            <Header />

            <div className="md:w-3/4 md:flex md:flex-col md:gap-3 md:m-auto md:py-5">
                <div className="section md:w-full">
                    <div className="md:w-1/4 md:h-8 md:flex md:rounded-md md:outline-none focus-within:border-green-500 md:border md:border-gray-300 md:overflow-hidden">
                        <input className="md:w-full md:h-full md:px-2 md:outline-none" />
                        <button className="md:h-full md:px-2 md:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="section md:w-full md:grid md:grid-cols-6 md:gap-3">
                    {dataElektronik.map(data => {
                        return (
                            <ProductCard
                                imgSrc={data}
                                name={data.name}
                            >
                                <button className="md:w-full md:rounded-md md:border md:border-red-500 md:text-red-500">Beli</button>
                            </ProductCard>
                        );
                    })}
                </div>
            </div>

            <Footer />
        </Fragment>
    )
}