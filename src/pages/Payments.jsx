import React from 'react'
import { titles1 } from '../constans'
import { useQuery } from '@tanstack/react-query';
import { request } from '../services/request';
import { useMutation } from '@tanstack/react-query';
import { get } from 'lodash';
const Payments = ({id}) => {

    const { isPending, error, data } = useQuery({
    queryKey: ['userData'],
    queryFn: () =>
      request.get('https://api.al-muamalat.uz/api/users/me')
  }) 
  console.log(data?.data?.data?.user_id);
    
  const {mutate}=useMutation(async (payload)=>{
    return await request.post('/courses/user',payload)
    .then((res)=>{console.log(res?.data?.data)
      request.get(`/courses/purchase/${res?.data?.data?.id}`)
     .then((response) => {
       const url =get(response, "data.data.data"); 
        console.log(url);
        
      if (url) {
          const aTag = document.createElement("a");
          aTag.href = url; 
          aTag.target = "_blank";
          aTag.rel = "noopener noreferrer";
        document.body.appendChild(aTag);
        aTag.click();
    }
  })
  .catch((err) => {
      console.log(err);
  })

  })
  })
  const onSubmit=()=>{
    const submitData={
        course_id:id,
        user_id:data?.data?.data?.user_id
    }
    mutate(submitData)
  }
  return (
    <div className='md:flex h-auto block md:h-[864px] max-w-[1070px] shadow-2xl mx-auto justify-center my-[70px]'>
            <div className='flex-1 bg-[#009688] px-6 py-7 md:px-[79px] md:py-[88px]'>
              <h3 className='md:text-[36px] text-[22px] font-bold  text-center md:text-start text-white mb-6 md:mb-[73px]'>Our Services</h3>
                <div className='flex gap-x-3 mb-[27px]'>        
                        <img className='h-6 w-6 mt-1'  src="./footer/done.png" alt="" />
                        <div>
                        <h3 className='md:text-[22px] text-[18px] font-semibold text-white'>Space for creative ideas</h3>
                        <p className='md:text-[16px] text-[15px] font-normal text-white'>Cyber Square nourishes young aspiring minds 
                            to get a clear vision of their ideas. We guide 
                            them in analyzing and building their vision 
                            and ideas into reality.</p>
                        </div>
                </div>
                <div className='flex gap-x-3 mb-[27px]'>        
                        <img className='h-6 w-6 mt-1'  src="./footer/done.png" alt="" />
                        <div>
                        <h3 className='md:text-[22px] text-[18px] font-semibold text-white'>Engaging and fun curriculum</h3>
                        <p className='md:text-[16px] text-[15px] font-normal text-white'>Our goal is to create an engaging system that 
                            provides exciting activities so children can 
                            understand the programming concepts 
                            thoroughly so that they can perform them on
                            their own. With Cyber Square kids have fun 
                            while they learn without frustrations.</p>
                        </div>
                </div>
                <div className='flex gap-x-3 mb-[27px]'>        
                        <img className='h-6 w-6 mt-1'  src="./footer/done.png" alt="" />
                        <div>
                        <h3 className='md:text-[22px] text-[18px] font-semibold text-white'>Professional teaching methods</h3>
                        <p className='md:text-[16px] text-[15px] font-normal text-white'>We professionals at Cyber Square, have 
                            developed an in-depth understanding in how 
                            to teach kids and how to code. Moreover, we 
                            believe in exposing kids to real programming 
                            languages and professional tools.
                            </p>
                        </div>
                </div>
            </div>
            <div className='flex-1 bg-[#FFFFFF] px-10 md:px-[79px] py-7 md:py-[88px]'>

                <h3 className='md:text-[36px] text-2xl font-bold mb-6 md:mb-[79px]'>Payment </h3>
                <ul className='flex flex-col gap-y-3 mb-6 md:mb-[79px]'>
                    {titles1.map((title)=>(
                        <li className='paymenttitle  text-[16px] md:text-[18px]'>{title}</li>
                    ))}
                </ul>
                <button type='submit' onClick={onSubmit} className='md:py-5 py-3 px-9 md:px-12 bg-[#009688] rounded-[8px] text-[18px] font-bold text-white cursor-pointer'>Purchase Now</button>
            </div>
     </div>
  )
}

export default Payments