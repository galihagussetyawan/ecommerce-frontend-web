import React from 'react';
import { Helmet } from 'react-helmet';
import { Fragment } from 'react/cjs/react.production.min';

export default function Register() {
    return (
        <Fragment>
            <Helmet>
                <title>Daftar | Trendyol</title>
            </Helmet>

            <div className="w-screen h-screen flex justify-center items-center">
                <div className="wrapper md:w-3/5 md:h-5/6">
                    <div className="header md:w-full md:h-1/5 text-center text-2xl">
                        <h1>Trendyol</h1>
                    </div>

                    <div className="main flex md:w-full md:h-3/5">
                        <div className="left-main flex items-center md:w-1/2 md:h-full">
                            <img className="md:w-3/4" src="https://ecs7.tokopedia.net/img/content/register_new.png" />
                        </div>
                        <div className="right-main md:w-1/2 md:h-full">
                            <div className="card flex justify-center items-center md:w-4/5 md:h-full md:border md:border-gray-200 md:shadow">
                                <div className="wrapper md:w-4/5 md:h-5/6 flex flex-col justify-center gap-6 text-sm text-gray-500">

                                    <div className="section flex flex-col gap-1">
                                        <h className="text-lg font-bold text-center text-gray-700">Daftar Sekarang</h>
                                        <p className="text-xs text-center">Sudah punya akun Trendyol?</p>
                                    </div>
                                    <button className="md:w-full p-2 rounded-md bg-gray-200">Google</button>
                                    <p className="text-xs text-center">atau daftar dengan</p>

                                    <div className="section flex flex-col gap-1">
                                        <p>Phone Number or Email</p>
                                        <input className="md:w-full p-2 rounded-md border outline-none focus:border-green-500 border-gray-300" />
                                        <p className="text-xs">Example: email@trendyol.com</p>
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
