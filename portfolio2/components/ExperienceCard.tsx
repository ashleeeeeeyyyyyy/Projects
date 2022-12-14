import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '../typings'
import { urlFor } from '../sanity'

type Props = {
  experience: Experience
}

const ExperienceCard = ( { experience }: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 mt-20 h-[650px] w-[300px] md:h-[550px] md:w-[500px] xl:w-[700px] snap-center
     bg-[#292929] p-10 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='w-20 h-20 rounded-full md:h-[70px] md:w-[70px] object-cover object-center'
      src={urlFor(experience?.companyImage).url()}
      alt=""
      />

      <div className='flex flex-col px-0 md:px-10 text-white'>
        <h4 className='text-center text-xl md:text-md font-bold'>{experience?.jobTitle}</h4>
        <p className='font-light text-center text-md md:text-xl mt-2'>Web Developer</p>
        <div className='flex space-x-2 my-2 items-center justify-center'>
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className='h-10 w-10 rounded-full'
              src={urlFor(technology.image).url()}
              alt=""
            />
          ))}
        </div>
        <p className='uppercase py-5 text-gray-300'>April 2022 - June 2022</p>

        <ul className='list-disc space-y-2 text-sm max-h-72 pr-5 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#0080FF]/80'>
         {experience.points.map((point, i) => (
          <li key={i}>{point}</li>
         ))}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard