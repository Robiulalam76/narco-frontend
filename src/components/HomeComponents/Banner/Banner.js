import React from 'react';
import { Background, Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';
import banner from '../../../assets/images/banner-images/banner.png'
import img1 from '../../../assets/images/banner-images/img1.png'
import '../../../fonts/ArbFONTS-The-Sans-Plain.otf'
// style={{ backgroundImage: `url(${banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
const Banner = () => {
    return (
        <section id='home' >
            <Parallax strength={600}>
                <Background className="h-[660px] min-w-[100vw]">
                    <img className='w-full h-full object-cover' src={banner} alt="fill murray" />
                </Background>
                <div
                    className="relative overflow-hidden h-[660px] w-full mx-auto" >
                    <div className='max-w-[1440px] pt-16 md:pt-44 px-4 mx-auto '>
                        <div className='flex flex-col md:flex-row items-center md:justify-between'>
                            <img src={img1} alt="" />
                            <div className='max-w-[660px]'>
                                <p className='text-white text-2xl text-center md:text-right'>تفخر شركة ناركو بكونها واحدة من الشركات العملاقة المرخصة من قبل وزارة الموارد البشرية السعودية لتقديم خدماتها للقطاع الخاص و قطاع الأفراد.</p>
                            </div>
                        </div>

                        <a href='#order' className='w-80 h-24 mx-auto mt-8 rounded-[60px] border-4 border-white text-white font-bold bg-primary hover:bg-darkPrimary duration-300 flex justify-center items-center'>
                            <span className='text-2xl'>اطلب خدمة</span>
                        </a>

                    </div>
                </div>
            </Parallax>
        </section>
    );
};

export default Banner;