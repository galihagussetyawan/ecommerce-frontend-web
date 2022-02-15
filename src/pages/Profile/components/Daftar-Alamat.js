import React, { Component } from "react";

export default class DaftarAlamat extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.tab === "daftar-alamat" ? "md:flex md:gap-5 md:p-4" : "md:hidden"}>
                <div className="md:w-full md:flex border-gray-200 md:justify-between">
                    <div className="md:w-56 md:flex border rounded-md focus-within:border-green-500 overflow-hidden">
                        <input className="w-full md:p-2 outline-none" />
                        <button className="md:p-2 text-gray-400 md:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                    <button className="px-5 rounded-md text-white bg-green-500" onClick={this.props.addAddressNewButton}>Tambahkan Alamat Baru</button>
                </div>
            </div>
        );
    }
}