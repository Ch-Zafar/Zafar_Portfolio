import React from 'react'
import Home from './Pages/Home'
import Navbar from './components/Navbar'
import Project from './Pages/Project'
import Email from './Pages/Email'


const App = () => {
  
  return (
    <>
    <div className='w-full h-screen overflow-hidden  '>
      <video
        className='fixed top-0 w-full h-full object-cover -z-10 '
        src='/bg.mp4'
        autoPlay
        loop
        playsInline
        muted
      />
      <Navbar />

      <Home />
      <Project/>
      <Email/>

    </div>

    </>
  )
}

export default App