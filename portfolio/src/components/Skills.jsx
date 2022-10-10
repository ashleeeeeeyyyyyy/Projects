import React from 'react'
import styles from "../style";
import { skills } from "../constants";

const Skills = () => {
  return (
    <section id="skills" className={`flex flex-col ${styles.paddingY}`}>
      <div className="absolute z-[1] w-[80%] h-[8%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] left-20 bottom-50 blue__gradient" />
      <div>
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] text-center">
          <span className="text-gradient"> My skills</span>{" "}
        </h1>
      </div>

      <div className='flex items-center justify-center mt-12 gap-10 flex-wrap'>
        {
          skills?.map((skills, index) => (
          <div key={index} className='border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl'>
            <div style={{
              background: `conic-gradient(rgb(8,145,170) ${skills.count}%, #ddd ${skills.count}%)`
              }} 
              className='w-32 h-32 flex items-center justify-center rounded-full'>
              <div className='text-6xl text-white w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-yellow-300 sm:group-hover:text-yellow-300'>
                <ion-icon name={skills.logo}></ion-icon>
              </div>
            </div>
            <p className='text-sm mt-3 font-poppins font-normal flex items-center justify-center text-yellow-300'>{skills.name}</p>
            <p className='text-xl mt-3 font-poppins font-semibold flex items-center justify-center text-white'>{skills.level}</p>
          </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills