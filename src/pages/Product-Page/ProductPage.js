import React, { Component, Fragment } from 'react';

//import components
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

export default class ProductPage extends Component {
    render() {
        return (
            <Fragment>
                <Header />

                <div className="w-11/12 md:w-9/12 m-auto">
                    <div className="section-breadcumb md:py-4 md:text-sm md:text-green-500">
                        <p>Beranda &gt; Product</p>
                    </div>

                    {/* main section */}
                    <div className="section-main md:w-full md:flex md:gap-5">
                        {/* product description section */}
                        <div className="section-product-description md:w-4/5 md:flex md:flex-col md:gap-5">
                            <div className="wrapper">

                                {/* product
                                    descripton product
                                    shop creadibility 
                                */}
                                <div className="md:flex md:gap-5">
                                    <div className="section-photo md:w-2/5">
                                        <img className="md:w-full md:h-80 md:bg-green-500" />
                                    </div>
                                    <div className="description-section md:w-3/5 md:flex md:flex-col md:gap-4 md:text-sm md:text-gray-600">
                                        <div>
                                            <h1 className="md:text-lg md:font-bold">Esenses Micelar Water - Moisturizing</h1>
                                            <div className="items md:flex md:gap-1">
                                                <p>Terjual 141</p>
                                                <p>4.7 Ulasan</p>
                                                <p>Diskusi</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="md:text-3xl md:font-bold">Rp.26.000</div>
                                            <div className="md:flex md:gap-1">
                                                <p>15%</p>
                                                <p>Rp.30.000</p>
                                            </div>
                                        </div>
                                        <div className="md:w-full md:flex md:flex-col
                                 md:gap-2">
                                            <div className="md:w-full md:flex md:gap-5 md:py-2 md:border-t md:border-b md:border-gray-200">
                                                <div>Detail</div>
                                                <div>Info Penting</div>
                                            </div>
                                            <div className="md:flex md:flex-col">
                                                <div className="md:flex md:gap-1">
                                                    <p>Kondisi:</p>
                                                    <p>Baru</p>
                                                </div>
                                                <div className="md:flex md:gap-1">
                                                    <p>Berat:</p>
                                                    <p>200Gram</p>
                                                </div>
                                                <div className="md:flex md:gap-1">
                                                    <p>Kategori:</p>
                                                    <p>Michellar Water</p>
                                                </div>
                                                <div className="md:flex md:gap-1">
                                                    <p>Etalase:</p>
                                                    <p>ESSENSE</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p>Esenses Micellar Cleansing Water is a makeup remover and facial cleanser for face, lips and eyes that soothes and refreshes skin in just one step

                                                    mohon tinggalkan catatan untuk shade yang dipesan pada saat pemesanan</p>
                                            </div>
                                        </div>
                                        <div className="section-shop-credibility md:py-3 md:border-t md:border-gray-200">
                                            <div className="md:flex md:justify-between md:items-center md:gap-2">
                                                <div className="shop-avatarbg-black">
                                                    <div className="w-8 h-8 rounded-full bg-black"></div>
                                                </div>
                                                <div className="md:w-11/12">
                                                    <div className="shop-name md:text-lg md:font-bold">One Store</div>
                                                    <div className="md:text-lg md:font-bold md:text-green-500">Online</div>
                                                </div>
                                                <div>
                                                    <button className="md:w-24 md:p-1 md:rounded-md md:border md:border-green-500 md:text-green-500">Follow</button>
                                                </div>
                                            </div>
                                            <div className="md:flex md:gap-2 md:justify-center">
                                                <div>4.7 rata-rata ulasan</div>
                                                <div>1 hari pemesanan diproses</div>
                                            </div>
                                        </div>
                                        <div className="md:flex md:flex-col md:gap-2">
                                            <div className="md:text-lg md:font">Pengiriman</div>
                                            <div className="md:flex md:gap-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                </svg>
                                                <div>Dikirim dari Jakarta Pusat</div>
                                            </div>
                                            <div className="md:flex md:gap-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                                                </svg>
                                                <div>
                                                    <p>Ongkir Reguler</p>
                                                    <p>Estimasi Tiba Esok</p>
                                                    <p>Kurir lainnya</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* akhir
                                    product
                                    descripton product
                                    shop creadibility 
                                */}

                                {/* comment section */}
                                <div className="md:w-full">
                                    <div className="section-total-review">
                                        <h1>Ulasan</h1>
                                    </div>
                                    <div></div>
                                </div>
                                {/* akhir comment section */}
                            </div>
                        </div>
                        {/* akhir product desc section */}

                        {/* float action section */}
                        <div className="float-action-section md:w-1/5 md:flex md:flex-col md:gap-3 md:text-sm">
                            <div className="diskon-section md:w-full md:p-3 md:rounded-md md:text-white md:bg-red-500">
                                <p className="md:font-bold">Diskon Terbatas</p>
                            </div>
                            <div className="md:w-full md:flex md:flex-col md:gap-2 md:p-3 md:rounded-md md:border">
                                <div className="md:font-bold">Atur jumlah dan catatan</div>
                                <div className="md:w-full md:flex md:flex-col md:gap-2 md:text-sm md:text-gray-600">
                                    <div className="md:w-2/4 md:h-8 md:flex md:justify-between md:rounded-md md:border md:border-gray-200 md:overflow-hidden">
                                        <button className="md:w-8 md:h-full md:hover:bg-gray-100">+</button>
                                        <input className="md:w-10 md:text-center md:outline-none" value="1" />
                                        <button className="md:w-8 md:h-full md:hover:bg-gray-100">-</button>
                                    </div>
                                    <div>
                                        <button className="md:font-bold md:text-green-500">Tambah Catatan</button>
                                    </div>
                                    <div>
                                        <div className="slash-price md:text-right md:line-through">18000</div>
                                    </div>
                                    <div className="md:flex md:justify-between md:items-center">
                                        <div>Subtotal</div>
                                        <div className="md:text-lg md:font-bold">Rp0</div>
                                    </div>
                                    <div>
                                        <button className="md:w-full md:py-2 md:rounded-md md:text-white md:bg-green-500">Beli</button>
                                    </div>
                                    <div className="md:flex md:justify-between md:divide-x md:divide-gray-600">
                                        <div className="md:w-full md:text-center">Chat</div>
                                        <div className="md:w-full md:text-center">Wishlist</div>
                                        <div className="md:w-full md:text-center">Share</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* akhir float action section */}
                    </div>
                    {/* akhir main section */}

                </div>


                <Footer />
            </Fragment>
        )
    }
}
