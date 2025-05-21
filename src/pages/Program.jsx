import React from 'react'
import { titles } from '../constans'
import Consultation from '../components/Consultation'
import CoucesSlider from '../components/Courses'
import Payments from './Payments'
import Allcourses from '../components/Allcourses'
const Program = () => {
  return (
    <div className='container pt-[70px]'>
         <p className='text-[#152032] font-bold text-[40px] text-center mb-5'>International educational programs</p>
         <p className='text-[22px] max-w-[542px] mx-auto leading-[30px] text-center text-[#686868] mb-[30px]'>Al Muamalat Education's international study programs offer an in-depth learning experience at leading Islamic financial institutions around the world.</p>

         <div className='flex items-center mt-[30px] mb-[70px] gap-x-5'>
            <div className='bg-[#F3F8FF] py-9 px-[33px] h-[590px] rounded-[10px] w-[580px]'>
                <p className='text-[32px] font-medium text-center mb-8'>What you’ll learn </p>
                <div className='w-full flex flex-col gap-y-6'>
                    {titles.map((title)=>{
                      return <div key={title.id} className='w-full flex items-center gap-x-4'>
                         <img className='w-9 h-9' src="./double.png" alt="" />
                          <p className='text-[20px] leading-6'>{title.title}</p>
                      </div>
                    })}
                </div>
            </div>
            <div className='bg-[#F3F8FF] py-9 px-[33px]  h-[590px] rounded-[10px] w-[580px]'>
            <p className='text-[32px] max-w-[508px] font-medium text-center mb-8'>Why should you study at  <br />"AL-MUAMALAT"?</p>

            <ul className='flex flex-col gap-y-6'>
               <li className='list-item text-[20px] font-normal'>Lifetime access</li>
               <li className='list-item text-[20px] font-normal'>Video lessons</li>
               <li className='list-item text-[20px] font-normal'>Tests</li>
               <li className='list-item text-[20px] font-normal'>Projects</li>
               <li className='list-item text-[20px] font-normal'>Downloadable resources</li>
               <li className='list-item text-[20px] font-normal'>Access via mobile device</li>
            </ul>
            </div>
         </div>
        

        <h2 className='text-center font-bold text-[40px] my-[70px]'>Brief information about the course</h2>
       
        <div className='max-w-[574px] mx-auto'>
              <p className='mb-[10px] text-[40px] font-bold text-black text-center'>Most Popular Course</p>        
              <p className='text-[20px] font-medium text-center text-[#686868]'>Expert guidance for managing funds in alignment with Islamic principles, helping you make informed, halal investment decisions.</p>
        </div>
         <CoucesSlider/>

         <Payments/>
         <Allcourses/>
         <Consultation/>
         
    </div>
  )
}

export default Program