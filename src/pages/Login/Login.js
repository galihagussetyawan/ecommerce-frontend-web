import React, { Component } from 'react';

export default class Login extends Component {
    render() {
        return (
            <div className=" w-screen h-screen flex justify-center items-center">
                <div className="w-full h-full md:w-2/5 md:h-4/5 p-6 flex flex-col justify-center items-center">
                    <div className="section md:w-10/12 md:h-4/5 absolute">
                        <img className="md:w-full md:h-full object-contain" src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/45ab29df.png" />
                    </div>

                    {/* card */}
                    <div className="card w-full h-full md:z-20 md:w-3/5 md:h-full flex flex-col gap-8 text-gray-500 md:rounded-md md:border md:border-gray-300 md:p-6 md:bg-white">
                        <div className="section">
                            <h1 className="text-3xl font-medium text-center text-green-500">Trendyol</h1>
                        </div>
                        <div className="section flex justify-between items-center">
                            <p className="font-semibold">Masuk</p>
                            <p className="text-xs text-green-500">Daftar</p>
                        </div>
                        <div className="section flex flex-col gap-1">
                            <p className="text-xs font-bold text-gray-600">Nomor Hp atau Email</p>
                            <input className="w-full p-2 outline-none rounded-md border border-gray-300 focus:border-green-500 " />
                            <p className="text-xs text-right">Contoh: email@trendyol.com</p>
                            <p className="text-xs font-bold text-gray-600">Password</p>
                            <input className="w-full p-2 outline-none rounded-md border border-gray-300 focus:border-green-500 " />
                        </div>
                        <div className="section flex flex-col  gap-1">
                            <p className="text-xs text-green-500 text-right">Lupa kata sandi?</p>
                            <button className="w-full rounded-md p-2 font-bold bg-gray-200">Selanjutnya</button>
                        </div>
                        <div className="section">
                            <p className="text-xs text-center">atau masuk dengan</p>
                        </div>
                        <div className="section flex flex-col gap-3">
                            <button className="w-full p-2 rounded-md border border-gray-300">Google</button>
                            <button className="w-full p-2 rounded-md border border-gray-300">Scan Kode QR</button>
                        </div>
                        <div className="section flex gap-1 justify-center">
                            <p className="text-xs">Butuh bantuan ?</p>
                            <p className="text-xs text-green-500">Hubungi Trendyol Center</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
