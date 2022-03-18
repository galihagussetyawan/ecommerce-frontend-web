import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';

export default function HomePageLoading() {
    return (
        <Fragment>
            <div className='md:w-3/4 md:h-auto space-y-5'>

                <div className='special-product space-y-3'>
                    <div className='md:w-1/6 md:h-8 rounded-md animate-pulse md:bg-gray-200'></div>
                    <div className='md:grid md:grid-cols-4 gap-4'>
                        <div className='md:w-auto md:h-44 rounded-md animate-pulse md:bg-gray-200'></div>
                        <div className='md:w-auto md:h-44 rounded-md animate-pulse md:bg-gray-200'></div>
                        <div className='md:w-auto md:h-44 rounded-md animate-pulse md:bg-gray-200'></div>
                        <div className='md:w-auto md:h-44 rounded-md animate-pulse md:bg-gray-200'></div>
                    </div>
                </div>

                <div className='space-y-3'>
                    <div className='md:w-1/6 md:h-8 rounded-md animate-pulse md:bg-gray-200'></div>
                    <div className='md:grid md:grid-cols-5 gap-4'>
                        <div className='md:w-auto md:h-80 rounded-md animate-pulse md:bg-gray-200'></div>
                        <div className='md:w-auto md:h-80 rounded-md animate-pulse md:bg-gray-200'></div>
                        <div className='md:w-auto md:h-80 rounded-md animate-pulse md:bg-gray-200'></div>
                        <div className='md:w-auto md:h-80 rounded-md animate-pulse md:bg-gray-200'></div>
                        <div className='md:w-auto md:h-80 rounded-md animate-pulse md:bg-gray-200'></div>
                    </div>
                </div>

                <div className='space-y-3'>
                    <div className='md:w-1/6 md:h-8 rounded-md animate-pulse md:bg-gray-200'></div>
                    <div className='md:grid md:grid-cols-5 gap-4'>
                        <div className='md:w-auto md:h-80 rounded-md animate-pulse md:bg-gray-200'></div>
                        <div className='md:w-auto md:h-80 rounded-md animate-pulse md:bg-gray-200'></div>
                        <div className='md:w-auto md:h-80 rounded-md animate-pulse md:bg-gray-200'></div>
                        <div className='md:w-auto md:h-80 rounded-md animate-pulse md:bg-gray-200'></div>
                        <div className='md:w-auto md:h-80 rounded-md animate-pulse md:bg-gray-200'></div>
                    </div>
                </div>


            </div>
        </Fragment>
    );
}