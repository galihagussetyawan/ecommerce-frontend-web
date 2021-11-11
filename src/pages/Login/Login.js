import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

//import services
import AuthenticationService from '../../services/AuthenticationService';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            error: false
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    onChangeUsername(event) {
        this.setState({ username: event.target.value });
    }

    onChangePassword(event) {
        this.setState({ password: event.target.value });
    }

    handleLogin(event) {
        event.preventDefault();

        AuthenticationService.login(this.state.username, this.state.password)
            .then(response => {

                if (response.status === 403) {
                    this.setState({
                        error: true
                    })
                }

                if (response.status === 200) {
                    console.log("login success");
                    window.location.reload(true);
                }
            })
    }

    render() {
        return (
            <div className=" w-screen h-screen flex justify-center items-center">
                <div className="w-full h-full md:w-2/5 md:h-4/5 p-6 flex flex-col justify-center items-center">
                    <div className="section hidden md:block md:w-10/12 md:h-4/5 absolute">
                        <img className="md:w-full md:h-full object-contain" src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/45ab29df.png" />
                    </div>

                    {/* card */}
                    <div className="card w-full h-full md:z-20 md:w-3/5 md:h-full flex flex-col gap-5 text-gray-500 md:rounded-md md:border md:border-gray-300 md:p-6 md:bg-white">
                        <div className="section">
                            <h1 className="text-3xl font-medium text-center text-green-500">Trendyol</h1>
                        </div>
                        <div className="section flex justify-between items-center">
                            <p className="font-semibold">Masuk</p>
                            <NavLink to="/register">
                                <p className="md:cursor-pointer text-xs text-green-500">Daftar</p>
                            </NavLink>
                        </div>
                        <div className="section flex flex-col gap-1">
                            {this.state.error &&
                                <div className="error-alert w-full flex gap-2 p-1 rounded-sm text-xs md:text-sm text-red-400 bg-red-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    <p>Username atau Password Salah</p>
                                </div>
                            }
                            <p className="text-xs font-bold text-gray-600">Nomor Hp atau Email</p>
                            <input className="w-full p-2 outline-none rounded-md border border-gray-300 focus:border-green-500" onChange={this.onChangeUsername} />
                            <p className="text-xs text-right">Contoh: email@trendyol.com</p>
                            <p className="text-xs font-bold text-gray-600">Password</p>
                            <input className="w-full p-2 outline-none rounded-md border border-gray-300 focus:border-green-500" onChange={this.onChangePassword} />
                        </div>
                        <div className="section flex flex-col  gap-1">
                            <p className="text-xs text-green-500 text-right">Lupa kata sandi?</p>
                            <button className="w-full rounded-md p-2 font-bold bg-gray-200" onClick={this.handleLogin}>Selanjutnya</button>
                        </div>
                        <div className="section">
                            <p className="text-xs text-center">atau masuk dengan</p>
                        </div>
                        <div className="section flex flex-col gap-3">
                            <button className="w-full p-2 rounded-md border border-gray-300">Google</button>
                            <button className="w-full p-2 rounded-md border border-gray-300">Scan Kode QR</button>
                        </div>
                        <div className="section flex gap-1 justify-center">
                            <p className="text-xs">Butuh bantuan ?</p>
                            <p className="text-xs text-green-500">Hubungi Trendyol Center</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
