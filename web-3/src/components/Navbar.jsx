import React from 'react'


const Navbar = () => {
  return (
    <nav className='w-full flex justify-between items-center'>
      <ul className='flex flex-1 justify-end items-center gap-6 mr-5 mt-5 text-2xl'>
        <li>Home</li>
        <li>Companies</li>
        <li>Groups</li>
      </ul>
    </nav>
  )
}

export default Navbar