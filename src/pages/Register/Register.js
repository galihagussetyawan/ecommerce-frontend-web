import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

export default class Register extends Component {
    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>Daftar | Trendyol</title>
                </Helmet>

                <div className="w-screen h-screen flex justify-center items-center">
                    <div className="wrapper w-full h-full md:w-3/5 md:h-5/6">
                        <div className="header w-full flex md:block md:w-full md:h-1/5 text-center text-2xl">
                            <h1 className="hidden md:block font-bold text-4xl text-green-500">Trendyol</h1>

                            <div className="w-full md:hidden flex justify-between items-center mt-5 px-8">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                <NavLink to="/login">
                                    <p className="text-xs text-green-500">Masuk</p>
                                </NavLink>
                            </div>
                        </div>

                        <div className="main flex md:w-full md:h-4/6">
                            {/* left section/image */}
                            <div className="left-main hidden md:flex md:items-center md:w-1/2 md:h-full">
                                <img className="md:w-3/4" src="https://ecs7.tokopedia.net/img/content/register_new.png" />
                            </div>

                            {/* right section */}
                            <div className="right-main w-full h-full md:w-1/2 md:h-full">
                                <div className="card flex justify-center items-center md:w-4/5 md:h-full md:border md:border-gray-200 md:shadow">
                                    <div className="wrapper w-full h-full p-8 md:w-4/5 md:h-5/6 flex flex-col justify-center gap-5 text-sm text-gray-500">

                                        <div className="section flex flex-col gap-1">
                                            <h className="text-lg font-bold text-center text-gray-700">Daftar Sekarang</h>
                                            <p className="text-xs text-center">Sudah punya akun Trendyol?</p>
                                        </div>
                                        <button className="md:w-full p-2 rounded-md bg-gray-200">Google</button>
                                        <p className="text-xs text-center">atau daftar dengan</p>

                                        <div className="section flex flex-col gap-1">
                                            <p className="text-gray-500 font-bold">Phone Number or Email</p>
                                            <input className="md:w-full p-2 rounded-md border outline-none focus:border-green-500 border-gray-300" />
                                            <p className="text-xs text-gray-400">Example: email@trendyol.com</p>
                                            <p className="text-gray-500 font-bold">Phone Number or Email</p>
                                            <input className="md:w-full p-2 rounded-md border outline-none focus:border-green-500 border-gray-300" />
                                        </div>
                                        <button className="md:w-full p-2 rounded-md bg-gray-200">Daftar</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="footer flex items-end justify-center md:w-full md:h-1/5 text-xs">
                            <p>PT.Trendyol | Trendyol</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
