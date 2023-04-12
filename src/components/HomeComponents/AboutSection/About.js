import React from 'react';
import { firstIems, secondIems } from '../../../utils/homeData/about';

const About = () => {
    const firstData = firstIems;
    const secondData = secondIems;
    // console.log(items);
    return (
        <section id='about'>
            <div
                className='grid md:grid-cols-2 gap-6 md:gap-12 mt-12 cursor-pointer overflow-hidden'>
                {
                    firstData?.map((item, i) => (
                        <div data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1000"
                            key={i} className='flex flex-col-reverse md:flex-row items-center md:justify-end gap-8 p-6 bg-secondary h-fit md:h-44 rounded-3xl'>
                            <div className='flex flex-col items-center md:items-end gap-4'>
                                <h1 className='text-5xl font-bold text-primary'>{item?.point}</h1>
                                <span className='font-bold text-2xl text-white primaryFont'>{item?.title}</span>
                            </div>
                            <img className='w-16' src={item?.img} alt="" />
                        </div>
                    ))
                }
            </div>
            <div
                className='grid md:grid-cols-2 gap-6 md:gap-12 mt-10 cursor-pointer'>
                {
                    secondData?.map((item, i) => (
                        <div data-aos="fade-left"
                            data-aos-easing="linear"
                            data-aos-duration="1000"
                            key={i} className='flex flex-col-reverse md:flex-row items-center md:justify-end gap-8 p-6 bg-white shadow-sm h-fit md:h-44 rounded-3xl'>
                            <div className='flex flex-col items-center md:items-end gap-4'>
                                <h1 className='text-5xl font-bold text-primary primaryFont'>{item?.title}</h1>
                                <span className='font-bold text-center md:text-right text-sm text-black primaryFont'>{item?.description}</span>
                            </div>
                            <img className='w-16' src={item?.img} alt="" />
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default About;