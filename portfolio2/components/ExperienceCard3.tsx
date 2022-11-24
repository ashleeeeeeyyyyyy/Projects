import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const ExperienceCard3 = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='w-32 h-32 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center'
      src="https://scontent.fmnl25-3.fna.fbcdn.net/v/t39.30808-6/301623205_502358805228535_2412064770257087892_n.png?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFcSkkJv632Dh6YopKGtAgvySwc-OLRNknJLBz44tE2SX0rMW1dKecUjZmopHG-lMCHpqainV-1IXmuAr_Xk2Ru&_nc_ohc=QjBHL8dmJ-UAX_YFqwl&_nc_ht=scontent.fmnl25-3.fna&oh=00_AfBRzrPQ_NwZ6yuuz4lwt1GhSAb1zrJCP0iepOZVGxMr8g&oe=63822165"
      alt=""
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-3xl font-light'>Unrivaled Ragnarok Online</h4>
        <p className='font-bold text-1xl mt-2'>Freelance Web Developer</p>
        <div className='flex space-x-2 my-2'>
          <img
            className='h-10 w-10 rounded-full'
            src="https://cdn-icons-png.flaticon.com/512/732/732212.png" 
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
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png" 
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
        <p className='uppercase py-5 text-gray-300'>2020</p>

        <ul className='list-disc space-y-4 ml-5 text-sm text-left'>
          <li>Created a website for the client using (HTML, CSS, JavaScript)</li>
          <li>Modify and optimize plugins and assets</li>
          <li>Created and edited photos using Adobe Photoshop for Advertisement</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard3