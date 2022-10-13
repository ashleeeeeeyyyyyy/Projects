import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white font-semibold'>
      <h1 className='w-full text-3xl text-cyan-300'>TWICE</h1>
      <ul className='cursor-pointer hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Members</li>
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
      </div>

      <div className={nav ? 'fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-300' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-semibold text-cyan-300 m-6'>TWICE</h1>
        <ul className='pt-4 cursor-pointer'>
          <li href='#home' className='p-4 border-b border-gray-900'>Home</li>
          <li href='#about' className='p-4 border-b border-gray-900'>About</li>
          <li href='#company' className='p-4 border-b border-gray-900'>Company</li>
          <li href='#members' className='p-4'>Members</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar