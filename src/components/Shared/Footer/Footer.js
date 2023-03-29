import React from 'react';
import location from "../../../assets/icons/location.png"
import twitter from "../../../assets/icons/twitter.png"
import instagram from "../../../assets/icons/instagram.png"
import whatsup from "../../../assets/icons/whatsup.png"
import img1 from '../../../assets/images/banner-images/img1.png'

const Footer = () => {
    return (
        <section className='max-w-[1440px] mx-auto px-4 mt-32 pb-6'>
            <div className='w-full h-[700px] rounded-t-3xl relative' >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7496150.225879024!2d85.84603134112554!3d23.452181092347267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1680084534328!5m2!1sen!2sbd" className='w-full h-full rounded-t-3xl' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className='w-full h-[700px] absolute top-0 z-10 bg-secondary bg-opacity-75'></div>
                <div className='flex flex-col justify-center items-center w-full h-[700px] absolute top-0 z-50 p-4 md:p-10'>
                    <div className='grid md:grid-cols-2 gap-4 w-full'>
                        <div className='flex flex-col items-center md:items-end gap-4 w-full h-full'>
                            <button className='w-44 h-16 mx-auto md:mr-0 flex justify-around items-center bg-white hover:bg-gray-200 rounded-2xl'>
                                <span className='text-primary font-bold text-xl'>الموقع</span>
                                <img className='w-6' src={location} alt="" />
                            </button>
                            <h1 className='text-xl text-white text-right'>التواصل الاجتماعي</h1>
                            <div className='flex justify-end items-center gap-4'>
                                <div className='flex justify-center items-center w-14 h-14 bg-secondary hover:bg-primary duration-300 cursor-pointer rounded-full p-1'>
                                    <img className='w-8 h-8' src={twitter} alt="" />
                                </div>
                                <div className='flex justify-center items-center w-14 h-14 bg-secondary hover:bg-primary duration-300 cursor-pointer rounded-full p-1'>
                                    <img className='w-8 h-8' src={instagram} alt="" />
                                </div>
                                <div className='flex justify-center items-center w-14 h-14 bg-secondary hover:bg-primary duration-300 cursor-pointer rounded-full p-1'>
                                    <img className='w-8 h-8' src={whatsup} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className='order-first md:order-none flex flex-col items-center md:items-end gap-6 w-full h-full'>
                            <h1 className='text-5xl font-bold text-white text-center md:text-right'>تواصل معنّا</h1>
                            <div className='flex flex-col items-center md:items-end gap-2 w-full h-full text-white'>
                                <span>hello@narco.com: الإيميل</span>
                                <span>A23, Ave 14 street, Saudi Arabia Riyadh 23456: العنوان</span>
                                <span>الجوال: 0558854275</span>
                            </div>
                        </div>
                    </div>

                    <div className='pt-44 w-full'>
                        <h1 className='text-center font-bold text-3xl md:text-5xl text-white'>شركة ناركو للموارد البشرية</h1>
                        <img className='w-24 mx-auto mr-0' src={img1} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;