import React from 'react'
import { motion } from "framer-motion";

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 1],
        borderRadius: ["20%", "40%", "60%", "80%", "100%"]
        
      }}
      transition={{
        duration: 1.5,
      }}
      className='relative flex justify-center items-center'>

      {/* <div className='border border-[#333333] rounded-full h-[200px] w-[200px] absolute mt-52'/> */}
      {/* <div className='border border-[#333333] rounded-full h-[300px] w-[300px] absolute mt-52' /> */}
      {/* <div className='border border-[#333333] rounded-full h-[500px] w-[500px] absolute mt-52' /> */}
      <div className='border border-[#0080FF] rounded-full h-[150px] w-[150px] md:h-[200px] md:w-[200px] absolute mt-52 animate-ping'/>
      {/* <div className='border border-[#333333] rounded-full h-[600px] w-[600px] absolute mt-52'/> */}
    </motion.div>
  )
}

export default BackgroundCircles