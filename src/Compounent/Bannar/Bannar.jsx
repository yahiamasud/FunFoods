import React from 'react';
import img from '/public/the-storyteller-agency-co-97QhpsWNnCE-unsplash.jpg';
import Marquee from "react-fast-marquee";
import './bannnar.css'

const Bannar = () => {
  return (

    <div className=" bg-base-200">
      <Marquee className='text-2xl text-red-800'>
      You have a lot of interesting food here, if you login to this page, you will get all those food.
      </Marquee>
      <div className=" flex  flex-md-co flex-col lg:flex-row">
        <img src={img} className="bannarimg  shadow-2xl w-50" />
        <div className='w-50  flex flex-col justify-center  text-center '>
          <h1 className="text-6xl font-bold">Fun Food offer!</h1>
          <p className="py-6 text-3xl">We have delicious food here grab it soon or it will be gone for a very limited time don't pay much</p>
          <button className=" mx-auto  btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Bannar;