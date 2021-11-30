import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";

//...import components
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

//...import helpers
import { RupiahFormat } from '../../helpers/RupiahFormat';

const dataElektronik = [
    {
        id: 1,
        name: 'Apple Macbook Air 2020 M1 Chip 13 inch 512GB Touch ID Grey Silver Gold - Inter JAPAN, 256GB Silver',
        href: '#',
        imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/9/2/cacf4abd-94a7-4aa1-b633-ef8a98af6524.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 15,
        color: 'Black',
        isChecked: false
    },
    {
        id: 1,
        name: 'Apple Macbook Air 2020 M1 Chip 13 inch 512GB Touch ID Grey Silver Gold - Inter JAPAN, 256GB Silver',
        href: '#',
        imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/9/2/cacf4abd-94a7-4aa1-b633-ef8a98af6524.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '14.799.000',
        color: 'Black',
        isChecked: false
    },
    {
        id: 1,
        name: 'Apple Macbook Air 2020 M1 Chip 13 inch 512GB Touch ID Grey Silver Gold - Inter JAPAN, 256GB Silver',
        href: '#',
        imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/9/2/cacf4abd-94a7-4aa1-b633-ef8a98af6524.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '14.799.000',
        color: 'Black',
        isChecked: false
    },
    {
        id: 1,
        name: 'Apple Macbook Air 2020 M1 Chip 13 inch 512GB Touch ID Grey Silver Gold - Inter JAPAN, 256GB Silver',
        href: '#',
        imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/9/2/cacf4abd-94a7-4aa1-b633-ef8a98af6524.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '14.799.000',
        color: 'Black',
        isChecked: false
    },
    {
        id: 1,
        name: 'Apple Macbook Air 2020 M1 Chip 13 inch 512GB Touch ID Grey Silver Gold - Inter JAPAN, 256GB Silver',
        href: '#',
        imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/9/2/cacf4abd-94a7-4aa1-b633-ef8a98af6524.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '14.799.000',
        color: 'Black',
        isChecked: false
    },
    {
        id: 1,
        name: 'Apple Macbook Air 2020 M1 Chip 13 inch 512GB Touch ID Grey Silver Gold - Inter JAPAN, 256GB Silver',
        href: '#',
        imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/9/2/cacf4abd-94a7-4aa1-b633-ef8a98af6524.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '14.799.000',
        color: 'Black',
        isChecked: false
    },
    {
        id: 1,
        name: 'Apple Macbook Air 2020 M1 Chip 13 inch 512GB Touch ID Grey Silver Gold - Inter JAPAN, 256GB Silver',
        href: '#',
        imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/9/2/cacf4abd-94a7-4aa1-b633-ef8a98af6524.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '14.799.000',
        color: 'Black',
        isChecked: false
    },
    {
        id: 1,
        name: 'Apple Macbook Air 2020 M1 Chip 13 inch 512GB Touch ID Grey Silver Gold - Inter JAPAN, 256GB Silver',
        href: '#',
        imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/9/2/cacf4abd-94a7-4aa1-b633-ef8a98af6524.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '14.799.000',
        color: 'Black',
        isChecked: false
    },
    {
        id: 1,
        name: 'Apple Macbook Air 2020 M1 Chip 13 inch 512GB Touch ID Grey Silver Gold - Inter JAPAN, 256GB Silver',
        href: '#',
        imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/9/2/cacf4abd-94a7-4aa1-b633-ef8a98af6524.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '14.799.000',
        color: 'Black',
        isChecked: false
    },
    {
        id: 1,
        name: 'Apple Macbook Air 2020 M1 Chip 13 inch 512GB Touch ID Grey Silver Gold - Inter JAPAN, 256GB Silver',
        href: '#',
        imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/9/2/cacf4abd-94a7-4aa1-b633-ef8a98af6524.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '14.799.000',
        color: 'Black',
        isChecked: false
    }

    // More products...
]

export default class CartPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataElektronik: [
                {
                    id: 1,
                    name: 'Apple Macbook Air 2020 M1 Chip 13 inch 512GB Touch ID Grey Silver Gold - Inter JAPAN, 256GB Silver',
                    href: '#',
                    imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/9/2/cacf4abd-94a7-4aa1-b633-ef8a98af6524.jpg',
                    imageAlt: "Front of men's Basic Tee in black.",
                    price: 5000,
                    color: 'Black',
                    isChecked: true
                },
                {
                    id: 2,
                    name: 'Apple Macbook Air 2020 M1 Chip 13 inch 512GB Touch ID Grey Silver Gold - Inter JAPAN, 256GB Silver',
                    href: '#',
                    imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/9/2/cacf4abd-94a7-4aa1-b633-ef8a98af6524.jpg',
                    imageAlt: "Front of men's Basic Tee in black.",
                    price: 5000,
                    color: 'Black',
                    isChecked: true
                },
                {
                    id: 3,
                    name: 'Apple Macbook Air 2020 M1 Chip 13 inch 512GB Touch ID Grey Silver Gold - Inter JAPAN, 256GB Silver',
                    href: '#',
                    imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/9/2/cacf4abd-94a7-4aa1-b633-ef8a98af6524.jpg',
                    imageAlt: "Front of men's Basic Tee in black.",
                    price: 5000,
                    color: 'Black',
                    isChecked: false
                },
                {
                    id: 4,
                    name: 'Apple Macbook Air 2020 M1 Chip 13 inch 512GB Touch ID Grey Silver Gold - Inter JAPAN, 256GB Silver',
                    href: '#',
                    imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/9/2/cacf4abd-94a7-4aa1-b633-ef8a98af6524.jpg',
                    imageAlt: "Front of men's Basic Tee in black.",
                    price: 5000,
                    color: 'Black',
                    isChecked: false
                },
                {
                    id: 5,
                    name: 'Apple Macbook Air 2020 M1 Chip 13 inch 512GB Touch ID Grey Silver Gold - Inter JAPAN, 256GB Silver',
                    href: '#',
                    imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/9/2/cacf4abd-94a7-4aa1-b633-ef8a98af6524.jpg',
                    imageAlt: "Front of men's Basic Tee in black.",
                    price: 5000,
                    color: 'Black',
                    isChecked: false
                },
                {
                    id: 6,
                    name: 'Apple Macbook Air 2020 M1 Chip 13 inch 512GB Touch ID Grey Silver Gold - Inter JAPAN, 256GB Silver',
                    href: '#',
                    imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/9/2/cacf4abd-94a7-4aa1-b633-ef8a98af6524.jpg',
                    imageAlt: "Front of men's Basic Tee in black.",
                    price: 5000,
                    color: 'Black',
                    isChecked: false
                },
                {
                    id: 6,
                    name: 'Apple Macbook Air 2020 M1 Chip 13 inch 512GB Touch ID Grey Silver Gold - Inter JAPAN, 256GB Silver',
                    href: '#',
                    imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/9/2/cacf4abd-94a7-4aa1-b633-ef8a98af6524.jpg',
                    imageAlt: "Front of men's Basic Tee in black.",
                    price: 5000,
                    color: 'Black',
                    isChecked: false
                },
                {
                    id: 8,
                    name: 'Apple Macbook Air 2020 M1 Chip 13 inch 512GB Touch ID Grey Silver Gold - Inter JAPAN, 256GB Silver',
                    href: '#',
                    imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/9/2/cacf4abd-94a7-4aa1-b633-ef8a98af6524.jpg',
                    imageAlt: "Front of men's Basic Tee in black.",
                    price: 5000,
                    color: 'Black',
                    isChecked: false
                },
                {
                    id: 9,
                    name: 'Apple Macbook Air 2020 M1 Chip 13 inch 512GB Touch ID Grey Silver Gold - Inter JAPAN, 256GB Silver',
                    href: '#',
                    imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/9/2/cacf4abd-94a7-4aa1-b633-ef8a98af6524.jpg',
                    imageAlt: "Front of men's Basic Tee in black.",
                    price: 5000,
                    color: 'Black',
                    isChecked: false
                },
                {
                    id: 10,
                    name: 'Apple Macbook Air 2020 M1 Chip 13 inch 512GB Touch ID Grey Silver Gold - Inter JAPAN, 256GB Silver',
                    href: '#',
                    imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/9/2/cacf4abd-94a7-4aa1-b633-ef8a98af6524.jpg',
                    imageAlt: "Front of men's Basic Tee in black.",
                    price: 5000,
                    color: 'Black',
                    isChecked: false
                }

                // More products...
            ],
            totalPrice: 0
        }

        this.handleAllCheck = this.handleAllCheck.bind(this);
        this.handleCheckedElement = this.handleCheckedElement.bind(this);
        this.handleDeleteElement = this.handleDeleteElement.bind(this);
    }

    handleAllCheck(event) {
        let data = this.state.dataElektronik;
        data.forEach(data => (data.isChecked = event.target.checked));
        this.setState({
            dataElektronik: data
        })
    }

    handleCheckedElement(event) {
        let data = this.state.dataElektronik;
        data.forEach(data => {
            if (data.id == event.target.value) {
                data.isChecked = event.target.checked
            }
        });

        this.setState({ dataElektronik: data });
    }

    handleDeleteElement(index) {
        let data = this.state.dataElektronik;
        data.splice(index, 1);

        this.setState({ dataElektronik: data })
    }

    componentWillMount() {
        let total = 0;

        this.state.dataElektronik.forEach(data => {
            if (data.isChecked) total += data.price;
        })

        this.setState({ totalPrice: total });
    }

    componentDidUpdate(prevProps, prevState) {

        function isEqual(arr1, arr2) {
            if (arr1.length != arr2.length) {
                return false;
            } else {
                let result = false;

                for (let i = 0; i < arr1.length; i++) {
                    if (arr1[i].isChecked != arr2[i].isChecked) {
                        return false;
                    } else {
                        result = true;
                    }
                }
                return result;
            }
        }

        let total = 0;
        if (isEqual(this.state.dataElektronik, prevState.dataElektronik)) {

            for (let i = 0; i < this.state.dataElektronik.length; i++) {
                if (this.state.dataElektronik[i].isChecked) {
                    total += this.state.dataElektronik[i].price;
                }
            }

            setTimeout(() => {
                this.setState({ totalPrice: total })
            });
        }
    }

    render() {
        return (
            <Fragment>
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
                                    <input type="checkbox" onClick={this.handleAllCheck} />
                                </div>
                                <p>Pilih Semua</p>
                            </div>

                            {/* card product cart */}
                            {
                                this.state.dataElektronik.map((data, index) => {
                                    return (
                                        <div className="md:flex md:flex-col md:gap-5 md:py-5 md:border-b-4 md:border-gray-100">
                                            <div className="md:w-full md:flex">
                                                <div className="md:w-8 md:flex md:items-center">
                                                    <input type="checkbox" checked={data.isChecked} value={data.id} onClick={this.handleCheckedElement} />
                                                </div>
                                                <div className="md:flex md:gap-2">
                                                    <div className="md:w-16 md:h-16 md:bg-black"></div>
                                                    <div>
                                                        <p>{data.name}</p>
                                                        <p>{RupiahFormat(data.price)}</p>
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
                                                            <button onClick={() => this.handleDeleteElement(index)}>
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
                                                            <input className="md:w-11 md:text-center md:outline-none" value="1" />
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
                            <div className="md:w-full md:flex md:flex-col md:gap-4 md:p-4 md:sticky md:top-28 md:border md:rounded-md">
                                <div>
                                    <p className="md:text-lg md:font-bold">Ringkasan Belanja</p>
                                </div>
                                <div>
                                    <div className="md:flex md:justify-between">
                                        <p>Total Harga (1 barang)</p>
                                        <p>Rp21.000</p>
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
                                    <p className="md:text-lg md:font-bold">{RupiahFormat(this.state.totalPrice)}</p>
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