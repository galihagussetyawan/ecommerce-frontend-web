import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// import dashboard components
import HomeComponent from './components/HomeComponent';
import AddProductComponent from './components/AddProductComponent';

//import components
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

export default class Dashboard extends Component {
    render() {
        return (
            <Router basename="/dashboard">
                <Helmet>
                    <title>Admin Dashboard</title>
                </Helmet>

                <Header />


                <div className="md:flex">
                    {/* side menu */}
                    <div className="side-menu md:w-64 md:h-screen md:flex md:flex-col md:gap-5 md:text-sm md:overflow-y-scroll">

                        <div className="md:py-3 md:text-gray-600">
                            <div className="md:flex md:justify-center md:gap-2 md:cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                </svg>
                                <div>Sembunyikan Menu</div>
                            </div>
                        </div>

                        <div className="store-profile md:flex md:items-center md:gap-2 md:p-3">
                            <div>
                                <div className="md:w-12 md:h-12 md:rounded-full md:bg-black"></div>
                            </div>
                            <div>
                                <div>One Store</div>
                                <div>Follower</div>
                            </div>
                        </div>

                        <div className="md:px-3">
                            <div className="md:flex md:justify-between">
                                <div className="md:text-gray-500">Saldo</div>
                                <div>Rp0</div>
                            </div>
                            <div className="md:flex md:justify-between">
                                <div className="md:text-gray-500">Kredit</div>
                                <div>Rp0</div>
                            </div>
                        </div>

                        {/* side menu button */}
                        <div className="md:text-gray-500 md:font-bold">
                            <div className="border-l-4 border-white md:hover:text-green-500 md:hover:border-green-500 md:px-2">
                                <div className="md:flex md:items-cente md:gap-2 md:py-2 md:cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                    </svg>
                                    <div>Home</div>
                                </div>
                            </div>
                            <div className="border-l-4 border-white md:hover:text-green-500 md:hover:border-green-500 md:px-2">
                                <div className="md:flex md:items-center md:gap-2 md:py-2 md:cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                                    </svg>
                                    <div>Chat</div>
                                </div>
                            </div>
                            <div className="border-l-4 border-white md:hover:text-green-500 md:hover:border-green-500 md:px-2">
                                <div className="md:flex md:items-center md:gap-2 md:py-2 md:cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                                        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                                    </svg>
                                    <div>Diskusi</div>
                                </div>
                            </div>
                            <div className="border-l-4 border-white md:hover:text-green-500 md:hover:border-green-500 md:px-2">
                                <div className="md:flex md:items-center md:gap-2 md:py-2 md:cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                                    </svg>
                                    <div>Produk</div>
                                </div>
                            </div>
                            {/*  */}
                            <ul className="md:pl-10 md:text-gray-400 md:font-normal">
                                <li className="md:cursor-pointer">
                                    <Link to="/add-product">Tambah Produk</Link>
                                </li>
                                <li className="md:cursor-pointer">Daftar Produk</li>
                            </ul>
                            {/*  */}

                            <div className="border-l-4 border-white md:hover:text-green-500 md:hover:border-green-500 md:px-2">
                                <div className="md:flex md:items-center md:gap-2 md:py-2 md:cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                    </svg>
                                    <div>Penjualan</div>
                                </div>
                            </div>
                            <div className="border-l-4 border-white md:hover:text-green-500 md:hover:border-green-500 md:px-2">
                                <div className="md:flex md:items-center md:gap-2 md:py-2 md:cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <div>Statistik</div>
                                </div>
                            </div>
                            <div className="border-l-4 border-white md:hover:text-green-500 md:hover:border-green-500 md:px-2">
                                <div className="md:flex md:items-center md:gap-2 md:py-2 md:cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd" />
                                    </svg>
                                    <div>Iklan dan Promosi</div>
                                </div>
                            </div>
                            <div className="border-l-4 border-white md:hover:text-green-500 md:hover:border-green-500 md:px-2">
                                <div className="md:flex md:items-center md:gap-2 md:py-2 md:cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" />
                                    </svg>
                                    <div>Kata Pembeli</div>
                                </div>
                            </div>
                        </div>
                        {/* akhir side menu button */}


                    </div>
                    {/* akhir side menu */}

                    {/* main section */}
                    <div className="main-section md:w-full">
                        <Switch>
                            <Route path="/" component={HomeComponent} exact />
                            <Route path="/add-product" component={AddProductComponent} />
                        </Switch>
                    </div>
                    {/* akhir main section */}

                </div>


                <Footer />
            </Router>
        )
    }
}

