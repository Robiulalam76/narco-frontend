import React from 'react';
import About from '../../components/Shared/HomeComponents/AboutSection/About';
import Banner from '../../components/Shared/HomeComponents/Banner/Banner';
import Companies from '../../components/Shared/HomeComponents/CompaniesSection/Companies';

const Home = () => {
    return (
        <main className='mx-auto'>
            <Banner />
            <div className='max-w-[1440px] mx-auto px-4'>
                <About />
                <Companies />
            </div>
        </main>
    );
};

export default Home;