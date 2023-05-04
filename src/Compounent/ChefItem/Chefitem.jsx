import React, { useEffect } from 'react';
import { useState } from 'react';
import Items from '../items/items'

const ChefItem = () => {
    const [loaddata, setLoaddata] = useState([]);

    useEffect(() => {
        fetch('https://assingmen-yahiamasud.vercel.app/chefdata')
            .then(res => res.json())
            .then(data => setLoaddata(data))
            .catch(error => console.error(error))

    }, [])

    return (
        <div className='container'>
            <h2 className='text-center font-bold text-5xl mt-6'>Chaf all</h2>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        loaddata.map(chefdata => <Items key={chefdata.id} chefdata={chefdata}></Items>)
                    }
                </div>
        </div>
    );
};

export default ChefItem;