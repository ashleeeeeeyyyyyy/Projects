import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const ExperienceCard5 = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='w-32 h-32 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center'
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Department_of_Public_Works_and_Highways_%28DPWH%29.svg/800px-Department_of_Public_Works_and_Highways_%28DPWH%29.svg.png"
      alt=""
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-3xl font-light'>Department of Public Works and Highways</h4>
        <p className='font-bold text-1xl mt-2'>Web Developer Intern</p>
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
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Database-mysql.svg/424px-Database-mysql.svg.png?20220815123837" 
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
        <p className='uppercase py-5 text-gray-300'>June 2018 - August 2018</p>

        <ul className='list-disc space-y-4 ml-5 text-sm text-left'>
          <li>Created a RESERVATION SYSTEM using (HTML, CSS, JavaScript, PHP Laravel, MySQL/PHPMyAdmin)</li>
          <li>Introduced new frameworks to enhance and optimize codes to speed up the PAYROLL SYSTEM</li>
          <li>Created and Generated reports (Payslip, Payroll, etc.) exported as PDF and Excel</li>
          <li>Troubleshooting of computer units (Hardware & Software)</li>
          <li>Write technical and manual documentation for newly deployed projects</li>
          <li>IT Support, Installation and configuration of computer systems</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard5