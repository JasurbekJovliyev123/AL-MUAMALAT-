import React from 'react'
import { cards } from '../constans'
const Services = () => {
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 grid-cols-1 mb-[70px]'>
              { cards.map((card)=>{
                return <div key={card.title} style={{backgroundColor:card.color}} className='max-w-[320px] mx-auto md:max-w-[380px] h-[280px] md:h-[361px] relative p-5 md:p-[30px] rounded-[10px]'>
                    <div className='flex items-center gap-5 mb-5'>
                        <img className='md:w-[85px] w-14 h-14 md:h-[85px]' src={card.imgurl} alt="img" />
                        <h4 className='md:text-[24px] text-[18px] font-bold open-sans'>{card.title}</h4>
                        
                    </div>
                    <p className='md:text-[17px] text-[14px] font-normal open-sans mb-9'>{card.subtitle}</p>
                    <button className='md:w-[90%] w-[88%] absolute py-2 md:py-[10px] bottom-5  bg-[#152032] text-white rounded-[10px] open-sans font-semibold cursor-pointer'>Learn more</button>
                </div>
              })}
         </div>
  )
}

export default Services
