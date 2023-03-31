import React from 'react';
import location from "../../../assets/icons/location.png"
import twitter from "../../../assets/icons/twitter.png"
import instagram from "../../../assets/icons/instagram.png"
import whatsup from "../../../assets/icons/whatsup.png"
import img1 from '../../../assets/images/banner-images/img1.png'
import banner from '../../../assets/images/footer-images/img1.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className='relative mx-auto mt-32' id='contact' >
            <div style={{ backgroundImage: `url(${banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
                className='w-full h-[700px] rounded-t-[50px] relative overflow-hidden' >

                <div className="absolute top-0 w-full h-[700px] bg-secondary bg-opacity-75"></div>

                <div className='flex flex-col justify-center items-center w-full max-w-[1440px] h-[700px] absolute top-0 z-50 p-4 md:p-10 mt-8'>
                    <div className='grid md:grid-cols-2 gap-4 w-full'>
                        <div className='flex flex-col items-center md:items-end gap-4 w-full h-full'>
                            <Link target="_blank" to="https://maps.app.goo.gl/HfjnaW6pZPmU5i2N9?g_st=ic" className='w-44 h-16 mx-auto md:mr-0 flex justify-around items-center bg-white hover:bg-gray-200 rounded-2xl'>
                                <span className='text-primary font-bold text-xl'>الموقع</span>
                                <img className='w-6' src={location} alt="" />
                            </Link>
                            <h1 className='text-xl text-white text-right'>التواصل الاجتماعي</h1>
                            <div className='flex justify-end items-center gap-4'>
                                <div className='flex justify-center items-center w-14 h-14 bg-secondary hover:bg-primary duration-300 cursor-pointer rounded-full p-1'>
                                    <img className='w-8 h-8' src={twitter} alt="" />
                                </div>
                                <div className='flex justify-center items-center w-14 h-14 bg-secondary hover:bg-primary duration-300 cursor-pointer rounded-full p-1'>
                                    <img className='w-8 h-8' src={instagram} alt="" />
                                </div>
                                <a target="_blank" href='https://wa.me/8801751299132' className='flex justify-center items-center w-14 h-14 bg-secondary hover:bg-primary duration-300 cursor-pointer rounded-full p-1'>
                                    <img className='w-8 h-8' src={whatsup} alt="" />
                                </a>
                            </div>
                        </div>

                        <div className='order-first md:order-none flex flex-col items-center md:items-end gap-6 w-full h-full'>
                            <h1 className='text-5xl font-bold text-white text-center md:text-right'>تواصل معنّا</h1>
                            <div className='flex flex-col items-center md:items-end gap-2 w-full h-full text-center md:text-right text-white'>
                                <Link target="_blank" to="mailto:info@narco.com?body=Please Enter Your Message"
                                    className='hover:text-orange-200'>info@narco.com: الإيميل</Link>
                                <Link target="_blank" to="https://maps.app.goo.gl/HfjnaW6pZPmU5i2N9?g_st=ic"
                                    className='hover:text-orange-200'>A23, Ave 14 street, Saudi Arabia Riyadh 23456: العنوان</Link>
                                <Link to="tel:+ 0558854275" className='hover:text-orange-200'>الجوال: 0558854275</Link>
                            </div>
                        </div>
                    </div>

                    <div className='pt-32 w-full'>
                        <h1 className='text-center font-bold text-3xl md:text-5xl text-white'>شركة ناركو للموارد البشرية</h1>
                        <img className='w-24 mx-auto mr-0' src={img1} alt="" />
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Footer;