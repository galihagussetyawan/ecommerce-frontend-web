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
                            <img className=" h-3/5" src="https://ecs7.tokopedia.net/img/content/register_new.png" />
                        </div>
                        <div className="right-main md:w-1/2 md:h-full">
                            <div className="card flex justify-center items-center md:w-4/5 md:h-full bg-gray-300">
                                <div className="wrapper md:w-11/12 md:h-5/6">
                                    <h1>Daftar Sekarang</h1>
                                    <p>Sudah punya akun Trendyol?</p>
                                    <button>Goggle</button>
                                    <p>atau daftar dengan</p>

                                    <div className="section">
                                        <p>Phone Number or Email</p>
                                        <input placeholder="masukan" />
                                    </div>
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
