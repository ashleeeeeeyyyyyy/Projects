import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Projects({}: Props) {
  const projects = [1,2,3,4,5];

  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-4xl'>Projects</h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
        {projects.map((project, i) =>(
          <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y:0 }}
              viewport={{ once: true }}
              src="https://jlowe-n.github.io/img/portfolio-01-netflix-clone.png"
              alt=""
            />

            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4>Case Study {i + 1} of {projects.length}: Netflix Clone</h4>
              <p className='text-lg text-center md:text-left'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, 
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full absolute top-[30%] bg-[#0080FF]/20 left-0 h-[500px] -skew-y-12' />
    </div>
  )
}

export default Projects