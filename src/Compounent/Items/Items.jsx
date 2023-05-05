import React from 'react';
import './Items.css'
import { BsHandThumbsUpFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Items = ({ chefdata }) => {
    const { id, name, position, photo, start_date } = chefdata;
    return (
        <div className='itemscard  w-50 my-10'>
            <div className="card  glass">
                <figure><img className='imgItems' src={photo} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <h2 className='text-xl'>Position: {position}</h2>
                    <h2  className='text-xl' > Year of Exprience : 7 year</h2>
                    <p  className='text-xl'>{start_date}</p>
                    <p className='text-2xl'> Corrupti perferendis modi quo eligendi illum exercitationem............</p>
                    <div className="flex w-full sm:flex-row justify-between mt-2">
                        <div><button className="btn btn-primary" type="button" ><Link to={`/chefdata/${id}`} >View Details</Link></button></div>
                        <div className='flex '><p className='mt-1 mx-2'><BsHandThumbsUpFill/></p> <p>500</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Items;