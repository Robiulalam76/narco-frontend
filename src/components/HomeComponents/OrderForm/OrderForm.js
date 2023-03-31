import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import smallDownArrow from '../../../assets/icons/smallDownArrow.png'
import send from '../../../assets/icons/send.png'
import { toast } from 'react-hot-toast';

const types = ["استقدام خارجي", "استقطاب داخلي"]
const durations = ["ستة أشهر-", "سنة-", "سنتين-", "غير ذلك-"]

const OrderForm = () => {
    const [requestTypeData, setRequestTypeData] = useState('')
    const [durationData, setDurationData] = useState('')
    const [openDropdown, setOpenDropdown] = useState(0)
    const form = useRef();

    const handleRequestType = (data) => {
        setRequestTypeData(data);
        setOpenDropdown(0)
    }
    const handleRequestDuration = (data) => {
        setDurationData(data);
        setOpenDropdown(0)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(e.target);

        emailjs.sendForm('service_bsaaisv', 'template_7z24f8z', form.current, '9dKX9Y2VsLt6aYN6Y')
            .then((result) => {
                toast.success('تم إرسال الرسالة بنجاح!')
                e.target.reset()
            }, (error) => {
                toast.error('فشل ارسال الرسالة!')
            });
    }
    return (
        <section
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-anchor-placement="bottom-bottom"
            className='mt-32 pb-16' id='order' >
            <form ref={form} onSubmit={handleSubmit} >
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <input className='w-full h-16 px-4 text-right rounded-3xl border-4 border-secondary focus:border-primary focus:outline-none'
                        type="number" name='number' placeholder='رقم الجوال' required />

                    <input className='w-full h-16 px-4 text-right rounded-3xl border-4 border-secondary focus:border-primary focus:outline-none'
                        type="text" name='name' placeholder='الاسم' required />

                    <input className='w-full h-16 px-4 text-right rounded-3xl border-4 border-secondary focus:border-primary focus:outline-none'
                        type="number" name='numberCount' placeholder='عدد العماله' />

                    <div className='relative'>
                        <div onClick={() => setOpenDropdown(openDropdown === 1 ? 0 : 1)}
                            className={`flex items-center gap-2 w-full h-16 px-4 text-right border-4 border-secondary focus:border-primary bg-white
                    ${openDropdown === 1 ? 'rounded-t-3xl' : 'rounded-3xl'}`}>
                            <img className='w-5' src={smallDownArrow} alt="" />
                            <input className='cursor-pointer w-full h-full px-4 text-right rounded-3xl border-4 border-none focus:border-none focus:outline-none'
                                type="text" name='request_Type' defaultValue={requestTypeData} readOnly placeholder='نوع الطلب' />
                        </div>
                        {
                            openDropdown === 1 && <div className='absolute z-50 grid grid-cols-1 h-fit w-full border-x-4 border-b-4 border-secondary rounded-ee-3xl rounded-b-3xl bg-white max-h-56 overflow-y-auto'>
                                {
                                    types?.map((type, i) => (
                                        <h1 onClick={() => handleRequestType(type)} key={i}
                                            className="flex justify-end items-center w-full h-16 cursor-pointer hover:bg-primary hover:text-white text-right" >
                                            <span className='px-4'>{type}</span>
                                        </h1>
                                    ))
                                }
                            </div>
                        }
                    </div>

                    <input className='md:col-span-2 w-full h-16 px-4 text-right rounded-3xl border-4 border-secondary focus:border-primary focus:outline-none'
                        type="text" name='details' placeholder='المهن المطلوبة و الجنسية' />


                    <div className='relative'>
                        <div onClick={() => setOpenDropdown(openDropdown === 2 ? 0 : 2)}
                            className={`flex items-center gap-2 w-full h-16 px-4 text-right border-4 border-secondary focus:border-primary bg-white
                    ${openDropdown === 2 ? 'rounded-t-3xl' : 'rounded-3xl'}`}>
                            <img className='w-5' src={smallDownArrow} alt="" />
                            <input className='cursor-pointer w-full h-full px-4 text-right rounded-3xl border-4 border-none focus:border-none focus:outline-none'
                                type="text" name='contract_duration' defaultValue={durationData} readOnly placeholder='مدة العقد' />
                        </div>
                        {
                            openDropdown === 2 && <div className='absolute z-40 grid grid-cols-1 h-fit w-full border-x-4 border-b-4 border-secondary rounded-ee-3xl rounded-b-3xl bg-white max-h-56 overflow-y-auto'>
                                {
                                    durations?.map((d, i) => (
                                        <h1 onClick={() => handleRequestDuration(d)} key={i}
                                            className="flex justify-end items-center w-full h-16 cursor-pointer hover:bg-primary hover:text-white text-right" >
                                            <span className='px-4'>{d}</span>
                                        </h1>
                                    ))
                                }
                            </div>
                        }
                    </div>

                    <input className='w-full h-16 px-4 text-right rounded-3xl border-4 border-secondary focus:border-primary focus:outline-none'
                        type="number" name='number_hours' placeholder='عدد ساعات العمل اليومية' />
                </div>


                <button type='submit' className='flex justify-around items-center w-60 h-20 bg-primary hover:bg-darkPrimary text-white font-bold text-xl mx-auto rounded-3xl mt-8'>
                    <span>إرسال الطلب</span>
                    <img className='w-6' src={send} alt="" />
                </button>

            </form>
        </section>
    );
};

export default OrderForm;