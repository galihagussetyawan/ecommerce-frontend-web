import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

//import services
import AuthenticationService from '../../services/AuthenticationService';


export default function Login(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [load, setLoad] = useState(false);


    useEffect(() => {
        setLoad(true);
    }, [])

    const onChangeUsername = (event) => {
        setUsername(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleLogin = (event) => {
        event.preventDefault();

        AuthenticationService.login(username, password)
            .then(response => {
                if (response.status === 200) {
                    props.closeAction()
                    window.location.reload(true);
                }
            })
            .catch(error => {
                setError(true);
            })
    }

    return (
        <div className="w-screen h-screen z-20 flex justify-center items-center fixed bg-opacity-60 bg-gray-900">

            <div className={`login-card w-full h-full md:w-1/5 md:h-0 rounded-none md:rounded-md flex flex-col justify-center items-center overflow-hidden bg-white ${load && "md:h-3/5 transition-all"}`}>

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
                        <NavLink to="/register">
                            <p className="text-xs text-green-500 md:cursor-pointer">Daftar</p>
                        </NavLink>
                    </div>

                    <div className="section flex flex-col gap-2">
                        {
                            error &&
                            <div className="error-alert w-full flex gap-2 p-1 rounded-sm text-xs md:text-sm text-red-400 bg-red-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                <p>Username atau Password Salah</p>
                            </div>
                        }
                        <p className="text-xs font-bold text-gray-600">Nomor Hp atau Email</p>
                        <input className="w-full p-2 outline-none rounded-md border border-gray-300 focus:border-green-500" onChange={onChangeUsername}></input>
                        <p className="text-xs text-gray-500">Contoh: email@tokopedia.com</p>
                    </div>

                    <div className="section flex flex-col gap-2">
                        <p className="text-xs font-bold text-gray-600">Kata Sandi</p>
                        <input className="w-full p-2 outline-none rounded-md border border-gray-300 focus:border-green-500" onChange={onChangePassword}></input>
                    </div>

                    <div className="section flex justify-end">
                        <p className="text-xs text-green-500">Lupa kata sandi?</p>
                    </div>

                    <div>
                        <button className="w-full rounded-md bg-gray-300 p-2 text-gray-600" onClick={handleLogin}>Selanjutnya</button>
                    </div>

                </div>
            </div>
        </div>
    )
}