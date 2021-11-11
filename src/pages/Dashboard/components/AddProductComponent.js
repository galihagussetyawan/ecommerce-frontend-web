import React, { Component } from 'react';

export default class AddProductComponent extends Component {
    render() {
        return (
            <div className="md:w-full md:h-full md:flex md:flex-col md:gap-8 md:p-8 md:text-sm md:text-gray-600 md:bg-gray-100">
                <h1 className="md:text-2xl md:font-bold">Tambah Produk</h1>

                <div className="section md:w-full md:h-full md:flex md:flex-col md:gap-2 md:p-6 md:rounded-md md:bg-white">
                    <h1 className="md:font-bold md:text-lg">Upload Produk</h1>
                    <p>Format gambar jpg jpeg png dan ukuran minumum 300px x 300px(Untuk gambar optimal minimun 700px x 700px)</p>
                    <div className="md:flex md:flex-col md:gap-14">
                        <p>Pilih foto produk atau tarik dan letakkan sehingga 5 foto sekaligus</p>
                        <div className="md:w-4/5 md:h-52 md:flex md:gap-2 md:m-auto">
                            <div className="md:w-1/4 md:h-full md:rounded-md md:border md:border-gray-200 md:bg-gray-100"></div>
                            <div className="md:w-1/4 md:h-full md:rounded-md md:border md:border-gray-200 md:bg-gray-100"></div>
                            <div className="md:w-1/4 md:h-full md:rounded-md md:border md:border-gray-200 md:bg-gray-100"></div>
                            <div className="md:w-1/4 md:h-full md:rounded-md md:border md:border-gray-200 md:bg-gray-100"></div>
                            <div className="md:w-1/4 md:h-full md:rounded-md md:border md:border-gray-200 md:bg-gray-100"></div>
                            <div className="md:w-1/4 md:h-full md:rounded-md md:border md:border-gray-200 md:bg-gray-100"></div>
                        </div>
                        <button className="md:w-44 md:h-11 md:border md:border-green-500 md:m-auto md:rounded-md md:text-green-500">Pilih Gambar Produk</button>
                    </div>
                </div>
                <div className="section md:w-full md:h-full md:flex md:flex-col md:gap-2 md:p-6 md:rounded-md md:bg-white">
                    <h1 className="md:font-bold md:text-lg">Information Produk</h1>
                    <div className="md:flex md:justify-center md:items-center md:gap-20">
                        <div className="md:w-1/5">
                            <div className="md:font-bold">Nama Produk</div>
                            <p>Nama min 5 kata terdiri dari jenis produk, merk, dan keterangan seperti warna, bahan atau tipe.</p>
                        </div>
                        <div className="md:w-4/5">
                            <input className="md:w-full md:p-2 md:outline-none md:rounded-md md:border md:border-gray-500" />
                            <p className="md:text-right">0/70</p>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
};