import React from 'react'
import Button from './Button'
import { AiOutlineMail } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { toggleEmail, toggleHome } from '../features/visibility/visibilitySlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const handleEmail = ()=>{
      dispatch(toggleEmail())
  }
  const handleHome = ()=>{
    dispatch(toggleHome())
  }
  
  return (
    <div className='w-full h-20 md:h-28 bg-transparent fixed top-1 text-white flex z-20'>
      <div className='h-full w-1/2 flex items-center'>
        <img 
          onClick={handleHome} 
          className='h-12 md:h-16 lg:h-20 pl-4 sm:pl-8 md:pl-12 lg:pl-20 cursor-pointer' 
          src="/logo.png" 
          alt="Logo" 
        />
      </div>
      <div className='h-full w-1/2 flex justify-end items-center px-4 sm:px-8 md:px-16 lg:px-40'>
        <Button handleAction={handleEmail} title={"Email"} icon={<AiOutlineMail />} />
      </div>
    </div>
  )
}

export default Navbar