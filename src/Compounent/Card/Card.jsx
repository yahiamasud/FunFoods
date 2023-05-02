import React from 'react';
import Chefitem from '../ChefItem/Chefitem';

const Card = () => {
    return (
        <div className='container mt-20 '>
            <h2 className='text-center font-bold text-5xl'>Chaf all</h2>
            <div className='flex gap-3 my-20'>
                <Chefitem></Chefitem>
                <Chefitem></Chefitem>
                <Chefitem></Chefitem>
                <Chefitem></Chefitem>
            </div>

        </div>
    );
};

export default Card;