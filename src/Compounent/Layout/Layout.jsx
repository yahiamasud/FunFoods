import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import CopiRigt from '../CopiRignt/CopiRigt';

const Layout = () => {
    return (
        <div className='container mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <CopiRigt></CopiRigt>
        </div>
    );
};

export default Layout;