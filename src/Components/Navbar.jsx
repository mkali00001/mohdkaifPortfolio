import React from 'react'
import logo from "../assets/Mk.png"
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='mb-10 flex items-center justify-between py-6' >
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-10' src={logo} alt="" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/mohammad-kaif-ali-ansari/"><FaLinkedin /></a>
        <a href="https://github.com/mkali00001"><FaGithub /></a>
        <a href="https://x.com/MKALI00001?t=BRKkeYdMCPFLAR10gkOERg&s=09"><FaSquareXTwitter /></a>
        <a href="https://www.instagram.com/mkaliansari/profilecard/?igsh=MTUweHo5azV2dWl0Nw=="><FaInstagram /></a>
        </div>
    </nav>
  )
}

export default Navbar
