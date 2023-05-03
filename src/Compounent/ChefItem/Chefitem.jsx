import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import Items from '../items/items'

const Chefitem = () => {
    const [loaddata , setLoaddata] = useState([]);

    // useEffect(() => {
    //     fetch('https://assingmen-yahiamasud.vercel.app/chefdata')
    //         .then(res => res.json())
    //         .then(data => setLoaddata(data))
    //         .catch(error => console.error(error))
    //         console.log(loaddata);
    // }, [])

    // console.log(loaddata);
    return (
        <div className='container'>
            <h2 className='text-center font-bold text-5xl'>Chaf all</h2>
            <div className='container flex flex-4 mt-4'>
            
                {
                    loaddata.map( datas => <Items key={datas.id} chefdata={chefdata}></Items>)
                }
                
                
            </div>

        </div>
    );
};

export default Chefitem;