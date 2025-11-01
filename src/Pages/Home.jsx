import React, { useEffect } from 'react'
import { GrProjects } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { toggleProject } from '../features/visibility/visibilitySlice';
const Home = () => {
    const dispatch = useDispatch();
    const homevis= useSelector((state)=>state.visibilty.home);
    useEffect(()=>{
        if(!homevis){
            document.body.style.overflow='hidden';
        }
        
    },[homevis])
    const handleProject =()=>{
        dispatch(toggleProject())
    }
    const handleWhatsApp = () => {
        const phoneNumber = "923152931279";
        const message = "Hi! I am interested in your services";
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    }
    const handleMeeting = ()=>{
        const link ="https://calendly.com/chaudaryzafar279/new-meeting"
        window.open(link,'_blank');
    }
    return (
        <>
            <div className='w-full mt-30  min-h-screen bg-transparent text-white flex flex-col items-center lg:flex-row p- sm:p-12 md:p-16 lg:p-20 overflow-x-hidden z-20'>
                <div className={`w-full p-10 lg:w-1/2 h-full flex flex-col  justify-center bg-transparent order-2 lg:order-1 mt-8 lg:mt-0 fixed top-0  ${homevis?"translate-x-0":"-translate-x-480"} transition-all duration-700 `}>
                    <h1 className='text-white font-Mona font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[140px] leading-tight'>Zafar <br /> Hussain</h1>
                    <p className='text-white/50 font-Mona text-sm sm:text-base md:text-lg mt-5 leading-6 sm:leading-7 pr-0 lg:pr-8'> Welcome to my page! I'm Zafar — a business problem solver who helps brands grow and succeed through smart digital solutions. Let's turn your ideas into real results that drive your business forward.</p>
                    <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 sm:mt-10'>
                        <Button handleAction={handleProject} title={'Projects'} icon={<GrProjects />} />
                        <Button handleAction={handleWhatsApp} title={'WhatsApp'} icon={<FaWhatsapp />} />
                        <Button handleAction={handleMeeting} title={'Book Now'} icon={<SlCalender />} />
                    </div>
                </div>
                <div className={`w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-screen bg-black lg:absolute right-0 top-0 order-1 lg:order-2  ${homevis?"translate-x-0":"translate-x-480"} transition-all duration-300`}>
                    <img className='w-full h-full object-cover' src="/Hero-bg.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Home