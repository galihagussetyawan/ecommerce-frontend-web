import React from 'react'

export default function Footer() {
    return (
        <div className="w-screen h-auto flex justify-center mt-5 border-t md:mt-12 md:mb-10 md:border-t border-gray-300">

            {/* mobile footer */}
            <div className="w-11/12 h-32 mt-3 flex flex-col gap-3 md:hidden text-xs text-gray-600">
                <div className="w-full flex gap-1">
                    <p>Trendyol Care |</p>
                    <p>Syarat dan Ketentuan |</p>
                    <p>Kebijakan Privasi</p>
                </div>

                <div className="flex flex-col gap-1">
                    <p className="font-bold text-gray-800">Gunakan Aplikasi Trendyol</p>
                    <div className="flex gap-2">
                        <div className="w-32 h-9 bg-black"></div>
                        <img className="w-32 h-9 bg-black"></img>
                    </div>
                </div>



            </div>


            {/* dekstop footer */}
            <div className="w-9/12 md:h-80 hidden md:flex justify-center items-center text-sm text-gray-600">
                <div className="section grid grid-cols-3 w-1/2">
                    <div className="flex flex-col gap-2">
                        <p className="font-bold mb-2 text-gray-900">Trendyol</p>
                        <p>Tentang Trendyol</p>
                        <p>Hak Kekayaan Intelektual</p>
                        <p>Karir</p>
                        <p>Blog</p>
                        <p>Bridestroy</p>
                        <p>Trendyol Parents</p>
                        <p>Mitra Blog</p>
                        <p>TokoPoints</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-bold mb-2 text-gray-900">Beli</p>
                        <p>Tagihan & Top Up</p>
                        <p>Tukar Tambah Handphone</p>
                        <p>Trendyol COD</p>

                        <p className="font-bold mt-3 text-gray-900">Jual</p>
                        <p>Pusat Edukasi Seller</p>
                        <p>Mitra Trendyol</p>
                        <p>Daftar Official Store</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-bold mb-2 text-gray-900">Bantuan dan Panduan</p>
                        <p>Trendyol Care</p>
                        <p>Syarat dan Ketentuan</p>
                        <p>Kebijakan Privasi</p>
                    </div>
                </div>



                <div className="section w-1/2 flex justify-end">
                    <div className=" w-10/12 h-5/6 flex justify-end">
                        <img alt='footer image' className='md:w-full md:h-full' src="https://ecs7.tokopedia.net/assets-unify/img/il-footer-2.jpg"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}