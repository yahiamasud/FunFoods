import React from 'react';
import './Items.css'
import { Link } from 'react-router-dom';

const Items = ({chefdata}) => {
    const {name, position ,photo,start_date} = chefdata ;
    return (
        <div className='itemscard  w-50 my-10'>
            <div className="card  glass">
                <figure><img className='imgItems' src={photo} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <h2 className='text-xl'>Position: {position}</h2>
                    <h2>Year of Exprience : 7 year</h2>
                    <p>{start_date}</p>
                    <p> Corrupti perferendis modi quo eligendi illum exercitationem molestiae magnam voluptatum dolore dignissimos? Blanditiis voluptate esse facere, provident in unde officiis eligendi modi.</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to="/Datials">View Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Items;