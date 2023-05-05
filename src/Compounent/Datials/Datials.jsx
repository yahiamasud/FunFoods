import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Datials = () => {
    const [items , setItems]=useState([])
    const {id}=useParams();
    useEffect(()=>{
        fetch(`https://assingmen-yahiamasud.vercel.app/chefdata/${id}`)
        .then((res)=>res.json())
        .then((data)=>setItems(data) )
    },[]);
    console.log(items)
    return (
        <div className='container'>
            <div >
                <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto ad necessitatibus explicabo corporis blanditiis a praesentium perferendis fuga doloremque assumenda, soluta excepturi deserunt aperiam mollitia, ducimus repellendus. Obcaecati, assumenda laudantium!</h1>
            </div>
        </div>
    )
};

export default Datials;