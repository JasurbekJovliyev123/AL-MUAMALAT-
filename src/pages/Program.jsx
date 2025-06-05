import React from 'react'
import { titles } from '../constans'
import Consultation from '../components/Consultation'
import CoucesSlider from '../components/Courses'
import Payments from './Payments'
import Allcourses from '../components/Allcourses'
import { useQuery } from '@tanstack/react-query';
import { request } from '../services/request'
import { useParams } from 'react-router-dom'
import double from '../assets/double.png'
const Program = () => {
  const { data } = useQuery({
    queryKey: ['aboutCourseData'],
    queryFn: () =>
      request.get('https://api.al-muamalat.uz/api/courses/main')
  })
  const {id} =useParams()
  const aboutData=data?.data?.data?.find((item)=>item?.course_id==id)
  return (
    <div className='container pt-8 md:pt-[70px]'>
         <p className='text-[#152032] font-bold text-2xl md:text-[40px] text-center mb-5'>{aboutData?.name_en}</p>
         <p
          className='md:text-[22px] p-3 rounded-xl md:p-4 mx-3 bg-[#F3F8FF] text-[16px] md:text-start text-justify  leading-7 md:leading-[30px]  text-[#686868] mb-[30px]'
          dangerouslySetInnerHTML={{ __html: aboutData?.description_uz}}
        ></p>

         <div className='lg:flex block items-center mt-[30px] mb-[70px] gap-x-5'>
            <div className='bg-[#F3F8FF] py-6 md:py-9 px-[33px] h-[590px] rounded-[10px] w-[98%] mx-auto md:w-[580px]'>
                <p className='text-xl md:text-[32px] font-medium text-center mb-8'>What you’ll learn </p>
                <div className='w-full flex flex-col gap-y-6'>
                    {titles.map((title)=>{
                      return <div key={title.id} className='w-full flex items-center gap-x-4'>
                         <img className='w-9 h-9' src={double} alt="" />
                          <p className='md:text-[20px] text-[16px] leading-6'>{title.title}</p>
                      </div>
                    })}
                </div>
            </div>
            <div className='bg-[#F3F8FF] py-6 md:py-9 px-[33px] h-auto  md:h-[590px] rounded-[10px] w-[98%] mx-auto md:w-[580px]'>
            <p className='md:text-[32px] text-[20px] max-w-[508px] font-medium text-center mb-3 md:mb-8 mt-4'>Why should you study at  <br />"AL-MUAMALAT"?</p>

            <ul className='flex flex-col gap-y-6'>
               <li className='list-item text-[17px] md:text-[20px] font-normal'>Lifetime access</li>
               <li className='list-item text-[17px] md:text-[20px] font-normal'>Video lessons</li>
               <li className='list-item text-[17px] md:text-[20px] font-normal'>Tests</li>
               <li className='list-item text-[17px] md:text-[20px] font-normal'>Projects</li>
               <li className='list-item text-[17px] md:text-[20px] font-normal'>Downloadable resources</li>
               <li className='list-item text-[17px] md:text-[20px] font-normal'>Access via mobile device</li>
            </ul>
            </div>
         </div>
        

        <h2 className='text-center font-bold text-[24px] md:text-[40px] my-[70px]'>Brief information about the course</h2>
       
        <div className='max-w-[574px] mx-auto'>
              <p className='mb-[10px] text-[24px] md:text-[40px] font-bold text-black text-center'>Most Popular Course</p>        
              <p className='text-[20px] font-medium text-center text-[#686868]'>Expert guidance for managing funds in alignment with Islamic principles, helping you make informed, halal investment decisions.</p>
        </div>
         <CoucesSlider/>

         <Payments id={id}/>
         <Allcourses/>
         <Consultation/>
         
    </div>
  )
}

export default Program