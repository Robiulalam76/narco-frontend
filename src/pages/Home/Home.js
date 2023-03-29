import React from 'react';
import About from '../../components/Shared/HomeComponents/AboutSection/About';
import Banner from '../../components/Shared/HomeComponents/Banner/Banner';
import BigButton from '../../components/Shared/HomeComponents/BgButtonSection/BigButton';
import Companies from '../../components/Shared/HomeComponents/CompaniesSection/Companies';
import Service from '../../components/Shared/HomeComponents/ServicesSection/Service';

const Home = () => {
    return (
        <main className='mx-auto'>
            <Banner />
            <div className='max-w-[1440px] mx-auto px-4'>
                <About />
                <Companies />
                <BigButton />
                <Service />
            </div>
        </main>
    );
};

export default Home;