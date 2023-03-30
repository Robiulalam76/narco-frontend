import React from 'react';
import { serviceItems } from '../../../utils/homeData/serviceData';
import ServiceCard from './ServiceCard';

const Service = () => {
    const services = serviceItems;
    return (
        <section className='mt-28' id='service' >
            <div>
                <h1 className='text-secondary font-bold text-center text-2xl'>بعض الخدمات</h1>
                <h1 className='text-secondary font-bold text-center text-6xl md:text-9xl mt-3'>خدماتنا</h1>
            </div>

            <div className='grid md:grid-cols-2 gap-6 md:gap-12 mt-9'>
                {
                    services?.map((service, i) => <ServiceCard key={i} service={service} />)
                }
            </div>
        </section>
    );
};

export default Service;