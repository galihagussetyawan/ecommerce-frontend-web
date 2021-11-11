import React, { Component, Fragment, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

//import components
import Carousell from '../../components/carousell/Carousell';
import SpecialProductBanner from '../../components/special-product/Special-Pruduct-Banner';
import ProductCardScrollHorizontal from '../../components/product-card-scroll-horizontal/Product-Card-Scroll-Horizontal';
import ProductCardGrid from '../../components/product-card-grid/Product-Card-Grid';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Login from '../../components/login/Login';

//import serviceas
import AuthenticationService from '../../services/AuthenticationService';

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

const dataKuliner = [
    {
        id: 1,
        name: 'SEI SAPI Bundle 500gr DIASAPIN Daging Asap Sapi Plus Sambal Chili Oil',
        href: '#',
        imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2020/10/21/55893110-8f4d-42cb-97cf-a3e446e5d2c8.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '179.000',
        color: 'Black',
    },
    {
        id: 1,
        name: 'SEI SAPI Bundle 500gr DIASAPIN Daging Asap Sapi Plus Sambal Chili Oil',
        href: '#',
        imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2020/10/21/55893110-8f4d-42cb-97cf-a3e446e5d2c8.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '179.000',
        color: 'Black',
    },
    {
        id: 1,
        name: 'SEI SAPI Bundle 500gr DIASAPIN Daging Asap Sapi Plus Sambal Chili Oil',
        href: '#',
        imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2020/10/21/55893110-8f4d-42cb-97cf-a3e446e5d2c8.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '179.000',
        color: 'Black',
    },
    {
        id: 1,
        name: 'SEI SAPI Bundle 500gr DIASAPIN Daging Asap Sapi Plus Sambal Chili Oil',
        href: '#',
        imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2020/10/21/55893110-8f4d-42cb-97cf-a3e446e5d2c8.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '179.000',
        color: 'Black',
    },
    {
        id: 1,
        name: 'SEI SAPI Bundle 500gr DIASAPIN Daging Asap Sapi Plus Sambal Chili Oil',
        href: '#',
        imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2020/10/21/55893110-8f4d-42cb-97cf-a3e446e5d2c8.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '179.000',
        color: 'Black',
    },
    {
        id: 1,
        name: 'SEI SAPI Bundle 500gr DIASAPIN Daging Asap Sapi Plus Sambal Chili Oil',
        href: '#',
        imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2020/10/21/55893110-8f4d-42cb-97cf-a3e446e5d2c8.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '179.000',
        color: 'Black',
    },
    {
        id: 1,
        name: 'SEI SAPI Bundle 500gr DIASAPIN Daging Asap Sapi Plus Sambal Chili Oil',
        href: '#',
        imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2020/10/21/55893110-8f4d-42cb-97cf-a3e446e5d2c8.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '179.000',
        color: 'Black',
    },
    {
        id: 1,
        name: 'SEI SAPI Bundle 500gr DIASAPIN Daging Asap Sapi Plus Sambal Chili Oil',
        href: '#',
        imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2020/10/21/55893110-8f4d-42cb-97cf-a3e446e5d2c8.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '179.000',
        color: 'Black',
    },
    {
        id: 1,
        name: 'SEI SAPI Bundle 500gr DIASAPIN Daging Asap Sapi Plus Sambal Chili Oil',
        href: '#',
        imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2020/10/21/55893110-8f4d-42cb-97cf-a3e446e5d2c8.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '179.000',
        color: 'Black',
    },
    {
        id: 1,
        name: 'SEI SAPI Bundle 500gr DIASAPIN Daging Asap Sapi Plus Sambal Chili Oil',
        href: '#',
        imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2020/10/21/55893110-8f4d-42cb-97cf-a3e446e5d2c8.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '179.000',
        color: 'Black',
    },
];

const category = ["Fashion Wanita", "Fashion Pria", "Anak-Anak", "Travel & Entertaiment", "keuangan", "Rumah Tangga", "Supermarket", "Kosmetik", "Tas Sepatu", "Alat & Aksesoris", "Olahraga & Outdoor", "Elektronik", "Komputer & Laptop"];
const urlIcon = "https://images.tokopedia.net/img/cache/64-square/iEWsxH/2021/4/19/832aaa22-b9bf-42d3-86da-21b77dca4716.png?ect=4g";
export default class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleLogin: false
        };

        this.onToggleLogin = this.onToggleLogin.bind(this);
    }

    onToggleLogin() {
        this.setState({ toggleLogin: !this.state.toggleLogin })
    };

    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>Situs Jual Beli Online Terlengkap, Terpercaya</title>
                </Helmet>

                {this.state.toggleLogin && <Login closeAction={this.onToggleLogin} />}

                <Header
                    onLoginBox={this.onToggleLogin}
                >
                    {/* category section */}
                    <div className="category-section md:w-3/4 w-11/12 flex md:flex md:justify-between gap-5 md:gap-0 md:pb-3 overflow-x-scroll md:overflow-x-hidden">
                        {category.map(data => {
                            return (
                                <div className="card-kategori w-14 flex flex-col justify-between items-center md:w-auto">
                                    <div className="w-14 h-14 p-1 rounded-full md:hidden bg-white">
                                        <img className="object-contain" src={urlIcon}></img>
                                    </div>
                                    <div className="h-1/2 md:h-full flex items-center">
                                        <p className="text-center text-xs md:cursor-pointer md:hover:text-green-500 md:text-gray-500">{data}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {/* akhir category */}
                </Header>

                <div className="max-w-full flex flex-col items-center overflow-hidden">

                    <Carousell />
                    <SpecialProductBanner />
                    <ProductCardScrollHorizontal
                        heading="Laptop & Komputer"
                        data={dataElektronik}
                    />


                    <ProductCardScrollHorizontal
                        heading="Kuliner Khas Bandung"
                        data={dataKuliner}
                    />

                    <ProductCardGrid data={dataKuliner} />
                </div>

                <Footer />

            </Fragment>
        )
    }
};