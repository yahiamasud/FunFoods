import React from 'react';
import img1 from '../../../public/brooke-lark-wMzx2nBdeng-unsplash.jpg'
import img2 from '../../../public/dominik-martin-JYFmYif4n70-unsplash.jpg'
import img3 from '../../../public/jamie-street-tb5A-QTI6xg-unsplash.jpg'
import img4 from '../../../public/lily-banse--YHSwy6uqvk-unsplash.jpg'
import img5 from '../../../public/maja-petric-vGQ49l9I4EE-unsplash.jpg'
import './Carousel.css'
const Carousel = () => {
    return (
        <div className='container'>
            <h1 className='text-center text-5xl font-bold mb-6'>all food items show</h1>
            <div className="carousel w-full">
                <div id="slide4" className="carousel-item carsoulimg relative w-full">
                    <img src={img4} className="w-full rounded" />
                    <div className='m-5 text-2xl'><span className='font-bold underline'>Mutton Foods</span> <br></br> Amet consectetur adipisicing elit. Hic eum, itaque ex aperiam dolorem consequuntur eaque iure neque, odio fuga consequatur non similique repudiandae, dolore assumenda numquam quis quisquam libero?</div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide1" className="carousel-item carsoulimg relative w-full">
                    <img src={img1} className="w-full rounded " />
                    <div className='m-5 text-2xl'><span className='font-bold underline'>Apple Forest Bread</span> <br></br>  Apple forest bread is very fun to eat its ingredients are very mixed ginger flour and it is very healthy for boys and it is very soft and very soft you are good to eat</div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item carsoulimg relative w-full">
                    <img src={img2} className="w-full rounded" />
                    <div className='m-5 text-2xl'> <span className='font-bold underline'>Ginger Lemon Soup</span> <br></br>These are very good for the body and an ingredient made of ginger lemon sugar is good for the body and nutritious</div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item carsoulimg relative w-full">
                    <img src={img3} className="w-full rounded" />
                    <div className='m-5 text-2xl'><span className='font-bold underline'>All photos items</span> <br></br> Hic eum, itaque ex aperiam dolorem consequuntur eaque iure neque, odio fuga consequatur non similique repudiandae, dolore assumenda numquam quis quisquam libero?</div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item carsoulimg relative w-full">
                    <img src={img4} className="w-full rounded" />
                    <div className='m-5 text-2xl'><span className='font-bold underline'>Mutton Foods</span> <br></br> Amet consectetur adipisicing elit. Hic eum, itaque ex aperiam dolorem consequuntur eaque iure neque, odio fuga consequatur non similique repudiandae, dolore assumenda numquam quis quisquam libero?</div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item carsoulimg relative w-full">
                    <img src={img5} className="w-full rounded" />
                    <div className='m-5 text-2xl'><span className='font-bold underline '>Ginger Lemon Soup</span> <br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eum, itaque ex aperiam dolorem consequuntur eaque iure neque, odio fuga consequatur non similique repudiandae, dolore assumenda numquam quis quisquam libero?</div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Carousel;