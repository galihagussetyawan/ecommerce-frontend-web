import React, { Component, useRef, createRef } from 'react';
import { NavLink } from 'react-router-dom';

//import components
import Dropdown from '../dropdown/Dropdown';

// import services
import AuthenticationService from '../../services/AuthenticationService';

// import context
import AuthContext from '../contexts/AuthContext';


const category = ["Fashion Wanita", "Fashion Pria", "Anak-Anak", "Travel & Entertaiment", "keuangan", "Rumah Tangga", "Supermarket", "Kosmetik", "Tas Sepatu", "Alat & Aksesoris", "Olahraga & Outdoor", "Elektronik", "Komputer & Laptop"];
const urlIcon = "https://images.tokopedia.net/img/cache/64-square/iEWsxH/2021/4/19/832aaa22-b9bf-42d3-86da-21b77dca4716.png?ect=4g";

// export default class Header extends Component {
//     static contextType = AuthContext;

//     constructor(props) {
//         super(props);

//         this.state = {
//             burgerMenu: false
//         }

//         this.onBurgerMenu = this.onBurgerMenu.bind(this);
//     }

//     onBurgerMenu() {
//         this.setState({ burgerMenu: !this.state.burgerMenu });
//         console.log(this.state.burgerMenu);
//     }

//     render() {
//         const { username, isAuthenticated } = this.context;

//         return (
//             <div className="max-w-full h-auto flex flex-col items-center">
//                 <div className="hidden md:top-0 w-full h-12 md:flex bg-green-500"></div>

//                 <div className="flex w-full h-14 p-4 md:w-3/4 md:h-20 bg-green-500 md:bg-white">
//                     <div className="flex w-full gap-9 flex-row w-28 items-center justify-between">
//                         <div className="logo hidden lg:block">trendyol</div>

//                         {/* search components */}
//                         <div className="flex w-full border rounded justify-center items-center overflow-hidden focus-within:border-green-500 md:w-3/5">
//                             <input className="w-full h-9 p-2 outline-none text-sm" type="text" placeholder="Cari produk..." />
//                             <i className="w-9 h-9 flex justify-center items-center text-gray-500 bg-gray-100">
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                                     <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
//                                 </svg>
//                             </i>
//                         </div>

//                         {/* burger menu */}
//                         <div className="flex flex-col md:flex">
//                             <div className="flex md:hidden text-white">
//                                 <button onClick={this.onBurgerMenu}>
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                                         <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
//                                     </svg>
//                                 </button>
//                             </div>

//                             {/* right section */}
//                             {this.state.burgerMenu && isAuthenticated ?
//                                 <div className="md:left-0 bg-red-400 md:static md:flex gap-10 text-white md:text-gray-700">

//                                     <div className="section flex gap-5 text-gray-600">
//                                         <div className="flex md:cursor-pointer rounded-md justify-center items-center p-1 gap-1 md:hover:bg-gray-100 ">
//                                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                                                 <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
//                                             </svg>
//                                         </div>

//                                         <div className="md:cursor-pointer flex justify-center items-center p-1 rounded-md md:hover:bg-gray-100 gap-1">
//                                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                                                 <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
//                                             </svg>
//                                         </div>

//                                         <div className="md:cursor-pointer flex justify-center items-center p-1 rounded-md md:hover:bg-gray-100 gap-1">
//                                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                                                 <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
//                                                 <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
//                                             </svg>
//                                         </div>
//                                     </div>

//                                     <div className="section flex gap-8 text-sm md:cursor-pointer">
//                                         <div className="inner-section flex items-center gap-1">
//                                             <div className=" md:w-8 md:h-8 rounded-full bg-black"></div>
//                                             <p>Toko</p>
//                                         </div>
//                                         <div className="inner-section flex items-center gap-1">
//                                             <div className=" md:w-8 md:h-8 rounded-full bg-black"></div>
//                                             <p>Galih</p>
//                                         </div>
//                                     </div>

//                                 </div>

//                                 :
//                                 this.state.burgerMenu &&
//                                 <div className="absolute left-0 md:flex md:gap-3">
//                                     <button className="md:w-20 md:h-9 rounded-md bg-white border border-green-500 text-green-500" onClick={this.props.clickLogin}>Masuk</button>
//                                     <NavLink to="/register">
//                                         <button className="hidden md:block md:w-20 md:h-9 rounded-md bg-green-500 text-white">Daftar</button>
//                                     </NavLink>
//                                 </div>
//                             }
//                         </div>
//                         {/* akhir right section */}

//                     </div>
//                 </div >


//                 {/* navigasi kategori */}
//                 <div div className="wrapper-navigasi-kategori w-11/12 p-2 flex justify-between gap-5 overflow-x-scroll md:gap-0 md:w-3/4" >
//                     {
//                         category.map(data => {
//                             return (
//                                 <div className="card-kategori w-14 flex flex-col justify-between md:w-auto">
//                                     <div className="w-14 h-14 p-1 rounded-full md:hidden bg-white">
//                                         <img className="object-contain" src={urlIcon}></img>
//                                     </div>
//                                     <p className="text-center text-xs md:cursor-pointer md:hover:text-green-500">{data}</p>
//                                 </div>
//                             );
//                         })
//                     }

//                 </div >
//             </div >
//         )
//     }
// }

export default class Header extends Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);

        this.state = {
            hamburger: false,
            hoverState: {}
        }

        this.selectorRef = createRef();
        this.onToggleHamburger = this.onToggleHamburger.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }


    onToggleHamburger() {
        this.setState({ hamburger: !this.state.hamburger });
        console.log(this.state.hamburger);
    }

    handleMouseOver(event) {
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

    render() {
        const { username, isAuthenticated } = this.context;

        return (
            <div className="w-full flex z-10 md:sticky md:top-0 justify-center items-center md:shadow-md bg-green-600 md:bg-white">
                <div className="wrapper w-11/12 md:w-9/12 py-3 flex justify-between items-center gap-1">

                    {/* section logo */}
                    <div className="section md:w-auto hidden md:block">
                        <h1 className="text-lg text-green-500">trendyol</h1>
                    </div>
                    {/* akhir section logo */}

                    {/* input section */}
                    <div className="section w-10/12 md:w-4/6 flex rounded-md border overflow-hidden focus-within:border-green-500 bg-white">
                        <input className="w-full h-9 px-2 outline-none" placeholder="Cari produk ..." />
                        <button className="w-9 h-9 flex justify-center items-center text-gray-500 md:hover:bg-gray-300 bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    {/* akhir input section */}

                    {/* hamburget menu */}
                    <div className="section md:w-auto flex md:gap-5 justify-end items-center">
                        {/* notification section */}
                        <div className="flex gap-2 md:gap-3 justify-start text-white md:text-gray-700">

                            <div id="dropdown-cart" className="flex justify-center md:p-1 md:hover:bg-gray-100" onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                {this.state.hoverState["dropdown-cart"] &&
                                    <Dropdown>
                                        <div className="md:w-72">
                                            <p>Wah keranjang belanjaanmu kosong!</p>
                                            <p>Daripada dianggurin, isi saja dengan barang-barang menarik. Lihat-lihat dulu, siapa tahu ada yang kamu suka!</p>
                                        </div>
                                    </Dropdown>
                                }
                            </div>

                            <div id="dropdown-notification" className="md:p-1 md:hover:bg-gray-100" onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                                {this.state.hoverState["dropdown-notification"] &&
                                    <Dropdown>
                                        <div className="md:w-72">
                                            <p>Wah harus beli</p>
                                            <p>Daripada dianggurin, isi saja dengan barang-barang menarik. Lihat-lihat dulu, siapa tahu ada yang kamu suka!</p>
                                        </div>
                                    </Dropdown>
                                }
                            </div>

                            <div id="dropdown-chat" className="md:p-1 md:hover:bg-gray-100" onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                </svg>
                                {this.state.hoverState["dropdown-chat"] &&
                                    <Dropdown>
                                        <div className="md:w-72">
                                            <p>Wah harus beli</p>
                                            <p>Daripada dianggurin, isi saja dengan barang-barang menarik. Lihat-lihat dulu, siapa tahu ada yang kamu suka!</p>
                                        </div>
                                    </Dropdown>
                                }
                            </div>

                            {/* hamburger button */}
                            <button className="block md:hidden text-white" onClick={this.onToggleHamburger}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                            {/* akhir hamburger button */}

                        </div>
                        {/* akhir section notification */}





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
                                <div className="section flex flex-col md:flex-row-reverse gap-2 md:gap-1 p-4 md:p-0">

                                    {/* profile section */}
                                    <div className="profile-section w-full flex gap-2 md:cursor-pointer md:p-1 md:rounded-sm md:hover:bg-gray-100">
                                        <div className="w-auto rounded-full">
                                            <div className="w-10 h-10 md:w-7 md:h-7 rounded-full bg-green-400"></div>
                                        </div>
                                        <div className="w-11/12 md:w-20 flex flex-col justify-center">
                                            <p className="text-sm font-bold md:text-sm md:font-normal md:text-gray-400">Galih Agus</p>
                                            <p className="md:hidden text-xs">Saldo</p>
                                        </div>
                                        <div className="w-auto flex items-center md:hidden">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                    {/* akhir profile section */}

                                    {/* store section */}
                                    <div className="profile-section w-full flex gap-2 md:cursor-pointer md:p-1 md:rounded-sm md:hover:bg-gray-100">
                                        <div className="w-auto rounded-full">
                                            <div className="w-10 h-10 md:w-7 md:h-7 rounded-full bg-green-400"></div>
                                        </div>
                                        <div className="w-11/12 md:w-20 flex flex-col justify-center">
                                            <p className="text-sm font-bold md:text-sm md:font-normal md:text-gray-400">One Store</p>
                                            <p className="md:hidden text-xs">Saldo</p>
                                        </div>
                                        <div className="w-auto flex items-center md:hidden">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                    {/* akhir store section */}


                                </div>

                                :

                                <div className="flex justify-between p-4 gap-3">
                                    <button className="w-3/6 h-8 md:w-24 rounded-md border border-green-500 text-green-500">Masuk</button>
                                    <button className="w-3/6 h-8 md:w-24 rounded-md text-white bg-green-500">Daftar</button>
                                </div>
                            }
                        </div>


                    </div>
                    {/* akhir hamburger menu */}


                    {/* category section */}
                    <div>

                    </div>


                </div>
            </div >
        );
    }
};