import React from 'react';

export default function AlertNotification(props) {
    const handlingStatus = () => {

        switch (props.status) {
            case "SUCCESS":
                return 'md:bg-green-50 border-green-500';

            case "ERROR":
                return 'md:bg-red-50 border-red-500';

            default:
                break;
        }
    };

    const handleIconStatus = () => {
        switch (props.status) {
            case "SUCCESS":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className="md:w-8 md:h-8" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                );

            case "ERROR":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                );

            default:
                break;
        }
    };

    const handleBackgrounIcon = () => {
        switch (props.status) {
            case "SUCCESS":
                return 'md:bg-green-500';

            case "ERROR":
                return 'md:bg-red-500';

            default:
                break;
        }
    };

    return (
        <div className={`md:w-80 md:absolute md:top-32 md:right-32 md:z-20 rounded-lg border md:bg-opacity-90 ${handlingStatus()}`}>
            <div className='flex justify-between items-center space-x-2 md:p-2'>

                <div className={`icon md:p-1 rounded-xl text-white ${handleBackgrounIcon()}`}>
                    {handleIconStatus()}
                </div>
                <div className='status-message md:w-full text-gray-800'>
                    <h1 className='md:font-bold'>{props.message}</h1>
                </div>
                <div className='close-icon'>
                    <button className='flex items-center text-gray-400' onClick={props.onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}