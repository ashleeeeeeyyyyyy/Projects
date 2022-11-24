import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const ExperienceCard2 = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='w-32 h-32 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center'
      src="https://scontent.fmnl25-4.fna.fbcdn.net/v/t39.30808-6/291947937_504041868186311_4161321061617309921_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEphM4jF6fqRLAiZLqaxdFHp86lVk32rVOnzqVWTfatU54lkhdEvDp741HE-bM0zi75R1sNgQuuHKGpmaKWPDCB&_nc_ohc=uRdzFHTqTRIAX_O443a&_nc_ht=scontent.fmnl25-4.fna&oh=00_AfA9Ib25-ueUKN7lnTaoKgPs3-YKnKmN06xlyBCv79Ljnw&oe=63829E61"
      alt=""
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-3xl font-light'>Camp 7 Lumber & Construction Supply</h4>
        <p className='font-bold text-1xl mt-2'>Web Developer | Information Technology Officer</p>
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
        <p className='uppercase py-5 text-gray-300'>June 2019 - June 2022</p>

        <ul className='list-disc space-y-4 ml-5 text-sm text-left'>
          <li>Created an INVENTORY SYSTEM using (ReactJS, CSS, MYSQL/PHPMyAdmin) implemented using Docker App via GIT Repository</li>
          <li>Created a PAYROLL SYSTEM (Microsoft Excel)</li>
          <li>Handles and oversees all business operations (INVENTORY, CUSTOMER RELATIONS, CASHIER, ACCOUNTING)</li>
          <li>Purchasing of materials/supplies and oversee storage efficiency</li>
          <li>Ensures all operations are carried on an appropriate and cost-efficient way</li>
          <li>Improve operational management systems, process and best practices</li>
          <li>Managed schedules, organized office functions and oversees daily operations of office with 30 employees</li>
          <li>Establish and maintain key performance metrics and quality assurance to provide quality service increasing customer satisfaction</li>
          <li>Troubleshooting of computer units, printers, etc. (Hardware & Software)</li>
          <li>IT Support, Installation and configuration of computer systems</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard2