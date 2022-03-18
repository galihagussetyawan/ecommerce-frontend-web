import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';

//...import component
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import DialogModalComponent from '../../components/dialog-modal/Dialog-Modal-Component';
import BiodataDiri from './components/Biodata-Diri';
import DaftarAlamat from './components/Daftar-Alamat';
import FormAddress from './components/Form-Address';

//import context
import AuthContext from '../../context/AuthContext';
import UserContext from '../../context/UserContext';

export default class ProfilePage extends Component {
    static contextType = UserContext;

    constructor(props) {
        super(props);

        this.state = {
            tab: "biodata-diri",
            closeToggle: false,
            authContext: AuthContext
        }

        this.handleChangeTab = this.handleChangeTab.bind(this);
        this.handleCloseToggleButton = this.handleCloseToggleButton.bind(this);
    }

    //event listener
    handleChangeTab(event) {
        event.preventDefault();

        this.setState({
            tab: event.currentTarget.id
        })
    }

    handleTitleBar() {
        switch (this.state.tab) {
            case "biodata-diri":
                return "Biodata Diri | Trendyol";

            case "daftar-alamat":
                return "Daftar Alamat | Trendyol";
        }
    }

    handleCloseToggleButton() {
        this.setState({
            closeToggle: !this.state.closeToggle
        })
    }

    render() {
        const { username, contact } = this.context;

        return (
            <Fragment>
                <Helmet>
                    <title>{this.handleTitleBar()}</title>
                </Helmet>

                {this.state.closeToggle &&
                    <DialogModalComponent
                        closeAction={this.handleCloseToggleButton}>
                        <FormAddress
                            submitForm={this.handleCloseToggleButton}
                        />
                    </DialogModalComponent>
                }

                <Header />



                <div className="md:w-3/4 md:flex md:gap-5 md:m-auto md:py-4">

                    {/* left section */}
                    <div className="md:w-1/5 md:text-gray-600 md:text-sm">
                        {/* ...profile */}
                        <div className="md:w-full md:flex md:items-center md:gap-2 md:p-3 md:rounded-md md:border md:border-gray-200">
                            <div>
                                <div className="md:w-12 md:h-12 md:rounded-full md:bg-black"></div>
                            </div>
                            <div className="md:flex md:flex-col md:gap-1">
                                <p>{username}</p>
                                <button className="md:px-4 md:py-1 md:rounded-2xl md:text-white md:bg-green-500">Sambungkan ke Gojek</button>
                            </div>
                        </div>

                        <div className="md:w-full md:flex md:flex-col md:gap-5 md:p-3 md:border md:border-gray-200">
                            <div className="md:w-full md:flex md:justify-between">
                                <p>GoPay</p>
                                <p className="md:text-green-500">Aktifkan</p>
                            </div>
                            <div className="md:w-full md:flex md:justify-between">
                                <p>GoPayLater</p>
                                <p className="md:text-green-500">Aktifkan</p>
                            </div>
                            <div className="md:w-full md:flex md:justify-between">
                                <p>Saldo</p>
                                <p>Rp0</p>
                            </div>
                            <div className="md:w-full md:flex md:justify-between">
                                <p>OVO Cash</p>
                                <p className="md:text-green-500">Aktifkan</p>
                            </div>
                        </div>

                        <div className="md:w-full md:flex md:flex-col md:gap-5 md:p-3 md:border md:border-gray-200">
                            <div className="md:w-full">
                                <p className="md:font-bold">Kotak Masuk</p>
                            </div>
                            <ul className="md:w-full md:flex md:flex-col md:gap-5">
                                <li>Chat</li>
                                <li>Ulasan</li>
                                <li>Pesan Bantuan</li>
                                <li>Pesanan Dikomplain</li>
                                <li>Update</li>
                            </ul>
                        </div>

                        <div className="md:w-full md:flex md:flex-col md:gap-5 md:p-3 md:border md:border-gray-200">
                            <div className="md:w-full">
                                <p className="md:font-bold">Pembelian</p>
                            </div>
                            <ul className="md:w-full md:flex md:flex-col md:gap-5">
                                <li>Menunggu Pembayaran</li>
                                <li>Daftar Transaksi</li>
                            </ul>
                        </div>

                        <div className="md:w-full md:flex md:flex-col md:gap-5 md:p-3 md:border md:border-gray-200">
                            <div className="md:w-full">
                                <p className="md:font-bold">Pengaturan</p>
                            </div>
                            <ul className="md:w-full md:flex md:flex-col md:gap-5">
                                <li>Wishlist</li>
                                <li>Toko Favorit</li>
                                <li>Pengaturan</li>
                            </ul>
                        </div>

                    </div>
                    {/* akhir left section */}

                    {/* right section */}
                    <div className="md:w-4/5 md:h-48 md:flex md:flex-col md:gap-5 md:text-gray-500 md:text-sm">
                        <div className="md:flex md:gap-1 md:items-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>
                            <p>{username}</p>
                        </div>

                        <div className="md:w-full md:rounded-md md:border md:border-gray-200">
                            {/* ...tab options */}
                            <div className="md:flex md:font-bold md:text-gray-400">
                                <div id="biodata-diri" className={this.state.tab === "biodata-diri" ? "md:p-3 md:cursor-pointer md:border-b-4 md:border-green-500 md:text-green-500 transition-all" : "md:p-3 md:cursor-pointer md:border-0 md:hover:text-gray-600 transition-all"} onClick={this.handleChangeTab}>Biodata Diri</div>
                                <div id="daftar-alamat" className={this.state.tab === "daftar-alamat" ? "md:p-3 md:cursor-pointer md:border-b-4 md:border-green-500 md:text-green-500" : "md:p-3 md:cursor-pointer md:border-0"} onClick={this.handleChangeTab}>Daftar Alamat</div>
                                <div id="pembayaran" className="md:p-3 md:cursor-pointer" onClick={this.handleChangeTab}>Pembayaran</div>
                                <div id="rekening-bank" className="md:p-3 md:cursor-pointer" onClick={this.handleChangeTab}>Rekening Bank</div>
                                <div className="md:p-3">Notifikasi</div>
                                <div className="md:p-3">Keamanan</div>
                            </div>

                            {/* TAB COMPONENTS */}
                            <BiodataDiri
                                tab={this.state.tab}
                                username={username}
                                birthDate={contact.birth}
                                email={contact.email}
                                phone={contact.phone}
                                address={contact.address1}
                                city={contact.city}
                                state={contact.state}
                            />

                            <DaftarAlamat
                                tab={this.state.tab}
                                addAddressNewButton={this.handleCloseToggleButton}
                            />
                            {/* END TAB COMPONENTS */}

                        </div>


                    </div>
                    {/* akhir right section */}

                </div>

                <Footer />
            </Fragment>
        )
    }
}