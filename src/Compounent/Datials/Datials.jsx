import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './daa.css';
import { AuthContext } from '../../providers/AuthProviders';

const Datials = () => {
    const [items, setItems] = useState([])
    const {loading }= useContext(AuthContext)
    const { id } = useParams();
    
    useEffect(() => {
        fetch(`https://assingmen-yahiamasud.vercel.app/chefdata/${id}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                setItems(data)
            });
    }, [id]);
    if(!items){
        return loading
    }
  
    return (
        <div className='container'>
            <div className=" bg-base-100 shadow-xl">
            
                <img className='detialphoto' src={items?.items?.photo} alt="" />
                <div className="card-body">
                    <h2 className="card-title">name {items?.items?.name }</h2>

                    <h2 className='card-title'>Position:-{items?.items?.position}</h2>
                    <h2 className='card-title'>Company:-{items?.items?.company}</h2>
                    <h2 className='card-title'>Experince:-7year</h2>
                    <h2 className='card-title'>Datials:-{items?.items?.dates}</h2>
                    <p></p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link to="/">back</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Datials;
