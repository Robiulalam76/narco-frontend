import React from 'react';
import About from '../../components/Shared/HomeComponents/AboutSection/About';
import Banner from '../../components/Shared/HomeComponents/Banner/Banner';
import BigButton from '../../components/Shared/HomeComponents/BgButtonSection/BigButton';
import Companies from '../../components/Shared/HomeComponents/CompaniesSection/Companies';

const Home = () => {
    return (
        <main className='mx-auto'>
            <Banner />
            <div className='max-w-[1440px] mx-auto px-4'>
                <About />
                <Companies />
                <BigButton />
            </div>
        </main>
    );
};

export default Home;