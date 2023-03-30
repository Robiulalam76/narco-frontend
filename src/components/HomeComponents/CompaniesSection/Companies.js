import React, { useRef, useState } from "react";
import { companyImages } from '../../../utils/homeData/companiesData';
import leftArrow from '../../../assets/icons/leftArrow.png'
import rightArrow from '../../../assets/icons/rightArrow.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Navigation } from "swiper";

const Companies = () => {
    const images = companyImages;
    return (
        <section className='mt-40' id='company' >
            <div className='flex flex-col-reverse md:flex-row items-center justify-center md:justify-between md:items-center gap-x-4 gap-y-12'>
                <div className='flex justify-between items-center gap-4'>
                    {/* <button className='min-w-[48px] h-12 flex justify-center items-center hover:bg-primary rounded-full'>
                        <img className='w-8' src={leftArrow} alt="" />
                    </button> */}
                    <Swiper
                        slidesPerView={8}
                        grid={{
                            rows: 2,
                        }}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        keyboard={{
                            enabled: true,
                        }}
                        navigation={true}
                        modules={[Keyboard, Navigation]}
                        className="mySwiper "
                    >
                        {
                            images?.map((img, i) => (
                                <SwiperSlide>
                                    <img className='max-h-[50px] min-h-[20px]' src={img?.img} alt="" />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                    {/* <button className='min-w-[48px] h-12 flex justify-center items-center hover:bg-primary rounded-full'>
                        <img className='w-8' src={rightArrow} alt="" />
                    </button> */}
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