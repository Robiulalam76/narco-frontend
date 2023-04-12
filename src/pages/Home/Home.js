import React from 'react';
import About from '../../components/HomeComponents/AboutSection/About';
import Banner from '../../components/HomeComponents/Banner/Banner';
import BigButton from '../../components/HomeComponents/BgButtonSection/BigButton';
import Companies from '../../components/HomeComponents/CompaniesSection/Companies';
import OrderForm from '../../components/HomeComponents/OrderForm/OrderForm';
import Service from '../../components/HomeComponents/ServicesSection/Service';

const Home = () => {
    return (
        <main className='mx-auto'>
            <Banner />
            <div className='max-w-[1440px] mx-auto px-4 overflow-hidden'>
                <About />
                <Companies />
                <BigButton />
                <Service />
                <OrderForm />
            </div>
        </main>
    );
};

export default Home;