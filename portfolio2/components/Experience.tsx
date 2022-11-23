import React from 'react'
import { motion } from 'framer-motion';
import ExperienceCard1 from './ExperienceCard1';
import ExperienceCard2 from './ExperienceCard2';
import ExperienceCard3 from './ExperienceCard3';
import ExperienceCard4 from './ExperienceCard4';
import ExperienceCard5 from './ExperienceCard5';

type Props = {}

function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-4xl'>Experience</h3>

      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
        <ExperienceCard1 />
        <ExperienceCard2 />
        <ExperienceCard3 />
        <ExperienceCard4 />
        <ExperienceCard5 />
      </div>
    </motion.div>
    
  )
}

export default Experience