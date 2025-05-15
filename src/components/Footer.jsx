import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full py-[38px] px-[130px] bg-[#009688] mt-[70px]'>
        <img className='mx-auto mb-[45px]' src="./footer/footerlogo.png" alt="" />
        <div className='flex mx-auto items-center justify-center gap-x-[48px] mb-9'>
             <NavLink><span className='text-[16px] text-white font-normal'>Home</span></NavLink>
             <NavLink><span className='text-[16px] text-white font-normal'>About</span></NavLink>
             <NavLink><span className='text-[16px] text-white font-normal'>Service</span></NavLink>
             <NavLink><span className='text-[16px] text-white font-normal'>Contact Us</span></NavLink>
        </div>
        <div className='flex justify-center items-center gap-x-4 mb-[48px]'> 
            <NavLink><img src="./footer/youtube.png" alt="" /></NavLink>
            <NavLink><img src="./footer/facebook.png" alt="" /></NavLink>
            <NavLink><img src="./footer/twitter.png" alt="" /></NavLink>
            <NavLink><img src="./footer/instagram.png" alt="" /></NavLink>
        </div>
        <div className='bg-white mx-auto h-[1px] max-w-[1180px] mb-[48px]'></div>
        <p className='text-center text-white text-[16px]'>Copyright Satyam Studio</p>
    </div>
  )
}

export default Footer