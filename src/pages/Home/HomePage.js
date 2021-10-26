import React, { Fragment, useEffect, useState } from 'react';
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

export default function HomePage(props) {
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

    const [isLogin, setIsLogin] = useState(false);

    const handleToggleLogin = () => {
        setIsLogin(!isLogin)
    };

    useEffect(() => {
        AuthenticationService.getCurrentUser()
            .then(response => console.log(response))
    }, [])

    return (
        <Fragment>
            <Helmet>
                <title>Situs Jual Beli Online Terlengkap, Terpercaya</title>
            </Helmet>

            {isLogin && <Login closeAction={handleToggleLogin} />}

            <Header
                clickLogin={handleToggleLogin}
            />

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