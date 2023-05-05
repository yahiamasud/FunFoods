import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './daa.css';

const Datials = () => {
    const [items , setItems]= useState([])
    const {id} = useParams();
    useEffect(()=>{
        fetch(`https://assingmen-yahiamasud.vercel.app/chefdata/${id}`)
        .then((res)=>res.json())
        .then((data)=>{
            // console.log(data);
            setItems(data);
        });
    },[id]);
    // console.log(items);
    return (
        <div className='container'>
            <div className=" bg-base-100 shadow-xl">
               <img className='detialphoto' src={items.items.photo}  alt="" />
                <div className="card-body">
                    <h2 className="card-title">name:-{items.items.name}</h2>
                    <h2 className='card-title'>Position:-{items.items.position}</h2>
                    <h2 className='card-title'>Company:-</h2>
                    <p>{items.items.dates}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link to="/Home">back</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Datials;