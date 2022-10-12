import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <img className='md:w-[600px] sm:w-[300px] mx-auto mt-[100px] my-4' src='https://1.bp.blogspot.com/-qHgmPsTl2zo/XQETYej6ONI/AAAAAAAAHJ0/PBqWS59a0OE82yoe1O3OxakXY6EmjWzbwCKgBGAs/w0/twice-breakthrough-members-uhdpaper.com-4K-75.jpg' alt='TWICE' />
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>TWICE</h1>
        <div className='flex justify-center items-center'>
          <Typed className='text-cyan-300 md:text-5xl sm:text-4xl text-xl font-bold pl-2' strings={['ONE IN A MILLION']} typeSpeed={120} backSpeed={140} loop/>
        </div>
        
        <p className='md:text-2xl text-xl font-bold text-gray-500 mt-2'>
          A girl group consisting of 9 members: 
          Jihyo, Nayeon, Jeongyeon, Momo, Sana, Mina, Dahyun, Chaeyoung, and Tzuyu.
        </p>
        <button className='bg-cyan-300 w-[200px] font-medium my-6 mx-auto py-3 rounded-md text-black'>Get Started</button>
      </div>
    </div>
  )
}

export default Hero