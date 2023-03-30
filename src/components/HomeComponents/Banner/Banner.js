import React from 'react';
import banner from '../../../assets/images/banner-images/banner.png'
import img1 from '../../../assets/images/banner-images/img1.png'
import '../../../fonts/ArbFONTS-The-Sans-Plain.otf'

const Banner = () => {
    return (
        <section id='home' >
            <div style={{ backgroundImage: `url(${banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
                className="h-[660px] w-full mx-auto" >
                <div className='max-w-[1440px] pt-16 md:pt-44 px-4 mx-auto '>
                    <div className='flex flex-col md:flex-row items-center md:justify-between'>
                        <img src={img1} alt="" />
                        <div className='max-w-[660px]'>
                            <p className='text-white text-2xl text-center md:text-right'>تفخر شركة ناركو بكونها واحدة من الشركات العملاقة المرخصة من قبل وزارة الموارد البشرية السعودية لتقديم خدماتها للقطاع الخاص و قطاع الأفراد.</p>
                        </div>
                    </div>

                    <button className='w-80 h-24 mx-auto mt-8 rounded-[60px] border-4 border-white text-white font-bold bg-primary hover:bg-darkPrimary duration-300 flex justify-center items-center'>
                        <span className='text-2xl'>اطلب خدمة</span>
                    </button>

                </div>
            </div>
        </section>
    );
};

export default Banner;