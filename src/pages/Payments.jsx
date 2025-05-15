import React from 'react'
import { titles1 } from '../constans'
const Payments = () => {
  return (
    <div className='flex h-[864px] max-w-[1070px] shadow-2xl mx-auto justify-center my-[70px]'>
            <div className='flex-1 bg-[#009688]  px-[79px] py-[88px]'>
              <h3 className='text-[36px] font-bold text-white mb-[73px]'>Our Services</h3>
                <div className='flex gap-x-3 mb-[27px]'>        
                        <img className='h-6 w-6 mt-1'  src="./footer/done.png" alt="" />
                        <div>
                        <h3 className='text-[22px] font-semibold text-white'>Space for creative ideas</h3>
                        <p className='text-[16px] font-normal text-white'>Cyber Square nourishes young aspiring minds 
                            to get a clear vision of their ideas. We guide 
                            them in analyzing and building their vision 
                            and ideas into reality.</p>
                        </div>
                </div>
                <div className='flex gap-x-3 mb-[27px]'>        
                        <img className='h-6 w-6 mt-1'  src="./footer/done.png" alt="" />
                        <div>
                        <h3 className='text-[22px] font-semibold text-white'>Engaging and fun curriculum</h3>
                        <p className='text-[16px] font-normal text-white'>Our goal is to create an engaging system that 
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
                        <h3 className='text-[22px] font-semibold text-white'>Professional teaching methods</h3>
                        <p className='text-[16px] font-normal text-white'>We professionals at Cyber Square, have 
                            developed an in-depth understanding in how 
                            to teach kids and how to code. Moreover, we 
                            believe in exposing kids to real programming 
                            languages and professional tools.
                            </p>
                        </div>
                </div>
            </div>
            <div className='flex-1 bg-[#FFFFFF] px-[79px] py-[88px]'>

                <h3 className='text-[36px] font-bold mb-[79px]'>Payment </h3>
                <ul className='flex flex-col gap-y-3 mb-[79px]'>
                    {titles1.map((title)=>(
                        <li className='paymenttitle text-[18px]'>{title}</li>
                    ))}
                </ul>
                <button className='py-5 px-12 bg-[#009688] rounded-[8px] text-[18px] font-bold text-white cursor-pointer'>Purchase Now</button>
            </div>
     </div>
  )
}

export default Payments