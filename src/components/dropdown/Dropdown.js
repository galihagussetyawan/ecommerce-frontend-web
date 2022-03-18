import React from "react";

export default function Dropdown(props) {
    return (
        <div className="md:flex md:justify-center overflow-hidden">
            <div className="md:absolute md:w-screen md:h-screen md:top-28 md:left-0 md:z-0 md:bg-opacity-60 md:bg-gray-900"></div>
            <div className="w-auto hidden md:block md:absolute md:top-16 md:p-4 md:rounded-md md:border md:border-gray-100 md:overflow-hidden md:bg-white">
                {props.children}
            </div>
        </div>
    );
}