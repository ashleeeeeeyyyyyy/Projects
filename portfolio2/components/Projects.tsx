import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '../sanity'

type Props = {
  projects: Project[]
}

function Projects({ projects }: Props) {

  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-black text-4xl'>Projects</h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-[#0080FF]/80'>
        {projects.map((project, i) =>(
          <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y:0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt=""
            />

            <div className='space-y-10 px-0 md:px-10 max-w-4xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#0080FF]/50'>
                  Case Study {i + 1} of {projects.length}:
                </span> {" "}
                {project.title}
              </h4>

              <div className='flex items-center space-x-2 justify-center'>
                {project?.technologies.map(technology => (
                  <img
                    className='h-10 w-10 rounded-full'
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt="" 
                  />
                ))}
              </div>

              <p className='text-md text-center md:text-left'>
              {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full absolute top-[30%] bg-[#0080FF]/60 left-0 h-[500px] -skew-y-12' />
    </div>
  )
}

export default Projects