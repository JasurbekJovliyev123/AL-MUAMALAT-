import React from 'react'
import { allCourses } from '../constans'
const Allcourses = () => {
  return (
    <div className='container'>
        <div>
                <p className='text-[#152032] font-bold text-[40px] text-center mb-5'>Our services </p>
                <p className='text-[22px] max-w-[542px] mx-auto leading-[30px] text-center text-[#686868] mb-10'>Expert guidance for managing funds in alignment with Islamic principles, helping you make informed, halal investment decisions.</p>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 grid-cols-1'>
                {allCourses && allCourses.map((course)=>(
                      <div className='relative shadow-xl rounded-2xl pb-7' key={course.id}>
                           <img className='z-10' src={course.img} alt="" />
                           <div className='mx-auto absolute text-center left-[20%] flex items-center px-4 py-[5px] -mt-8 z-20 text-black rounded-2xl h-[50px] w-[213px] font-semibold text-[16px] bg-[#D2E6E4]'>+{course.studenst} students</div>
                           <div className='w-[320px] mx-auto'>
                             <p className='mt-10 text-[12px] mb-5 text-[#686868] font-medium'>Start date: {course.startDate}</p>
                             <h4 className='text-[24px] text-[#009688] font-bold mb-1.5'>{course.title}</h4>
                             <p className='text-[17px] font-medium text-[#686868] mb-4'>{course.description}</p>
                             <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-x-2'>
                                    <p className='text-[#FD661F] font-bold text-[30px]'>${course.newPrice}</p>
                                    <p className='text-[#686868]  font-medium text-[22px]'>${course.price}</p>
                                </div>
                                <button className='py-2.5 px-4 bg-[#009688] rounded-[8px] text-[18px] font-bold text-white cursor-pointer'>Enroll Now</button>
                             </div>
                           </div>
                      </div>
                ))}
                </div>
        </div>
    </div>
  )
}

export default Allcourses