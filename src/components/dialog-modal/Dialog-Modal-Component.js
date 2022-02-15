import React, { Component, createRef } from 'react';

export default class DialogModalComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectorRef: createRef(null)
        }

    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleClickOutside = event => {

        if (this.state.selectorRef.current && !this.state.selectorRef.current.contains(event.target)) {
            this.props.closeAction();
        }
    }
    render() {
        return (
            <div className='w-screen h-screen flex justify-center items-center z-20 fixed bg-opacity-50 bg-black'>
                <div className='w-auto h-auto p-5 flex flex-col rounded-md bg-white' ref={this.state.selectorRef} onClick={this.handleClickOutside}>

                    {/* close button */}
                    <div className='w-full h-auto flex justify-end'>
                        <button className=' text-gray-600' onClick={this.props.closeAction}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    {/* end close button */}

                    {/* CONTENT */}
                    {this.props.children}
                    {/* END CONTENT */}


                </div>
            </div>
        );
    }

}