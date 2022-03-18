import React, { Component, Fragment } from "react";

//import component
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

// import services
import StoreService from "../../services/StoreService";
import AuthenticationService from "../../services/AuthenticationService";

export default class CreateStorePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            username: ""
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleCreateStore = this.handleCreateStore.bind(this);
    }

    handleChangeName(event) {
        this.setState({
            name: event.target.value
        })
    }

    handleChangeUsername(event) {
        this.setState({
            username: event.target.value
        })
    }

    handleCreateStore(event) {

        event.preventDefault();

        let name = this.state.name;
        let username = this.state.username;

        if (name !== "" && username !== "") {

            StoreService.createStore(name, username)
                .then(response => {

                    if (response.status === 201) {

                        AuthenticationService.refreshToken();
                        this.props.history.push("/dashboard");
                    }

                })
                .catch(error => error);
        } else {
            console.log("nama dan username tidak boleh kosong");
        }
    }

    render() {
        return (
            <Fragment>
                <Header />

                <div className=" md:w-3/4 md:h-screen md:flex items-center md:px-20 md:m-auto">
                    {/* left section */}
                    <div className="md:w-1/2">
                        <div className="flex items-center gap-4">
                            <div className="md:w-20 md:h-20 rounded-full">
                                <img src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/599eaa96.png" className=" content-center" />
                            </div>
                            <div className=" text-gray-700">Buka toko gratis tanpa biaya apa pun.</div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="md:w-20 md:h-20 rounded-full">
                                <img src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/3494fd8d.png" className=" content-center" />
                            </div>
                            <div className=" text-gray-700">Lebih dari 90 juta pengguna aktif setiap bulan.</div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="md:w-20 md:h-20 rounded-full">
                                <img src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/ecc14756.png" className=" content-center" />
                            </div>
                            <div className=" text-gray-700">Menjangkau pembeli potensial di 97% wilayah Indonesia.</div>
                        </div>

                    </div>
                    {/* end left section */}

                    {/* right section */}
                    <div className="md:w-1/2 md:h-auto flex flex-col gap-5 md:rounded-2xl md:p-10 md:border md:border-gray-300">
                        <div>
                            <h3>Halo, Galih Development ayo isi detail tokomu!</h3>
                        </div>

                        {/* input phone number section */}
                        <div className="flex flex-col gap-2">
                            <h4 className=" font-semibold">Masukkan No. HP-mu</h4>
                            <div className="md:w-full">
                                <span className="md:text-xs font-semibold text-gray-500">Nomor Hp</span>
                                <div className="md:w-full flex rounded-md border border-gray-300 overflow-hidden">
                                    <span className="p-2 text-gray-500 bg-gray-200">+62</span>
                                    <input className="md:w-full p-2 outline-none" />
                                </div>
                                <span className="md:text-xs text-gray-500">Pastikan nomor kamu aktif agar proses pendaftaran lebih cepat</span>
                            </div>
                            {/* <div>
                                <button className="p-1 px-5 rounded-md font-semibold text-gray-500 bg-gray-200">lanjut</button>
                            </div> */}
                        </div>
                        {/* end input number section */}

                        {/* store name and domain section  */}
                        <div className="flex flex-col gap-2">
                            <h4 className=" font-semibold">Masukan Nama Toko dan Domain</h4>
                            <div className="md:w-full">
                                <span className="md:text-xs font-semibold text-gray-500">Nama Toko</span>
                                <input className="md:w-full md:p-2 outline-none rounded-md border border-gray-300" onChange={this.handleChangeName} />
                                <span className="md:text-xs text-gray-500">Contoh: Trendyol Store</span>
                            </div>
                            <div className="md:w-full">
                                <span className="md:text-xs font-semibold text-gray-500">Domain Toko</span>
                                <input className="md:w-full md:p-2 outline-none rounded-md border border-gray-300" onChange={this.handleChangeUsername} />
                                <span className="md:text-xs text-gray-500">Contoh: trendyolstore</span>
                            </div>
                            {/* <div>
                                <button className="p-1 px-5 rounded-md font-semibold text-gray-500 bg-gray-200">lanjut</button>
                            </div> */}
                        </div>
                        {/* end store name and domain section */}

                        {/* store address section */}
                        {/* <div>
                            <h4 className=" font-semibold">Masukkan Alamat Tokomu</h4>
                            <div className="md:w-full">
                                <span className="md:text-xs font-semibold text-gray-500">Nama Toko</span>
                                <input className="md:w-full md:p-2 outline-none rounded-md border border-gray-300" />
                                <span className="md:text-xs text-gray-500">Contoh: Trendyol Store</span>
                            </div>
                        </div> */}
                        {/* end store address section */}

                        <div className="flex justify-end">
                            <button className="md:p-2 md:px-5 rounded-md text-white bg-green-500" onClick={this.handleCreateStore}>Buat Toko</button>
                        </div>

                    </div>
                    {/* and right section */}

                </div>

                <Footer />
            </Fragment>
        );
    }
}