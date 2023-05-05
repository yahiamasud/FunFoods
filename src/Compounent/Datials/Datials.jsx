import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './daa.css';

const Datials = () => {
    const [items, setItems] = useState([])
    const { id } = useParams();
    // const{ name }= items.items;
    useEffect(() => {
        fetch(`https://assingmen-yahiamasud.vercel.app/chefdata/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setItems(data)
            });
    }, [id]);
    console.log();
    return (
        <div className='container'>
            <div className=" bg-base-100 shadow-xl">
            
                <img className='detialphoto' src="" alt="" />
                <div className="card-body">
                    <h2 className="card-title">name:-</h2>
                    <h2 className='card-title'>Position:-</h2>
                    <h2 className='card-title'>Company:-</h2>
                    <h2 className='card-title'>Datials:-</h2>
                    <p></p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link to="/Home">back</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Datials;
