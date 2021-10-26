import React, { useState } from 'react';

//import services
import AuthenticationService from '../../services/AuthenticationService';

export default function Login(props) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    //handle change value input
    const handleChangeUsername = event => {
        setUsername(event.target.value);
    };

    const handleChangePassword = event => {
        setPassword(event.target.value);
    };

    const handleSubmit = () => {
        AuthenticationService.login(username, password)
            .then(response => console.log(response));
    };

    return (
        <div className="w-screen h-screen flex justify-center items-center fixed bg-opacity-60 bg-gray-900 z-10">
            <div className="login-card w-full h-full md:w-1/4 md:h-3/5 rounded-md flex flex-col justify-center items-center bg-white">

                {/* close button */}
                <div className="section-close w-11/12 relative flex justify-start md:justify-end bottom-9">
                    <button className="hidden md:block text-gray-600 text-2xl" onClick={props.closeAction}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <button className="md:hidden text-gray-600 text-2xl" onClick={props.closeAction}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="wrapper w-11/12 h-3/4 flex flex-col justify-center gap-5">
                    <div className="section flex justify-between items-center">
                        <h1 className="text-xl font-bold">Masuk</h1>
                        <p className="text-xs text-green-500">Daftar</p>
                    </div>

                    <div className="section flex flex-col gap-2">
                        <p className="text-xs font-bold text-gray-600">Nomor Hp atau Email</p>
                        <input className="w-full p-2 outline-none rounded-md border border-gray-300 focus:border-green-500" onChange={handleChangeUsername}></input>
                        <p className="text-xs text-gray-500">Contoh: email@tokopedia.com</p>
                    </div>

                    <div className="section flex flex-col gap-2">
                        <p className="text-xs font-bold text-gray-600">Kata Sandi</p>
                        <input className="w-full p-2 outline-none rounded-md border border-gray-300 focus:border-green-500" onChange={handleChangePassword}></input>
                    </div>

                    <div className="section flex justify-end">
                        <p className="text-xs text-green-500">Lupa kata sandi?</p>
                    </div>

                    <div>
                        <button className="w-full rounded-md bg-gray-300 p-2 text-gray-600" onClick={handleSubmit}>Selanjutnya</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
