import React from 'react';
import Bannar from '../Bannar/Bannar';
import Section1 from '../Section1/Section1';
import Carousel from '../Carousel/Carousel'
import Chefitem from '../ChefItem/ChefItem';


const Home = () => {
    return (
        <div className=''>
            <Bannar></Bannar>
            <Chefitem></Chefitem>
            <Carousel></Carousel>
            <Section1></Section1>
        </div>
    );
};

export default Home;