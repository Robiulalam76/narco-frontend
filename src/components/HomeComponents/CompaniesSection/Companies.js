import React from "react";
import { companyImages } from '../../../utils/homeData/companiesData';
import leftArrow from '../../../assets/icons/leftArrow.png'
import rightArrow from '../../../assets/icons/rightArrow.png'

import img1 from '../../../assets/images/company-images/1.png'
import img2 from '../../../assets/images/company-images/2.png'
import img3 from '../../../assets/images/company-images/3.png'
import img4 from '../../../assets/images/company-images/4.png'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./companies.module.css"

// import required modules
import { Autoplay, FreeMode, Navigation } from "swiper";

const Companies = () => {
    const images = companyImages;

    // console.log(images);
    return (
        <section className='mt-40' id='company' >
            <div className='flex flex-col-reverse md:flex-row items-center justify-center md:justify-between md:items-center gap-x-4 gap-y-4'>
                {/* <div className='flex justify-between items-center gap-4'> */}
                {/* <button className='min-w-[48px] h-12 flex justify-center items-center hover:bg-primary rounded-full'>
                        <img className='w-8' src={leftArrow} alt="" />
                    </button> */}
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    freeMode={true}
                    navigation={true}
                    modules={[Autoplay, FreeMode, Navigation]}
                    className="mySwiper max-w-[350px] md:max-w-[1200px]"
                >
                    {/* {
                        images?.map((image, i) => (
                            <SwiperSlide><img key={i} className='max-w-[600px]' src={image?.img} alt="" /></SwiperSlide>
                        ))
                    } */}
                    <SwiperSlide><img className='w-full md:w-[900px] mx-auto' src={img1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-full md:w-[900px] mx-auto' src={img2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-full md:w-[900px] mx-auto' src={img3} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-full md:w-[900px] mx-auto' src={img4} alt="" /></SwiperSlide>
                </Swiper>

                {/* <button className='min-w-[48px] h-12 flex justify-center items-center hover:bg-primary rounded-full'>
                        <img className='w-8' src={rightArrow} alt="" />
                    </button> */}
                {/* </div> */}
                <div className='flex flex-col items-center justify-center md:items-end gap-4'>
                    <span className='text-primary text-xl font-bold primaryFont'>عملاء</span>
                    <h1 className='text-primary text-5xl font-bold primaryFont'>عملائنا</h1>
                </div>
            </div>
        </section>
    );
};

export default Companies;