import React, { Fragment, useState, useContext, useEffect, Suspense } from 'react';
import { Helmet } from 'react-helmet';

//import components
import Carousell from '../../components/carousell/Carousell';
import SpecialProductBanner from '../../components/special-product/Special-Pruduct-Banner';
import ProductCardScrollHorizontal from '../../components/product-card-scroll-horizontal/Product-Card-Scroll-Horizontal';
import ProductCardGrid from '../../components/product-card-grid/Product-Card-Grid';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Login from '../../components/login/Login';
import AlertNotification from '../../components/alert-notification/AlertNotification';

//import context
import ProductContext from '../../context/ProductContext';

//import shimmer effect components
import CarousellShimmer from '../../components/shimmer-effect/Carousell-Shimmer';

//import animation load
import HomePageLoading from './HomePageLoading';

//lazy component
// const Carousell = React.lazy(() => import('../../components/carousell/Carousell'));

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
export default function HomePage() {

    const { products, loadedProucts } = useContext(ProductContext);

    const [toggleLogin, setToggleLogin] = useState(false);

    const onToggleLogin = () => {
        setToggleLogin(!toggleLogin);
    };

    // const handleToggleNotification = () => {
    //     setNotification(false);
    // };


    return (
        <Fragment>

            {/* header, dialog, notif */}
            <Helmet>
                <title>Situs Jual Beli Online Terlengkap, Terpercaya</title>
            </Helmet>

            {/* {
                notification.isOpen &&
                <AlertNotification
                    onClose={handleToggleNotification}
                    status={notification.status}
                    message={notification.message}
                />
            } */}

            {toggleLogin && <Login closeAction={onToggleLogin} />}
            {/* end heade */}


            <div className='md:space-y-5 space-y-3'>

                <Header
                    onLoginBox={onToggleLogin}
                >
                    {/* category section */}
                    <div className="category-section md:w-3/4 w-11/12 flex md:flex md:justify-between gap-5 md:gap-0 md:pb-3 overflow-x-scroll md:overflow-x-hidden">
                        {category.map((data, index) => {
                            return (
                                <div key={index} className="card-kategori w-14 flex flex-col justify-between items-center md:w-auto">
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

                <div className="max-w-full flex flex-col items-center space-y-5 overflow-hidden">

                    {/* <Suspense fallback={<CarousellShimmer />}> */}
                    <Carousell />
                    {/* </Suspense> */}

                    {
                        loadedProucts
                            ? <Fragment>
                                <SpecialProductBanner />

                                <ProductCardScrollHorizontal
                                    heading="Laptop & Komputer"
                                    data={products}
                                />


                                <ProductCardScrollHorizontal
                                    heading="Kuliner Khas Bandung"
                                    data={products}
                                />
                                <div className="w-screen mb-3 mt-3 border-4 border-gray-200"></div>
                                <ProductCardGrid data={dataKuliner} />
                            </Fragment>

                            : <HomePageLoading />
                    }

                </div>

                <Footer />

            </div>
        </Fragment >
    )
};