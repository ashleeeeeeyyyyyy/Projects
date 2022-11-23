import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 mt-[120px] w-[300px] md:w-[400px] xl:w-[700px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-auto'>
      <motion.img
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='w-32 h-32 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center'
      src="https://media-exp1.licdn.com/dms/image/C4E0BAQHza023WntP0w/company-logo_200_200/0/1613418361800?e=1677110400&v=beta&t=9cwE6q9TU7UAMy7T3hWvGewfgBHGia2BuX_GBuwPn70"
      alt=""
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-3xl font-light'>ServingIntel</h4>
        <p className='font-bold text-1xl mt-2'>Web Developer</p>
        <div className='flex space-x-2 my-2'>
          <img
            className='h-10 w-10 rounded-full'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3YraeeRnBhf1Sd-QQndtiCYLL5RTFWDhvjcooa9c8NqWeU6D0vP3x-3l1bfX5vskcToE&usqp=CAU" 
            alt=""
          />
          <img
            className='h-10 w-10 rounded-full'
            src="https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png" 
            alt=""
          />
          <img
            className='h-10 w-10 rounded-full'
            src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" 
            alt=""
          />
          <img
            className='h-10 w-10 rounded-full'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" 
            alt=""
          />
          <img
            className='h-10 w-10 rounded-full'
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
            alt=""
          />
        </div>
        <p className='uppercase py-5 text-gray-300'>April 2022 - June 2022</p>

        <ul className='list-disc space-y-2 ml-5 text-sm text-left'>
          <li>Managed and maintained company websites</li>
          <li>Build and developed front end components</li>
          <li>Participated in daily scrum meetings and user acceptance testing</li>
          <li>Provided insights into UI/UX</li>
          <li>Developed re-usable codes</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard