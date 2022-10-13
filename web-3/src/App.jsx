import React from 'react'
import About from './components/About'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className='flex justify-center items-center sm:px-16 px-6'>
        <div className='xl:max-w-[1280px] w-full'>
          <Navbar />
        </div>
      </div>
      
      <div className='flex justify-center items-start'>
        <div className='xl:max-w-[1280px] w-full'>
          <Hero />
        </div>
      </div>
      
      <div className='flex justify-center items-start sm:px-16 px-6'>
        <div className='xl:max-w-[1280px] w-full'>
          <About />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App