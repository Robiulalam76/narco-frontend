import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';
import Navber from '../components/Shared/Navber/Navber';

const Main = () => {
    return (
        <main className='bg-[#EFF7F4]'>
            <Navber />
            <Outlet />
            <Footer />
        </main>
    );
};

export default Main;