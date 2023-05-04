import React from 'react';
import { useRouteError } from 'react-router-dom';
import img from '/public/error-icon-13.png'

const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <img src={img} alt="" />
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default Error;