import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

//import components
import Dropdown from '../dropdown/Dropdown';
import Login from '../login/Login';

// import services
import AuthenticationService from '../../services/AuthenticationService';

// import context
import AuthContext from '../../context/AuthContext';
export default class Header extends Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);

        this.state = {
            hamburger: false,
            hoverState: {}
        }

        this.onToggleHamburger = this.onToggleHamburger.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }


    onToggleHamburger() {
        this.setState({ hamburger: !this.state.hamburger });
        console.log(this.state.hamburger);
    }

    handleMouseOver(event) {
        event.preventDefault();

        this.setState({
            hoverState: {
                [event.currentTarget.id]: true
            }
        })
    }

    handleMouseLeave(event) {
        this.setState({
            hoverState: {
                [event.currentTarget.id]: false
            }
        })
    }

    handleLogout() {
        AuthenticationService.logout()
            .then(response => console.log(response))
    }

    render() {
        const { username, store, isAuthenticated } = this.context;

        return (
            <div className="w-full flex flex-col z-10 md:sticky md:top-0 justify-center items-center md:shadow-md bg-green-600 md:bg-white">
                <div className="wrapper w-11/12 md:w-9/12 py-3 flex justify-between items-center gap-1">

                    {/* section logo */}
                    <div className="section md:w-auto hidden md:block">
                        <NavLink to="/">
                            <h1 className="text-lg text-green-500">trendyol</h1>
                        </NavLink>
                    </div>
                    {/* akhir section logo */}

                    {/* input section */}
                    <div className="section w-10/12 md:w-3/5 flex rounded-md border overflow-hidden focus-within:border-green-500 bg-white">
                        <input className="w-full h-9 px-2 outline-none" placeholder="Cari produk ..." />
                        <button className="w-9 h-9 flex justify-center items-center text-gray-500 md:hover:bg-gray-300 bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    {/* akhir input section */}

                    {/* hamburget menu */}
                    <div className="section md:w-auto md:h-auto flex md:gap-5 justify-end items-center">
                        <div className="md:h-14 flex justify-start items-center gap-2 md:gap-0 text-white md:text-gray-500">

                            {/* notification section */}
                            {isAuthenticated &&
                                <Fragment>

                                    {/* cart icon */}
                                    <div id="dropdown-cart" className="md:p-2" onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
                                        <button className="flex md:p-1 rounded-sm md:hover:bg-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 block md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hidden md:block" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                            </svg>
                                        </button>
                                        {this.state.hoverState["dropdown-cart"] &&
                                            <Dropdown>
                                                <div className="md:w-72 md:flex md:flex-col md:justify-center md:items-center md:gap-1">
                                                    <img className="md:w-1/2" src="https://ecs7.tokopedia.net/assets-unify/il-header-cart-empty.jpg" />
                                                    <p className="md:font-bold md:text-gray-700">Wah keranjang belanjaanmu kosong!</p>
                                                    <p className="md:text-xs text-center">Daripada dianggurin, isi saja dengan barang-barang menarik. Lihat-lihat dulu, siapa tahu ada yang kamu suka!</p>
                                                </div>
                                            </Dropdown>
                                        }
                                    </div>
                                    {/* akhir cart icon */}

                                    <div id="dropdown-notification" className="md:p-2" onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
                                        <button className="flex md:p-1 rounded-sm md:hover:bg-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 block md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hidden md:block" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                            </svg>
                                        </button>
                                        {this.state.hoverState["dropdown-notification"] &&
                                            <Dropdown>
                                                <div className="md:w-72">
                                                    <p>Wah harus beli</p>
                                                    <p>Daripada dianggurin, isi saja dengan barang-barang menarik. Lihat-lihat dulu, siapa tahu ada yang kamu suka!</p>
                                                </div>
                                            </Dropdown>
                                        }
                                    </div>

                                    <div id="dropdown-chat" className="md:p-2" onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
                                        <button className={`flex md:p-1 rounded-sm md:hover:bg-gray-100 ${this.state.hoverState["dropdown-chat"] ? 'md:bg-gray-100' : 'md:bg-white'}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 block md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hidden md:block" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        {this.state.hoverState["dropdown-chat"] &&
                                            <Dropdown>
                                                <div className=" md:w-28">
                                                    <ul>
                                                        <li className="md:hover:bg-gray-100">Chat</li>
                                                        <li>Diskusi</li>
                                                        <li>Alasan</li>
                                                        <li>Pesan Bantuan</li>
                                                        <li>Pesan Dikomplain</li>
                                                    </ul>
                                                </div>
                                            </Dropdown>
                                        }
                                    </div>
                                </Fragment>
                            }
                            {/* akhir section notification */}

                            {/* hamburger button */}
                            <button className="block md:hidden text-white" onClick={this.onToggleHamburger}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                            {/* akhir hamburger button */}
                        </div>





                        <div className={`inner-section ${this.state.hamburger ? 'block' : 'hidden'} w-full h-full absolute md:block md:static top-0 left-0 z-10 bg-white`}>

                            <div className="flex p-4 gap-2 border-b md:hidden">
                                <button onClick={this.onToggleHamburger}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <h1>Menu Utama</h1>
                            </div>

                            {isAuthenticated ?
                                <div className="section md:w-60 flex flex-col md:flex-row-reverse gap-2 md:gap-1 p-4 md:p-0">

                                    {/* profile section */}
                                    <div id="dropdown-profile" className="profile-section w-full md:w-1/2 flex md:justify-center md:items-center gap-2 md:cursor-pointer md:p-1 md:rounded-sm md:hover:bg-gray-100" onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
                                        <div className="w-auto rounded-full">
                                            <div className="w-10 h-10 md:w-7 md:h-7 rounded-full bg-green-400"></div>
                                        </div>
                                        <div className="w-11/12 md:w-20 flex flex-col justify-center">
                                            <p className="text-sm font-bold md:text-sm md:font-normal md:text-gray-500">{username}</p>
                                            <p className="md:hidden text-xs">Saldo</p>
                                        </div>
                                        <div className="w-auto flex items-center md:hidden">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        {this.state.hoverState["dropdown-profile"] &&
                                            <Dropdown>
                                                <div className="md:w-80 md:flex md:flex-col md:gap-2 md:text-sm">
                                                    <NavLink to="user/setting">
                                                        <div className="md:flex md:items-center md:gap-2 md:p-2 md:shadow-md">
                                                            <div>
                                                                <div className="md:w-8 md:h-8 md:rounded-full bg-black"></div>
                                                            </div>
                                                            <div>
                                                                <p>Galih Agus</p>
                                                                <p className="md:text-gray-500">Member Silver</p>
                                                            </div>
                                                        </div>
                                                    </NavLink>

                                                    <div className="md:flex md:w-full md:text-gray-500">
                                                        <div className="md:w-3/5">
                                                            <p>Gopay</p>
                                                            <p>Saldo</p>
                                                            <p>OVO Cash</p>
                                                            <p>TokoMember</p>
                                                            <p>TopQuest</p>
                                                            <p>Kupon Saya</p>
                                                        </div>

                                                        <div className="md:w-2/5">
                                                            <p>Pembelian</p>
                                                            <p>Wishlist</p>
                                                            <p>Toko Favorit</p>
                                                            <p>Pengaturan</p>
                                                            <button className="md:w-full md:py-1 md:text-left md:hover:bg-gray-100" onClick={this.handleLogout}>Keluar</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Dropdown>
                                        }
                                    </div>
                                    {/* akhir profile section */}

                                    {/* store section */}
                                    <div id="dropdown-store" className="profile-section w-full md:w-1/2 flex gap-2 md:cursor-pointer md:p-1 md:rounded-sm md:hover:bg-gray-100" onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
                                        <div className="w-auto rounded-full">
                                            <div className="w-10 h-10 md:w-7 md:h-7 rounded-full bg-green-400"></div>
                                        </div>
                                        <div className="w-11/12 md:w-20 flex flex-col justify-center">
                                            <p className="text-sm font-bold md:text-sm md:font-normal md:text-gray-500">One Store</p>
                                            <p className="md:hidden text-xs">Saldo</p>
                                        </div>
                                        <div className="w-auto flex items-center md:hidden">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        {this.state.hoverState["dropdown-store"] &&
                                            <Dropdown>
                                                <div className="md:w-60">
                                                    {store ?
                                                        <h1>sdsdsdd</h1>
                                                        :
                                                        <div className="md:flex md:flex-col md:items-center md:gap-2 md:text-sm md:text-gray-500">
                                                            <p>Anda belum memeiliki toko</p>
                                                            <button className="md:w-full md:rounded-md md:p-1 md:text-white bg-green-500">Buka Toko</button>
                                                            <p className="md:text-xs md:text-green-500">Pelajari lebih lanjut di Pusat Edukasi Seller</p>
                                                        </div>
                                                    }
                                                </div>
                                            </Dropdown>
                                        }
                                    </div>
                                    {/* akhir store section */}


                                </div>

                                :

                                <div className="flex justify-between p-4 gap-3">
                                    <button className="w-3/6 h-8 md:w-24 rounded-md border border-green-500 text-green-500" onClick={this.props.onLoginBox}>Masuk</button>
                                    <NavLink to="/register">
                                        <button className="w-3/6 h-8 md:w-24 rounded-md text-white bg-green-500">Daftar</button>
                                    </NavLink>
                                </div>
                            }
                        </div>


                    </div>
                    {/* akhir hamburger menu */}

                </div>

                {this.props.children}

            </div>
        );
    }
};