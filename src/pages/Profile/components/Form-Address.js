import React, { Component } from "react";
import debounce from "lodash.debounce";

// import components
import { Stepper } from "react-form-stepper";

// import serivices
import AuthenticationService from "../../../services/AuthenticationService";

const stepStyle = {
    // activeBgColor: '#10b981',
    labelFontSize: '0.8rem',
    stepSize: '1em',
    circleFontSize: '0.8rem'
}

export default class FormAddress extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usernameShipping: "",
            address1: "",
            address2: "",
            city: "",
            province: "",
            country: "",
            currentCity: "",
            zipCode: Number,
            step: 0
        }

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleReturnStep = this.handleReturnStep.bind(this);
        this.handleStep = this.handleStep.bind(this);
        this.handleMapValidChooseLocation = this.handleMapValidChooseLocation.bind(this);
        this.handleUsernameShippingChange = this.handleUsernameShippingChange.bind(this);
        this.handleAddressOneChange = this.handleAddressOneChange.bind(this);
        this.handleAddressTwoChange = this.handleAddressTwoChange.bind(this);
        this.handleProvinceChange = this.handleProvinceChange.bind(this);
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.handleZipCodeChange = this.handleZipCodeChange.bind(this);
    }

    //on handle change this.state value
    handleDebounceChange = debounce(nextValue => {
        this.setState({ currentCity: nextValue });
        this.handleStep();
    }, 1500)

    handleOnChange(event) {
        this.handleDebounceChange(event.target.value);
    }

    handleUsernameShippingChange(event) {
        this.setState({ usernameShipping: event.target.value });
    }

    handleAddressOneChange(event) {
        this.setState({ address1: event.target.value });
    }

    handleAddressTwoChange(event) {
        this.setState({ address2: event.target.value });
    }

    handleProvinceChange(event) {
        this.setState({ province: event.target.value });
    }

    handleCountryChange(event) {
        this.setState({ country: event.target.value });
    }

    handleZipCodeChange(event) {
        this.setState({ zipCode: event.target.value });
    }
    // end handle change this.state

    handleStep() {
        if (this.state.currentCity === "") {
            this.setState({ step: 0 });
        }

        if (this.state.currentCity !== "") {
            this.setState({ step: 1 });
        }
    }

    handleMapValidChooseLocation() {
        if (this.state.currentCity !== "") {
            this.setState({ city: this.state.currentCity });
            this.setState({ step: 2 });
        }
    }

    handleReturnStep() {
        if (this.state.step >= 0) {
            this.setState({ step: this.state.step - 1 });
        }
    }

    handleSaveForm() {
        this.props.closeAction();
    }


    render() {
        console.log(this.state);
        AuthenticationService.isAuthenticationSeller()
            .then(response => console.log(response));

        return (
            <div className=" flex flex-col gap-5">

                {/* header section */}
                <div className="header-section">
                    <div className="title">
                        <h2 className=" text-center text-xl">Tambah Alamat</h2>
                    </div>

                    <div className="stepper border-b">
                        <Stepper
                            className="text-xs text-gray-500"
                            steps={[{ label: 'Cari lokasi pengiriman' }, { label: 'Tentukan pinpoint lokasi' }, { label: 'Lengkapi detail alamat' }]}
                            activeStep={this.state.step}
                            styleConfig={stepStyle}>
                        </Stepper>
                    </div>
                </div>
                {/* end header section */}

                {/* main section */}
                <div>

                    {/* tab step 1 */}
                    {(this.state.step === 0 || this.state.step === 1) &&
                        <div>
                            <div className="flex flex-col gap-2">
                                <h2 className="md:text-xl md:font-bold">Di mana lokasi tujuan pengirimanmu?</h2>
                                <div className="md:w-3/5 flex rounded-md border focus-within:border-green-500 overflow-hidden">
                                    <button className="text-gray-400 p-2 md:bg-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    <input className="w-full md:text-xs outline-none md:bg-gray-100" placeholder="Tulis nama jalan / gedung / perumahan" onChange={this.handleOnChange} />
                                </div>
                            </div>

                            {/* next/save button */}
                            <div className=" md:w-full flex justify-end">
                                <button className="p-1 px-5 text-sm font-bold text-white rounded-md bg-green-500" onClick={this.handleMapValidChooseLocation}>Pilih Lokasi & Lanjut Isi Alamat</button>
                            </div>
                        </div>
                    }
                    {/* end tab step 1 */}

                    {/* tab step 2 */}
                    {this.state.step === 2 &&
                        <div className="md:h-96 md:overflow-y-auto">
                            <div className="flex flex-col gap-2">
                                <h2 className="md:text-xl md:font-bold">Lengkapi detail alamat</h2>

                                {/* nama penerima */}
                                <div className="flex flex-col gap-1">
                                    <h3 className="md:font-bold text-gray-700">Nama Penerima</h3>
                                    <input className="md:w-full rounded-md md:p-1 md:px-4 outline-none border border-gray-200 focus-within:border-green-500 text-gray-700" value={this.state.usernameShipping} onChange={this.handleUsernameShippingChange} />
                                </div>

                                {/* address 1 */}
                                <div className="flex flex-col gap-1">
                                    <h3 className="md:font-bold text-gray-700">Address 1</h3>
                                    <input className="md:w-full rounded-md md:p-1 md:px-4 outline-none border border-gray-200 focus-within:border-green-500 text-gray-700" />
                                </div>

                                {/* address 2 */}
                                <div className="flex flex-col gap-1">
                                    <h3 className="md:font-bold text-gray-700">Address 2</h3>
                                    <input className="md:w-full rounded-md md:p-1 md:px-4 outline-none border border-gray-200 focus-within:border-green-500 text-gray-700" />
                                </div>

                                {/* kota */}
                                <div className="flex flex-col gap-1">
                                    <h3 className="md:font-bold text-gray-700">Kota</h3>
                                    <input className="md:w-full rounded-md md:p-1 md:px-4 outline-none border border-gray-200 focus-within:border-green-500 text-gray-700" disabled={true} value={this.state.city} />
                                </div>

                                {/* state */}
                                <div className="flex flex-col gap-1">
                                    <h3 className="md:font-bold text-gray-700">Provinsi</h3>
                                    <input className="md:w-full rounded-md md:p-1 md:px-4 outline-none border border-gray-200 focus-within:border-green-500 text-gray-700" />
                                </div>

                                {/* country */}
                                <div className="flex flex-col gap-1">
                                    <h3 className="md:font-bold text-gray-700">Negara</h3>
                                    <input className="md:w-full rounded-md md:p-1 md:px-4 outline-none border border-gray-200 focus-within:border-green-500 text-gray-700" />
                                </div>

                                {/* zipcode */}
                                <div className="flex flex-col gap-1">
                                    <h3 className="md:font-bold text-gray-700">Kode Pos</h3>
                                    <input className="md:w-full rounded-md md:p-1 md:px-4 outline-none border border-gray-200 focus-within:border-green-500 text-gray-700" type={"number"} />
                                </div>

                                <div className="flex justify-center gap-3">
                                    <button className="md:p-1 md:px-5 rounded-md text-gray-400 bg-gray-300" onClick={this.handleReturnStep}>Sebelumnya</button>
                                    <button className="md:p-1 md:px-5 rounded-md font-bold text-white bg-green-500" onClick={this.handleSaveForm}>Simpan</button>
                                </div>


                            </div>
                        </div>
                    }
                    {/* end tab step 2 */}


                </div>
                {/* end main section */}


            </div>
        );
    }
}