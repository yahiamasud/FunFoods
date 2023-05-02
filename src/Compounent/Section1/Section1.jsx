import React from 'react';
import imgs1 from '/public/stephanie-mccabe-nTqbkNSxICw-unsplash.jpg';
import imgs2 from '/public/samantha-gades-RHAtRIT3-CE-unsplash.jpg';
import imgs3 from '/public/rodeo-project-management-software-b2L3f7ednYE-unsplash.jpg';

const Section1 = () => {
    return (
        <div className='container mx-auto mt-20' >
            <h2 className='text-5xl text-center font-bold'>Catering for various events</h2>
            <div className='flex gap-5 my-20 '>
                <div className="card  bg-base-100 shadow-xl">
                    <div className="avatar w-100 flex justify-center">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={imgs1} />
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Birthdays</h2>
                        <p>Book a table for two with the best Italian dishes served for the anniversary. Or reserve a bigger one for a huge family to get together one sunny day. Gather your friends together</p>
                    </div>
                </div>
                <div className="card   bg-base-100 shadow-xl">
                    <div className="avatar w-100 flex justify-center">
                        <div className="w-24   rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={imgs2}  />
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Weddings</h2>
                        <p>75 seats for 75 guests are all at your disposal. Organize a party for a huge company and have fun in the restaurant. Show your friends the real world of European cuisine and especially Italian vibes.</p>

                    </div>
                </div>
                <div className="card   bg-base-100 shadow-xl">
                    <div className="avatar w-100 flex justify-center">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={imgs3} />
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Meetings</h2>
                        <p>You can also impress your boss by choosing the best place for corporate party with your co-workers. Reserve a spacious room, set the menu, choose the drinks and invite guests.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section1;