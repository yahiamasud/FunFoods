import React from 'react';
import img from '/public/pineapple-supply-co-qWlkCwBnwOE-unsplash (1).jpg';
import './bannnar.css'

const Bannar = () => {
    return (
        <div className="hero  bg-base-200">
        <div className=" flex  flex-md-co flex-col lg:flex-row">
          <img src={img} className="bannarimg  shadow-2xl w-50" />
          <div className='w-50  flex flex-col justify-center  text-center '>
            <h1 className="text-6xl font-bold">Fun Food offer!</h1>
            <p className="py-6">We have delicious food here grab it soon or it will be gone for a very limited time don't pay much</p>
            <button className="w-20 mx-auto  btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Bannar;