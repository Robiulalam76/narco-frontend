import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png'

const Navber = () => {
    const [open, setOpen] = useState(false)

    let navberRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!navberRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return (
        <nav ref={navberRef} className='py-4 uppercase border-b'>
            <div className='relative cursor-pointer flex justify-between items-center gap-6 lg:gap-10 h-16 px-4 max-w-[1440px] mx-auto'>

                <div className='flex justify-between items-center gap-12'>
                    <div className='hidden lg:block'>
                        <p className='text-black hover:text-[#51B591] font-semibold'>اتصل بنا</p>
                    </div>
                    <div className='hidden lg:block'>
                        <p className='text-black hover:text-[#51B591] font-semibold'>طلب خدمة</p>
                    </div>
                    <div className='hidden lg:block'>
                        <p className='text-black hover:text-[#51B591] font-semibold'>الخدمات</p>
                    </div>
                    <div className='hidden lg:block'>
                        <p className='text-black hover:text-[#51B591] font-semibold'>نبذه عنّا</p>
                    </div>
                    <div className='hidden lg:block'>
                        <Link to='/الرئيسية' className='text-black hover:text-[#51B591] font-semibold'>الرئيسية</Link>
                    </div>
                </div>


                <div className='flex-grow flex lg:justify-end items-center'>
                    <Link to='/'><img className='w-10 md:w-16' src={logo} alt="navberImage" /></Link>
                </div>

                {/* -----------toggler button----------- */}
                <div onClick={() => setOpen(!open)} className="w-10 lg:hidden text-blue-600">
                    {
                        open ? <span>
                            <svg className='w-8 ' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" ariaHidden="true" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd"></path></svg>
                        </span>
                            :
                            <span>
                                <svg className='w-6 ml-2 ' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"></path></svg>
                            </span>
                    }
                </div>
                {/* -----------toggler button end----------- */}

            </div>
            <div className={`absolute z-50 duration-300 border-r mt-[17px] lg:hidden flex flex-col-reverse justify-end items-start gap-6 w-72 min-h-screen bg-white px-4 py-4
            ${open ? 'left-0' : '-left-[300px]'}`}>
                <div className='lg:hidden px-4 cursor-pointer'>
                    <p className='text-black hover:text-[#51B591] font-semibold'>اتصل بنا</p>
                </div>
                <div className='lg:hidden px-4 cursor-pointer'>
                    <p className='text-black hover:text-[#51B591] font-semibold'>طلب خدمة</p>
                </div>
                <div className='lg:hidden px-4 cursor-pointer'>
                    <p className='text-black hover:text-[#51B591] font-semibold'>الخدمات</p>
                </div>
                <div className='lg:hidden px-4 cursor-pointer'>
                    <p className='text-black hover:text-[#51B591] font-semibold'>نبذه عنّا</p>
                </div>
                <div className='lg:hidden px-4 cursor-pointer'>
                    <Link to='/الرئيسية' className='text-black hover:text-[#51B591] font-semibold'>الرئيسية</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navber;