import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from "../assets/AndresCanoProfile.jpg"
import { delay, motion } from "framer-motion"

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, 
    transition: 
    { duration: 0.5, delay:delay } 
  },
})
const Hero = () => {
  return (
    <div className='border-b border-neutral-900 lg:mb-35 pb-24 sm:mt-48 mt-36 md:scroll-mt-48  scroll-mt-28' id='hero'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start'>
                <motion.h1 
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Andres</motion.h1>
                <motion.span 
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className='bg-gradient-to-r from-gray-300 via-slate-500 to-blue-700 
                bg-clip-text text-4xl tracking-tight text-transparent'>Desarrollador Full Stack</motion.span>
                <motion.p 
                 variants={container(1)}
                 initial="hidden"
                 animate="visible"
                className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</motion.p>
            </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex justify-center'>
                <motion.img 
                initial={{x: 100, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, delay: 1.2}}
                src={profilePic} alt="Andrés Cano" className='w-96 rounded-[500px] mt-20 lg:ml-44 border-2 gap-12  border-blue-700 '/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
