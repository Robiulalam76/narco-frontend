import React from 'react';
import { companyImages } from '../../../../utils/homeData/companiesData';
import leftArrow from '../../../../assets/icons/leftArrow.png'
import rightArrow from '../../../../assets/icons/rightArrow.png'

const Companies = () => {
    const images = companyImages;
    return (
        <section className='mt-40'>
            <div className='flex flex-col-reverse md:flex-row items-center justify-center md:justify-between md:items-center gap-x-4 gap-y-12'>
                <div className='flex justify-between items-center gap-4'>
                    <button className='min-w-[48px] h-12 flex justify-center items-center hover:bg-primary rounded-full'>
                        <img className='w-8' src={leftArrow} alt="" />
                    </button>
                    <div className='grid grid-cols-7 gap-x-4 gap-y-10'>
                        {
                            images?.map((img, i) => (
                                <img className='max-h-[50px] min-h-[20px]' src={img?.img} alt="" />
                            ))
                        }
                    </div>
                    <button className='min-w-[48px] h-12 flex justify-center items-center hover:bg-primary rounded-full'>
                        <img className='w-8' src={rightArrow} alt="" />
                    </button>
                </div>
                <div className='flex flex-col items-center justify-center md:items-end gap-4'>
                    <span className='text-primary text-xl font-bold'>عملاء</span>
                    <h1 className='text-primary text-5xl font-bold'>عملائنا</h1>
                </div>
            </div>
        </section>
    );
};

export default Companies;