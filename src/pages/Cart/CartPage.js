import React, { Component, Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";

//...import components
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

// import services
import CartService from "../../services/CartService";

//...import helpers
import { RupiahFormat } from '../../helpers/RupiahFormat';

//import context
import CartContext from '../../context/CartContext';

export default class CartPage extends Component {
    static contextType = CartContext;

    constructor(props) {
        super(props);

        this.state = {
            totalPrice: 0,
        }

        this.handleAllCheck = this.handleAllCheck.bind(this);
        this.handleCheckedElement = this.handleCheckedElement.bind(this);
        this.handleDeleteElement = this.handleDeleteElement.bind(this);
    }

    handleAllCheck(event) {
        this.context.data.forEach((data, index) => {

            CartService.updateCart(data.id, data.quantity, event.target.checked)
                .then(response => {
                    this.context.checkDataChange(true);
                })
            this.context.checkDataChange(false);
        });
    }

    handleCheckedElement(event) {

        let id = event.target.id;
        let index = event.target.name;
        let quantity = this.context.data[index].quantity;

        CartService.updateCart(id, quantity, event.target.checked)
            .then(response => {
                this.context.checkDataChange(true);
            })

        this.context.checkDataChange(false);
    }

    handleDeleteElement(id, index) {
        return () => {
            // let temp = this.context.data;
            // temp.splice(index, 1);

            CartService.deleteCart(id)
                .then(response => {
                    // this.context.updateCart(temp);
                    this.context.checkDataChange(true);
                })

            this.context.checkDataChange(false);
        }
    }

    render() {
        const { data, totalPrice, totalQuantity } = this.context;

        // console.log(data);

        return (
            <Fragment >
                <Helmet>
                    <title>Keranjang | Trendyol</title>
                </Helmet>

                <Header />

                {/* {console.log(this.state.totalPrice)} */}
                <div className="md:w-3/4 md:flex md:gap-4 md:m-auto md:py-4">
                    <div className="md:w-full md:flex md:gap-4 md:text-sm md:text-gray-600">
                        {/* main section */}
                        <div className="md:w-4/5 md:flex md:flex-col md:gap-3">
                            <div className="md:w-full">
                                <h1 className="md:text-xl md:font-bold">Keranjang</h1>
                            </div>
                            <div className="md:w-full md:flex md:items-center">
                                <div className="md:w-8 md:flex md:items-center">
                                    <input type="checkbox" onChange={this.handleAllCheck} />
                                </div>
                                <p>Pilih Semua</p>
                            </div>

                            {/* card product cart */}
                            {
                                data.length > 0 && data.map((data, index) => {
                                    return (
                                        <div key={index} className="md:flex md:flex-col md:gap-5 md:py-5 md:border-b-4 md:border-gray-100">
                                            <div className="md:w-full md:flex">
                                                <div className="md:w-8 md:flex md:items-center">
                                                    <input id={data.id} name={index} type="checkbox" checked={data.checkout} onChange={this.handleCheckedElement} />
                                                </div>
                                                <div className="md:flex md:gap-2">
                                                    <div className="md:w-16 md:h-16">
                                                        <img src={data.product.images[0].url} />
                                                    </div>
                                                    <div>
                                                        <p>{data.product.name}</p>
                                                        <p>{`Rp ${RupiahFormat(data.product.price)}`}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="md:w-full md:flex">
                                                <div className="md:w-8 md:flex md:items-center"></div>
                                                <div className="md:w-full md:flex">
                                                    <div className="md:w-1/2">
                                                        <p>Tulis Catatan</p>
                                                    </div>
                                                    <div className="md:w-1/2 md:flex md:justify-end md:items-center md:gap-12">
                                                        <div className="md:flex md:items-center md:gap-2">
                                                            <p>Pindahkan ke Wishlist</p>
                                                            <div>|</div>
                                                            <button onClick={this.handleDeleteElement(data.id, index)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                </svg>
                                                            </button>
                                                        </div>

                                                        {/* increase decrease product */}
                                                        <div className="md:flex">
                                                            <button>
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                </svg>
                                                            </button>
                                                            <input className="md:w-11 md:text-center md:outline-none" defaultValue={data.quantity} />
                                                            <button>
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    );
                                })
                            }
                            {/* akhir card product cart */}

                        </div>
                        {/* akhir main section */}

                        {/* floating section */}
                        <div className="md:w-1/5">
                            <div className="md:w-full md:flex md:flex-col md:gap-4 md:p-4 md:sticky md:top-24 md:border md:rounded-md">
                                <div>
                                    <p className="md:text-lg md:font-bold">Ringkasan Belanja</p>
                                </div>
                                <div>
                                    <div className="md:flex md:justify-between">
                                        <p>{`Total Harga (${totalQuantity} barang)`}</p>
                                        <p>{`Rp ${RupiahFormat(totalPrice)}`}</p>
                                    </div>
                                    <div className="md:flex md:justify-between">
                                        <p>Total Diskon Barang</p>
                                        <p>-Rp6.000</p>
                                    </div>
                                </div>
                                <div>
                                    <hr></hr>
                                </div>
                                <div className="md:flex md:justify-between">
                                    <p className="md:text-lg md:font-bold">Total Harga</p>
                                    <p className="md:text-lg md:font-bold">{`Rp ${RupiahFormat(totalPrice)}`}</p>
                                </div>
                                <div>
                                    <button className="md:w-full md:rounded-md md:p-2 md:text-lg md:font-bold md:text-white md:bg-green-500">Beli</button>
                                </div>
                            </div>
                        </div>
                        {/* akhir floating section */}
                    </div>

                </div>

                <Footer />
            </Fragment>
        )
    }
}