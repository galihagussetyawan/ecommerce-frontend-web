import React, { Component } from "react";

export default class BiodataDiri extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.tab === "biodata-diri" ? "md:flex md:gap-5 md:p-4" : "md:hidden"}>
                <div className="md:w-1/5 md:flex md:flex-col md:gap-3">
                    <div className="md:w-full md:p-3 md:flex md:flex-col md:gap-3 md:border md:border-gray-200">
                        <div className="md:w-full md:h-48 md:bg-green-500"></div>
                        <button className="md:w-full md:p-2 md:rounded-md md:border md:border-gray-200 md:font-bold">Pilih Foto</button>
                        <p className="md:text-gray-400">Besar file: maksimum 10.000.000 bytes (10 Megabytes). Ekstensi file yang diperbolehkan: .JPG .JPEG .PNG</p>
                    </div>
                    <button className="md:w-full md:p-2 md:rounded-md md:border md:border-gray-200 md:font-bold">Buat Kata Sandi</button>
                    <button className="md:w-full md:p-2 md:rounded-md md:border md:border-gray-200 md:font-bold">PIN Tokopedia</button>
                </div>

                <div className="md:w-4/5 md:flex md:flex-col md:gap-6">
                    <div className="md:w-full">
                        <h1 className="md:font-bold md:text-lg">Ubah Biodata Diri</h1>
                    </div>
                    <div className="md:w-full md:flex">
                        <p className="md:w-32">Nama</p>
                        <p>{this.props.username}</p>
                    </div>
                    <div className="md:w-full md:flex">
                        <p className="md:w-32">Tanggal Lahir</p>
                        <p>Galih Developnent</p>
                    </div>
                    <div className="md:w-full md:flex">
                        <p className="md:w-32">Jenis Kelamin</p>
                        <p>Galih Developnent</p>
                    </div>
                    <div className="md:w-full">
                        <h1 className="md:font-bold md:text-lg">Ubah Kontak</h1>
                    </div>
                    <div className="md:w-full md:flex">
                        <p className="md:w-32">Email</p>
                        <p>setywan.galih@gmail.com</p>
                    </div>
                    <div className="md:w-full md:flex">
                        <p className="md:w-32">Nomor Hp</p>
                        <p>Galih Developnent</p>
                    </div>
                </div>
            </div>
        );
    }
}