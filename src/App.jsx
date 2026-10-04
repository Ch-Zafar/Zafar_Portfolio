import React from 'react'


const App = () => {

  return (
    <>
      <div className='relative w-full h-screen flex justify-center items-center overflow-hidden bg-background'>
        {/* Top-left div with round black border on the right */}
        <div className='absolute top-0 left-0 z-20 w-56 h-56 border-5 border-black rounded-full'></div>

        <div className='absolute z-0 flex whitespace-nowrap select-none animate-marquee'>
          <h1 className='font-sans font-bold text-[250px] pr-16'>ZAFAR HUSSAIN</h1>
          <h1 className='font-sans font-bold text-[250px] pr-16'>ZAFAR HUSSAIN</h1>
          <h1 className='font-sans font-bold text-[250px] pr-16'>ZAFAR HUSSAIN</h1>
          <h1 className='font-sans font-bold text-[250px] pr-16'>ZAFAR HUSSAIN</h1>
        </div>
        <img src="/V2/Hero_BG.png" alt="" className='relative z-10 w-auto h-auto object-cover' />
      </div>

    </>
  )
}

export default App