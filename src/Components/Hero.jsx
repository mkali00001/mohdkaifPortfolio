import React from 'react'
import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/kaif.jpg"
import cv from "../resume/kaif.pdf"
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-36'>
            <div className='flex flex-wrap'>
                <div className=' w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start '>
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 
                        lg:text-8xl'>Mohd. Kaif</motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className=' bg-gradient-to-r from-pink-500 via-slate-500 to-purple-500
                    bg-clip-text text-3xl tracking-tight text-transparent'>Full Stack Developer</motion.span><br />
                        <motion.button
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="relative p-[2px] rounded-md bg-gradient-to-r from-pink-500 via-slate-500 to-purple-500"
                        >
                            <a
                                href={cv}
                                download="MohdKaif.pdf"
                                className="block px-4 py-2 rounded-md text-black font-semibold border-2 border-transparent
               bg-white transition duration-400 hover:text-white hover:bg-gradient-to-r hover:from-pink-500 
               hover:via-slate-500 hover:to-purple-500  "
                            >
                                Download CV
                            </a>
                        </motion.button>


                        <motion.p
                            variants={container(1.5)}
                            initial="hidden"
                            animate="visible"
                            className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</motion.p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 '>
                    <div className='flex justify-center'>
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 2, delay: 2.2 }}
                            className='w-[30rem] rounded-lg' src={profilePic} alt="Mohd. Kaif" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero
