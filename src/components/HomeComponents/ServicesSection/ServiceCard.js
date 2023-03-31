import React from 'react';

const ServiceCard = ({ service }) => {
    return (
        <div data-aos={service?.animation}
            data-aos-easing="linear"
            data-aos-duration="1000"
            className='bg-white grid md:grid-cols-2 w-full h-fit md:h-96 rounded-[50px] shadow'>
            <div className='flex flex-col md:items-end gap-2 md:gap-6 py-8 px-4 md:px-4'>
                <h1 className='text-3xl font-bold text-right text-secondary'>{service?.title}</h1>
                <p className='text-sm text-right text-secondary'>{service?.description}</p>
            </div>
            <div className='order-first md:order-none w-full h-60 md:h-96 overflow-hidden md:rounded-r-[50px] rounded-t-[50px] md:rounded-none'>
                <img className='w-full h-60 md:h-96 hover:scale-125 object-cover duration-500' src={service?.img} alt="" />
            </div>
        </div>
    );
};

export default ServiceCard;