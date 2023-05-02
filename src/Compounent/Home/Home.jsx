import React from 'react';
import Bannar from '../Bannar/Bannar';
import Card from '../card/card';
import Section1 from '../Section1/Section1';
import Carousel from '../Carousel/Carousel';


const Home = () => {
    return (
        <div className=''>
            <Bannar></Bannar>
            <Card></Card>
            <Carousel></Carousel>
            <Section1></Section1>
        </div>
    );
};

export default Home;