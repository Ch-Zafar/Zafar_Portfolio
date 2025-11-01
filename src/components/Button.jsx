import React from 'react'

const Button = ({ title, icon, handleAction }) => {
  return (
    <button 
      onClick={() => handleAction && handleAction()} 
      className='relative w-48 h-12 font-Mona  bg-white/10 rounded-xl text-white overflow-hidden group cursor-pointer hover:border-0 z-20'
    >
      <span className='relative z-10 transition-colors duration-300 group-hover:text-black flex justify-evenly px-10 items-center'>
        {icon}
        {title}
      </span>
      <span className='absolute left-0 top-0 w-0 h-full bg-[#91FB03] transition-all duration-500 group-hover:w-full'></span>
    </button>
  )
}

export default Button
