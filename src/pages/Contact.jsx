import React from 'react'
import Consultation from '../components/Consultation'

const Contact = () => {
  return (
    <div className='md:pt-[70px] pt-[30px] container'>

      <div className='lg:flex block  gap-x-20 mb-[70px]'>
           <div className='max-w-[538px] mb-0 md:mb-[70px]'>
             <h2 className='md:text-[64px] text-3xl mb-3 md:mb-5'>Let’s Talk</h2>
             <p className='md:text-[20px] text-[16px] text-[#686868] mb-7 md:mb-[54px]'>Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help</p>
             <p className='md:text-[32px] text-2xl mb-2'>Email</p>
             <p className='text-[16px] text-[#686868] mb-7 md:mb-[54px]'>beebs@gmail.com</p>
             <p className='md:text-[32px] text-2xl mb-2'>Socials</p>
             <p className='text-[16px] text-[#686868] underline pb-[2px]'>Instagram</p>
             <p className='text-[16px] text-[#686868] underline pb-[2px]'>Twitter</p>
             <p className='text-[16px] text-[#686868] underline pb-[2px]'>Facebook</p>
           </div>
           <form className='pt-10 flex-1'>
              <label>
                <p className='text-sm mb-2 md:mb-3'>Name</p>
                <input className='w-full px-4 bg-[#F7F7F7] py-1.5 md:py-2.5 border-2 border-gray-400 rounded-md focus:ring-2 focus:ring-blue-400 mb-4 md:mb-7' type="text" placeholder='Name' />
              </label>
              <label>
                <p className='text-sm mb-2 md:mb-3'>Email</p>
                <input className='w-full bg-[#F7F7F7] px-4 py-1.5 md:py-2.5 border-2 border-gray-400 rounded-md focus:ring-2 focus:ring-blue-400 mb-7' type="email" placeholder='Email' />
              </label>
              <label>
                <p className='text-sm mb-2 md:mb-3'>What service are you interested in</p>
                <select className='w-full bg-[#F7F7F7] px-4 py-1.5 md:py-2.5 border-2 border-gray-400 rounded-md focus:ring-2 focus:ring-blue-400 mb-7' 
                id="language-select" 
              >
                <option value="en">English</option>
                <option value="uz">Uzbek</option>
                <option value="ru">Russian</option>
              </select>
              </label>
              <label>
                <p className='text-sm mb-2 md:mb-3'>Budget</p>
                <select className='w-full bg-[#F7F7F7] px-4 py-1.5 md:py-2.5 border-2 border-gray-400 rounded-md focus:ring-2 focus:ring-blue-400 mb-7' 
                id="language-select" 
              >
                <option value="en">English</option>
                <option value="uz">Uzbek</option>
                <option value="ru">Russian</option>
              </select>
              </label>
              <p className='text-sm mb-3'>Message</p>
              <textarea className='bg-[#F7F7F7] w-full h-[165px]' name="" id="" cols="30" rows="10"></textarea>
           </form>

      </div>
      <Consultation/>
    </div>
  )
}

export default Contact