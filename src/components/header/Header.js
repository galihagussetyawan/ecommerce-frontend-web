import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// import services
import AuthenticationService from '../../services/AuthenticationService';

// import context
import AuthContext from '../contexts/AuthContext';


const category = ["Fashion Wanita", "Fashion Pria", "Anak-Anak", "Travel & Entertaiment", "keuangan", "Rumah Tangga", "Supermarket", "Kosmetik", "Tas Sepatu", "Alat & Aksesoris", "Olahraga & Outdoor", "Elektronik", "Komputer & Laptop"];
const urlIcon = "https://images.tokopedia.net/img/cache/64-square/iEWsxH/2021/4/19/832aaa22-b9bf-42d3-86da-21b77dca4716.png?ect=4g";

export default class Header extends Component {
    static contextType = AuthContext;

    render() {
        const { username, isAuthenticated } = this.context;

        return (
            <div className="max-w-full h-auto flex flex-col items-center">
                <div className="hidden md:top-0 w-full h-12 md:flex bg-green-500"></div>

                <div className="flex w-full h-14 p-4 md:w-3/4 md:h-20 bg-green-500 md:bg-white">
                    <div className="flex w-full gap-9 flex-row w-28 items-center justify-between">
                        <div className="logo hidden lg:block">trendyol</div>

                        {/* search components */}
                        <div className="shadow flex w-full rounded overflow-hidden justify-center items-center md:w-2/4">
                            <input className="w-full h-9 p-2 text-sm bg-gray-100" type="text" placeholder="Cari produk..." />
                            <button className="bg-gray-100 w-auto h-9 flex justify-end items-center text-gray-300 p-2 hover:text-green-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>

                        {/* right section */}
                        {isAuthenticated ?
                            <div className="flex gap-2 text-white md:text-gray-700">

                                <div className="flex justify-center items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    <p className="text-sm hidden md:block">Gabung</p>
                                </div>

                                <div className="flex justify-center items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                    <p className="text-sm hidden md:block">Favorit</p>
                                </div>

                                <div className="flex justify-center items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <p className="text-sm hidden md:block">My Cart</p>
                                </div>
                            </div>

                            :

                            <div className="flex md:gap-3">
                                <button className="md:w-20 md:h-9 rounded-md bg-white border border-green-500 text-green-500" onClick={this.props.clickLogin}>Masuk</button>
                                <NavLink to="/register">
                                    <button className="hidden md:block md:w-20 md:h-9 rounded-md bg-green-500 text-white">Daftar</button>
                                </NavLink>
                            </div>
                        }
                        {/* akhir right section */}

                    </div>
                </div>


                {/* navigasi kategori */}
                <div className="wrapper-navigasi-kategori w-11/12 p-2 flex justify-between gap-5 overflow-x-scroll md:gap-0 md:w-3/4">
                    {category.map(data => {
                        return (
                            <div className="card-kategori w-14 flex flex-col justify-between md:w-auto">
                                <div className="w-14 h-14 p-1 rounded-full md:hidden bg-white">
                                    <img className="object-contain" src={urlIcon}></img>
                                </div>
                                <p className="text-center text-xs md:cursor-pointer md:hover:text-green-500">{data}</p>
                            </div>
                        );
                    })}

                </div>
            </div>
        )
    }
}