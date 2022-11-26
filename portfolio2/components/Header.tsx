import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { Social } from '../typings';
import Link from 'next/link';

type Props = {
  socials: Social[];
}

function Header({ socials }: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div
        initial={{
          x:-500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center'>

        {/* Social Icons*/}
        {socials.map((social) => (
          <SocialIcon
          className='mr-1'
          key={social._id}
          url={social.url}
          fgColor="black" 
          bgColor="transparent"
        />
        ))}
      </motion.div>
      
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration:  1.5
        }}
        className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="black" 
          bgColor="transparent"
        />
        <Link href="#contactMe">
          <p className='uppercase hidden md:inline-flex text-sm font-semibold text-black'>Get in Touch</p>
        </Link>
      </motion.div>
    </header>
  )
}

export default Header