import React from 'react';
import { Link } from 'react-router-dom';
import eye from "../../../assets/icons/big-button-icons/eye.png"
import leftArrow from "../../../assets/icons/big-button-icons/leftArrow.png"
import pdf from '../../../utils/pdf/narco.pdf'

const BigButton = () => {
    return (
        <Link data-aos="zoom-out-down"
            data-aos-duration="1000"
            data-aos-easing="ease-in-back"
            target="_blank" to="https://www.ahmadalanazi.com/narco/profile.pdf"

            className='h-96 md:h-[600px] w-full grid md:grid-cols-2 items-center gap-4 p-6 md:p-20 rounded-3xl mt-40 bg-primary hover:bg-darkPrimary duration-500 cursor-pointer overflow-hidden'>
            <div className='w-full h-full flex justify-center items-center'>
                <img className='w-40 md:w-80' src={eye} alt="" />
            </div>
            <div className='flex flex-col justify-end items-end gap-8 w-full h-full'>
                <div className='flex items-end gap-4'>
                    <img className='w-20' src={leftArrow} alt="" />
                    <h1 className='text-white text-2xl font-bold primaryFont'>الملف التعريفي</h1>
                </div>
                <h1 className='text-white font-bold primaryFont text-4xl'>تعّرف علينا أكثر</h1>
            </div>
        </Link>
    );
};

export default BigButton;