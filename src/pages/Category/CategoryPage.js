import React, { Component, Fragment } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

//import component
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

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


export default class CategoryPage extends Component {
    render() {
        return (
            <Fragment>
                <Header />

                <div className="container w-11/12 md:w-9/12 flex flex-col gap-2 md:gap-4 m-auto my-4">

                    {/* breadcumb */}
                    <div className="section-breadcumb w-full p-0 md:p-4 md:rounded-md md:shadow-md text-xs md:text-sm text-green-500">
                        <p>Beranda {'>'} Category</p>
                    </div>
                    {/* akhir breadcumb */}

                    <div className="section-main w-full h-auto md:flex md:gap-5">
                        {/* section filter */}
                        <div className="section-filter w-screen h-screen md:w-1/5 md:h-auto hidden md:static md:flex md:flex-col md:gap-5 md:border md:border-gray-200 md:text-sm md:text-gray-600 overflow-hidden md:overflow-hidden bg-white">
                            <h1 className="md:w-full hidden md:flex md:items-center md:p-3 md:font-bold md:text-gray-800 md:bg-gray-100">Filter</h1>

                            <div className="md:w-full md:flex md:flex-col md:gap-2 md:px-3">
                                <h3 className="md:font-semibold">Handphone & Tablet</h3>
                                <ul className="md:flex md:flex-col md:gap-1">
                                    <li>Aksesoris Handphone</li>
                                    <li>Aksesoris Tablet</li>
                                    <li>Komponen Handphone</li>
                                    <li>Komponen Tablet</li>
                                    <li>Nomor Perdana & Voucher</li>
                                    <li>Powerbank</li>
                                    <li>Tablet</li>
                                    <li>Wearable Devices</li>
                                </ul>
                            </div>

                            <div className="md:w-full hidden md:flex md:flex-col md:gap-2 md:px-3">
                                <h3 className="md:font-semibold">Cari di kategori ini</h3>
                                <div className="md:w-full md:h-9 md:flex md:rounded-md md:border overflow-hidden">
                                    <input className="w-full md:px-3 md:outline-none" />
                                    <button className="md:w-9 md:flex md:justify-center md:items-center md:bg-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="md:h-full hidden md:flex md:flex-col md:gap-2 md:px-3">
                                <h3 className="md:font-semibold">Lokasi</h3>
                                <label className="md:flex md:items-center md:gap-2">
                                    <input type="checkbox" />
                                    <p>DKI Jakarta</p>
                                </label>
                                <label className="md:flex md:items-center md:gap-2">
                                    <input type="checkbox" />
                                    <p>Jabodetabek</p>
                                </label>
                                <label className="md:flex md:items-center md:gap-2">
                                    <input type="checkbox" />
                                    <p>Bandung</p>
                                </label>
                                <label className="md:flex md:items-center md:gap-2">
                                    <input type="checkbox" />
                                    <p>Medan</p>
                                </label>
                                <label className="md:flex md:items-center md:gap-2">
                                    <input type="checkbox" />
                                    <p>Surabaya</p>
                                </label>
                            </div>

                            <div className="md:h-full hidden md:flex md:flex-col md:gap-2 md:px-3">
                                <h3 className="md:font-semibold">Pengiriman</h3>
                                <label className="md:flex md:items-center md:gap-2">
                                    <input type="checkbox" />
                                    <p>Kurir Instant</p>
                                </label>
                                <label className="md:flex md:items-center md:gap-2">
                                    <input type="checkbox" />
                                    <p>SiCepat</p>
                                </label>
                                <label className="md:flex md:items-center md:gap-2">
                                    <input type="checkbox" />
                                    <p>Anteraja</p>
                                </label>
                                <label className="md:flex md:items-center md:gap-2">
                                    <input type="checkbox" />
                                    <p>GoSend</p>
                                </label>
                                <label className="md:flex md:items-center md:gap-2">
                                    <input type="checkbox" />
                                    <p>GrabExpress</p>
                                </label>
                            </div>

                            <div className="md:h-full hidden md:flex md:flex-col md:gap-2 md:px-3">
                                <h3 className="md:font-semibold">Penawaran</h3>
                                <label className="md:flex md:items-center md:gap-2">
                                    <input type="checkbox" />
                                    <p>Cashback</p>
                                </label>
                                <label className="md:flex md:items-center md:gap-2">
                                    <input type="checkbox" />
                                    <p>Gratis Ongkir</p>
                                </label>
                                <label className="md:flex md:items-center md:gap-2">
                                    <input type="checkbox" />
                                    <p>COD</p>
                                </label>
                                <label className="md:flex md:items-center md:gap-2">
                                    <input type="checkbox" />
                                    <p>Diskon</p>
                                </label>
                                <label className="md:flex md:items-center md:gap-2">
                                    <input type="checkbox" />
                                    <p>Harga Grosir</p>
                                </label>
                            </div>

                        </div>
                        {/* akhir section filter */}

                        {/* section product */}
                        <div className="section-product md:w-4/5 flex flex-col gap-3 text-xs md:text-sm text-gray-600">
                            <div className="section-carousell md:w-full md:h-16 bg-gray-100"></div>
                            <div className="flex md:justify-between">
                                <p>Menampilkan 1484777 produk untuk "Handphone" (1 - 60 of 1484777)</p>
                                <div className="flex gap-2">
                                    <p>Urutan:</p>
                                    <select className="md:bg-white md:border">
                                        <option value="Paling Sesuai">Paling Sesuai</option>
                                        <option value="Ulasan">Ulasan</option>
                                        <option value="Terbaru">Terbaru</option>
                                        <option value="Harga Tertinggi">Harga Tertinggi</option>
                                        <option value="Harga Terandah">Harga Terendah</option>
                                    </select>
                                </div>
                            </div>

                            <InfiniteScroll
                                className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3"
                                dataLength={dataElektronik.length}
                            >
                                {dataElektronik.map(data => {
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

                            </InfiniteScroll>

                        </div>
                        {/* akhir section product */}

                    </div>

                </div>


                <Footer />

            </Fragment>
        )
    }
}
