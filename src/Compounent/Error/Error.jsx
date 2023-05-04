import React from 'react';
import { useRouteError } from 'react-router-dom';
import img from '/public/error-icon-13.png'

const Error = () => {
    const error = useRouteError();
    return (
        <div className='container flex '>
            <div className='mx-auto justify-center mt-5 '>
                <img src={img} alt="" />
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>

        </div>
    );
};

export default Error;