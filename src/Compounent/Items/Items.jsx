import React from 'react';
import './Items.css'
import { Link } from 'react-router-dom';

const Items = ({chefdata}) => {
    const {name, id,photo } = chefdata ;
    return (
        <div className='  w-50 my-10'>
            <div className="card  glass">
                <figure><img className='imgItems' src={photo} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name:{name}</h2>
                    <h2>position:{}</h2>
                    <p>How to park your car at your garage?</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to={"/Datials"}>View Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Items;