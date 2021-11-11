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
        };

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    onChangeUsername(event) {
        this.setState({ username: event.target.value })
    }

    onChangePassword(event) {
        this.setState({ password: event.target.value })
    }

    handleLogin(event) {
        event.preventDefault();

        AuthenticationService.login(this.state.username, this.state.password)
            .then(response => {
                if (response.status === 200) {
                    this.props.closeAction()
                    window.location.reload(true);
                }
            })
            .catch(error => console.log(error))
    }


    render() {
        return (
            <div className="w-screen h-screen z-20 flex justify-center items-center fixed bg-opacity-60 bg-gray-900 z-10">
                <div className="login-card w-full h-full md:w-1/5 md:h-3/5 rounded-none md:rounded-md flex flex-col justify-center items-center bg-white">

                    {/* close button */}
                    <div className="section-close w-11/12 relative flex justify-start md:justify-end bottom-9">
                        <button className="hidden md:block text-gray-600 text-2xl" onClick={this.props.closeAction}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <button className="md:hidden text-gray-600 text-2xl" onClick={this.props.closeAction}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="wrapper w-11/12 h-3/4 flex flex-col justify-center gap-5">
                        <div className="section flex justify-between items-center">
                            <h1 className="text-xl font-bold">Masuk</h1>
                            <NavLink to="/register">
                                <p className="text-xs text-green-500 md:cursor-pointer">Daftar</p>
                            </NavLink>
                        </div>

                        <div className="section flex flex-col gap-2">
                            <p className="text-xs font-bold text-gray-600">Nomor Hp atau Email</p>
                            <input className="w-full p-2 outline-none rounded-md border border-gray-300 focus:border-green-500" onChange={this.onChangeUsername}></input>
                            <p className="text-xs text-gray-500">Contoh: email@tokopedia.com</p>
                        </div>

                        <div className="section flex flex-col gap-2">
                            <p className="text-xs font-bold text-gray-600">Kata Sandi</p>
                            <input className="w-full p-2 outline-none rounded-md border border-gray-300 focus:border-green-500" onChange={this.onChangePassword}></input>
                        </div>

                        <div className="section flex justify-end">
                            <p className="text-xs text-green-500">Lupa kata sandi?</p>
                        </div>

                        <div>
                            <button className="w-full rounded-md bg-gray-300 p-2 text-gray-600" onClick={this.handleLogin}>Selanjutnya</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
